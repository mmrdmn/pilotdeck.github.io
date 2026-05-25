import React from 'react';
import { useHistory, useLocation } from '@docusaurus/router';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { useLanguage } from '@site/src/context/LanguageContext';
import styles from './LanguageSwitcher.module.css';

export default function LanguageSwitcher() {
  const { lang, setLang } = useLanguage();
  const history = useHistory();
  const location = useLocation();
  const baseUrl = useBaseUrl('/');

  const stripBaseUrl = (pathname) => {
    const normalizedBase = baseUrl.replace(/\/$/, '');
    if (normalizedBase && pathname.startsWith(`${normalizedBase}/`)) {
      return pathname.slice(normalizedBase.length);
    }
    return pathname;
  };

  const addBaseUrl = (pathname) => {
    const normalizedBase = baseUrl.replace(/\/$/, '');
    if (!normalizedBase || pathname.startsWith(`${normalizedBase}/`)) return pathname;
    return `${normalizedBase}${pathname}`;
  };

  const getLocalizedDocsPath = (pathname, nextLang) => {
    const docsPath = stripBaseUrl(pathname);
    if (!docsPath.startsWith('/docs/')) return pathname;

    if (nextLang === 'en' && !docsPath.startsWith('/docs/en/')) {
      return addBaseUrl(`/docs/en${docsPath.slice('/docs'.length)}`);
    }

    if (nextLang === 'zh' && docsPath.startsWith('/docs/en/')) {
      return addBaseUrl(`/docs${docsPath.slice('/docs/en'.length)}`);
    }

    return pathname;
  };

  const handleLangChange = (nextLang) => {
    setLang(nextLang);

    const nextPath = getLocalizedDocsPath(location.pathname, nextLang);
    if (nextPath !== location.pathname) {
      history.push(`${nextPath}${location.search}${location.hash}`);
    }
  };

  return (
    <div className={styles.switcher}>
      <button
        className={`${styles.btn} ${lang === 'en' ? styles.active : ''}`}
        onClick={() => handleLangChange('en')}
      >
        EN
      </button>
      <span className={styles.divider}>|</span>
      <button
        className={`${styles.btn} ${lang === 'zh' ? styles.active : ''}`}
        onClick={() => handleLangChange('zh')}
      >
        中文
      </button>
    </div>
  );
}
