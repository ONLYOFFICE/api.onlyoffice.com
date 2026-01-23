import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import type * as Plugin from "@docusaurus/types/src/plugin";
import type * as OpenApiPlugin from "docusaurus-plugin-openapi-docs";

const isDev = process.env.NODE_ENV === 'development';

let keyPath = '';
function sidebarRecursive(item) {
  if (!item.key) {
    item.key = keyPath + item.label;
  }
  
  if (item.type === 'category') {
    const prevPath = keyPath;
    keyPath = (keyPath + item.key) + '.';
    item.items.forEach(sidebarRecursive);
    keyPath = prevPath;
  }
}

const config: Config = {
  title: 'ONLYOFFICE',
  tagline: 'ONLYOFFICE',
  favicon: 'img/favicon.ico',

  url: 'https://api.onlyoffice.com',
  baseUrl: '/',

  trailingSlash: true,

  noIndex: isDev,

  onBrokenLinks: 'throw',

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    }
  },

  customFields: {
    documentServer: isDev ? 'https://api.docs.teamlab.info/' : 'https://api.docs.onlyoffice.com/',
    documentServerSecret: isDev ? 'MYSECRET' : 'NsOb2yUBaI9yme0wbkGAapi',
  },

  future: {
    v4: {
      removeLegacyPostBuildHeadAttribute: true
    },
    experimental_faster: {
      mdxCrossCompilerCache: true,
      lightningCssMinimizer: true,
      ssgWorkerThreads: true,

      swcJsLoader: true,
      swcJsMinimizer: true,
      swcHtmlMinimizer: true,
      rspackBundler: true,
      rspackPersistentCache: true
    }
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh-CN'],
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

          editUrl:
            isDev
              ? 'https://git.onlyoffice.com/ONLYOFFICE/api.onlyoffice.com/src/branch/master'
              : 'https://github.com/ONLYOFFICE/api.onlyoffice.com/tree/master',

          docItemComponent: '@theme/ApiItem',

          async sidebarItemsGenerator({defaultSidebarItemsGenerator, ...args}) {
            const sidebarItems = await defaultSidebarItemsGenerator(args);
            keyPath = args.item.dirName;
            sidebarItems.forEach(sidebarRecursive);
            return sidebarItems;
          },
        },
        theme: {
          customCss: './src/css/custom.css',
        },
        blog: {
          path: 'changelog',
          blogTitle: 'Changelog',
          blogDescription: 'The history of updates and changes to the documentation.',
          postsPerPage: 'ALL',
          blogSidebarTitle: 'Changelog',
          blogSidebarCount: 'ALL',
          routeBasePath: 'changelog',
          showReadingTime: false,
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
          workspaceBackend: {
            specPath: "openapi/workspace/community-server.yaml",
            outputDir: "site/workspace/api-backend/usage-api",
            sidebarOptions: {
              groupPathsBy: "tagGroup",
            },
          } satisfies OpenApiPlugin.Options,
          workspaceHosted: {
            specPath: "openapi/workspace/hosted-solutions.yaml",
            outputDir: "site/workspace/for-hosting-providers/usage-api",
            sidebarOptions: {
              groupPathsBy: "tag",
            },
          } satisfies OpenApiPlugin.Options,
          docspaceBackend: {
            specPath: "openapi/docspace/docspace-backend.yaml",
            outputDir: "site/docspace/api-backend/usage-api",
            sidebarOptions: {
              groupPathsBy: "tagGroup",
            },
          } satisfies OpenApiPlugin.Options,
          docspaceHosted: {
            specPath: "openapi/docspace/asc.apisystem.swagger.yaml",
            outputDir: "site/docspace/for-hosting-providers/usage-api",
            sidebarOptions: {
              groupPathsBy: "tag",
            },
          } satisfies OpenApiPlugin.Options,
        } satisfies Plugin.PluginOptions,
      },
    ],
    [
      '@docusaurus/plugin-google-gtag',
      {
        trackingID: 'GTM-5NW47TX'
      },
    ]
  ],

  themeConfig: {
    image: 'img/favicon.png',
    colorMode: {
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    navbar: {
      logo: {
        alt: 'ONLYOFFICE',
        src: 'img/logo.svg',
        srcDark: 'img/logo-dark.svg',
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
              sidebarId: 'docspaceApiBackend',
                label: 'API Reference',
              docsPluginId: 'api',
            },
            {
              type: 'docSidebar',
              sidebarId: 'docspaceJSSdk',
                label: 'Embed SDK',
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
               sidebarId: 'docspaceMCPServer',
               label: 'MCP Server',
               docsPluginId: 'api',
             },
            {
              type: 'docSidebar',
              sidebarId: 'docspaceHosting',
              label: 'For hosting providers',
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
              label: 'Plugins and macros',
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
          type: 'docSidebar',
          sidebarId: 'samples',
          label: 'Samples',
          docsPluginId: 'api',
        },
        {
          to: 'changelog',
          label: 'Changelog',
          position: 'left'
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
        {
          href: 'https://github.com/ONLYOFFICE',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Get information',
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
          title: 'Get help',
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
      additionalLanguages: ["bash", "php", "csharp", "java", "ruby"],
    },
    algolia: {
      appId: '59O6KESY1Y',
      apiKey: 'b7dbab0357490826b892aeb2aad32810',

      indexName: 'api-onlyoffice',
      contextualSearch: true,

      askAi: 'SWpvi77fTWXN'
    },
    languageTabs: [
      {
        highlight: "bash",
        language: "curl",
        logoClass: "curl",
      },
      {
        highlight: "python",
        language: "python",
        logoClass: "python",
      },
      {
        highlight: "javascript",
        language: "javascript",
        logoClass: "javascript",
      },
      {
        highlight: "php",
        language: "php",
        logoClass: "php",
      },
      {
        highlight: "csharp",
        language: "csharp",
        logoClass: "csharp",
      },
      {
        highlight: "java",
        language: "java",
        logoClass: "java",
        variant: "unirest",
      },
    ],
  } satisfies Preset.ThemeConfig,

  themes: ["docusaurus-theme-openapi-docs"],
};

export default config;
