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
    <Link to={link}>
    <div className={styles.blogGridItem}>
      <img src={imgHref} alt={title} />
      <div className={styles.blogItemHeader}>
        <Heading as="h3">{title}</Heading>
      </div>
      {/* <p>
        <Link to={link}>Read more »</Link>
      </p> */}
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
