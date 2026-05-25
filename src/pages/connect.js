import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Layout from '@theme/Layout';
import { useIsZh } from '../i18n';
import styles from './connect.module.css';

const COMMUNITY = {
  en: {
    title: 'Join the Community',
    desc: 'Talk to the team, share ideas, report bugs, or just hang out.',
    cards: [
      {
        icon: 'img/community/discord.svg',
        name: 'Discord',
        desc: 'Scan the QR code to join our Discord community.',
        qr: 'img/community/qr-discord.png',
      },
      {
        icon: 'img/community/feishu.svg',
        name: 'Feishu',
        desc: 'Scan the QR code to join our Feishu group.',
        qr: 'img/community/qr-feishu.png',
      },
      {
        icon: 'img/community/wechat.svg',
        name: 'WeChat',
        desc: 'Scan the QR code to join our WeChat community.',
        qr: 'img/community/qr-wechat.png',
      },
    ],
  },
  zh: {
    title: '加入社区',
    desc: '与核心团队交流、分享想法、反馈问题，或仅仅来逛逛。',
    cards: [
      {
        icon: 'img/community/discord.svg',
        name: 'Discord',
        desc: '扫码加入 Discord 英文社区。',
        qr: 'img/community/qr-discord.png',
      },
      {
        icon: 'img/community/feishu.svg',
        name: '飞书',
        desc: '扫码加入飞书社区群。',
        qr: 'img/community/qr-feishu.png',
      },
      {
        icon: 'img/community/wechat.svg',
        name: '微信',
        desc: '扫码加入微信用户群。',
        qr: 'img/community/qr-wechat.png',
      },
    ],
  },
};

const CONTRIBUTE = {
  en: {
    title: 'Contribute',
    desc: 'PilotDeck is open-source. Help us build the future of agent productivity.',
    cards: [
      {
        icon: '🐛',
        name: 'GitHub Issues',
        desc: 'Report bugs, request features, or start a discussion.',
        cta: 'Open an Issue',
        href: 'https://github.com/OpenBMB/PilotDeck/issues',
      },
      {
        icon: '🔀',
        name: 'Pull Requests',
        desc: 'Contribute code, docs, or examples directly.',
        cta: 'Submit a PR',
        href: 'https://github.com/OpenBMB/PilotDeck/pulls',
      },
      {
        icon: '📖',
        name: 'Contributing Guide',
        desc: 'Learn how to set up your dev environment and contribute.',
        cta: 'Read the Guide',
        href: 'https://github.com/OpenBMB/PilotDeck/blob/main/CONTRIBUTING.md',
      },
    ],
  },
  zh: {
    title: '参与贡献',
    desc: 'PilotDeck 是开源项目，欢迎一起构建智能体生产力的未来。',
    cards: [
      {
        icon: '🐛',
        name: 'GitHub Issues',
        desc: '提交 Bug、反馈需求、发起讨论。',
        cta: '提交 Issue',
        href: 'https://github.com/OpenBMB/PilotDeck/issues',
      },
      {
        icon: '🔀',
        name: 'Pull Requests',
        desc: '贡献代码、文档或示例。',
        cta: '提交 PR',
        href: 'https://github.com/OpenBMB/PilotDeck/pulls',
      },
      {
        icon: '📖',
        name: '贡献指南',
        desc: '了解如何搭建开发环境、参与项目贡献。',
        cta: '阅读指南',
        href: 'https://github.com/OpenBMB/PilotDeck/blob/main/CONTRIBUTING.md',
      },
    ],
  },
};

const CONTACT = {
  en: {
    title: 'Prefer email?',
    desc: 'For commercial collaboration or enterprise support:',
    email: 'team@pilotdeck.ai',
  },
  zh: {
    title: '更喜欢邮件？',
    desc: '商务合作或企业支持，请联系：',
    email: 'team@pilotdeck.ai',
  },
};

export default function ConnectPage({ title, titleZh }) {
  const isZh = useIsZh();
  const community = isZh ? COMMUNITY.zh : COMMUNITY.en;
  const contribute = isZh ? CONTRIBUTE.zh : CONTRIBUTE.en;
  const contact = isZh ? CONTACT.zh : CONTACT.en;
  const displayTitle = isZh ? (titleZh || '连接') : (title || 'Connect');

  return (
    <Layout
      title={displayTitle}
      description={isZh ? '加入社区、参与贡献' : 'Join the community and contribute to PilotDeck.'}
    >
      <main className={styles.connectPage}>
        {/* Community */}
        <section id="community" className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>{community.title}</h2>
            <p className={styles.sectionDesc}>{community.desc}</p>
          </div>
          <div className={styles.cardGrid}>
            {community.cards.map((card, idx) => (
              <div key={idx} className={styles.card}>
                <img src={useBaseUrl(card.icon)} alt={card.name} className={styles.cardIcon} />
                <h3 className={styles.cardName}>{card.name}</h3>
                <p className={styles.cardDesc}>{card.desc}</p>
                <div className={styles.qrWrapper}>
                  <img src={useBaseUrl(card.qr)} alt={`${card.name} QR`} className={styles.qrCode} />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contribute */}
        <section id="contribute" className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>{contribute.title}</h2>
            <p className={styles.sectionDesc}>{contribute.desc}</p>
          </div>
          <div className={styles.cardGrid}>
            {contribute.cards.map((card, idx) => (
              <div key={idx} className={styles.card}>
                <span className={styles.cardEmoji}>{card.icon}</span>
                <h3 className={styles.cardName}>{card.name}</h3>
                <p className={styles.cardDesc}>{card.desc}</p>
                <a
                  className={styles.cardBtn}
                  href={card.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {card.cta}
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Bar */}
        <div className={styles.contactBar}>
          <span className={styles.contactTitle}>{contact.title}</span>
          <span className={styles.contactDesc}>{contact.desc}</span>
          <a href={`mailto:${contact.email}`} className={styles.contactEmail}>
            {contact.email}
          </a>
        </div>
      </main>
    </Layout>
  );
}
