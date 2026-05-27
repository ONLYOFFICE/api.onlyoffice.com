import { type FC, type ReactNode, memo } from 'react';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

export namespace SamplesGrid {
  export type Props = {
    items: Item[];
    compact?: boolean;
    onTagClick?: (label: string) => void;
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
    viewLink?: string;
    tags?: Tag[];
    category?: string;
  };
}


const variantStyles: Record<string, string | undefined> = {
  green: styles.tagGreen,
  blue: styles.tagBlue,
  purple: styles.tagPurple,
  pink: styles.tagPink,
};

type TagBadgeProps = SamplesGrid.Tag & { onClick?: (label: string) => void };

const TagBadge: FC<TagBadgeProps> = ({ label, variant = 'default', onClick }) => {
  const className = [styles.tag, onClick && styles.tagClickable, variantStyles[variant]].filter(Boolean).join(' ');

  return (
    <span className={className} onClick={onClick ? () => onClick(label) : undefined}>
      {label}
    </span>
  );
};

type FeatureProps = SamplesGrid.Item & { compact?: boolean; onTagClick?: (label: string) => void };

const Feature: FC<FeatureProps> = memo(({
  icon,
  title,
  description,
  features,
  viewLink,
  tags,
  compact,
  onTagClick,
}) => {
  const heading = <Heading as="h3">{title}</Heading>;

  return (
    <div className={styles.samplesGridItem}>
      <div className={styles.samplesItemHeader}>
        {!compact && icon && <div className={styles.iconWrapper}>{icon}</div>}
        {compact && viewLink ? (
          <Link className={styles.titleLink} to={viewLink}>{heading}</Link>
        ) : heading}
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
        {!compact && viewLink && (
          <Link className={styles.viewLink} to={viewLink}>
            View example →
          </Link>
        )}

        {tags && tags.length > 0 && (
          <div className={styles.tagsRow}>
            {tags.map((tag, idx) => (
              <TagBadge key={idx} {...tag} onClick={onTagClick} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
});

export const SamplesGrid: FC<SamplesGrid.Props> = memo(({ items, compact, onTagClick }) => {
  return (
    <div className={styles.samplesGridList}>
      {items.map((props, idx) => (
        <Feature key={`${props.title}-${idx}`} {...props} compact={compact} onTagClick={onTagClick} features={compact ? undefined : props.features} />
      ))}
    </div>
  );
});
