import SdkIcon from "@site/static/icons/javascript-sdk-icon.svg";
import PluginIcon from "@site/static/icons/plugins-icon.svg";
import DocsApiIcon from "@site/static/icons/docs-api-icon.svg";
import DocSpaceApiIcon from "@site/static/icons/docspace-api-icon.svg";
import HostingIcon from "@site/static/icons/self-hosted-icon.svg";
import { FeaturesGrid } from "@site/src/components/FeaturesGrid";
import DocumentBuilderIcon from "@site/static/icons/document-builder-icon.svg";
import DesktopEditorIcon from "@site/static/icons/desktop-editors-icon.svg";

export type Features = {
  linkPrefix: string
  items: FeaturesGrid.Item[]
};

export const DocsFeatures: Features = {
  linkPrefix: 'docs',
  items: [
    {
      title: 'Docs API',
      link: 'docs-api/Get Started/Basic concepts',
      description: (
        <>
          In this section, you will learn how to bring document editing and{" "}
          co-authoring to your web app users, set up, configure, and integrate{" "}
          ONLYOFFICE Docs.
        </>
      ),
      icon: <DocsApiIcon/>,
    },
    {
      title: 'Office API',
      link: 'office-api/Get Started/overview',
      description: (
        <>
          In this section, you will learn how to use our JavaScript library to{" "}
          write code for your plugins, macros, builder scripts, etc. This library{" "}
          contains classes and methods for every document type: Text document API,{" "}
          Spreadsheet API, Presentation API, and Form API.
        </>
      ),
      icon: <DocSpaceApiIcon/>,
    },
    {
      title: 'Plugin and Macros',
      link: 'plugin-and-macros/Get Started/overview',
      description: (
        <>
          In this section, you will learn how to extend the ONLYOFFICE Docs{" "}
          functionality by creating your own plugins/macros. Here you will find{" "}
          the information about their structure, development lifecycle, and examples.
        </>
      ),
      icon: <PluginIcon/>,
    },
    {
      title: 'Document Builder',
      link: 'document-builder/Get Started/overview',
      description: (
        <>
          In this section, you will learn how to generate documents easily without{" "}
          running a document editor and integrate Document builder into your DMS,{" "}
          CRM system, etc.
        </>
      ),
      icon: <DocumentBuilderIcon/>,
    },
    {
      title: 'Desktop Editors',
      link: 'desktop-editors/Get Started/overview',
      description: (
        <>
          In this section, you will learn how to extend the ONLYOFFICE Desktop{" "}
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
      title: 'JavaScript SDK',
      link: 'javascript-sdk/get-started/basic-concepts',
      description: (
        <>
          In this section, you will learn how to connect DocSpace as a frame to{" "}
          your website using api.js. You can embed an entire DocSpace portal, a{" "}
          single room, or a document.
        </>
      ),
      icon: <SdkIcon/>,
    },
    {
      title: 'Plugins SDK',
      link: 'plugins-sdk/get-started/basic-concepts',
      description: (
        <>
          In this section, you will learn how to create your own plugins and add{" "}
          them to the DocSpace portal.
        </>
      ),
      icon: <PluginIcon/>,
    },
    {
      title: 'OAuth API',
      link: 'oauth-api/get-started/basic-concepts',
      description: (
        <>
          In this section, you will learn how to register a new OAuth application{" "}
          on the DocSpace portal.
        </>
      ),
      icon: <DocsApiIcon/>,
    },
    {
      title: 'API Backend',
      link: 'api-backend/get-started/basic-concepts',
      description: (
        <>
          In this section, you will learn how to integrate ONLYOFFICE DocSpace into{" "}
          your own application and interact with its backend using the DocSpace API{" "}
          Backend which is implemented as REST over HTTP using GET/POST/PUT/DELETE.
        </>
      ),
      icon: <DocSpaceApiIcon/>,
    },
    {
      title: 'For Hosting Providers',
      link: 'for-hosting-providers/get-started/authentication',
      description: (
        <>
          In this section, you will learn how to provide the DocSpace portal as a{" "}
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
      title: 'API Backend',
      link: 'api-backend/get-started/basic-concepts',
      description: (
        <>
          In this section, you will learn how to integrate ONLYOFFICE Workspace{" "}
          into your own application and interact with its backend using the{" "}
          Workspace API Backend which is implemented as REST over HTTP using{" "}
          GET/POST/PUT/DELETE. This solution is provided without editors, you{" "}
          need to install ONLYOFFICE Docs separately.
        </>
      ),
      icon: <DocSpaceApiIcon/>
    },
    {
      title: 'For Hosting Providers',
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