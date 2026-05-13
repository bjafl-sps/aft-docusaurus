import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'AFT Fagdokumentasjon',
  tagline: 'Faglig grunnlag for Arbeidsforberedende trening',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://your-docusaurus-site.example.com',
  baseUrl: '/',

  organizationName: 'nav',
  projectName: 'aft-docusaurus',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'nb',
    locales: ['nb'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'AFT Fagdokumentasjon',
      logo: {
        alt: 'NAV logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'mainSidebar',
          position: 'left',
          label: 'Dokumentasjon',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Dokumentasjon',
          items: [
            {label: 'Hva er AFT?', to: '/docs/intro'},
            {label: 'Kom i gang', to: '/docs/kom-i-gang'},
            {label: 'Tiltaksløpet', to: '/docs/tiltakslopet'},
          ],
        },
        {
          title: 'Fagområder',
          items: [
            {label: 'Metodikk', to: '/docs/metodikk/styrkebasert'},
            {label: 'Samarbeid', to: '/docs/samarbeid/nav-samarbeid'},
            {label: 'Fordypning', to: '/docs/fordypning/psykisk-helse'},
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} Sandnes Pro-Service`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
