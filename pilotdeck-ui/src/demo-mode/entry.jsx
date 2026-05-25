// Demo-mode entry point. Installs the fake fetch + WebSocket before any V2
// module loads, then mounts the real App component verbatim. Used only by
// the static-demo Vite build (see pilotdeck-ui/vite.demo.config.js).
//
// Importing the mocks at the very top relies on Vite's static-import
// evaluation order: they finish executing BEFORE `App` is pulled in below.

import './mock-fetch.js';
import './mock-websocket.js';
import './demo-block.js';

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '../App.js';
import '@fontsource-variable/inter';
import '../index.css';
import 'katex/dist/katex.min.css';

// Pre-empt the V2 i18n bootstrapper (same call site as the regular main.jsx).
import '../i18n/config.js';

// In demo mode we explicitly skip service worker registration. The real
// pilotdeck-ui ships its own SW under /sw.js, but the GitHub-Pages-hosted
// demo lives under /pilotdeck.github.io/demo/ and registering a SW at the
// site root would pollute the documentation site's own scope.
if ('serviceWorker' in navigator) {
  // Unregister any previously installed worker from a stale dev session.
  navigator.serviceWorker
    .getRegistrations()
    .then((regs) => regs.forEach((reg) => reg.unregister()))
    .catch(() => {});
}

// React Router's BrowserRouter inside <App /> uses the current pathname for
// initial routing. The demo bundle is served from /pilotdeck.github.io/demo/
// — set the router basename so deep links don't 404 inside the SPA.
const pathname = window.location.pathname;
const demoIndex = pathname.indexOf('/demo');
if (demoIndex >= 0) {
  // Trim trailing slash so the router doesn't double up.
  window.__ROUTER_BASENAME__ = pathname
    .slice(0, demoIndex + '/demo'.length)
    .replace(/\/+$/, '');
} else {
  window.__ROUTER_BASENAME__ = '';
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
