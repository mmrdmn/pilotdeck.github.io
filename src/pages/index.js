import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Layout from '@theme/Layout';
import CodeBlock from '@theme/CodeBlock';
import { useIsZh } from '../i18n';
import styles from './index.module.css';

// ============================================================
// DATA — bilingual EN / ZH content dictionaries
// ============================================================

const HERO = {
  en: {
    versionTag: '0.1 beta',
    title: 'PilotDeck',
    subtitle: 'Task-oriented AI Agent productivity platform — one WorkSpace at a time.',
    desc: 'Open-source agent OS built around the WorkSpace. White-box memory, smart routing, and always-on background execution — turn AI from a chat toy into a real productivity tool.',
    tryDemo: 'Try Live Demo',
    quickStart: 'Quick Start',
    docs: 'Docs',
    github: 'GitHub',
  },
  zh: {
    versionTag: '0.1 公测',
    title: 'PilotDeck',
    subtitle: '以 WorkSpace 为核心的生产力级智能体操作系统',
    desc: '开源 Agent OS，围绕 WorkSpace 重新设计：白盒记忆、智能路由、后台常驻——让 AI 从"对话玩具"变成真正干活的生产力工具。',
    tryDemo: '在线试玩',
    quickStart: '快速开始',
    docs: '教程文档',
    github: 'GitHub',
  },
};

const FEATURES = {
  en: [
    {
      tag: 'WorkSpace',
      title: 'WorkSpace-Level Isolation & Accretion',
      desc: 'Every project gets its own file system, memory store and skill set. Parallel work no longer interferes with itself, retrieval has a bounded scope, and skills accrete naturally as each task grows.',
      image: 'img/feature/workspace.svg',
      cta: 'Learn More',
      ctaTo: '/use-cases',
      extra: { label: 'See Architecture', to: '/research' },
    },
    {
      tag: 'White-box Memory',
      title: 'Traceable, Editable, Reversible',
      desc: 'Memory generation, extraction, storage and retrieval are visible end-to-end. When the AI mis-remembers, you can pinpoint and fix the offending entry. Dream Mode consolidates memory in idle windows with one-click rollback.',
      image: 'img/feature/memory.svg',
      cta: 'Learn More',
      ctaTo: '/use-cases',
    },
    {
      tag: 'Smart Routing',
      title: 'Match Models to Task Difficulty',
      desc: 'Complex calls go to flagship models, simple ones drop to lighter models. Through on-device / cloud co-orchestration and precise matching, token spend shrinks dramatically without sacrificing quality.',
      image: 'img/feature/router.svg',
      cta: 'Learn More',
      ctaTo: '/use-cases',
      extra: { label: 'View Benchmarks', to: '#numbers' },
    },
    {
      tag: 'Always-on',
      title: 'Background Execution, Always Moving',
      desc: 'PilotDeck breaks the "you ask, it answers" loop: after you sign off, the agent keeps discovering candidate tasks, running long-horizon monitors, and lands deliverables as local files with a summary report.',
      image: 'img/feature/alwayson.svg',
      cta: 'Learn More',
      ctaTo: '/use-cases',
    },
  ],
  zh: [
    {
      tag: 'WorkSpace',
      title: '工作舱级隔离与积累',
      desc: '每个项目独立的文件系统、记忆与技能。多项目并行不再互相干扰，检索范围有界，技能随任务自然沉淀——彻底告别全局上下文污染。',
      image: 'img/feature/workspace.svg',
      cta: '了解更多',
      ctaTo: '/use-cases',
      extra: { label: '查看架构', to: '/research' },
    },
    {
      tag: '白盒记忆',
      title: '可溯源、可编辑、可回滚',
      desc: '记忆生成、抽取、存储、检索全链路可见。AI 记错了，你能定位到具体条目并修复；Dream Mode 在空闲窗口整理记忆，并支持一键回滚。',
      image: 'img/feature/memory.svg',
      cta: '了解更多',
      ctaTo: '/use-cases',
    },
    {
      tag: '智能路由',
      title: '任务难度自动匹配模型',
      desc: '复杂调用走旗舰模型，简单调用降档到轻量模型。端云协同精准匹配，Token 开销大幅缩减，质量不打折。',
      image: 'img/feature/router.svg',
      cta: '了解更多',
      ctaTo: '/use-cases',
      extra: { label: '查看实测数据', to: '#numbers' },
    },
    {
      tag: '后台常驻',
      title: '关上电脑，活继续跑',
      desc: '打破"你问我答"的死循环：你下班后，Agent 持续发现可做任务、跑长程监控，把成果以文件形式落到本地，并附上一份摘要。',
      image: 'img/feature/alwayson.svg',
      cta: '了解更多',
      ctaTo: '/use-cases',
    },
  ],
};

