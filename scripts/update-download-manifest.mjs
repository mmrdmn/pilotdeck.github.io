#!/usr/bin/env node
import { access, mkdir, rename, writeFile } from 'node:fs/promises';
import path from 'node:path';

const API_URL = 'https://api.github.com/repos/OpenBMB/PilotDeck/releases/latest';
const OUTPUT_PATH = path.join(process.cwd(), 'static', 'downloads', 'latest.json');

function findAsset(assets, pattern) {
  return assets.find((asset) => pattern.test(asset.name));
}

const response = await fetch(API_URL, {
  headers: {
    Accept: 'application/vnd.github+json',
    'User-Agent': 'pilotdeck-website-build',
    ...(process.env.GITHUB_TOKEN ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` } : {}),
  },
});

if (!response.ok) {
  try {
    await access(OUTPUT_PATH);
    console.warn(`GitHub releases API failed: ${response.status} ${response.statusText}; keeping existing ${OUTPUT_PATH}`);
    process.exit(0);
  } catch {
    throw new Error(`GitHub releases API failed: ${response.status} ${response.statusText}`);
  }
}

const release = await response.json();
const assets = release.assets || [];
const macDmg = findAsset(assets, /mac-(?:universal|arm64)\.dmg$/);
const winX64 = findAsset(assets, /win-x64(?:-setup)?\.exe$/);
const winArm64 = findAsset(assets, /win-arm64\.exe$/);

const manifest = {
  version: release.tag_name || null,
  htmlUrl: release.html_url || null,
  generatedAt: new Date().toISOString(),
  downloads: {
    mac: macDmg?.browser_download_url || null,
    windows: winX64?.browser_download_url || null,
    windowsArm64: winArm64?.browser_download_url || null,
  },
};

await mkdir(path.dirname(OUTPUT_PATH), { recursive: true });
await writeFile(`${OUTPUT_PATH}.tmp`, `${JSON.stringify(manifest, null, 2)}\n`);
await rename(`${OUTPUT_PATH}.tmp`, OUTPUT_PATH);

console.log(`Wrote ${OUTPUT_PATH}`);
console.log(`mac: ${manifest.downloads.mac || 'missing'}`);
console.log(`windows: ${manifest.downloads.windows || 'missing'}`);
