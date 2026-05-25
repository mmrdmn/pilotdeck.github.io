import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Layout from '@theme/Layout';
import { useIsZh } from '../i18n';
import styles from './team.module.css';
import connectStyles from './connect.module.css';

const FOUNDER = {
  en: {
    label: 'Founder',
    members: [
      { name: 'Yukun Yan', role: 'TsinghuaNLP', avatar: 'img/team/闫宇坤.jpg' },
    ],
  },
  zh: {
    label: '发起人',
    members: [
      { name: '闫宇坤', role: 'TsinghuaNLP', avatar: 'img/team/闫宇坤.jpg' },
    ],
  },
};

const CORE_TEAM = {
  en: {
    label: 'Core Developers',
    rows: [
      [
        { name: 'Mingwei Li', role: 'OpenBMB', avatar: 'img/team/李明蔚.jpg' },
        { name: 'Yishan Li', role: 'OpenBMB', avatar: 'img/team/李奕杉.jpg' },
        { name: 'Yunsong Liao', role: 'OpenBMB', avatar: 'img/team/廖云松.jpg' },
        { name: 'Mengru Ma', role: 'OpenBMB', avatar: 'img/team/马梦茹.jpg' },
      ],
      [
        { name: 'Sen Mei', role: 'TsinghuaNLP', avatar: 'img/team/梅森.jpg' },
        { name: 'Haidong Xin', role: 'TsinghuaNLP', avatar: 'img/team/辛海东.jpg' },
        { name: 'Daqi Zheng', role: 'OpenBMB', avatar: 'img/team/郑达奇.jpg' },
        { name: 'Yanting Chen', role: 'RUC', avatar: 'img/team/陈燕婷.jpg' },
      ],
    ],
  },
  zh: {
    label: '核心开发者',
    rows: [
      [
        { name: '李明蔚', role: 'OpenBMB', avatar: 'img/team/李明蔚.jpg' },
        { name: '李奕杉', role: 'OpenBMB', avatar: 'img/team/李奕杉.jpg' },
        { name: '廖云松', role: 'OpenBMB', avatar: 'img/team/廖云松.jpg' },
        { name: '马梦茹', role: 'OpenBMB', avatar: 'img/team/马梦茹.jpg' },
      ],
      [
        { name: '梅森', role: 'TsinghuaNLP', avatar: 'img/team/梅森.jpg' },
        { name: '辛海东', role: 'TsinghuaNLP', avatar: 'img/team/辛海东.jpg' },
        { name: '郑达奇', role: 'OpenBMB', avatar: 'img/team/郑达奇.jpg' },
        { name: '陈燕婷', role: 'RUC', avatar: 'img/team/陈燕婷.jpg' },
      ],
    ],
  },
};

const COMMUNITY = {
  en: {
    title: 'Join the Community',
    desc: 'Talk to the team, share ideas, report bugs, or just hang out.',
    cards: [
      { icon: 'img/community/discord.svg', name: 'Discord', desc: 'Scan the QR code to join our Discord community.', qr: 'img/community/qr-discord.png' },
      { icon: 'img/community/feishu.svg', name: 'Feishu', desc: 'Scan the QR code to join our Feishu group.', qr: 'img/community/qr-feishu.png' },
      { icon: 'img/community/wechat.svg', name: 'WeChat', desc: 'Scan the QR code to join our WeChat community.', qr: 'img/community/qr-wechat.png' },
    ],
  },
  zh: {
    title: '加入社区',
    desc: '与核心团队交流、分享想法、反馈问题，或仅仅来逛逛。',
    cards: [
      { icon: 'img/community/discord.svg', name: 'Discord', desc: '扫码加入 Discord 英文社区。', qr: 'img/community/qr-discord.png' },
      { icon: 'img/community/feishu.svg', name: '飞书', desc: '扫码加入飞书社区群。', qr: 'img/community/qr-feishu.png' },
      { icon: 'img/community/wechat.svg', name: '微信', desc: '扫码加入微信用户群。', qr: 'img/community/qr-wechat.png' },
    ],
  },
};

const CONTRIBUTE = {
  en: {
    title: 'Contribute',
    desc: 'PilotDeck is open-source. Help us build the future of agent productivity.',
    cards: [
      { icon: '🐛', name: 'GitHub Issues', desc: 'Report bugs, request features, or start a discussion.', cta: 'Open an Issue', href: 'https://github.com/OpenBMB/PilotDeck/issues' },
      { icon: '🔀', name: 'Pull Requests', desc: 'Contribute code, docs, or examples directly.', cta: 'Submit a PR', href: 'https://github.com/OpenBMB/PilotDeck/pulls' },
      { icon: '📖', name: 'Contributing Guide', desc: 'Learn how to set up your dev environment and contribute.', cta: 'Read the Guide', href: 'https://github.com/OpenBMB/PilotDeck/blob/main/CONTRIBUTING.md' },
    ],
  },
  zh: {
    title: '参与贡献',
    desc: 'PilotDeck 是开源项目，欢迎一起构建智能体生产力的未来。',
    cards: [
      { icon: '🐛', name: 'GitHub Issues', desc: '提交 Bug、反馈需求、发起讨论。', cta: '提交 Issue', href: 'https://github.com/OpenBMB/PilotDeck/issues' },
      { icon: '🔀', name: 'Pull Requests', desc: '贡献代码、文档或示例。', cta: '提交 PR', href: 'https://github.com/OpenBMB/PilotDeck/pulls' },
      { icon: '📖', name: '贡献指南', desc: '了解如何搭建开发环境、参与项目贡献。', cta: '阅读指南', href: 'https://github.com/OpenBMB/PilotDeck/blob/main/CONTRIBUTING.md' },
    ],
  },
};


