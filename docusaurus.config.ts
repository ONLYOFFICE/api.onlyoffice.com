import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import type * as Plugin from "@docusaurus/types/src/plugin";
import type * as OpenApiPlugin from "docusaurus-plugin-openapi-docs";

const config: Config = {
  title: 'ONLYOFFICE',
  tagline: 'ONLYOFFICE',
  favicon: 'img/favicon.ico',

  url: 'https://trofim24.github.io',
  baseUrl: '/',

  organizationName: 'trofim24',
  projectName: 'trofim24.github.io',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          id: 'api',
          sidebarPath: './sidebars.ts',
          path: './site',
          routeBasePath: '',

          docItemComponent: '@theme/ApiItem',
          //editUrl:
          //  'https://github.com/trofim24/api.onlyoffice.com.3.0/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      'docusaurus-plugin-openapi-docs',
      {
        id: 'openapi',
        docsPluginId: "api",
        config: {
          workspace: {
            specPath: "openapi/workspace/community-server.json",
            outputDir: "site/openapi/workspace/API Backend/Usage API",
            sidebarOptions: {
              groupPathsBy: "tag",
            },
          } satisfies OpenApiPlugin.Options,
          docspace: {
            specPath: "openapi/docspace/docspace.json",
            outputDir: "site/openapi/docSpace/API Backend/Usage API",
            sidebarOptions: {
              groupPathsBy: "tag",
            },
          } satisfies OpenApiPlugin.Options,
        } satisfies Plugin.PluginOptions,
      },
    ]
  ],

  themeConfig: {
    image: 'img/favicon.png',
    navbar: {
      title: 'ONLYOFFICE',
      logo: {
        alt: 'ONLYOFFICE',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'dropdown',
          label: 'Docspace',
          position: 'left',
          to: 'docspace',
          items: [
            {
              type: 'docSidebar',
              sidebarId: 'docspaceJSSdk',
              label: 'JavaScript SDK',
              docsPluginId: 'api',
            },
            {
              type: 'docSidebar',
              sidebarId: 'docspacePlugins',
              label: 'Plugins SDK',
              docsPluginId: 'api',
            },
            {
              type: 'docSidebar',
              sidebarId: 'docspaceOAuth',
              label: 'OAuth API',
              docsPluginId: 'api',
            },
            {
              type: 'docSidebar',
              sidebarId: 'docspaceApiBackend',
              label: 'API Backend',
              docsPluginId: 'api',
            },
            {
              type: 'docSidebar',
              sidebarId: 'docspaceHosting',
              label: 'For Hosting Providers',
              docsPluginId: 'api',
            },
          ],
        },
        {
          type: 'dropdown',
          label: 'Docs',
          position: 'left',
          to: 'docs',
          items: [
            {
              type: 'docSidebar',
              sidebarId: 'docsDocs',
              label: 'Docs API',
              docsPluginId: 'api',
            },
            {
              type: 'docSidebar',
              sidebarId: 'docsOffice',
              label: 'Office API',
              docsPluginId: 'api',
            },
            {
              type: 'docSidebar',
              sidebarId: 'docsMacros',
              label: 'Plugin and Macros',
              docsPluginId: 'api',
            },
            {
              type: 'docSidebar',
              sidebarId: 'docsBuilder',
              label: 'Document Builder',
              docsPluginId: 'api',
            },
            {
              type: 'docSidebar',
              sidebarId: 'docsDesktop',
              label: 'Desktop Editors',
              docsPluginId: 'api',
            },
          ],
        },
        {
          type: 'dropdown',
          label: 'Workspace',
          position: 'left',
          to: 'workspace',
          items: [
            {
              type: 'docSidebar',
              sidebarId: 'workspaceBackend',
              label: 'API Backend',
              docsPluginId: 'api',
            },
            {
              type: 'docSidebar',
              sidebarId: 'workspaceHosting',
              label: 'For Hosting Providers',
              docsPluginId: 'api',
            },
          ],
        },
        {
          href: 'https://github.com/ONLYOFFICE',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Get Information',
          items: [
            {
              label: 'Blog for developers',
              href: 'https://www.onlyoffice.com/blog/category/for-developers?from=api',
            },
            {
              label: 'For contributors',
              href: 'https://www.onlyoffice.com/contribute.aspx?from=api',
            },
            {
              label: 'Legal notice',
              href: 'https://www.onlyoffice.com/legalterms.aspx?from=api',
            },
            {
              label: 'Legacy version',
              href: 'https://legacy-api.onlyoffice.com/',
            },
          ],
        },
        {
          title: 'Get Help',
          items: [
            {
              label: 'Forum',
              href: 'https://forum.onlyoffice.com/',
            },
            {
              label: 'Code on GitHub',
              href: 'https://github.com/ONLYOFFICE/',
            },
            {
              label: 'Installation guides',
              href: 'https://helpcenter.onlyoffice.com/installation/docs-developer-index.aspx?from=api',
            },
            {
              label: 'Support contact form',
              href: 'https://www.onlyoffice.com/support-contact-form.aspx?from=api',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/onlyoffice',
            },
            {
              label: 'X',
              href: 'https://x.com/only_office',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Ascensio System SIA. All right reserved`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,

  themes: ["docusaurus-theme-openapi-docs"],
};

export default config;
