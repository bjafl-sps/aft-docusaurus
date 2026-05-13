import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "AFT Håndbok",
  tagline: "Intern faglig håndbok for jobbkonsulenter hos Sandnes Pro-Service",
  favicon: "img/favicon.svg",

  future: {
    v4: true,
  },

  url: "https://your-docusaurus-site.example.com",
  baseUrl: "/",

  organizationName: "nav",
  projectName: "aft-docusaurus",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "nb",
    locales: ["nb"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          exclude: ["**/superpowers/**", "**/_*/*"],
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: "img/docusaurus-social-card.jpg",
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: "AFT Håndbok",
      logo: {
        alt: "SPS logo",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "mainSidebar",
          position: "left",
          label: "Håndbok",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Håndbok",
          items: [
            { label: "Hva er AFT?", to: "/docs/intro" },
            { label: "Kom i gang", to: "/docs/kom-i-gang" },
            { label: "Tiltaksløpet", to: "/docs/tiltakslopet" },
          ],
        },
        {
          title: "Fagstoff",
          items: [
            { label: "Metodikk", to: "/docs/metodikk/supported-employment" },
            { label: "Samarbeid", to: "/docs/samarbeid/nav-samarbeid" },
            { label: "Regelverk", to: "/docs/regelverk/kravspesifikasjonen" },
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
