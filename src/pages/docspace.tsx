import type {ReactNode} from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import { FeaturePageTemplate } from "@site/src/components/FeaturePageLayout";
import SdkIcon from "@site/static/icons/javascript-sdk-icon.svg";
import PluginIcon from "@site/static/icons/plugins-icon.svg";
import DocsApiIcon from "@site/static/icons/docs-api-icon.svg";
import DocSpaceApiIcon from "@site/static/icons/docspace-api-icon.svg";
import HostingIcon from "@site/static/icons/self-hosted-icon.svg";
import Link from "@docusaurus/Link";

const templateProps: FeaturePageTemplate.Props = {
  title: 'DocSpace',
  description: (
    <>
      ONLYOFFICE DocSpace is a collaborative cloud platform that allows users to store, manage, edit,
      and collaborate on documents, spreadsheets, presentations, and forms in customizable rooms.
    </>
  ),
  links: [
    <li>If you have any questions about ONLYOFFICE DocSpace, try the <Link href='docspace/API Backend/More Information/FAQ'>FAQ</Link> section first.</li>,
    <li>You can request a feature or report a bug by posting an issue on <a href='https://github.com/ONLYOFFICE/DocSpace/issues'>GitHub</a>.</li>,
    <li>You can also ask our developers on <a href='https://forum.onlyoffice.com/c/docspace/46'>ONLYOFFICE forum</a> (registration required).</li>,
  ],
  linkPrefix: 'docspace',
  items: [
    {
      title: 'JavaScript SDK',
      link: 'Get Started/Basic concepts',
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
      link: 'Get Started/Basic concepts',
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
      link: 'Get Started/Basic concepts',
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
      link: 'Get Started/Basic concepts',
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
      link: 'Get Started/Authentication',
      description: (
        <>
          In this section, you will learn how to provide the DocSpace portal as a{" "}
          SaaS solution on your own servers using our API methods.
        </>
      ),
      icon: <HostingIcon/>,
    },
  ]
};

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} API`}
      description="Description will go into a meta tag in <head />">
      <FeaturePageTemplate {...templateProps}/>
    </Layout>
  );
}
