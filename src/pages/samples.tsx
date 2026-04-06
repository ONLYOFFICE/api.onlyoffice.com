import { type ReactNode, useState } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import GithubIcon from '@site/static/icons/github-icon.svg';
import FavoriteIcon from '@site/static/icons/favorite-icon.svg';
import DocsApiIcon from '@site/static/icons/docs-api-icon.svg';
import DocSpaceIcon from '@site/static/icons/docspace-icon.svg';
import AiIcon from '@site/static/icons/ai-icon.svg';
import { SamplesGrid } from '@site/src/components/SamplesGrid';
import { Samples } from '@site/src/homepageItems';
import { getDocsSamples, getDocspaceSamples, getAiSamples } from '@site/src/utils/getSamplesFromDir';
import layoutStyles from '@site/src/components/FeaturePageLayout/styles.module.css';
import styles from './samples.module.css';

type Category = {
  id: string;
  label: string;
  subtitle: string;
  icon: ReactNode;
};

const categories: Category[] = [
  { id: 'favorite', label: 'Favorite', subtitle: 'Recommended', icon: <FavoriteIcon /> },
  { id: 'docs', label: 'Docs', subtitle: 'Documents Editors', icon: <DocsApiIcon /> },
  { id: 'docspace', label: 'DocSpace', subtitle: 'Collaborative cloud', icon: <DocSpaceIcon /> },
  { id: 'ai', label: 'AI', subtitle: 'Artificial Intelligence', icon: <AiIcon /> },
];

export default function SamplesPage(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  const [activeCategory, setActiveCategory] = useState('favorite');

  const itemsByCategory: Record<string, SamplesGrid.Item[]> = {
    favorite: Samples.items,
    docs: getDocsSamples('docs'),
    docspace: getDocspaceSamples('docspace'),
    ai: getAiSamples('ai'),
  };

  const items = itemsByCategory[activeCategory] || [];

  return (
    <Layout
      title={`${siteConfig.title} Samples`}
      description="Explore ready-to-use code examples for integrating ONLYOFFICE document editing into your applications across multiple languages and platforms."
    >
      <div className={layoutStyles.container}>
        <div className={layoutStyles.containerInner}>
          <div className={layoutStyles.headerSection}>
            <Heading as="h1" className="hero__title">API integration samples</Heading>
            <p>
              Explore ready-to-use code examples for integrating ONLYOFFICE
              document editing into your applications across multiple languages
              and platforms.
            </p>
          </div>

          <div className={styles.categoryTabs}>
            {categories.map((cat) => (
              <button
                key={cat.id}
                className={`${styles.categoryTab} ${activeCategory === cat.id ? styles.categoryTabActive : ''}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                <span className={styles.categoryIcon}>{cat.icon}</span>
                <span className={styles.categoryText}>
                  <span className={styles.categoryLabel}>{cat.label}</span>
                  <span className={styles.categorySubtitle}>{cat.subtitle}</span>
                </span>
              </button>
            ))}
          </div>

          <main>
            <SamplesGrid items={items} compact />
          </main>

          <div className={layoutStyles.helpSection}>
            <div className={layoutStyles.helpSectionHeader}>
              <GithubIcon />
              <Heading as="h2">Get help</Heading>
            </div>
            <ul>
              <li>
                Browse more samples on{' '}
                <a href="https://github.com/ONLYOFFICE/document-builder-samples">GitHub</a>.
              </li>
              <li>
                You can request a feature or report a bug by posting an issue on{' '}
                <a href="https://github.com/ONLYOFFICE/documentServer/issues">GitHub</a>.
              </li>
              <li>
                You can also ask our developers on{' '}
                <a href="https://forum.onlyoffice.com/c/document-api/39">ONLYOFFICE forum</a> (registration required).
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
}
