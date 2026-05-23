import React from 'react';
import { useHistory, useLocation } from '@docusaurus/router';
import { useLanguage } from '@site/src/context/LanguageContext';
import styles from './LanguageSwitcher.module.css';

export default function LanguageSwitcher() {
  const { lang, setLang } = useLanguage();
  const history = useHistory();
  const location = useLocation();

  const getLocalizedDocsPath = (pathname, nextLang) => {
    if (!pathname.startsWith('/docs/')) return pathname;

    if (nextLang === 'en' && !pathname.startsWith('/docs/en/')) {
      return `/docs/en${pathname.slice('/docs'.length)}`;
    }

    if (nextLang === 'zh' && pathname.startsWith('/docs/en/')) {
      return `/docs${pathname.slice('/docs/en'.length)}`;
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
