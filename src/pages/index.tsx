import type {ReactNode} from 'react';
import Layout from '@theme/Layout';
import HomepageFeatures, { HomepageFeaturesProps } from '@site/src/components/HomepageFeatures';
import HomepageSamples, { HomepageSamplesProps } from '@site/src/components/HomepageSamples';
import HomepageBlog, { HomepageBlogProps } from '@site/src/components/HomepageBlog';
import Heading from '@theme/Heading';
import { DocsFeatures } from "@site/src/features";
import { DocSpaceFeatures } from "@site/src/features";
import { Samples, BlogArticles } from "@site/src/homepageItems";

import styles from './index.module.css';

function HomepageHeader() {
  return (
    <header className={styles.heroBanner}>
      <div className={styles.heroInner}>
        <Heading as="h1" className={`hero__title ${styles.title}`}>
          Welcome to ONLYOFFICE API
        </Heading>
        <p className={styles.subtitle}>
          Developer Documentation
        </p>
      </div>
    </header>
  );
}

const templateProps: HomepageFeaturesProps.Props = {
  featureGroups: [
    {
      heading: 'Docs',
      linkPrefix: DocsFeatures.linkPrefix,
      items: DocsFeatures.items,
      button: DocsFeatures.button,
    },
    {
      heading: 'DocSpace',
      linkPrefix: DocSpaceFeatures.linkPrefix,
      items: DocSpaceFeatures.items,
      button: DocSpaceFeatures.button,
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

const blogProps: HomepageBlogProps.Props = {
  blogGroups: [
    {
      items: BlogArticles.items,
    },
  ],
};

export default function Home(): ReactNode {
  return (
    <Layout
      title="API Documentation"
      description="Learn how to integrate ONLYOFFICE Docs and DocSpace into your solution, configure and customize them — with code samples and detailed guides."
      wrapperClassName={styles.homepageWrapper}>
      <HomepageHeader />
      <main>
        <HomepageFeatures {...templateProps}/>
        <HomepageSamples {...samplesProps}/>
        <HomepageBlog {...blogProps}/>
      </main>
    </Layout>
  );
}
