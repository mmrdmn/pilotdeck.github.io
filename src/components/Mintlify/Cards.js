import React from 'react';
import Link from '@docusaurus/Link';
import Icon from './Icon';
import styles from './styles.module.css';

export function CardGroup({ cols = 2, children }) {
  const count = Math.min(Math.max(parseInt(cols, 10) || 2, 1), 4);
  return (
    <div className={styles.cardGroup} data-cols={count}>
      {children}
    </div>
  );
}

export function Card({ title, icon, href, children }) {
  const inner = (
    <div className={styles.cardInner}>
      {(icon || title) && (
        <div className={styles.cardHead}>
          {icon && <span className={styles.cardIcon}><Icon name={icon} size={18} /></span>}
          {title && <span className={styles.cardTitle}>{title}</span>}
        </div>
      )}
      {children && <div className={styles.cardBody}>{children}</div>}
    </div>
  );

  if (href) {
    return (
      <Link to={href} className={`${styles.card} ${styles.cardLink}`}>
        {inner}
      </Link>
    );
  }
  return <div className={styles.card}>{inner}</div>;
}