function PlaceholderAvatar() {
  return (
    <div className={styles.avatarPlaceholder}>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    </div>
  );
}

function MemberCard({ member }) {
  return (
    <div className={styles.memberCard}>
      <div className={styles.avatarWrapper}>
        {member.avatar ? (
          <img src={useBaseUrl(member.avatar)} alt={member.name} className={styles.avatar} />
        ) : (
          <PlaceholderAvatar />
        )}
      </div>
      <div className={styles.memberInfo}>
        <h4 className={styles.memberName}>{member.name}</h4>
        <span className={styles.memberRole}>{member.role}</span>
      </div>
    </div>
  );
}

export default function Team() {
  const isZh = useIsZh();
  const founder = isZh ? FOUNDER.zh : FOUNDER.en;
  const coreTeam = isZh ? CORE_TEAM.zh : CORE_TEAM.en;
  const community = isZh ? COMMUNITY.zh : COMMUNITY.en;
  const contribute = isZh ? CONTRIBUTE.zh : CONTRIBUTE.en;


  return (
    <Layout
      title={isZh ? '团队' : 'Team'}
      description={isZh ? '开发团队与社区' : 'PilotDeck team and community'}
    >
      <main className={connectStyles.connectPage}>
        {/* ── Team Members ── */}
        <section className={connectStyles.section}>
          <div className={connectStyles.sectionHeader}>
            <h2 className={connectStyles.sectionTitle}>{isZh ? '开发团队' : 'Team Members'}</h2>
            <p className={connectStyles.sectionDesc} style={{ maxWidth: 'none', whiteSpace: 'nowrap' }}>
              {isZh
                ? 'PilotDeck 由清华大学自然语言处理实验室 (THUNLP)、OpenBMB 与人民大学联合开发。'
                : 'PilotDeck is jointly developed by THUNLP, OpenBMB, and RUC.'}
            </p>
          </div>

          <div className={styles.founderGroup}>
            <div className={styles.groupLabel}>{founder.label}</div>
            <div className={styles.memberGrid}>
              {founder.members.map((m, i) => <MemberCard key={i} member={m} />)}
            </div>
          </div>

          <div className={styles.coreGroup}>
            <div className={styles.groupLabel}>{coreTeam.label}</div>
            {coreTeam.rows.map((row, ri) => (
              <div key={ri} className={styles.coreGrid} style={ri > 0 ? { marginTop: 40 } : undefined}>
                {row.map((m, mi) => <MemberCard key={mi} member={m} />)}
              </div>
            ))}
          </div>
        </section>
        <section id="community" className={connectStyles.section}>
          <div className={connectStyles.sectionHeader}>
            <h2 className={connectStyles.sectionTitle}>{community.title}</h2>
            <p className={connectStyles.sectionDesc}>{community.desc}</p>
          </div>
          <div className={connectStyles.cardGrid}>
            {community.cards.map((card, idx) => (
              <div key={idx} className={connectStyles.card}>
                <img src={useBaseUrl(card.icon)} alt={card.name} className={connectStyles.cardIcon} />
                <h3 className={connectStyles.cardName}>{card.name}</h3>
                <p className={connectStyles.cardDesc}>{card.desc}</p>
                <div className={connectStyles.qrWrapper}>
                  <img src={useBaseUrl(card.qr)} alt={`${card.name} QR`} className={connectStyles.qrCode} />
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="contribute" className={connectStyles.section}>
          <div className={connectStyles.sectionHeader}>
            <h2 className={connectStyles.sectionTitle}>{contribute.title}</h2>
            <p className={connectStyles.sectionDesc}>{contribute.desc}</p>
          </div>
          <div className={connectStyles.cardGrid}>
            {contribute.cards.map((card, idx) => (
              <div key={idx} className={connectStyles.card}>
                <span className={connectStyles.cardEmoji}>{card.icon}</span>
                <h3 className={connectStyles.cardName}>{card.name}</h3>
                <p className={connectStyles.cardDesc}>{card.desc}</p>
                <a className={connectStyles.cardBtn} href={card.href} target="_blank" rel="noopener noreferrer">
                  {card.cta}
                </a>
              </div>
            ))}
          </div>
        </section>

      </main>
    </Layout>
  );
}
