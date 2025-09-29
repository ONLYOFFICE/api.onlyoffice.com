import type { ReactNode } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import { FeaturePageTemplate } from "@site/src/components/FeaturePageLayout";
import Link from "@docusaurus/Link";
import { DocsFeatures } from "@site/src/features";
import { DocSpaceFeatures } from "@site/src/features";

const templateProps: FeaturePageTemplate.Props = {
  title: 'Welcome to ONLYOFFICE',
  subtitle: 'Developer Documentation',
  links: [
    <>If you have any questions about ONLYOFFICE Docs, try the <Link href='/docs/docs-api/more-information/faq'>FAQ</Link> section first.</>,
    <>If you have any questions about ONLYOFFICE DocSpace, try the <Link href='/docspace/api-backend/more-information/faq'>FAQ</Link> section first.</>,
    <>You can request a feature or report a bug by posting an issue on 
      <a href='https://github.com/ONLYOFFICE/documentServer/issues'> Docs GitHub</a> or 
      <a href='https://github.com/ONLYOFFICE/DocSpace/issues'> DocSpace GitHub</a>.
    </>,
    <>You can also ask our developers on 
      <a href='https://forum.onlyoffice.com/c/document-api/39'> Docs forum</a> or 
      <a href='https://forum.onlyoffice.com/c/docspace/46'> DocSpace forum</a> (registration required).
    </>,
  ],
  linkPrefix: '',
  featureGroups: [
    {
      heading: 'DocSpace',
      subheading: 'APIs and tools for managing collaborative rooms and content.',
      items: DocSpaceFeatures.items,
    },
    {
      heading: 'Docs',
      subheading: 'APIs and extensions for editing and managing documents.',
      items: DocsFeatures.items,
    }
  ],
};

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} APIs`}
      description="Detailed guides on integrating ONLYOFFICE Docs and DocSpace into your solution, configuring them, and using advanced collaboration features."
    >
      <FeaturePageTemplate {...templateProps}/>
    </Layout>
  );
}
