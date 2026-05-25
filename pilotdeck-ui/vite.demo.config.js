// Vite config for the public demo build of pilotdeck-ui.
//
// What this differs from the standard vite.config.js in:
//   - input is index.demo.html (which boots src/demo-mode/entry.jsx)
//   - base is the GitHub-Pages-hosted path so asset URLs resolve correctly
//   - outDir writes straight into the documentation site's static/ tree
//   - dev-server proxies are removed entirely (no backend to proxy to)
//   - VITE_DISABLE_LOCAL_AUTH is forced true so ProtectedRoute bypasses auth
//
// V2 source files are not modified — see src/demo-mode/ for the patching.

import fs from 'fs';
import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DEMO_BASE = process.env.PILOTDECK_DEMO_BASE || '/pilotdeck.github.io/demo/';
// outDir is resolved relative to the pilotdeck-ui package so the produced
// bundle lands inside the Docusaurus site's static/demo directory and is
// then served as part of the regular `docusaurus build` output.
const DEMO_OUT_DIR = path.resolve(__dirname, '..', 'static', 'demo');

const localNodeModules = (...segments) =>
  path.resolve(process.cwd(), 'node_modules', ...segments);

// Vite preserves the input HTML filename in the output directory — so
// `index.demo.html` would ship as `index.demo.html` and break the
// `/demo/` deep-link. This tiny plugin renames it to `index.html` right
// after the bundle is written.
const renameDemoHtml = () => ({
  name: 'pilotdeck-rename-demo-html',
  closeBundle() {
    const fromPath = path.join(DEMO_OUT_DIR, 'index.demo.html');
    const toPath = path.join(DEMO_OUT_DIR, 'index.html');
    if (fs.existsSync(fromPath)) {
      fs.renameSync(fromPath, toPath);
    }
  },
});

export default defineConfig({
  base: DEMO_BASE,
  define: {
    // Force auth bypass so AuthProvider never demands a token / login form.
    'import.meta.env.VITE_DISABLE_LOCAL_AUTH': JSON.stringify('true'),
    'import.meta.env.VITE_IS_PLATFORM': JSON.stringify('false'),
  },
  plugins: [react(), renameDemoHtml()],
  resolve: {
    // Same React alias trick the production config uses so the React
    // singleton is taken from the local pilotdeck-ui node_modules (avoids
    // double-React when the consumer hoists differently).
    alias: {
      react: localNodeModules('react'),
      'react-dom': localNodeModules('react-dom'),
      'react/jsx-runtime': localNodeModules('react', 'jsx-runtime.js'),
      'react/jsx-dev-runtime': localNodeModules('react', 'jsx-dev-runtime.js'),
    },
  },
  build: {
    outDir: DEMO_OUT_DIR,
    emptyOutDir: true,
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      // Point Vite at our demo entry. The standard index.html is left alone
      // for normal pilotdeck-ui development.
      input: path.resolve(__dirname, 'index.demo.html'),
      output: {
        manualChunks: {
          'vendor-react': ['react', 'react-dom', 'react-router-dom'],
        },
      },
    },
  },
});
