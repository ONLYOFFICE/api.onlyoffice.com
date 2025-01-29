import type {ReactNode} from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import WorkspaceFeatures from '@site/src/components/WorkspaceFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function PageHeader() {
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          Workspace
        </Heading>
        <p className="hero__subtitle">
            ONLYOFFICE Workspace is a collaborative cloud platform that allows users to manage
            documents, projects, emails, client relations, and timetables in one place.
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
        <WorkspaceFeatures />
      </main>
    </Layout>
  );
}
