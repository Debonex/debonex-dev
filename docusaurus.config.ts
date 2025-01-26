import type * as Preset from '@docusaurus/preset-classic';
import type { Config } from '@docusaurus/types';
const { themes } = require('prism-react-renderer');
const lightTheme = themes.github;
const darkTheme = themes.dracula;

const config: Config = {
  title: 'Debonex site',
  tagline: 'Debonex site',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://debonex.dev',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Debonex', // Usually your GitHub org/user name.
  projectName: 'debonex-dev', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],
  presets: [
    [
      'classic',
      {
        docs: false,
        blog: {
          // showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Debonex',
      logo: {
        alt: 'Debonex',
        src: 'img/favicon.svg',
      },
      items: [
        { to: '/posts', label: 'Posts', position: 'left' },
        { to: '/minesweeper', label: 'Minesweeper', position: 'left' },
        {
          href: 'https://github.com/Debonex',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [],
      copyright: `Copyright © ${new Date().getFullYear()} Debonex. Powered by Docusaurus.`,
    },
    prism: {
      theme: lightTheme,
      darkTheme: darkTheme,
      additionalLanguages: ['rust'],
    },
  } satisfies Preset.ThemeConfig,

  plugins: [
    [
      '@docusaurus/plugin-content-blog',
      {
        id: 'posts',
        routeBasePath: 'posts',
        path: './posts',
      },
    ],
  ],
};

export default config;
