import type { FC, ReactNode } from 'react';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

export namespace SamplesGrid {
  export type Props = {
    items: Item[];
  }

  export type Tag = {
    label: string;
    variant?: 'green' | 'blue' | 'purple' | 'pink' | 'default';
  };

  export type Item = {
    icon?: ReactNode;
    title: string;
    description: ReactNode;
    features?: string[];
    viewLink?: {
      label: string;
      href: string;
    };
    tags?: Tag[];
  };
}

const MAX_VISIBLE_TAGS = 5;

const variantStyles: Record<string, string | undefined> = {
  green: styles.tagGreen,
  blue: styles.tagBlue,
  purple: styles.tagPurple,
  pink: styles.tagPink,
};

const TagBadge: FC<SamplesGrid.Tag> = ({ label, variant = 'default' }) => {
  const className = [styles.tag, variantStyles[variant]].filter(Boolean).join(' ');

  return <span className={className}>{label}</span>;
};

const Feature: FC<SamplesGrid.Item> = ({
  icon,
  title,
  description,
  features,
  viewLink,
  tags,
}) => {
  const visibleTags = tags?.slice(0, MAX_VISIBLE_TAGS);
  const extraCount = tags ? tags.length - MAX_VISIBLE_TAGS : 0;

  return (
    <div className={styles.samplesGridItem}>
      <div className={styles.samplesItemHeader}>
        {icon && <div className={styles.iconWrapper}>{icon}</div>}
        <Heading as="h3">{title}</Heading>
      </div>

      <p className={styles.description}>{description}</p>

      {features && features.length > 0 && (
        <ul className={styles.featureList}>
          {features.map((feat, idx) => (
            <li key={idx}>{feat}</li>
          ))}
        </ul>
      )}

      <div className={styles.cardFooter}>
        {viewLink && (
          <Link className={styles.viewLink} to={viewLink.href}>
            {viewLink.label} →
          </Link>
        )}

        {visibleTags && visibleTags.length > 0 && (
          <div className={styles.tagsRow}>
            {visibleTags.map((tag, idx) => (
              <TagBadge key={idx} {...tag} />
            ))}
            {extraCount > 0 && (
              <span className={styles.tag}>+{extraCount}</span>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export const SamplesGrid: FC<SamplesGrid.Props> = ({ items }) => {
  return (
    <div className={styles.samplesGridList}>
      {items.map((props, idx) => (
        <Feature key={idx} {...props} />
      ))}
    </div>
  );
};
