// Demo-mode entry point. Installs the fake fetch + WebSocket before any V2
// module loads, then mounts the real App component verbatim. Used only by
// the static-demo Vite build (see pilotdeck-ui/vite.demo.config.js).
//
// Importing the mocks at the very top relies on Vite's static-import
// evaluation order: they finish executing BEFORE `App` is pulled in below.

import './mock-fetch.js';
import './mock-websocket.js';
import './demo-block.js';

// Pin the demo's persisted state to a known-good baseline on every boot.
// Without this:
//   - activeTab: a returning visitor who clicked Dashboard/Memory/Always-on
//     before the click-block landed would re-mount that (now-blocked)
//     panel on reload and crash before our shim could intervene.
//   - userLanguage: i18next's browser language detector picks ZH/EN
//     based on the visitor's OS locale. The demo's canned copy is
//     English-only, so a ZH visitor would see a half-translated UI.
//   - theme: the V2 ThemeContext falls back to prefers-color-scheme on
//     first visit. We want every screenshot / share / repeat visit to
//     look the same in light mode.
try {
  window.localStorage.setItem('activeTab', 'chat');
  window.localStorage.setItem('userLanguage', 'en');
  window.localStorage.setItem('theme', 'light');
  // Drop the dark-mode class eagerly so we never flash dark before the
  // ThemeProvider's effect runs on the very first paint.
  document.documentElement.classList.remove('dark');
} catch {
  // private mode / disabled storage — fine.
}

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

// Auto-open the first session so the demo lands on a real chat transcript
// instead of a blank "select a session" state. Only fires when there's no
// deep-link already in the URL (i.e. visitor hit the bare /demo/ root).
{
  const base = window.__ROUTER_BASENAME__ || '';
  const routerPath = pathname.slice(base.length) || '/';
  if (routerPath === '/' || routerPath === '') {
    const target = `${base}/p/pilotdeck-demo/c/demo-session-tutorial-01`;
    window.history.replaceState(null, '', target);
  }
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
