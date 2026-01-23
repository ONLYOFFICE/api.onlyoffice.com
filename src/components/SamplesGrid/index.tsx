import type { FC, ReactNode } from 'react';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

export namespace SamplesGrid {
  export type Props = {
    items: Item[];
  }

  type seeItem = {
    name: string;
    link: string;
  }

  export type Item = {
    title: string;
    description: ReactNode;
    seeSamples?: seeItem[];
  };
}

const Feature: FC<SamplesGrid.Item> = ({ title, description, seeSamples }) => {
  return (
    <div className={styles.samplesGridItem}>
      <div className={styles.samplesItemHeader}>
        <Heading as="h3">{title}</Heading>
      </div>
      <p>{description}</p>
      {seeSamples &&
        <p>See:&nbsp;
          {seeSamples.map((props, idx, array) => (
            <span key={idx}>
              <Link to={props.link}>{props.name}</Link>
              {(idx + 1 != array.length) && " / "}
            </span>
          ))}
        </p>
      }
    </div>
  );
}

export const SamplesGrid: FC<SamplesGrid.Props> = ({items}) => {
  return (
    <div className={styles.samplesGridList}>
      {items.map((props, idx) => (
        <Feature key={idx} {...props} />
      ))}
    </div>
  );
}