const NUMBERS = {
  en: {
    title: 'Real-world Numbers',
    desc: 'The three pillar capabilities have shown clear advantages in production-grade workflows.',
    cards: [
      {
        big: '~70%',
        unit: 'spend savings',
        title: 'Smart Routing · social media ops',
        rows: [
          { label: 'Smart Routing ON  (Opus + Sonnet)', value: '$2.83', mark: 'best' },
          { label: 'Smart Routing OFF (all Opus)', value: '$12.58' },
          { label: 'Monolithic       (single Opus)', value: '$12.20' },
        ],
      },
      {
        big: '1/6',
        unit: 'cost vs frontier',
        title: 'Beats frontier model on 7 hard tasks',
        rows: [
          { label: 'MiniMax-M2.7  single-agent', value: '37.1 · $1.90' },
          { label: 'Sonnet 4.6    single-agent', value: '69.1 · $18.36' },
          { label: 'Sonnet (main) + MiniMax (sub)', value: '70.6 · $3.15', mark: 'best' },
        ],
      },
      {
        big: '5 dim',
        unit: 'white-box wins',
        title: 'Memory: black-box vs PilotDeck',
        rows: [
          { label: 'Visibility', value: '✓ every entry visible' },
          { label: 'Control', value: '✓ edit, delete, pin' },
          { label: 'Traceability', value: '✓ full audit trail' },
          { label: 'Isolation', value: '✓ scoped per WorkSpace' },
          { label: 'Reversible', value: '✓ one-click rollback' },
        ],
      },
    ],
  },
  zh: {
    title: '实战数据',
    desc: '三大支柱能力在生产级工作流中已展现明显优势。',
    cards: [
      {
        big: '~70%',
        unit: '成本下降',
        title: '智能路由 · 社媒运营场景',
        rows: [
          { label: '智能路由 开启 (Opus + Sonnet)', value: '$2.83', mark: 'best' },
          { label: '智能路由 关闭 (全 Opus)', value: '$12.58' },
          { label: '单模型 长 React (Opus)', value: '$12.20' },
        ],
      },
      {
        big: '1/6',
        unit: '成本击败 frontier',
        title: '7 项复杂任务超越单一旗舰模型',
        rows: [
          { label: 'MiniMax-M2.7  单 agent', value: '37.1 · $1.90' },
          { label: 'Sonnet 4.6    单 agent', value: '69.1 · $18.36' },
          { label: 'Sonnet 主 + MiniMax 子', value: '70.6 · $3.15', mark: 'best' },
        ],
      },
      {
        big: '5 维',
        unit: '白盒优势',
        title: '记忆系统：黑盒 vs PilotDeck',
        rows: [
          { label: '可见性', value: '✓ 每条记忆可视' },
          { label: '可控性', value: '✓ 编辑、删除、固定' },
          { label: '可溯源', value: '✓ 全链路审计' },
          { label: '隔离性', value: '✓ 按 WorkSpace 隔离' },
          { label: '可回滚', value: '✓ 一键回滚' },
        ],
      },
    ],
  },
};

