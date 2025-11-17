import type {ReactNode} from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import { DocsFeatures } from "@site/src/features";
import { DocSpaceFeatures } from "@site/src/features";

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

const templateProps: HomepageFeatures.Props = {
  featureGroups: [
    {
      heading: 'DocSpace',
      subheading: 'APIs and tools for managing collaborative rooms and content.',
      linkPrefix: DocSpaceFeatures.linkPrefix,
      items: DocSpaceFeatures.items,
    },
    {
      heading: 'Docs',
      subheading: 'APIs and extensions for editing and managing documents.',
      linkPrefix: DocsFeatures.linkPrefix,
      items: DocsFeatures.items,
    }
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
      </main>
    </Layout>
  );
}
