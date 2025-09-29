import styles from './styles.module.css'
import type { FC, ReactNode } from "react";
import GithubIcon from '@site/static/icons/github-icon.svg'
import { FeaturesGrid } from "@site/src/components/FeaturesGrid";
import Heading from "@theme/Heading";

export namespace FeaturePageTemplate {
  export type FeatureGroup = {
    heading: string
    subheading?: string
    items: FeaturesGrid.Item[]
  }

  export type Props = {
    title: string
    subtitle?: string
    description?: string | ReactNode
    links: ReactNode[]
    linkPrefix: string
    featureGroups: FeatureGroup[]
  }
}

export const FeaturePageTemplate: FC<FeaturePageTemplate.Props> = ({
  title,
  subtitle,
  description,
  linkPrefix,
  links,
  featureGroups,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.containerInner}>
        <div className={styles.headerSection}>
          <Heading as="h1" className="hero__title">{title}</Heading>
          {subtitle && <Heading as="h2" className={styles.subtitle}>{subtitle}</Heading>}
          {description && <p>{description}</p>}
        </div>
        <main>
          {featureGroups.map((group, index) => (
            <section key={index} className={styles.featureGroup}>
              <Heading as="h3">{group.heading}</Heading>
              {group.subheading && <p className={styles.subheading}>{group.subheading}</p>}
              <FeaturesGrid linkPrefix={linkPrefix} items={group.items} />
            </section>
          ))}
        </main>
        <div className={styles.helpSection}>
          <div className={styles.helpSectionHeader}>
            <GithubIcon />
            <Heading as='h2'>Get help</Heading>
          </div>
          <ul>
            {links.map((linkChildren, index) => (
              <li key={index}>{linkChildren}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
