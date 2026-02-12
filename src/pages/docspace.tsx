import type {ReactNode} from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import { FeaturePageTemplate } from "@site/src/components/FeaturePageLayout";
import Link from "@docusaurus/Link";
import { DocSpaceFeatures } from "@site/src/features";

const templateProps: FeaturePageTemplate.Props = {
  title: 'DocSpace',
  description: (
    <>
      ONLYOFFICE DocSpace is a collaborative cloud platform that allows users to store, manage, edit,
      and collaborate on documents, spreadsheets, presentations, and forms in customizable rooms.
    </>
  ),
  links: [
    <>If you have any questions about ONLYOFFICE DocSpace, try the <Link href='/docspace/api-backend/more-information/faq'>FAQ</Link> section first.</>,
    <>You can request a feature or report a bug by posting an issue on <a href='https://github.com/ONLYOFFICE/DocSpace/issues'>GitHub</a>.</>,
    <>You can also ask our developers on <a href='https://forum.onlyoffice.com/c/docspace/46'>ONLYOFFICE forum</a> (registration required).</>,
  ],
  linkPrefix: DocSpaceFeatures.linkPrefix,
  items: DocSpaceFeatures.items,
};

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} DocSpace API`}
      description="Detailed guides on how to integrate ONLYOFFICE DocSpace into your solution, create and manage secure document rooms, control access, and streamline collaboration.">
      <FeaturePageTemplate {...templateProps}/>
    </Layout>
  );
}
