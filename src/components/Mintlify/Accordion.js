import React, { useState } from 'react';
import Icon from './Icon';
import styles from './styles.module.css';

export function AccordionGroup({ children }) {
  return <div className={styles.accordionGroup}>{children}</div>;
}

export function Accordion({ title, icon, defaultOpen = false, children }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className={`${styles.accordion} ${open ? styles.accordionOpen : ''}`}>
      <button
        type="button"
        className={styles.accordionHeader}
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        {icon && (
          <span className={styles.accordionHeadIcon}>
            <Icon name={icon} size={16} />
          </span>
        )}
        <span className={styles.accordionHeadTitle}>{title}</span>
        <svg
          className={styles.accordionChevron}
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </button>
      {open && <div className={styles.accordionBody}>{children}</div>}
    </div>
  );
}
