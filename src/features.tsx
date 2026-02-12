import SdkIcon from "@site/static/icons/javascript-sdk-icon.svg";
import PluginIcon from "@site/static/icons/plugins-icon.svg";
import DocsApiIcon from "@site/static/icons/docs-api-icon.svg";
import DocSpaceApiIcon from "@site/static/icons/docspace-api-icon.svg";
import OfficeApiIcon from "@site/static/icons/office-api-icon.svg";
import HostingIcon from "@site/static/icons/self-hosted-icon.svg";
import { FeaturesGrid } from "@site/src/components/FeaturesGrid";
import DocumentBuilderIcon from "@site/static/icons/document-builder-icon.svg";
import DesktopEditorIcon from "@site/static/icons/desktop-editors-icon.svg";

export type Features = {
  linkPrefix: string
  items: FeaturesGrid.Item[]
  button: FeaturesGrid.Button
};

export const DocsFeatures: Features = {
  linkPrefix: 'docs',
  button: {
    text: "Try Docs Playground",
    href: "/docs/docs-api/get-started/playground/",
  },
  items: [
    {
      title: 'Docs API',
      link: 'docs-api/get-started/basic-concepts',
      description: (
        <>
          Integrate and configure ONLYOFFICE Docs into your web app to enable document editing, co-authoring, and sharing for your users.
        </>
      ),
      icon: <DocsApiIcon/>,
    },
    {
      title: 'Office API',
      link: 'office-api/get-started/overview',
      description: (
        <>
          Use our JavaScript library to build plugins, macros, and scripts across all document types: text documents, spreadsheets, presentations, and forms.
        </>
      ),
      icon: <OfficeApiIcon/>,
    },
    {
      title: 'Plugins and macros',
      link: 'plugin-and-macros/get-started',
      description: (
        <>
          Extend the ONLYOFFICE Docs{" "}
          functionality by creating your own plugins/macros.
        </>
      ),
      icon: <PluginIcon/>,
    },
    {
      title: 'Document Builder',
      link: 'document-builder/get-started/overview',
      description: (
        <>
          Integrate Document Builder into your DMS or CRM to generate documents directly within your workflow—no separate document editor required.
        </>
      ),
      icon: <DocumentBuilderIcon/>,
    },
    {
      title: 'Desktop Editors',
      link: 'desktop-editors/get-started/overview',
      description: (
        <>
          Extend and customize ONLYOFFICE Desktop Editors by integrating with document management systems.
        </>
      ),
      icon: <DesktopEditorIcon/>,
    },
  ]
}

export const DocSpaceFeatures: Features = {
  linkPrefix: 'docspace',
  button: {
    text: "Try DocSpace Cloud",
    href: "https://www.onlyoffice.com/docspace-registration",
  },
  items: [
    {
      title: 'API Reference',
      link: 'api-backend/get-started/basic-concepts',
      description: (
        <>
          Integrate ONLYOFFICE DocSpace into your application to interact with its REST API using GET, POST, PUT, and DELETE methods.
        </>
      ),
      icon: <DocSpaceApiIcon/>,
    },
    {
      title: 'Embed SDK',
      link: 'javascript-sdk/get-started',
      description: (
        <>
          Embed DocSpace into your website as a frame using JavaScript APIs—choose to display an entire portal, a specific room, or a single document.
        </>
      ),
      icon: <SdkIcon/>,
    },
    {
      title: 'Plugins SDK',
      link: 'plugins-sdk/get-started',
      description: (
        <>
          Create your plugins and add them
          to the DocSpace portal.
        </>
      ),
      icon: <PluginIcon/>,
    },
  ]
}

export const WorkspaceFeatures: Features = {
  linkPrefix: 'workspace',
  items: [
    {
      title: 'Backend REST API',
      link: 'api-backend/get-started/basic-concepts',
      description: (
        <>
          In this section, you will learn how to integrate ONLYOFFICE Workspace{" "}
          into your own application and interact with its backend using{" "}
          GET/POST/PUT/DELETE. This solution is provided without editors, you{" "}
          need to install ONLYOFFICE Docs separately.
        </>
      ),
      icon: <DocSpaceApiIcon/>
    },
    {
      title: 'For hosting providers',
      link: 'for-hosting-providers/get-started/authentication',
      description: (
        <>
          In this section, you will learn how to provide the Workspace portal as a{" "}
          SaaS solution on your own servers using our API methods.
        </>
      ),
      icon: <HostingIcon/>
    },
  ]
}

export const SamplesFeatures: Features = {
  linkPrefix: 'samples',
  items:[]
}