import React, { Children, isValidElement, useState } from 'react';
import styles from './styles.module.css';

export function Tab({ children }) {
  return <>{children}</>;
}

export function Tabs({ children }) {
  const items = Children.toArray(children).filter(isValidElement);
  const [idx, setIdx] = useState(0);

  if (items.length === 0) return null;

  return (
    <div className={styles.tabs}>
      <div className={styles.tabsHeader} role="tablist">
        {items.map((child, i) => (
          <button
            key={i}
            type="button"
            role="tab"
            aria-selected={idx === i}
            className={`${styles.tabsTrigger} ${idx === i ? styles.tabsTriggerActive : ''}`}
            onClick={() => setIdx(i)}
          >
            {child.props.title || `Tab ${i + 1}`}
          </button>
        ))}
      </div>
      <div className={styles.tabsBody}>{items[idx]}</div>
    </div>
  );
}
