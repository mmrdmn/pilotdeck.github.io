import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import { useIsZh } from '@site/src/i18n';
import comingSoonStyles from '@site/src/components/ComingSoon/styles.module.css';

const COPY = {
  en: {
    title: 'Use Cases',
    lead: 'PilotDeck case showcase has moved — pick your destination below.',
    cards: [
      {
        title: 'Open Case Showcase',
        desc: 'The interactive AI-Agent case playground (with playable demos).',
        href: '/showcase/',
      },
      {
        title: 'Showcase Docs',
        desc: 'Step-by-step walkthroughs of each featured case.',
        href: '/docs/en/showcase/overview',
      },
    ],
  },
  zh: {
    title: '应用场景',
    lead: 'PilotDeck 案例广场已上线 —— 从下方任选其一进入。',
    cards: [
      {
        title: '案例广场（微站）',
        desc: '交互式 AI Agent 案例广场（含可直接试玩的 Demo）。',
        href: '/showcase/',
      },
      {
        title: '案例文档',
        desc: '逐步拆解每个精选案例的执行流程。',
        href: '/docs/showcase/overview',
      },
    ],
  },
};

export default function UseCases() {
  const isZh = useIsZh();
  const t = isZh ? COPY.zh : COPY.en;
  return (
    <Layout title={t.title} description={t.lead}>
      <main className={comingSoonStyles.wrapper}>
        <div className={comingSoonStyles.inner}>
          <div className={comingSoonStyles.eyebrow}>
            <span className={comingSoonStyles.eyebrowDot} />
            {isZh ? '案例广场已上线' : 'Available Now'}
          </div>
          <h1 className={comingSoonStyles.title}>{t.title}</h1>
          <p className={comingSoonStyles.lead}>{t.lead}</p>

          <div className={comingSoonStyles.actions}>
            {t.cards.map((c) => {
              const isStaticShowcase = c.href.startsWith('/showcase');
              return isStaticShowcase ? (
                <a key={c.href} href={c.href} className={comingSoonStyles.btnPrimary}>
                  {c.title}
                </a>
              ) : (
                <Link key={c.href} to={c.href} className={comingSoonStyles.btnPrimary}>
                  {c.title}
                </Link>
              );
            })}
          </div>
        </div>
      </main>
    </Layout>
  );
}
