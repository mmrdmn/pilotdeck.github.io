import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import { useIsZh } from '@site/src/i18n';
import styles from './styles.module.css';

export default function ComingSoon({ title, titleZh, lead, leadZh, tags = [] }) {
  const isZh = useIsZh();
  const displayTitle = isZh ? (titleZh || title) : title;
  const displayLead = isZh ? (leadZh || lead) : lead;

  return (
    <Layout title={displayTitle} description={displayLead}>
      <main className={styles.wrapper}>
        <div className={styles.inner}>
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowDot} />
            {isZh ? '即将上线' : 'Coming Soon'}
          </div>
          <h1 className={styles.title}>{displayTitle}</h1>
          <p className={styles.lead}>{displayLead}</p>

          {tags.length > 0 && (
            <ul className={styles.tagList}>
              {tags.map((tag, idx) => (
                <li key={idx} className={styles.tag}>
                  {isZh ? (tag.zh || tag.en) : (tag.en || tag.zh)}
                </li>
              ))}
            </ul>
          )}

          <div className={styles.actions}>
            <Link className={styles.btnPrimary} to="/">
              ← {isZh ? '返回首页' : 'Back to Home'}
            </Link>
            <Link className={styles.btnSecondary} to="https://github.com/OpenBMB/PilotDeck">
              {isZh ? '查看 GitHub' : 'View on GitHub'}
            </Link>
          </div>
        </div>
      </main>
    </Layout>
  );
}
