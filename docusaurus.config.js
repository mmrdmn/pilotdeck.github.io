// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'PilotDeck',
  tagline: 'Task-oriented AI Agent productivity platform — one WorkSpace at a time.',
  favicon: 'img/favicon.svg',

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
        docs: false,
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
          src: 'img/logo.svg',
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
                  { label: 'WorkSpace Isolation', labelZh: 'WorkSpace 隔离', to: '/#features' },
                  { label: 'White-box Memory', labelZh: '白盒记忆', to: '/#features' },
                  { label: 'Smart Routing', labelZh: '智能路由', to: '/#features' },
                  { label: 'Always-on', labelZh: '后台常驻', to: '/#features' },
                ],
              },
              {
                title: 'Proof',
                titleZh: '实证数据',
                items: [
                  { label: 'Real-world Numbers', labelZh: '实战数据', to: '/#numbers' },
                  { label: 'Use Cases', labelZh: '应用场景', to: '/use-cases' },
                ],
              },
              {
                title: 'Try It',
                titleZh: '上手体验',
                items: [
                  { label: 'Live Demo', labelZh: '在线 Demo', href: 'http://58.57.119.12:52006/', target: '_blank' },
                  { label: 'Quick Start', labelZh: '快速开始', to: '/#quick-start' },
                ],
              },
            ],
          },
          {
            type: 'custom-megaMenu',
            position: 'left',
            label: 'Resources',
            labelZh: '资源',
            to: '/research',
            items: [
              {
                title: 'Docs',
                titleZh: '文档',
                items: [
                  { label: 'Tutorial', labelZh: '教程', href: 'https://github.com/Gucc111/PilotDeck#-installation--quick-start', target: '_blank' },
                  { label: 'README', labelZh: '项目说明', href: 'https://github.com/Gucc111/PilotDeck', target: '_blank' },
                ],
              },
              {
                title: 'Updates',
                titleZh: '动态',
                items: [
                  { label: 'Blog', labelZh: '博客', to: '/blog' },
                  { label: 'Research', labelZh: '研究', to: '/research' },
                ],
              },
              {
                title: 'About',
                titleZh: '关于',
                items: [
                  { label: 'Team', labelZh: '团队', to: '/team' },
                  { label: 'Demo', labelZh: '演示', to: '/demo' },
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
                  { label: 'GitHub Issues', labelZh: '提交 Issue', href: 'https://github.com/Gucc111/PilotDeck/issues', target: '_blank' },
                  { label: 'Pull Requests', labelZh: '提交 PR', href: 'https://github.com/Gucc111/PilotDeck/pulls', target: '_blank' },
                ],
              },
            ],
          },
          {
            type: 'custom-githubStar',
            position: 'right',
            repo: 'Gucc111/PilotDeck',
            href: 'https://github.com/Gucc111/PilotDeck',
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
