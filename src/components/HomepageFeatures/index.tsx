import type { FC } from "react";
import clsx from 'clsx';
import Heading from "@theme/Heading";
import { FeaturesGrid } from "@site/src/components/FeaturesGrid";
import styles from "./styles.module.css";
import Link from '@docusaurus/Link';

export namespace HomepageFeaturesProps {
  export type Button = {
    text: string;
    href: string;
  }

  export type FeatureGroup = {
    heading: string;
    subheading?: string;
    items: FeaturesGrid.Item[];
    linkPrefix?: string;
    button?: Button;
  };

  export type Props = {
    featureGroups: FeatureGroup[];
  };
}

const HomepageFeatures: FC<HomepageFeaturesProps.Props> = ({
  featureGroups,
}) => {
  return (
    <section className={styles.features}>
      <div className={styles.containerFeatures}>
        <div className={styles.containerInner}>
          <main>
            {featureGroups.map((group, index) => (
              <section key={index} className={styles.featureGroup}>
                <div className={styles.featureHeaderTop}>
                  <Heading as="h2">{group.heading}</Heading>
                  {group.button &&
                  <Link className={styles.tryButton} to={group.button.href} >
                    {group.button.text}
                  </Link>
                  }
                </div>
                {group.subheading && (
                  <p className={styles.subheading}>{group.subheading}</p>
                )} 
                 <div
                    className={clsx(
                      styles.featuresGridWrapper,
                      group.heading === "DocSpace" && styles.docspaceGrid,
                      group.heading === "Docs" && styles.docsGrid
                    )}
                  >
                    <FeaturesGrid
                    linkPrefix={group.linkPrefix ?? ""}
                    items={group.items}
                  />
                  </div>
              </section>
            ))}
          </main>
        </div>
      </div>
    </section>
  );
};

export default HomepageFeatures;
