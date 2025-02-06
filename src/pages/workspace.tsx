import type {ReactNode} from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import { FeaturePageTemplate } from "@site/src/components/FeaturePageLayout";
import Link from "@docusaurus/Link";
import DocSpaceApiIcon from "@site/static/icons/docspace-api-icon.svg";
import HostingIcon from "@site/static/icons/self-hosted-icon.svg";

const templateProps: FeaturePageTemplate.Props = {
  title: 'Workspace',
  description: (
    <>
      ONLYOFFICE Workspace is a collaborative cloud platform that allows users to manage
      documents, projects, emails, client relations, and timetables in one place.
    </>
  ),
  links: [
    <li>If you have any questions about ONLYOFFICE DocSpace, try the <Link href='workspace/API Backend/More Information/FAQ'>FAQ</Link> section first.</li>,
    <li>You can request a feature or report a bug by posting an issue on <a href='https://github.com/ONLYOFFICE/CommunityServer/issues'>GitHub</a>.</li>,
    <li>You can also ask our developers on <a href='https://forum.onlyoffice.com/c/workspace/33'>ONLYOFFICE forum</a> (registration required).</li>,
  ],
  linkPrefix: 'workspace',
  items: [
    {
      title: 'API Backend',
      link: 'Get Started/Basic concepts',
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
      link: 'Get Started/Authentication',
      description: (
        <>
          In this section, you will learn how to provide the Workspace portal as a{" "}
          SaaS solution on your own servers using our API methods.
        </>
      ),
      icon: <HostingIcon/>
    },
  ]
};

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} API`}
      description="Description will go into a meta tag in <head />"
    >
      <FeaturePageTemplate {...templateProps}/>
    </Layout>
  );
}