const USECASES = {
  en: {
    title: 'Use Cases',
    desc: 'From research reports to AR mini-games — see PilotDeck deliver across creative and engineering workflows.',
    items: [
      {
        tag: 'Knowledge Work',
        quote: 'Survey the Chinese LLM application market and turn it into a formal HTML white paper.',
        title: 'Work Document Generation',
        image: 'img/usecase/document.svg',
      },
      {
        tag: 'Mobile · AR',
        quote: 'Walk me through building an iOS AR mini-game Ball Finder in Vibe Coding mode.',
        title: 'Mini-Game Development',
        image: 'img/usecase/game.svg',
      },
      {
        tag: 'Engineering',
        quote: 'Build a low-code embedding fine-tuning platform from scratch.',
        title: 'AI Engineering Platform',
        image: 'img/usecase/aiplatform.svg',
      },
      {
        tag: 'Media',
        quote: 'Push this English podcast to a global audience in Chinese / Japanese / French / Korean / Spanish / Arabic.',
        title: 'Audio-Video & Social Ops',
        image: 'img/usecase/podcast.svg',
      },
    ],
    seeMore: 'See full workflow →',
  },
  zh: {
    title: '应用场景',
    desc: '从研究白皮书到 AR 小游戏 —— 看 PilotDeck 如何在创意与工程工作流中跑通全链路。',
    items: [
      {
        tag: '知识工作',
        quote: '调研中国 LLM 应用市场，并生成一份正式的 HTML 白皮书。',
        title: '办公文档生成',
        image: 'img/usecase/document.svg',
      },
      {
        tag: '移动 · AR',
        quote: '用 Vibe Coding 模式，带我从零搭一个 iOS AR 小游戏 Ball Finder。',
        title: '小游戏开发',
        image: 'img/usecase/game.svg',
      },
      {
        tag: '工程化',
        quote: '从零搭一个低代码的 Embedding 微调平台。',
        title: 'AI 工程平台搭建',
        image: 'img/usecase/aiplatform.svg',
      },
      {
        tag: '媒体运营',
        quote: '把这期英文播客同步推给中 / 日 / 法 / 韩 / 西 / 阿语全球听众。',
        title: '音视频与社媒运营',
        image: 'img/usecase/podcast.svg',
      },
    ],
    seeMore: '查看完整流程 →',
  },
};

const QUICKSTART = {
  en: {
    title: 'Quick Start',
    desc: 'One-line install on macOS / Linux. Node.js, dependencies and frontend are taken care of.',
    cta: 'Get Started',
    ctaTo: 'https://github.com/Gucc111/PilotDeck#-installation--quick-start',
    uiTitle: 'Visual WorkSpace Cockpit',
    uiDesc: 'Manage every WorkSpace, inspect white-box memory, and watch multi-agent collaboration in a single browser tab.',
    uiCta: 'View Details',
    uiCtaTo: 'http://58.57.119.12:52006/',
  },
  zh: {
    title: '快速开始',
    desc: '一行命令安装（macOS / Linux）。Node.js、依赖、前端一并搞定。',
    cta: '即刻上手',
    ctaTo: 'https://github.com/Gucc111/PilotDeck#-installation--quick-start',
    uiTitle: '可视化 WorkSpace 驾驶舱',
    uiDesc: '在一个浏览器标签里管理所有 WorkSpace、查看白盒记忆、观察多智能体协作。',
    uiCta: '查看详解',
    uiCtaTo: 'http://58.57.119.12:52006/',
  },
};

const COMMUNITY = {
  en: {
    title: 'Join the Community',
    desc: 'Talk to the team, share ideas, report bugs, or just hang out.',
    cards: [
      {
        icon: 'img/community/discord.svg',
        name: 'Discord',
        desc: 'Real-time chat with the core team and other builders.',
        cta: 'Join Discord',
        href: 'https://github.com/Gucc111/PilotDeck#-community',
      },
      {
        icon: 'img/community/feishu.svg',
        name: 'Feishu',
        desc: '飞书社区群 — ideal for Chinese-speaking teams.',
        cta: 'Join Feishu',
        href: 'https://github.com/Gucc111/PilotDeck#-community',
      },
      {
        icon: 'img/community/wechat.svg',
        name: 'WeChat',
        desc: 'Scan to join our WeChat user group.',
        cta: 'Join WeChat',
        href: 'https://github.com/Gucc111/PilotDeck#-community',
      },
    ],
    contactTitle: 'Prefer email?',
    contactDesc: 'For commercial collaboration or enterprise support:',
    contactEmail: 'team@pilotdeck.ai',
  },
  zh: {
    title: '加入社区',
    desc: '与核心团队交流、分享想法、反馈问题，或仅仅来逛逛。',
    cards: [
      {
        icon: 'img/community/discord.svg',
        name: 'Discord',
        desc: '与核心团队、开发者实时交流的英文社区。',
        cta: '加入 Discord',
        href: 'https://github.com/Gucc111/PilotDeck#-community',
      },
      {
        icon: 'img/community/feishu.svg',
        name: '飞书',
        desc: '中文用户首选 —— 飞书社区群。',
        cta: '加入飞书群',
        href: 'https://github.com/Gucc111/PilotDeck#-community',
      },
      {
        icon: 'img/community/wechat.svg',
        name: '微信',
        desc: '扫码加入微信用户群。',
        cta: '加入微信群',
        href: 'https://github.com/Gucc111/PilotDeck#-community',
      },
    ],
    contactTitle: '更喜欢邮件？',
    contactDesc: '商务合作或企业支持，请联系：',
    contactEmail: 'team@pilotdeck.ai',
  },
};

