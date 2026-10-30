import {type ComponentPropsWithoutRef} from 'react';
import styles from './styles.module.css';

export type TagBadgeVariant = 'green' | 'blue' | 'purple' | 'pink' | 'default';

export type TagBadgeProps = Omit<ComponentPropsWithoutRef<'span'>, 'children' | 'onClick'> & {
  label: string;
  variant?: TagBadgeVariant;
  onClick?: (label: string) => void;
};

const variantStyles: Record<string, string | undefined> = {
  green: styles.tagGreen,
  blue: styles.tagBlue,
  purple: styles.tagPurple,
  pink: styles.tagPink
};

export default function TagBadge({label, variant = 'default', onClick, className, ...props}: TagBadgeProps) {
  const classes = [styles.tag, onClick && styles.tagClickable, variantStyles[variant], className].filter(Boolean).join(' ');
  return <span {...props} className={classes} onClick={onClick ? () => onClick(label) : undefined}>{label}</span>;
}
