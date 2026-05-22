import React, { Children, isValidElement } from 'react';
import styles from './styles.module.css';

export function Steps({ children }) {
  const items = Children.toArray(children).filter(isValidElement);
  return (
    <ol className={styles.steps}>
      {items.map((child, i) => (
        <li key={i} className={styles.stepItem}>
          <div className={styles.stepIndex}>{i + 1}</div>
          <div className={styles.stepBody}>
            {child.props.title && <div className={styles.stepTitle}>{child.props.title}</div>}
            <div className={styles.stepContent}>{child.props.children}</div>
          </div>
        </li>
      ))}
    </ol>
  );
}

export function Step({ children }) {
  return <>{children}</>;
}