const PARTNERS = {
  en: {
    title: 'Jointly Developed By',
    desc: 'Open-sourced by Tsinghua THUNLP, ModelBest, OpenBMB and AI9Stars.',
    logos: [
      { src: 'img/partner/thunlp.svg',    name: 'THUNLP',    href: 'https://nlp.csai.tsinghua.edu.cn/' },
      { src: 'img/partner/modelbest.svg', name: 'ModelBest', href: 'https://modelbest.cn/' },
      { src: 'img/partner/openbmb.svg',   name: 'OpenBMB',   href: 'https://www.openbmb.cn/' },
      { src: 'img/partner/ai9stars.svg',  name: 'AI9Stars',  href: 'https://github.com/AI9Stars' },
    ],
  },
  zh: {
    title: '联合发起',
    desc: 'PilotDeck 由清华 THUNLP、面壁智能、OpenBMB 与 AI9Stars 联合开发与开源。',
    logos: [
      { src: 'img/partner/thunlp.svg',    name: 'THUNLP',    href: 'https://nlp.csai.tsinghua.edu.cn/' },
      { src: 'img/partner/modelbest.svg', name: 'ModelBest', href: 'https://modelbest.cn/' },
      { src: 'img/partner/openbmb.svg',   name: 'OpenBMB',   href: 'https://www.openbmb.cn/' },
      { src: 'img/partner/ai9stars.svg',  name: 'AI9Stars',  href: 'https://github.com/AI9Stars' },
    ],
  },
};

// ============================================================
// SECTIONS
// ============================================================

function HeroSection() {
  const isZh = useIsZh();
  const t = isZh ? HERO.zh : HERO.en;
  return (
    <header className={styles.heroSection}>
      <div className={styles.heroContent}>
        <div className={styles.heroTextWrapper}>
          <h1 className={styles.heroTitle}>
            {t.title} <span className={styles.heroTitleAccent}>{t.versionTag}</span>
          </h1>
          <p className={styles.heroSubtitle}>{t.subtitle}</p>
          <p className={styles.heroDesc}>{t.desc}</p>

          <div className={styles.heroButtons}>
            <Link className={styles.btnPrimary} to="http://58.57.119.12:52006/">
              <span style={{ marginRight: 6 }}>▶</span> {t.tryDemo}
            </Link>
            <Link className={styles.btnSecondary} to="#quick-start">
              {t.quickStart}
            </Link>
            <Link className={styles.btnSecondary} to="https://github.com/Gucc111/PilotDeck#-installation--quick-start">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: 6 }}>
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
              </svg>
              {t.docs}
            </Link>
            <Link className={styles.btnSecondary} to="https://github.com/Gucc111/PilotDeck">
              <svg viewBox="0 0 16 16" width="18" height="18" fill="currentColor" style={{ marginRight: 8 }}>
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
              </svg>
              {t.github}
            </Link>
          </div>
        </div>
        <div className={styles.heroImage}>
          <img
            src={useBaseUrl('img/home/hero.svg')}
            className={styles.heroImgElement}
            alt="PilotDeck WorkSpace overview"
          />
        </div>
      </div>
    </header>
  );
}

