// Floating EN / 中文 language toggle for the public demo sandbox.
//
// The real Settings dialog (where language normally lives) is blocked in
// demo mode — see demo-block.js — so without this the visitor would have no
// way to switch locale. This renders a tiny vanilla-DOM pill in the
// top-right corner (outside the React tree, same philosophy as
// demo-block.js) that:
//   - reflects the currently-active locale,
//   - persists the visitor's choice under `pilotdeck_demo_lang`, and
//   - reloads so both the UI chrome (i18next) AND the canned transcript
//     (canned-data.js reads `userLanguage` at request time) come back fully
//     translated.
//
// The boot logic in entry.jsx reads `pilotdeck_demo_lang` first, then falls
// back to the docs-site language (`pilotdeck_lang`), so the demo defaults to
// the website's language on first visit and honours in-demo switches after.

const DEMO_LANG_KEY = 'pilotdeck_demo_lang';
const SITE_LANG_KEY = 'pilotdeck_lang';
const I18N_LANG_KEY = 'userLanguage';

const OPTIONS = [
  { value: 'en', label: 'EN' },
  { value: 'zh-CN', label: '中文' },
];

function resolveCurrentLang() {
  try {
    const demoChoice = window.localStorage.getItem(DEMO_LANG_KEY);
    if (demoChoice === 'en' || demoChoice === 'zh-CN') return demoChoice;
    const siteLang = window.localStorage.getItem(SITE_LANG_KEY);
    if (siteLang === 'zh') return 'zh-CN';
  } catch {
    // ignore — fall through to default.
  }
  return 'en';
}

function injectStyles() {
  if (document.getElementById('pilotdeck-demo-lang-styles')) return;
  const style = document.createElement('style');
  style.id = 'pilotdeck-demo-lang-styles';
  style.textContent = `
    .pd-demo-lang {
      position: fixed;
      top: 12px;
      right: 12px;
      z-index: 99990;
      display: inline-flex;
      align-items: center;
      gap: 2px;
      padding: 3px;
      border-radius: 999px;
      background: rgba(255, 255, 255, 0.9);
      border: 1px solid rgba(15, 23, 42, 0.1);
      box-shadow: 0 6px 18px -8px rgba(15, 23, 42, 0.28);
      backdrop-filter: blur(8px);
      -webkit-backdrop-filter: blur(8px);
      font-family: 'Inter Variable', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      user-select: none;
    }
    .pd-demo-lang-btn {
      appearance: none;
      border: none;
      background: transparent;
      cursor: pointer;
      padding: 4px 11px;
      border-radius: 999px;
      font-size: 12px;
      font-weight: 500;
      line-height: 1;
      color: #52525b;
      transition: background 0.15s ease, color 0.15s ease;
      font-family: inherit;
    }
    .pd-demo-lang-btn:hover {
      color: #18181b;
      background: rgba(15, 23, 42, 0.05);
    }
    .pd-demo-lang-btn[data-active="true"] {
      color: #ffffff;
      background: #4338ca;
    }
    .pd-demo-lang-btn[data-active="true"]:hover {
      background: #4338ca;
    }
    @media (prefers-color-scheme: dark) {
      .pd-demo-lang {
        background: rgba(24, 24, 27, 0.85);
        border-color: rgba(255, 255, 255, 0.12);
      }
      .pd-demo-lang-btn { color: #a1a1aa; }
      .pd-demo-lang-btn:hover { color: #fafafa; background: rgba(255, 255, 255, 0.08); }
      .pd-demo-lang-btn[data-active="true"] { color: #ffffff; background: #6366f1; }
      .pd-demo-lang-btn[data-active="true"]:hover { background: #6366f1; }
    }
  `;
  document.head.appendChild(style);
}

function selectLanguage(next) {
  if (next === resolveCurrentLang()) return;
  try {
    window.localStorage.setItem(DEMO_LANG_KEY, next);
    // Pre-seed the i18n key too so there's no flash of the old locale before
    // entry.jsx's boot logic runs on the reloaded page.
    window.localStorage.setItem(I18N_LANG_KEY, next);
  } catch {
    // private mode — reload still re-derives from whatever we could save.
  }
  window.location.reload();
}

function buildSwitcher() {
  injectStyles();
  const active = resolveCurrentLang();
  const wrap = document.createElement('div');
  wrap.className = 'pd-demo-lang';
  wrap.setAttribute('role', 'group');
  wrap.setAttribute('aria-label', 'Language / 语言');

  for (const option of OPTIONS) {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'pd-demo-lang-btn';
    btn.textContent = option.label;
    btn.dataset.active = String(option.value === active);
    btn.addEventListener('click', () => selectLanguage(option.value));
    wrap.appendChild(btn);
  }

  document.body.appendChild(wrap);
}

function init() {
  if (document.body) {
    buildSwitcher();
  } else {
    document.addEventListener('DOMContentLoaded', buildSwitcher, { once: true });
  }
}

init();
