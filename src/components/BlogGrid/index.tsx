import type { FC, ReactNode } from 'react';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

export namespace BlogGrid {
  export type Props = {
    items: Item[];
  }

  export type Item = {
    title: string;
    link: string;
    imgHref: string;
  };
}

const Feature: FC<BlogGrid.Item> = ({ title, link, imgHref }) => {
  return (
    <Link to={link} className={styles.blogGridItem}>
      <div className={styles.blogImg}>
        <img src={imgHref} alt={title} loading="lazy" />
      </div>
      <div className={styles.blogBody}>
        <Heading as="h3" className={styles.blogTitle}>{title}</Heading>
        <span className={styles.blogMeta} aria-hidden="true">
          Read article
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M13 6l6 6-6 6"/>
          </svg>
        </span>
      </div>
    </Link>
  );
}

export const BlogGrid: FC<BlogGrid.Props> = ({items}) => {
  return (
    <div className={styles.blogGridList}>
      {items.map((props, idx) => (
        <Feature key={idx} {...props} />
      ))}
    </div>
  );
}
