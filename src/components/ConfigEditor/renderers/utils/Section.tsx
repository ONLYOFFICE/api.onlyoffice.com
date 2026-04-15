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
                <span className={styles.chevron}>▶</span>
                {createElement(headingTag, { className: headingClass }, title)}
            </summary>
            {description && <p className={styles.description}>{description}</p>}
            {children}
        </details>
    )
}
