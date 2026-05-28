import type { FC, ReactNode } from 'react';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

export namespace FeaturesGrid {
  export type Props = {
    items: Item[];
    linkPrefix: string;
    button?: Button;
  }

  export type Item = {
    title: string;
    link: string,
    description: ReactNode;
    icon: ReactNode;
  };

  export type Button = {
    text: string;
    href: string;
  }
}

const Feature: FC<FeaturesGrid.Item & { linkPrefix: string }> = ({ title, link, description, linkPrefix, icon }) => {
  return (
    <Link to={`/${linkPrefix}/${link}`}>
      <div className={styles.featuresGridItem}>
        <div className={styles.featuresGridItemIcon}>{icon}</div>
        <span className={styles.featuresGridItemArrow} aria-hidden="true">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 17L17 7M9 7h8v8" />
          </svg>
        </span>
        <Heading as="h3" className={styles.featuresGridItemTitle}>{title}</Heading>
        <p className={styles.featuresGridItemDesc}>{description}</p>
      </div>
    </Link>
  );
}

export const FeaturesGrid: FC<FeaturesGrid.Props> = ({items, linkPrefix}) => {
  return (
    <div className={styles.featuresGridList}>
      {items.map((props, idx) => (
        <Feature key={idx} linkPrefix={linkPrefix} {...props} />
      ))}
    </div>
  );
}