function FeatureCarousel() {
  const isZh = useIsZh();
  const list = isZh ? FEATURES.zh : FEATURES.en;
  const sectionTitle = isZh ? '核心特性' : 'Core Features';
  const sectionDesc = isZh
    ? '四大支柱重塑长程多项目场景下的智能体体验。'
    : 'Four pillars rebuild the agent experience for long-running, multi-project work.';

  const [activeIndex, setActiveIndex] = React.useState(0);
  const [paused, setPaused] = React.useState(false);
  const [slideDirection, setSlideDirection] = React.useState('right');
  const [animKey, setAnimKey] = React.useState(0);

  React.useEffect(() => {
    if (paused) return;
    const interval = setInterval(() => {
      setSlideDirection('right');
      setAnimKey((k) => k + 1);
      setActiveIndex((current) => (current + 1) % list.length);
    }, 5500);
    return () => clearInterval(interval);
  }, [paused, list.length]);

  const goTo = (idx) => {
    setSlideDirection(idx > activeIndex ? 'right' : 'left');
    setAnimKey((k) => k + 1);
    setActiveIndex(idx);
  };
  const goPrev = () => {
    setSlideDirection('left');
    setAnimKey((k) => k + 1);
    setActiveIndex((current) => (current - 1 + list.length) % list.length);
  };
  const goNext = () => {
    setSlideDirection('right');
    setAnimKey((k) => k + 1);
    setActiveIndex((current) => (current + 1) % list.length);
  };

  const cur = list[activeIndex];
  const slideClass = slideDirection === 'right' ? styles.slideInRight : styles.slideInLeft;

  return (
    <section id="features" className={styles.gridSection}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>{sectionTitle}</h2>
        <p className={styles.sectionDesc}>{sectionDesc}</p>
      </div>

      <div
        className={styles.carouselContainer}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className={styles.carouselCard}>
          <div className={styles.carouselImageWrapper}>
            <img
              key={`img-${animKey}`}
              src={useBaseUrl(cur.image)}
              className={clsx(styles.carouselImage, slideClass)}
              alt={cur.title}
            />
          </div>
          <div key={`content-${animKey}`} className={clsx(styles.carouselContent, styles.fadeSlideIn)}>
            <div className={styles.carouselTag}>{cur.tag}</div>
            <h3 className={styles.carouselTitle}>{cur.title}</h3>
            <p className={styles.carouselDesc}>{cur.desc}</p>
            <div className={styles.carouselActions}>
              <Link className={styles.btnFeature} to={cur.ctaTo}>
                {cur.cta}
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </Link>
              {cur.extra && (
                <Link className={styles.btnFeatureOutline} to={cur.extra.to}>
                  {cur.extra.label}
                </Link>
              )}
            </div>
          </div>
        </div>

        <button className={clsx(styles.carouselArrow, styles.arrowLeft)} onClick={goPrev} aria-label="Previous" />
        <button className={clsx(styles.carouselArrow, styles.arrowRight)} onClick={goNext} aria-label="Next" />

        <div className={styles.carouselDots}>
          {list.map((_, idx) => (
            <div
              key={idx}
              className={clsx(styles.dot, idx === activeIndex && styles.active)}
              onClick={() => goTo(idx)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function NumbersSection() {
  const isZh = useIsZh();
  const t = isZh ? NUMBERS.zh : NUMBERS.en;
  return (
    <section id="numbers" className={styles.numbersSection}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>{t.title}</h2>
        <p className={styles.sectionDesc}>{t.desc}</p>
      </div>
      <div className={styles.numbersGrid}>
        {t.cards.map((card, idx) => (
          <div key={idx} className={styles.numberCard}>
            <div className={styles.numberBig}>{card.big}</div>
            <div className={styles.numberUnit}>{card.unit}</div>
            <div className={styles.numberTitle}>{card.title}</div>
            <ul className={styles.numberRows}>
              {card.rows.map((row, i) => (
                <li key={i} className={clsx(styles.numberRow, row.mark === 'best' && styles.numberRowBest)}>
                  <span className={styles.numberRowLabel}>{row.label}</span>
                  <span className={styles.numberRowValue}>{row.value}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

function UseCasesSection() {
  const isZh = useIsZh();
  const t = isZh ? USECASES.zh : USECASES.en;
  return (
    <section id="use-cases" className={styles.useCasesSection}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>{t.title}</h2>
        <p className={styles.sectionDesc}>{t.desc}</p>
      </div>
      <div className={styles.useCasesGrid}>
        {t.items.map((item, idx) => (
          <Link key={idx} to="/use-cases" className={styles.useCaseCard}>
            <div className={styles.useCaseImageWrapper}>
              <img src={useBaseUrl(item.image)} alt={item.title} className={styles.useCaseImage} />
            </div>
            <div className={styles.useCaseBody}>
              <div className={styles.useCaseTag}>{item.tag}</div>
              <h3 className={styles.useCaseTitle}>{item.title}</h3>
              <p className={styles.useCaseQuote}>"{item.quote}"</p>
              <div className={styles.useCaseMore}>{t.seeMore}</div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

function QuickStartSection() {
  const isZh = useIsZh();
  const t = isZh ? QUICKSTART.zh : QUICKSTART.en;

  return (
    <section id="quick-start" className={styles.quickStartSection}>
      <div className={styles.quickStartContainer}>
        <div className={styles.quickStartCode}>
          <CodeBlock language="shell">
{isZh
  ? `# 一行安装 (macOS / Linux)
curl -fsSL https://raw.githubusercontent.com/Gucc111/PilotDeck/main/install.sh | bash

# 启动 PilotDeck
pilotdeck            # 服务监听 http://localhost:3001
pilotdeck status     # 查看运行状态`
  : `# One-line install (macOS / Linux)
curl -fsSL https://raw.githubusercontent.com/Gucc111/PilotDeck/main/install.sh | bash

# Start PilotDeck
pilotdeck            # serves at http://localhost:3001
pilotdeck status     # check runtime status`}
          </CodeBlock>
        </div>
        <div className={styles.quickStartContent}>
          <h2 className={styles.quickStartTitle}>{t.title}</h2>
          <p className={styles.quickStartDesc}>{t.desc}</p>
          <Link className={styles.btnPrimary} to={t.ctaTo}>
            {t.cta}
          </Link>
        </div>
      </div>

      <div className={styles.quickStartContainer} style={{ marginTop: 100 }}>
        <div className={styles.quickStartContent}>
          <h2 className={styles.quickStartTitle}>{t.uiTitle}</h2>
          <p className={styles.quickStartDesc}>{t.uiDesc}</p>
          <Link className={styles.btnSecondary} to={t.uiCtaTo}>
            {t.uiCta}
          </Link>
        </div>
        <div className={styles.quickStartImageWrapper}>
          <img
            src={useBaseUrl('img/home/ui-preview.svg')}
            className={styles.quickStartImage}
            alt="PilotDeck UI preview"
          />
        </div>
      </div>
    </section>
  );
}

function CommunitySection() {
  const isZh = useIsZh();
  const t = isZh ? COMMUNITY.zh : COMMUNITY.en;
  return (
    <section id="community" className={styles.communitySection}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>{t.title}</h2>
        <p className={styles.sectionDesc}>{t.desc}</p>
      </div>
      <div className={styles.communityGrid}>
        {t.cards.map((card, idx) => (
          <div key={idx} className={styles.communityCard}>
            <img src={useBaseUrl(card.icon)} alt={card.name} className={styles.communityIcon} />
            <h3 className={styles.communityName}>{card.name}</h3>
            <p className={styles.communityDesc}>{card.desc}</p>
            <Link className={styles.btnSecondary} to={card.href}>
              {card.cta}
            </Link>
          </div>
        ))}
      </div>
      <div className={styles.contactBar}>
        <span className={styles.contactBarTitle}>{t.contactTitle}</span>
        <span className={styles.contactBarDesc}>{t.contactDesc}</span>
        <a href={`mailto:${t.contactEmail}`} className={styles.contactBarEmail}>
          {t.contactEmail}
        </a>
      </div>
    </section>
  );
}

function PartnersSection() {
  const isZh = useIsZh();
  const t = isZh ? PARTNERS.zh : PARTNERS.en;
  return (
    <section className={styles.partnersSection}>
      <div className={styles.partnersInner}>
        <h3 className={styles.partnersTitle}>{t.title}</h3>
        <p className={styles.partnersDesc}>{t.desc}</p>
        <div className={styles.partnersGrid}>
          {t.logos.map((logo, idx) => (
            <a key={idx} href={logo.href} target="_blank" rel="noopener noreferrer" className={styles.partnerLogoLink}>
              <img src={useBaseUrl(logo.src)} alt={logo.name} className={styles.partnerLogo} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================
// PAGE
// ============================================================

export default function Home() {
  const isZh = useIsZh();
  return (
    <Layout
      title="PilotDeck"
      description={
        isZh
          ? '以 WorkSpace 为核心的生产力级智能体操作系统'
          : 'Task-oriented AI Agent productivity platform — one WorkSpace at a time.'
      }
    >
      <main>
        <HeroSection />
        <FeatureCarousel />
        <NumbersSection />
        <UseCasesSection />
        <QuickStartSection />
        <CommunitySection />
        <PartnersSection />
      </main>
    </Layout>
  );
}
