// Seed the demo's persisted localStorage state BEFORE any V2 module (App,
// i18n/config, ThemeContext) is imported and evaluated.
//
// This MUST be the first import in entry.jsx. ES module `import` statements
// are hoisted and evaluated in source order before a module's own executable
// body runs — so if we seeded `userLanguage` in entry.jsx's function body,
// i18next (pulled in via the App import) would already have initialised with
// the *previous* stored locale. Doing it here, as an eagerly-evaluated
// side-effect import, guarantees the values are in place first.
//
// Pins:
//   - activeTab: force 'chat'. A returning visitor who clicked
//     Dashboard/Memory/Always-on before the click-block landed would
//     otherwise re-mount that (now-blocked) panel on reload and crash.
//   - userLanguage: default to the docs-site language so the demo opens in
//     the same locale as the website; honour an explicit in-demo choice
//     (`pilotdeck_demo_lang`) once the visitor toggles the floating switcher.
//   - theme: pin light so every screenshot / share / repeat visit matches.

function resolveDemoLanguage() {
  try {
    const demoChoice = window.localStorage.getItem('pilotdeck_demo_lang');
    if (demoChoice === 'en' || demoChoice === 'zh-CN') return demoChoice;
    const siteLang = window.localStorage.getItem('pilotdeck_lang');
    if (siteLang === 'zh') return 'zh-CN';
  } catch {
    // private mode / disabled storage — fall through to English.
  }
  return 'en';
}

try {
  window.localStorage.setItem('activeTab', 'chat');
  window.localStorage.setItem('userLanguage', resolveDemoLanguage());
  window.localStorage.setItem('theme', 'light');
  // Drop the dark-mode class eagerly so we never flash dark before the
  // ThemeProvider's effect runs on the very first paint.
  document.documentElement.classList.remove('dark');
} catch {
  // private mode / disabled storage — fine.
}
