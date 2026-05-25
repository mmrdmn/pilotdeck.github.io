// Replaces window.fetch with a router that answers /api/* requests from the
// canned dataset. Anything that isn't an /api/* path falls through to the
// real fetch so Vite-served assets, images, and fonts still load.
//
// Must run BEFORE any V2 module reads `fetch` — entry.jsx imports this
// file first thing, before importing App.

import {
  getProjectsPayload,
  getProjectSessionsPayload,
  getSessionMessagesPayload,
} from './canned-data.js';

const realFetch = window.fetch.bind(window);

// Build a minimal Response-like object that V2 callers treat as a Response.
// Using the real `Response` constructor keeps `response.ok`, `.status`, and
// `.json()` working without any extra shimming.
function jsonResponse(body, init = {}) {
  const status = init.status ?? 200;
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
}

// Routes are matched in order; the first matching handler wins.
const ROUTES = [
  // Auth — `DISABLE_LOCAL_AUTH=true` is set at build time so AuthProvider
  // never demands a token, but it still hits /api/auth/status to verify
  // setup state. We claim "no setup needed".
  {
    method: 'GET',
    test: (path) => path === '/api/auth/status',
    handle: () => jsonResponse({ needsSetup: false, hasLocalAuth: false }),
  },
  {
    method: 'POST',
    test: (path) => path.startsWith('/api/auth/'),
    handle: () => jsonResponse({ success: true }),
  },

  // Onboarding — ProtectedRoute renders <Onboarding /> until this returns
  // `hasCompletedOnboarding: true`.
  {
    method: 'GET',
    test: (path) => path === '/api/user/onboarding-status',
    handle: () => jsonResponse({ hasCompletedOnboarding: true }),
  },
  {
    method: 'POST',
    test: (path) => path === '/api/user/complete-onboarding',
    handle: () => jsonResponse({ ok: true }),
  },
  {
    method: 'GET',
    test: (path) => path === '/api/user/git-config',
    handle: () =>
      jsonResponse({ gitName: 'PilotDeck Demo', gitEmail: 'demo@pilotdeck.local' }),
  },

  // Plugins — empty list keeps PluginsProvider happy.
  {
    method: 'GET',
    test: (path) => path === '/api/plugins',
    handle: () => jsonResponse({ plugins: [] }),
  },

  // TaskMaster — pretend it isn't installed.
  {
    method: 'GET',
    test: (path) => path === '/api/taskmaster/installation-status',
    handle: () => jsonResponse({ installed: false }),
  },

  // Projects — full WorkSpace list. V2 expects a JSON array at the root.
  {
    method: 'GET',
    test: (path) => path === '/api/projects',
    handle: () => jsonResponse(getProjectsPayload()),
  },

  // Sessions pagination — never paginates in demo mode.
  {
    method: 'GET',
    test: (path) =>
      /^\/api\/projects\/[^/]+\/sessions(\?.*)?$/.test(path),
    handle: (path) => {
      const match = path.match(/^\/api\/projects\/([^/?]+)\/sessions/);
      const name = match ? decodeURIComponent(match[1]) : '';
      return jsonResponse(getProjectSessionsPayload(name));
    },
  },

  // Discovery plans (Always-on tab) — always empty in demo.
  {
    method: 'GET',
    test: (path) => /^\/api\/projects\/[^/]+\/discovery-plans/.test(path),
    handle: () => jsonResponse({ plans: [] }),
  },
  {
    method: 'GET',
    test: (path) => /^\/api\/projects\/[^/]+\/discovery-context/.test(path),
    handle: () => jsonResponse({}),
  },
  {
    method: 'GET',
    test: (path) => /^\/api\/projects\/[^/]+\/work-cycles/.test(path),
    handle: () => jsonResponse({ workCycles: [] }),
  },
  {
    method: 'GET',
    test: (path) => path.startsWith('/api/always-on/'),
    handle: () => jsonResponse({ events: [], cronJobs: [] }),
  },

  // Session messages — the meat of the canned transcripts.
  {
    method: 'GET',
    test: (path) => /^\/api\/sessions\/[^/]+\/messages(\?.*)?$/.test(path),
    handle: (path, url) => {
      const match = path.match(/^\/api\/sessions\/([^/?]+)\/messages/);
      const sessionId = match ? decodeURIComponent(match[1]) : '';
      const params = url.searchParams;
      const opts = {
        limit: params.has('limit') ? Number(params.get('limit')) : null,
        offset: params.has('offset') ? Number(params.get('offset')) : 0,
      };
      return jsonResponse(getSessionMessagesPayload(sessionId, opts));
    },
  },

  // Rename / delete / file ops — accept silently. The UI updates optimistically
  // from these responses, but a fresh page reload returns the canned data.
  {
    method: 'PUT',
    test: (path) => path.startsWith('/api/projects/') || path.startsWith('/api/sessions/'),
    handle: () => jsonResponse({ ok: true }),
  },
  {
    method: 'DELETE',
    test: (path) => path.startsWith('/api/projects/') || path.startsWith('/api/sessions/'),
    handle: () => jsonResponse({ ok: true }),
  },
  {
    method: 'POST',
    test: (path) => path.startsWith('/api/projects/') || path.startsWith('/api/sessions/'),
    handle: () => jsonResponse({ ok: true }),
  },
];

// Catch-all fallback for any /api/* path we forgot — return an empty 200
// instead of failing, so the UI keeps rendering. Surfaced via console.warn
// so we can spot missing mocks during development.
function fallbackApi(path, method) {
  console.warn(`[demo-mode] Unmocked ${method} ${path} — returning {} 200.`);
  return jsonResponse({});
}

function isApiPath(pathOrUrl) {
  try {
    const url = new URL(pathOrUrl, window.location.origin);
    return url.pathname.startsWith('/api/');
  } catch {
    return false;
  }
}

window.fetch = function patchedFetch(input, init = {}) {
  const requestUrl =
    typeof input === 'string'
      ? input
      : input instanceof Request
        ? input.url
        : String(input);

  // Anything that isn't /api/* — fall through (images, fonts, sourcemaps).
  if (!isApiPath(requestUrl)) {
    return realFetch(input, init);
  }

  const url = new URL(requestUrl, window.location.origin);
  const path = url.pathname;
  const method = String(init?.method || (input instanceof Request ? input.method : 'GET') || 'GET').toUpperCase();

  for (const route of ROUTES) {
    if (route.method !== method) continue;
    if (!route.test(path, url)) continue;
    try {
      return Promise.resolve(route.handle(path, url));
    } catch (err) {
      console.error('[demo-mode] mock handler threw:', err);
      return Promise.resolve(jsonResponse({ error: 'demo handler failed' }, { status: 500 }));
    }
  }

  return Promise.resolve(fallbackApi(path, method));
};

// Marker so other modules can probe without re-installing.
window.__PILOTDECK_DEMO_MOCK_FETCH__ = true;
