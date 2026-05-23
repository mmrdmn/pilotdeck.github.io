import React, { useEffect } from 'react';
import { useHistory, useLocation } from '@docusaurus/router';
import { useLanguage } from '@site/src/context/LanguageContext';

const STORAGE_KEY = 'pilotdeck_lang';

function getStoredLang(fallbackLang) {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved === 'zh' || saved === 'en' ? saved : fallbackLang;
  } catch (e) {
    return fallbackLang;
  }
}

function getLocalizedDocsPath(pathname, lang) {
  if (!pathname.startsWith('/docs/')) return pathname;

  if (lang === 'en' && !pathname.startsWith('/docs/en/')) {
    return `/docs/en${pathname.slice('/docs'.length)}`;
  }

  if (lang === 'zh' && pathname.startsWith('/docs/en/')) {
    return `/docs${pathname.slice('/docs/en'.length)}`;
  }

  return pathname;
}

export default function DocLanguageSync() {
  const { lang } = useLanguage();
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    const preferredLang = getStoredLang(lang);
    const nextPath = getLocalizedDocsPath(location.pathname, preferredLang);

    if (nextPath !== location.pathname) {
      history.replace(`${nextPath}${location.search}${location.hash}`);
    }
  }, [history, lang, location.hash, location.pathname, location.search]);

  return null;
}
