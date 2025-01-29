import type {ReactNode} from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import DocSpaceFeatures from '@site/src/components/DocSpaceFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function PageHeader() {
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          DocSpace
        </Heading>
        <p className="hero__subtitle">
          ONLYOFFICE DocSpace is a collaborative cloud platform that allows users to store, manage, edit,
          and collaborate on documents, spreadsheets, presentations, and forms in customizable rooms.
        </p>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} API`}
      description="Description will go into a meta tag in <head />">
      <PageHeader />
      <main>
        <DocSpaceFeatures />
      </main>
    </Layout>
  );
}
