#!/usr/bin/env node
/**
 * Build the PilotDeck V2 web UI in demo mode and drop the static bundle
 * into the documentation site's `static/demo/` directory so the regular
 * `docusaurus build` step copies it through to `build/demo/`.
 *
 * Two-step pipeline:
 *   1. (idempotent) install pilotdeck-ui dependencies if node_modules is
 *      missing. The repo's pilotdeck-ui has native deps (better-sqlite3,
 *      bcrypt, node-pty, sharp) needed for its server runtime, but only
 *      the frontend code is exercised by `vite build` so installs may
 *      still succeed even if a native build script fails — we tolerate
 *      non-zero install exits when the produced node_modules looks usable.
 *   2. `vite build --config vite.demo.config.js` — outputs straight into
 *      `static/demo/` thanks to the config's `build.outDir`.
 *
 * Invoke directly:
 *     node scripts/build-demo.mjs
 * Or via the root package.json script:
 *     npm run build:demo
 */

import { spawn } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const REPO_ROOT = path.resolve(__dirname, '..');
const UI_DIR = path.join(REPO_ROOT, 'pilotdeck-ui');
const STATIC_DEMO = path.join(REPO_ROOT, 'static', 'demo');

function logStep(label) {
  // eslint-disable-next-line no-console
  console.log(`\n[build-demo] ${label}`);
}

function run(cmd, args, opts = {}) {
  return new Promise((resolve, reject) => {
    const child = spawn(cmd, args, {
      cwd: opts.cwd || REPO_ROOT,
      stdio: 'inherit',
      env: { ...process.env, ...(opts.env || {}) },
      shell: process.platform === 'win32',
    });
    child.on('error', reject);
    child.on('exit', (code) => {
      if (opts.allowFailure || code === 0) resolve(code);
      else reject(new Error(`${cmd} ${args.join(' ')} exited with code ${code}`));
    });
  });
}

async function ensureDependencies() {
  if (!fs.existsSync(UI_DIR)) {
    throw new Error(`pilotdeck-ui not found at ${UI_DIR}`);
  }
  const nodeModules = path.join(UI_DIR, 'node_modules');
  if (fs.existsSync(nodeModules)) {
    logStep('pilotdeck-ui/node_modules present — skipping install');
    return;
  }
  logStep('Installing pilotdeck-ui dependencies (this is one-time)');
  // Native deps may fail to build on minimal CI runners. We tolerate the
  // failure as long as the frontend deps (react/vite/etc.) made it in,
  // and surface a clear hint if not.
  await run('npm', ['install', '--no-audit', '--no-fund'], {
    cwd: UI_DIR,
    allowFailure: true,
  });
  if (!fs.existsSync(path.join(nodeModules, 'vite'))) {
    throw new Error(
      'pilotdeck-ui dependency install left node_modules unusable — ' +
      'vite missing. Run `cd pilotdeck-ui && npm install` manually to ' +
      'see the full error.',
    );
  }
}

async function runDemoBuild() {
  logStep('Building V2 demo bundle into static/demo/');
  if (fs.existsSync(STATIC_DEMO)) {
    fs.rmSync(STATIC_DEMO, { recursive: true, force: true });
  }
  await run('npx', ['vite', 'build', '--config', 'vite.demo.config.js'], {
    cwd: UI_DIR,
  });
}

async function main() {
  await ensureDependencies();
  await runDemoBuild();
  logStep('Done — open /demo/ after `npm run start` or `npm run build` + serve.');
}

main().catch((err) => {
  // eslint-disable-next-line no-console
  console.error('\n[build-demo] FAILED:', err.message || err);
  process.exit(1);
});
