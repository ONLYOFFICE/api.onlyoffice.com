import type {ReactNode} from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures, { HomepageFeaturesProps } from '@site/src/components/HomepageFeatures';
import HomepageSamples, { HomepageSamplesProps } from '@site/src/components/HomepageSamples';
import Heading from '@theme/Heading';
import { DocsFeatures } from "@site/src/features";
import { DocSpaceFeatures } from "@site/src/features";
import { Samples } from "@site/src/homepageItems";

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          Welcome to {siteConfig.title} API
        </Heading>
        <Heading as="h2" className={styles.subtitle}>
          Developer Documentation
        </Heading>
      </div>
    </header>
  );
}

const templateProps: HomepageFeaturesProps.Props = {
  featureGroups: [
    {
      heading: 'DocSpace',
      linkPrefix: DocSpaceFeatures.linkPrefix,
      items: DocSpaceFeatures.items,
    },
    {
      heading: 'Docs',
      linkPrefix: DocsFeatures.linkPrefix,
      items: DocsFeatures.items,
    }
  ],
};

const samplesProps: HomepageSamplesProps.Props = {
  samplesGroups: [
    {
      items: Samples.items,
    },
  ],
};

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} API`}
      description="Learn how to integrate ONLYOFFICE Docs and DocSpace into your solution, configure and customize them — with code samples and detailed guides.">
      <HomepageHeader />
      <main>
        <HomepageFeatures {...templateProps}/>
        <HomepageSamples {...samplesProps}/>
      </main>
    </Layout>
  );
}
