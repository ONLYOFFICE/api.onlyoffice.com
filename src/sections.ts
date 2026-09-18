/**
 * The documentation's sections, one entry per navbar item, in navbar order.
 *
 * A section is named and described once, here. `src/features.tsx` turns these into the
 * cards on the landing pages, and `docusaurus.config.ts` hands them to the llms-txt
 * plugin as the sections of its index — the two used to hold their own copy of every
 * description, and had already drifted apart.
 *
 * `docusaurus.config.ts` is loaded by jiti, in plain Node, without webpack: keep this
 * module plain TypeScript. An icon, a stylesheet or an `@site` import here would break
 * the config, and with it the whole build — the icons live in `src/features.tsx`, which
 * only the browser bundle loads.
 */

export type Section<Id extends string = string> = {
  /** Stable key, used to attach the card icon. */
  readonly id: Id;
  /** Its heading on the card, and its name in the llms.txt index. */
  readonly name: string;
  /** Its one-line summary, printed in both places. */
  readonly description: string;
  /** The page the card links to, relative to the group's `linkPrefix`. */
  readonly link: string;
  /** The sidebar its pages live in, which the llms.txt index reads them from. */
  readonly sidebar: string;
};

export type SectionGroup<Id extends string = string> = {
  /** The route the group's pages share, which the cards prepend to each `link`. */
  readonly linkPrefix: string;
  /** Heads the H2 the group's sections are listed under in the root llms.txt. */
  readonly group: string;
  readonly items: readonly Section<Id>[];
};

export const docsSections = {
  linkPrefix: 'docs',
  group: 'ONLYOFFICE Docs',
  items: [
    {
      id: 'docs-api',
      name: 'Docs API',
      link: 'docs-api/get-started/basic-concepts',
      sidebar: 'docsDocs',
      description:
        'Integrate and configure ONLYOFFICE Docs into your web app to enable document editing, co-authoring, and sharing for your users.',
    },
    {
      id: 'office-api',
      name: 'Office API',
      link: 'office-api/get-started/overview',
      sidebar: 'docsOffice',
      description:
        'Use our JavaScript library to build plugins, macros, and scripts across all document types: documents, spreadsheets, presentations, and forms.',
    },
    {
      id: 'plugins',
      name: 'Plugins',
      link: 'plugins/get-started/overview',
      sidebar: 'docsPlugins',
      description:
        'Build interactive tools with HTML, CSS, and JavaScript that embed native-feeling features directly into the editors.',
    },
    {
      id: 'macros',
      name: 'Macros',
      link: 'macros/get-started/overview',
      sidebar: 'docsMacros',
      description:
        'Write lightweight JavaScript scripts that run directly inside documents to automate repetitive tasks.',
    },
    {
      id: 'ai',
      name: 'AI',
      link: 'ai/get-started/overview',
      sidebar: 'docsAI',
      description:
        'Build AI-powered editor extensions that combine the plugin framework with an AI provider integration.',
    },
    {
      id: 'document-builder',
      name: 'Document Builder',
      link: 'document-builder/get-started/overview',
      sidebar: 'docsBuilder',
      description:
        'Add document generation, editing, and conversion to your application: DOCX, XLSX, PPTX, and PDF via the CLI, Python, Java, .NET, or C++.',
    },
    {
      id: 'desktop-editors',
      name: 'Desktop Editors',
      link: 'desktop-editors/get-started/overview',
      sidebar: 'docsDesktop',
      description:
        'Extend and customize ONLYOFFICE Desktop Editors by integrating with document management systems.',
    },
  ],
} as const satisfies SectionGroup;

export const docspaceSections = {
  linkPrefix: 'docspace',
  group: 'ONLYOFFICE DocSpace',
  items: [
    {
      id: 'docspace-api',
      name: 'API Reference',
      link: 'api-backend/get-started/basic-concepts',
      sidebar: 'docspaceApiBackend',
      description:
        'Integrate ONLYOFFICE DocSpace into your application to interact with its REST API using GET, POST, PUT, and DELETE methods.',
    },
    {
      id: 'embed-sdk',
      name: 'Embed SDK',
      link: 'javascript-sdk/get-started',
      sidebar: 'docspaceJSSdk',
      description:
        'Embed DocSpace in your web app: the full workspace, a room, a document editor or viewer, or a file picker.',
    },
    {
      id: 'plugins-sdk',
      name: 'Plugins SDK',
      link: 'plugins-sdk/get-started',
      sidebar: 'docspacePlugins',
      description:
        'Extend the DocSpace portal with your own plugins: context menu items, main button actions, or third-party services.',
    },
    {
      id: 'mcp-server',
      name: 'MCP Server',
      link: 'mcp-server/getting-started',
      sidebar: 'docspaceMCPServer',
      description:
        'Connect AI tools directly to ONLYOFFICE DocSpace to execute actions through natural language interactions.',
    },
  ],
} as const satisfies SectionGroup;

/** Deprecated and absent from the navbar: these keep their cards, but no llms.txt entry. */
export const workspaceSections = {
  linkPrefix: 'workspace',
  group: 'ONLYOFFICE Workspace',
  items: [
    {
      id: 'workspace-api',
      name: 'Backend REST API',
      link: 'api-backend/get-started/basic-concepts',
      sidebar: 'workspaceBackend',
      description:
        'In this section, you will learn how to integrate ONLYOFFICE Workspace into your own application and interact with its backend using GET/POST/PUT/DELETE. This solution is provided without editors, you need to install ONLYOFFICE Docs separately.',
    },
    {
      id: 'workspace-hosting',
      name: 'For hosting providers',
      link: 'for-hosting-providers/get-started/authentication',
      sidebar: 'workspaceHosting',
      description:
        'In this section, you will learn how to provide the Workspace portal as a SaaS solution on your own servers using our API methods.',
    },
  ],
} as const satisfies SectionGroup;

/** Every section's id: what an icon map has to cover, and a new section will not compile without. */
export type SectionId =
  | (typeof docsSections.items)[number]['id']
  | (typeof docspaceSections.items)[number]['id']
  | (typeof workspaceSections.items)[number]['id'];
