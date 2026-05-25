// @ts-check
// Mirror the mintlify docs.json navigation, scoped per language directory.

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docsZh: [
    {
      type: 'category',
      label: '开始使用',
      collapsed: false,
      items: ['introduction', 'quickstart-web', 'quickstart-desktop'],
    },
    {
      type: 'category',
      label: '核心功能',
      collapsed: false,
      items: [
        'features/projects',
        'features/router',
        'features/memory',
        'features/always-on',
        'features/gateway/index',
      ],
    },
    {
      type: 'category',
      label: '架构说明',
      items: ['architecture/overview', 'architecture/configuration'],
    },
    {
      type: 'category',
      label: '参考',
      items: ['reference/cli', 'reference/config-yaml', 'reference/troubleshooting'],
    },
    {
      type: 'category',
      label: '开发指南',
      items: ['development/contributing', 'development/module-guide'],
    },
    {
      type: 'category',
      label: '案例展示',
      collapsed: false,
      items: [
        'showcase/overview',
        'showcase/ppt-whitepaper',
        'showcase/mini-game',
        'showcase/model-training',
        'showcase/podcast-multilingual',
      ],
    },
  ],
  docsEn: [
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: ['en/introduction', 'en/quickstart-web', 'en/quickstart-desktop'],
    },
    {
      type: 'category',
      label: 'Core Features',
      collapsed: false,
      items: [
        'en/features/projects',
        'en/features/router',
        'en/features/memory',
        'en/features/always-on',
        'en/features/gateway/index',
      ],
    },
    {
      type: 'category',
      label: 'Architecture',
      items: ['en/architecture/overview', 'en/architecture/configuration'],
    },
    {
      type: 'category',
      label: 'Reference',
      items: ['en/reference/cli', 'en/reference/config-yaml', 'en/reference/troubleshooting'],
    },
    {
      type: 'category',
      label: 'Development Guide',
      items: ['en/development/contributing', 'en/development/module-guide'],
    },
    {
      type: 'category',
      label: 'Case Showcase',
      collapsed: false,
      items: [
        'en/showcase/overview',
        'en/showcase/ppt-whitepaper',
        'en/showcase/mini-game',
        'en/showcase/model-training',
        'en/showcase/podcast-multilingual',
      ],
    },
  ],
};

export default sidebars;
