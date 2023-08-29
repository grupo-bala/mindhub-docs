// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import("@docusaurus/types").Config} */
const config = {
  title: "MindHub",
  tagline: "",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://grupo-bala.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often "/<projectName>/"
  baseUrl: "/mindhub-docs/",

  // GitHub pages deployment config.
  // If you aren"t using GitHub pages, you don"t need these.
  organizationName: "grupo-bala", // Usually your GitHub org/user name.
  projectName: "mindhub-docs", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don"t use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "pt-BR",
    locales: ["pt-BR"],
  },

  presets: [
    [
      "classic",
      /** @type {import("@docusaurus/preset-classic").Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import("@docusaurus/preset-classic").ThemeConfig} */
    ({
      // Replace with your project"s social card
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "MindHub",
        logo: {
          alt: "My Site Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "docsSidebar",
            position: "left",
            label: "Documentação",
          },
          {
            href: "https://github.com/grupo-bala/mindhub-docs",
            label: "GitHub Docs",
            position: "right",
          },
          {
            href: "https://github.com/grupo-bala/mindhub-android",
            label: "GitHub Front End",
            position: "right",
          },
          {
            href: "https://github.com/grupo-bala/mindhub-back",
            label: "GitHub Back End",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Repositórios",
            items: [
              {
                href: "https://github.com/grupo-bala/mindhub-docs",
                label: "GitHub Docs",
              },
              {
                href: "https://github.com/grupo-bala/mindhub-android",
                label: "GitHub Front End",
              },
              {
                href: "https://github.com/grupo-bala/mindhub-back",
                label: "GitHub Back End",
              },
            ],
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
