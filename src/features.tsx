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
  button?: FeaturesGrid.Button
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
          Bring document editing and{" "}
          co-authoring to your web app users, set up, configure, and integrate{" "}
          ONLYOFFICE Docs.
        </>
      ),
      icon: <DocsApiIcon/>,
    },
    {
      title: 'Office API',
      link: 'office-api/get-started/overview',
      description: (
        <>
          Use our JavaScript library to{" "}
          write code for your plugins, macros, builder scripts, etc. This library{" "}
          contains classes and methods for every document type: Text document API,{" "}
          Spreadsheet API, Presentation API, and Form API.
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
          functionality by creating your own plugins/macros. Here you will find{" "}
          the information about their structure, development lifecycle, and examples.
        </>
      ),
      icon: <PluginIcon/>,
    },
    {
      title: 'Document Builder',
      link: 'document-builder/get-started/overview',
      description: (
        <>
          Generate documents easily without{" "}
          running a document editor and integrate Document builder into your DMS,{" "}
          CRM system, etc.
        </>
      ),
      icon: <DocumentBuilderIcon/>,
    },
    {
      title: 'Desktop Editors',
      link: 'desktop-editors/get-started/overview',
      description: (
        <>
          Extend the ONLYOFFICE Desktop{" "}
          Editors functionality by setting up, customizing and integrating them{" "}
          with the document management systems.
        </>
      ),
      icon: <DesktopEditorIcon/>,
    },
  ]
}

export const DocSpaceFeatures: Features = {
  linkPrefix: 'docspace',
  items: [
    {
      title: 'Backend REST API',
      link: 'api-backend/get-started/basic-concepts',
      description: (
        <>
          Integrate ONLYOFFICE DocSpace into{" "}
          your own application and interact with its backend using GET/POST/PUT/DELETE.
        </>
      ),
      icon: <DocSpaceApiIcon/>,
    },
    {
      title: 'JavaScript SDK',
      link: 'javascript-sdk/get-started',
      description: (
        <>
          Connect DocSpace as a frame to{" "}
          your website using api.js. You can embed an entire DocSpace portal, a{" "}
          single room, or a document.
        </>
      ),
      icon: <SdkIcon/>,
    },
    {
      title: 'Plugins SDK',
      link: 'plugins-sdk/get-started',
      description: (
        <>
          Create your own plugins and add{" "}
          them to the DocSpace portal.
        </>
      ),
      icon: <PluginIcon/>,
    },
    {
      title: 'For hosting providers',
      link: 'for-hosting-providers/get-started/authentication',
      description: (
        <>
          Provide the DocSpace portal as a{" "}
          SaaS solution on your own servers using our API methods.
        </>
      ),
      icon: <HostingIcon/>,
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