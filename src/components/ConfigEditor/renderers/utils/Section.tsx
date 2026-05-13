import { ReactNode, createElement, useRef, useEffect, useCallback } from 'react';
import { Tooltip } from './Tooltip';
import styles from './Section.module.css';

interface SectionProps {
    title: string;
    depth: number;
    description?: string;
    defaultOpen?: boolean;
    /** true = checked (object set), false = unchecked (false), undefined = indeterminate (unset) */
    toggled?: boolean;
    onToggle?: () => void;
    children: ReactNode;
}

export function Section({ title, depth, description, defaultOpen = true, toggled, onToggle, children }: SectionProps) {
    const level = Math.min(Math.max(depth, 1), 6);
    const headingTag = `h${level}`;
    const toggleRef = useRef<HTMLInputElement>(null);

    const toggleable = onToggle !== undefined;
    const isUnset = toggleable && toggled === undefined;

    useEffect(() => {
        if (toggleRef.current) {
            toggleRef.current.indeterminate = isUnset;
        }
    }, [isUnset]);

    const handleToggleClick = useCallback((e: React.MouseEvent) => {
        e.stopPropagation();
    }, []);

    const handleToggleChange = useCallback(() => {
        onToggle?.();
    }, [onToggle]);

    return (
        <details
            className={styles.section}
            open={defaultOpen}
        >
            <summary className={styles.summary}>
                <svg
                    className={styles.chevron}
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    aria-hidden="true"
                >
                    <path
                        d="M4 2L8 6L4 10"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
                {toggleable && (
                    <input
                        ref={toggleRef}
                        type="checkbox"
                        className={styles.toggle}
                        checked={toggled === true}
                        aria-label={`Toggle ${title}`}
                        onClick={handleToggleClick}
                        onChange={handleToggleChange}
                    />
                )}
                {createElement(headingTag, { className: `${styles.heading}${isUnset ? ` ${styles.unset}` : ''}` }, title)}
                {description && <Tooltip text={description} />}
            </summary>
            <div className={styles.sectionContent}>
                {children}
            </div>
        </details>
    )
}
