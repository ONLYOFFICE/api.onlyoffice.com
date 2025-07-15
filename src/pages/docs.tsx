import type { ReactNode } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import { FeaturePageTemplate } from "@site/src/components/FeaturePageLayout";
import Link from "@docusaurus/Link";
import { DocsFeatures } from "@site/src/features";

const templateProps: FeaturePageTemplate.Props = {
  title: 'Docs',
  description: (
    <>
      ONLYOFFICE Docs is a collaborative office suite that includes editors for
      text documents, spreadsheets, presentations, fillable forms, and PDFs.
    </>
  ),
  links: [
    <>If you have any questions about ONLYOFFICE Docs, try the <Link href='/docs/docs-api/more-information/faq'>FAQ</Link> section first.
    </>,
    <>You can request a feature or report a bug by posting an issue on <a
      href='https://github.com/ONLYOFFICE/documentServer/issues'>GitHub</a>.</>,
    <>You can also ask our developers on <a href='https://forum.onlyoffice.com/c/document-api/39'>ONLYOFFICE forum</a> (registration
      required).</>,
  ],
  linkPrefix: DocsFeatures.linkPrefix,
  items: DocsFeatures.items,
};

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} Docs API`}
      description="Detailed guides on how to integrate ONLYOFFICE Docs into your solution, configure it, and use advanced document editing features."
    >
      <FeaturePageTemplate {...templateProps}/>
    </Layout>
  );
}
