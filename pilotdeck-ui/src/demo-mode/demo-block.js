// Locks down the V2 UI surfaces that don't make sense without a real backend
// (Settings dialog, tool tabs other than Chat, project creation, delete
// affordances, etc.) and replaces every blocked click with a single
// "this is the demo sandbox, head to GitHub for the real thing" modal.
//
// Design choice: do this from the demo-mode shim layer instead of touching
// V2 source. A document-level capture-phase click listener catches each
// blocked button before it reaches React; a vanilla DOM modal renders
// outside the React tree so it works regardless of router state.
//
// Selectors are stable across i18n locales because we match on:
//   - aria-label (English fallback strings used by both EN and ZH builds)
//   - role attributes (role="tab" inside role="tablist" aria-label="Tools")
//   - lucide icon class names (lucide-trash-2 for delete affordances)

const GITHUB_REPO_URL = 'https://github.com/OpenBMB/PilotDeck';
const GITHUB_INSTALL_URL = 'https://github.com/OpenBMB/PilotDeck#-installation--quick-start';

// ─── Block rules ──────────────────────────────────────────────────────────
// Each rule has a `test(el)` predicate run on every captured click target,
// and a localized headline + body shown in the modal. First match wins.

const BLOCK_RULES = [
  {
    id: 'settings',
    // Sidebar gear button + any other surface that calls window.openSettings.
    // ProjectsState exposes `aria-label="Settings"` on the sidebar footer
    // button; the AppShell's main chrome reuses the same.
    test: (el) =>
      el.closest('[aria-label="Settings"], [aria-label*="设置"]') !== null,
    title: 'Settings — Demo Sandbox',
    body:
      'Provider configuration, appearance options, the smart-routing setup, plugin management, and the memory inspector all require a real local PilotDeck instance — they\'re hidden here so nothing pretends to save.',
  },
  {
    id: 'new-project',
    // "+" button next to the Projects header in the sidebar.
    test: (el) =>
      el.closest('[aria-label*="New Project" i], [aria-label*="新建项目"], [aria-label*="新建工作"]') !== null,
    title: 'New WorkSpace — Demo Sandbox',
    body:
      'WorkSpaces are isolated project containers backed by a real filesystem and memory store. Spinning one up needs the local PilotDeck server.',
  },
  {
    id: 'new-chat',
    // Hover-revealed pencil ("MessageSquarePlus") on every project row, and
    // its twin at the top of the project list. Both share aria-label="New
    // Chat" in the V2 sidebar.
    test: (el) =>
      el.closest('[aria-label*="New Chat" i], [aria-label*="新建对话"]') !== null,
    title: 'New Conversation — Demo Sandbox',
    body:
      'Starting a fresh chat would normally spin up a clean PilotDeck session against a real model. This sandbox only ships the canned tutorial transcript — open the existing session in the sidebar or install PilotDeck locally to start your own.',
  },
  {
    id: 'tool-tab',
    // Tab buttons inside the MainAreaV2 tool strip — block everything that
    // isn't the first tab (Chat). MainAreaV2 renders the strip as:
    //   <div role="tablist" aria-label="Tools">
    //     <button role="tab"> Chat (index 0) </button>
    //     <button role="tab"> Files (index 1) </button>
    //     ... etc
    test: (el) => {
      const tab = el.closest('[role="tab"]');
      if (!tab) return false;
      const list = tab.closest('[role="tablist"][aria-label="Tools"]');
      if (!list) return false;
      const tabs = Array.from(list.querySelectorAll(':scope > [role="tab"]'));
      const index = tabs.indexOf(tab);
      // Chat = first tab. Everything else needs a real backend.
      return index > 0;
    },
    title: 'Tool tab — Demo Sandbox',
    body:
      'Files, Skills, Dashboard, Memory, and Always-on each render live data from the PilotDeck server. They\'d be empty here. Try the chat tab instead, or install PilotDeck locally to see the full cockpit.',
  },
  {
    id: 'delete-action',
    // Hover-revealed Trash2 buttons on project / session rows + the
    // confirm-button inside the delete dialog (also uses Trash2).
    test: (el) => {
      const btn = el.closest('button');
      if (!btn) return false;
      // lucide-react v0.515 renders icons with a `lucide-trash-2` class.
      return btn.querySelector('svg.lucide-trash-2, svg[class*="lucide-trash"]') !== null;
    },
    title: 'Delete — Demo Sandbox',
    body:
      'Deleting projects or sessions writes through to the PilotDeck server and removes data from your local filesystem. We block that here so a reload always brings back the same canned sandbox.',
  },
];

