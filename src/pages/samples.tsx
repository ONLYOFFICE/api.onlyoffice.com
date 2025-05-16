import type {ReactNode} from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import { FeaturePageTemplate } from "@site/src/components/FeaturePageLayout";
import Link from "@docusaurus/Link";
import { SamplesFeatures } from "@site/src/features";

const templateProps: FeaturePageTemplate.Props = {
  title: 'Samples',
  description: (
    <>
      This section provides a set of code samples which demonstrates the use of the ONLYOFFICE APIs
      when working with documents.
    </>
  ),
  links: [],
  linkPrefix: SamplesFeatures.linkPrefix,
  items: [],
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