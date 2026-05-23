import React, { useState, useEffect, useRef } from 'react';
import Link from '@docusaurus/Link';
import clsx from 'clsx';
import { useLanguage } from '@site/src/context/LanguageContext';
import styles from './MegaMenu.module.css';

export default function MegaMenu({ label, labelZh, items, position, to: triggerTo }) {
  const { lang } = useLanguage();
  const isZh = lang === 'zh';
  const displayLabel = isZh ? (labelZh || label) : label;
  const localizeDocsPath = (url) => {
    if (!url || !url.startsWith('/docs/')) return url;

    if (!isZh && !url.startsWith('/docs/en/')) {
      return `/docs/en${url.slice('/docs'.length)}`;
    }

    if (isZh && url.startsWith('/docs/en/')) {
      return `/docs${url.slice('/docs/en'.length)}`;
    }

    return url;
  };
  const localizedTriggerTo = localizeDocsPath(triggerTo);

  const localizedItems = items.map((column) => ({
    ...column,
    title: isZh ? (column.titleZh || column.title) : column.title,
    items: column.items.map((item) => ({
      ...item,
      label: isZh ? (item.labelZh || item.label) : item.label,
      to: localizeDocsPath(item.to),
    })),
  }));

  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);
  const timeoutRef = useRef(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 150);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div
      className={clsx('navbar__item', styles.megaMenuContainer)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      ref={containerRef}
    >
      {triggerTo ? (
        <Link
          to={localizedTriggerTo}
          className={clsx('navbar__link', styles.megaMenuTrigger, {
            [styles.active]: isOpen,
          })}
        >
          {displayLabel}
        </Link>
      ) : (
        <div
          className={clsx('navbar__link', styles.megaMenuTrigger, {
            [styles.active]: isOpen,
          })}
          role="button"
          tabIndex={0}
        >
          {displayLabel}
        </div>
      )}

      <div className={clsx(styles.megaMenuDropdown, { [styles.show]: isOpen })}>
        <div className={styles.dropdownContent}>
          {localizedItems.map((column, idx) => (
            <div key={idx} className={styles.menuColumn}>
              {column.title && <div className={styles.columnTitle}>{column.title}</div>}
              <ul className={styles.menuList}>
                {column.items.map((item, itemIdx) => {
                  const url = item.to || item.href;
                  // Static-folder URLs (e.g. /showcase/ microsite) bypass
                  // Docusaurus' router link check and render as plain anchors.
                  const isRawHref =
                    !!url && (item.href !== undefined || url.startsWith('/showcase'));
                  return (
                    <li key={itemIdx} className={styles.menuItem}>
                      {isRawHref ? (
                        <a
                          href={url}
                          className={styles.menuLink}
                          target={item.target}
                          rel={item.target === '_blank' ? 'noopener noreferrer' : undefined}
                        >
                          {item.label}
                        </a>
                      ) : (
                        <Link to={url} className={styles.menuLink} target={item.target}>
                          {item.label}
                        </Link>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