// ─── Modal DOM (vanilla, lives outside the React tree) ────────────────────

function injectStyles() {
  if (document.getElementById('pilotdeck-demo-block-styles')) return;
  const style = document.createElement('style');
  style.id = 'pilotdeck-demo-block-styles';
  style.textContent = `
    .pd-demo-modal-backdrop {
      position: fixed;
      inset: 0;
      z-index: 100000;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(15, 23, 42, 0.42);
      backdrop-filter: blur(4px);
      -webkit-backdrop-filter: blur(4px);
      padding: 16px;
      opacity: 0;
      pointer-events: none;
      transition: opacity 0.15s ease-out;
      font-family: 'Inter Variable', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    }
    .pd-demo-modal-backdrop[data-open="true"] {
      opacity: 1;
      pointer-events: auto;
    }
    .pd-demo-modal-card {
      width: 100%;
      max-width: 460px;
      background: #ffffff;
      border-radius: 16px;
      box-shadow: 0 24px 48px -12px rgba(15, 23, 42, 0.25);
      transform: translateY(8px);
      transition: transform 0.18s cubic-bezier(0.16, 1, 0.3, 1);
      overflow: hidden;
      color: #0a0a0a;
    }
    .pd-demo-modal-backdrop[data-open="true"] .pd-demo-modal-card {
      transform: translateY(0);
    }
    .pd-demo-modal-header {
      padding: 20px 24px 0;
    }
    .pd-demo-modal-eyebrow {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      font-size: 11px;
      font-weight: 600;
      letter-spacing: 0.04em;
      text-transform: uppercase;
      color: #4338ca;
      background: #eef2ff;
      padding: 4px 9px;
      border-radius: 999px;
    }
    .pd-demo-modal-title {
      margin: 12px 0 8px;
      font-size: 18px;
      font-weight: 600;
      line-height: 1.3;
      color: #0a0a0a;
    }
    .pd-demo-modal-body {
      padding: 0 24px 16px;
      font-size: 14px;
      line-height: 1.55;
      color: #525252;
    }
    .pd-demo-modal-footer {
      display: flex;
      gap: 8px;
      justify-content: flex-end;
      padding: 12px 20px 20px;
      border-top: 1px solid #f1f5f9;
      margin-top: 8px;
    }
    .pd-demo-modal-btn {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      height: 36px;
      padding: 0 14px;
      border-radius: 8px;
      font-size: 13px;
      font-weight: 500;
      cursor: pointer;
      border: none;
      transition: background 0.12s ease, color 0.12s ease;
      text-decoration: none;
      font-family: inherit;
    }
    .pd-demo-modal-btn-ghost {
      background: transparent;
      color: #525252;
    }
    .pd-demo-modal-btn-ghost:hover {
      background: #f5f5f5;
      color: #0a0a0a;
    }
    .pd-demo-modal-btn-primary {
      background: #0a0a0a;
      color: #ffffff;
    }
    .pd-demo-modal-btn-primary:hover {
      background: #262626;
    }
    @media (prefers-color-scheme: dark) {
      .pd-demo-modal-card {
        background: #0a0a0a;
        color: #fafafa;
      }
      .pd-demo-modal-title { color: #fafafa; }
      .pd-demo-modal-body { color: #a3a3a3; }
      .pd-demo-modal-eyebrow { color: #c7d2fe; background: rgba(67, 56, 202, 0.18); }
      .pd-demo-modal-footer { border-top-color: #1f2937; }
      .pd-demo-modal-btn-ghost { color: #a3a3a3; }
      .pd-demo-modal-btn-ghost:hover { background: #262626; color: #fafafa; }
      .pd-demo-modal-btn-primary { background: #fafafa; color: #0a0a0a; }
      .pd-demo-modal-btn-primary:hover { background: #e5e5e5; }
    }
  `;
  document.head.appendChild(style);
}

