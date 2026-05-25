import React, { useEffect } from 'react';
import { useHistory, useLocation } from '@docusaurus/router';
import useBaseUrl from '@docusaurus/useBaseUrl';
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

function stripBaseUrl(pathname, baseUrl) {
  const normalizedBase = baseUrl.replace(/\/$/, '');
  if (normalizedBase && pathname.startsWith(`${normalizedBase}/`)) {
    return pathname.slice(normalizedBase.length);
  }
  return pathname;
}

function addBaseUrl(pathname, baseUrl) {
  const normalizedBase = baseUrl.replace(/\/$/, '');
  if (!normalizedBase || pathname.startsWith(`${normalizedBase}/`)) return pathname;
  return `${normalizedBase}${pathname}`;
}

function getLocalizedDocsPath(pathname, lang, baseUrl) {
  const docsPath = stripBaseUrl(pathname, baseUrl);
  if (!docsPath.startsWith('/docs/')) return pathname;

  if (lang === 'en' && !docsPath.startsWith('/docs/en/')) {
    return addBaseUrl(`/docs/en${docsPath.slice('/docs'.length)}`, baseUrl);
  }

  if (lang === 'zh' && docsPath.startsWith('/docs/en/')) {
    return addBaseUrl(`/docs${docsPath.slice('/docs/en'.length)}`, baseUrl);
  }

  return pathname;
}

export default function DocLanguageSync() {
  const { lang } = useLanguage();
  const history = useHistory();
  const location = useLocation();
  const baseUrl = useBaseUrl('/');

  useEffect(() => {
    const preferredLang = getStoredLang(lang);
    const nextPath = getLocalizedDocsPath(location.pathname, preferredLang, baseUrl);

    if (nextPath !== location.pathname) {
      history.replace(`${nextPath}${location.search}${location.hash}`);
    }
  }, [baseUrl, history, lang, location.hash, location.pathname, location.search]);

  return null;
}
