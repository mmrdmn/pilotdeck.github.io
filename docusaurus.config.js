// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'PilotDeck',
  tagline: 'Task-oriented AI Agent productivity platform — one WorkSpace at a time.',
  favicon: 'img/favicon.png',

  url: 'https://pilotdeck.github.io',
  baseUrl: '/',

  organizationName: 'Gucc111',
  projectName: 'pilotdeck.github.io',

  onBrokenLinks: 'warn',
  onBrokenAnchors: 'ignore',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: 'docs',
          routeBasePath: 'docs',
          sidebarPath: './sidebars.js',
          editUrl: undefined,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      image: 'img/og-card.png',
      navbar: {
        logo: {
          alt: 'PilotDeck Logo',
          src: 'img/logo-dark.png',
        },
        items: [
          {
            type: 'custom-homeLink',
            to: '/',
            label: 'Home',
            labelZh: '首页',
            position: 'left',
          },
          {
            type: 'custom-megaMenu',
            position: 'left',
            label: 'Features',
            labelZh: '产品特性',
            to: '/#features',
            items: [
              {
                title: 'Highlights',
                titleZh: '核心能力',
                items: [
                  { label: 'WorkSpace Isolation', labelZh: 'WorkSpace 隔离', to: '/#feature-workspace' },
                  { label: 'White-box Memory', labelZh: '白盒记忆', to: '/#feature-memory' },
                  { label: 'Smart Routing', labelZh: '智能路由', to: '/#feature-router' },
                  { label: 'Always-on', labelZh: '后台常驻', to: '/#feature-alwayson' },
                ],
              },
            ],
          },
          {
            type: 'custom-megaMenu',
            position: 'left',
            label: 'Docs',
            labelZh: '文档',
            to: '/docs/introduction',
            items: [
              {
                title: 'Getting Started',
                titleZh: '开始使用',
                items: [
                  { label: 'Introduction', labelZh: '项目简介', to: '/docs/introduction' },
                  { label: 'Quick Start (Web)', labelZh: '快速开始 (Web)', to: '/docs/quickstart-web' },
                  { label: 'Quick Start (Desktop)', labelZh: '桌面版安装', to: '/docs/quickstart-desktop' },
                ],
              },
              {
                title: 'Core Features',
                titleZh: '核心功能',
                items: [
                  { label: 'WorkSpace', labelZh: 'WorkSpace 工作舱', to: '/docs/features/projects' },
                  { label: 'Smart Router', labelZh: '智能路由', to: '/docs/features/router' },
                  { label: 'Memory', labelZh: '长期记忆', to: '/docs/features/memory' },
                  { label: 'Always-on', labelZh: '后台常驻', to: '/docs/features/always-on' },
                ],
              },
              {
                title: 'Reference',
                titleZh: '参考',
                items: [
                  { label: 'Architecture', labelZh: '架构说明', to: '/docs/architecture/overview' },
                  { label: 'CLI', labelZh: 'CLI 命令', to: '/docs/reference/cli' },
                  { label: 'English Docs', labelZh: '英文文档', to: '/docs/en/introduction' },
                ],
              },
            ],
          },
          {
            type: 'custom-megaMenu',
            position: 'left',
            label: 'Showcase',
            labelZh: '案例广场',
            to: '/#usecases',
            items: [
              {
                title: 'Featured',
                titleZh: '精选案例',
                items: [
                  { label: 'Open Case Showcase', labelZh: '案例广场首页', href: '/showcase/', target: '_self' },
                  { label: 'Work Documents', labelZh: '工作文档生成', to: '/docs/showcase/ppt-whitepaper' },
                  { label: 'Mini Games', labelZh: '小游戏开发', to: '/docs/showcase/mini-game' },
                ],
              },
              {
                title: 'Engineering',
                titleZh: '工程化',
                items: [
                  { label: 'AI Platform', labelZh: 'AI 工程平台', to: '/docs/showcase/model-training' },
                  { label: 'Podcast i18n', labelZh: '多语种播客', to: '/docs/showcase/podcast-multilingual' },
                ],
              },
            ],
          },
          {
            type: 'custom-megaMenu',
            position: 'left',
            label: 'Community',
            labelZh: '社区',
            to: '/#community',
            items: [
              {
                title: 'Join',
                titleZh: '加入我们',
                items: [
                  { label: 'Discord', labelZh: 'Discord 群组', to: '/#community' },
                  { label: 'Feishu', labelZh: '飞书群', to: '/#community' },
                  { label: 'WeChat', labelZh: '微信群', to: '/#community' },
                ],
              },
              {
                title: 'Contribute',
                titleZh: '参与建设',
                items: [
                  { label: 'GitHub Issues', labelZh: '提交 Issue', href: 'https://github.com/OpenBMB/PilotDeck/issues', target: '_blank' },
                  { label: 'Pull Requests', labelZh: '提交 PR', href: 'https://github.com/OpenBMB/PilotDeck/pulls', target: '_blank' },
                ],
              },
            ],
          },
          {
            type: 'custom-githubStar',
            position: 'right',
            repo: 'OpenBMB/PilotDeck',
            href: 'https://github.com/OpenBMB/PilotDeck',
          },
          {
            type: 'custom-languageSwitcher',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'light',
        copyright: `Copyright © ${new Date().getFullYear()} PilotDeck · Jointly developed by THUNLP, ModelBest, OpenBMB & AI9Stars.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
