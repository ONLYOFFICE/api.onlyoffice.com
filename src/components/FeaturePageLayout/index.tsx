import styles from './styles.module.css'
import type { FC, ReactNode } from "react";
import GithubIcon from '@site/static/icons/github-icon.svg'
import { FeaturesGrid } from "@site/src/components/FeaturesGrid";
import Heading from "@theme/Heading";

export namespace FeaturePageTemplate {
  export type Props = {
    title: string
    description: string | ReactNode
    links: ReactNode[]
    linkPrefix: string
    items: FeaturesGrid.Item[]
  }
}

export const FeaturePageTemplate: FC<FeaturePageTemplate.Props> = ({ title, description, linkPrefix, links, items}) => {
  return (
    <div className={styles.container}>
      <div className={styles.containerInner}>
        <div className={styles.headerSection}>
          <Heading as="h1" className="hero__title">{title}</Heading>
          <p>{description}</p>
        </div>
        <main>
          <FeaturesGrid linkPrefix={linkPrefix} items={items}/>
        </main>
        <div className={styles.helpSection}>
          <div className={styles.helpSectionHeader}>
            <GithubIcon/>
            <Heading as='h2'>Get Help</Heading>
          </div>
          <ul>
            {links.map((linkChildren, index) => (<li key={index}>{linkChildren}</li>))}
          </ul>
        </div>
      </div>
    </div>
  )
}