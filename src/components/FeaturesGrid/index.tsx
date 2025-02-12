import type { FC, ReactNode } from 'react';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

export namespace FeaturesGrid {
  export type Props = {
    items: Item[];
    linkPrefix: string;
  }

  export type Item = {
    title: string;
    link: string,
    description: ReactNode;
    icon: ReactNode;
  };
}

const Feature: FC<FeaturesGrid.Item & { linkPrefix: string }> = ({ title, link, description, linkPrefix, icon }) => {
  return (
    <Link to={`/${linkPrefix}/${link}`}>
      <div className={styles.featuresGridItem}>
        <div className={styles.featuresGridItemHeader}>
          {icon}
          <Heading as="h3">{title}</Heading>
        </div>
        <p>{description}</p>
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