function buildModal() {
  injectStyles();
  const backdrop = document.createElement('div');
  backdrop.className = 'pd-demo-modal-backdrop';
  backdrop.dataset.open = 'false';
  backdrop.setAttribute('role', 'dialog');
  backdrop.setAttribute('aria-modal', 'true');
  backdrop.innerHTML = `
    <div class="pd-demo-modal-card" role="document">
      <div class="pd-demo-modal-header">
        <span class="pd-demo-modal-eyebrow">Demo Sandbox</span>
        <h2 class="pd-demo-modal-title" data-role="title"></h2>
      </div>
      <div class="pd-demo-modal-body" data-role="body"></div>
      <div class="pd-demo-modal-footer">
        <button type="button" class="pd-demo-modal-btn pd-demo-modal-btn-ghost" data-role="dismiss">Got it</button>
        <a class="pd-demo-modal-btn pd-demo-modal-btn-primary" data-role="install"
           href="${GITHUB_INSTALL_URL}" target="_blank" rel="noopener noreferrer">
          Install locally →
        </a>
      </div>
    </div>
  `;

  const dismiss = backdrop.querySelector('[data-role="dismiss"]');
  dismiss.addEventListener('click', () => closeModal(backdrop));
  backdrop.addEventListener('click', (event) => {
    if (event.target === backdrop) closeModal(backdrop);
  });
  document.body.appendChild(backdrop);
  return backdrop;
}

function closeModal(backdrop) {
  backdrop.dataset.open = 'false';
}

function openModal(backdrop, rule) {
  backdrop.querySelector('[data-role="title"]').textContent = rule.title;
  backdrop.querySelector('[data-role="body"]').textContent = rule.body;
  backdrop.dataset.open = 'true';
  // Focus the dismiss button so Escape works naturally.
  const dismiss = backdrop.querySelector('[data-role="dismiss"]');
  setTimeout(() => dismiss.focus(), 50);
}

// ─── Wiring ───────────────────────────────────────────────────────────────

let modalEl = null;
function ensureModal() {
  if (modalEl) return modalEl;
  modalEl = buildModal();
  return modalEl;
}

function findMatchingRule(target) {
  if (!(target instanceof Element)) return null;
  for (const rule of BLOCK_RULES) {
    try {
      if (rule.test(target)) return rule;
    } catch {
      // Defensive — bad selector in dev shouldn't break the page.
    }
  }
  return null;
}

document.addEventListener(
  'click',
  (event) => {
    const rule = findMatchingRule(event.target);
    if (!rule) return;
    event.preventDefault();
    event.stopPropagation();
    event.stopImmediatePropagation?.();
    const modal = ensureModal();
    openModal(modal, rule);
  },
  true, // capture phase — beat React's onClick handlers
);

// Escape key closes the modal regardless of focus.
document.addEventListener('keydown', (event) => {
  if (event.key !== 'Escape') return;
  if (!modalEl) return;
  if (modalEl.dataset.open === 'true') {
    closeModal(modalEl);
    event.stopPropagation();
  }
});

// AppShellV2 sets window.openSettings = openSettings in a useEffect so
// chat slash commands can trigger it programmatically. We replace whatever
// the V2 layer assigns with our modal — by defining a setter that swaps
// in the demo handler whenever something tries to install a real one.
(function patchWindowOpenSettings() {
  let stored = null;
  Object.defineProperty(window, 'openSettings', {
    configurable: true,
    set(_realFn) {
      stored = () => {
        const modal = ensureModal();
        openModal(modal, BLOCK_RULES[0]);
      };
    },
    get() {
      return stored;
    },
  });
})();

// Expose a debugging hook so the canned-data layer (or future tweaks) can
// trigger the modal directly without faking a click.
window.__pilotdeckShowDemoNotice = (ruleId = 'settings') => {
  const rule = BLOCK_RULES.find((r) => r.id === ruleId) || BLOCK_RULES[0];
  const modal = ensureModal();
  openModal(modal, rule);
};

void GITHUB_REPO_URL; // exported only via the modal's install link for now
