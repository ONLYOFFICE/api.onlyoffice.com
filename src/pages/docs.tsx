import type {ReactNode} from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import DocsFeatures from '@site/src/components/DocsFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function PageHeader() {
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          Docs
        </Heading>
        <p className="hero__subtitle">
        ONLYOFFICE Docs is a collaborative office suite that includes editors for
        text documents, spreadsheets, presentations, fillable forms, and PDFs.
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
        <DocsFeatures />
      </main>
    </Layout>
  );
}
