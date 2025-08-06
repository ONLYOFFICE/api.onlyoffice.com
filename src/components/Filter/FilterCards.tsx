import samplesData from '../../../site/docs/docs-api/samples/language-specific-examples/data/samples.json';
import React from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

const FilterCards = () => {
  return (
    <div className={styles.cardGrid}>
      {samplesData.map((item, idx) => (
        <Link key={idx} to={item.link} className={styles.card}>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </Link>
      ))}
    </div>
  );
};

export default FilterCards;