import type {ReactNode} from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import { FeaturePageTemplate } from "@site/src/components/FeaturePageLayout";
import Link from "@docusaurus/Link";
import { WorkspaceFeatures } from "@site/src/features";

const templateProps: FeaturePageTemplate.Props = {
  title: 'Workspace',
  description: (
    <>
      ONLYOFFICE Workspace is a collaborative cloud platform that allows users to manage
      documents, projects, emails, client relations, and timetables in one place.
    </>
  ),
  links: [
    <>If you have any questions about ONLYOFFICE DocSpace, try the <Link href='/workspace/api-backend/more-information/faq'>FAQ</Link> section first.</>,
    <>You can request a feature or report a bug by posting an issue on <a href='https://github.com/ONLYOFFICE/CommunityServer/issues'>GitHub</a>.</>,
    <>You can also ask our developers on <a href='https://forum.onlyoffice.com/c/workspace/33'>ONLYOFFICE forum</a> (registration required).</>,
  ],
  linkPrefix: WorkspaceFeatures.linkPrefix,
  items: WorkspaceFeatures.items,
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
