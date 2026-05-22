import React from 'react';
import styles from './styles.module.css';

function Callout({ variant, label, children }) {
  return (
    <div className={`${styles.callout} ${styles[`callout_${variant}`]}`}>
      <div className={styles.calloutLabel}>{label}</div>
      <div className={styles.calloutBody}>{children}</div>
    </div>
  );
}

export const Tip = ({ children }) => <Callout variant="tip" label="提示 · Tip" children={children} />;
export const Note = ({ children }) => <Callout variant="note" label="备注 · Note" children={children} />;
export const Info = ({ children }) => <Callout variant="info" label="提示 · Info" children={children} />;
export const Warning = ({ children }) => <Callout variant="warning" label="注意 · Warning" children={children} />;

export const Check = Info;
export const Danger = Warning;
