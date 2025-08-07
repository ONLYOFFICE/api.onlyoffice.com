import React from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

type SampleItem = {
  title: string;
  description: string;
  link: string;
};

type FilterCardsProps = {
  items: SampleItem[];
};

const FilterCards: React.FC<FilterCardsProps> = ({ items }) => {
  return (
    <div className={styles.cardGrid}>
      {items.map((item, idx) => (
        <Link key={idx} to={item.link} className={styles.card}>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </Link>
      ))}
    </div>
  );
};

export default FilterCards;