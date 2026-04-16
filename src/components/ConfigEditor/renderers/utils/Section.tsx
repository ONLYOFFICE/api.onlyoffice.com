import { ReactNode, createElement } from 'react'
import styles from './Section.module.css'

interface SectionProps {
    title: string
    depth: number
    description?: string
    defaultOpen?: boolean
    children: ReactNode
}

export function Section({ title, depth, description, defaultOpen = true, children }: SectionProps) {
    const level = Math.min(Math.max(depth, 1), 6)
    const headingTag = `h${level}`
    const headingClass = styles[`heading${level}`] ?? styles.heading

    return (
        <details className={styles.section} open={defaultOpen}>
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
                {createElement(headingTag, { className: headingClass }, title)}
            </summary>
            {description && <p className={styles.description}>{description}</p>}
            {children}
        </details>
    )
}
