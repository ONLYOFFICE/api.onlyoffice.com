import type { FC } from "react";
import clsx from 'clsx';
import Heading from "@theme/Heading";
import { FeaturesGrid } from "@site/src/components/FeaturesGrid";
import styles from "./styles.module.css";

export namespace HomepageFeatures {
  export type FeatureGroup = {
    heading: string;
    subheading?: string;
    items: FeaturesGrid.Item[];
  };

  export type Props = {
    linkPrefix: string;
    featureGroups: FeatureGroup[];
  };
}

const HomepageFeatures: FC<HomepageFeatures.Props> = ({
  linkPrefix,
  featureGroups,
}) => {
  return (
    <section className={styles.features}>
      <div className={styles.containerFeatures}>
        <div className={styles.containerInner}>
          <main>
            {featureGroups.map((group, index) => (
              <section key={index} className={styles.featureGroup}>
                <Heading as="h2">{group.heading}</Heading>
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
                    <FeaturesGrid linkPrefix={linkPrefix} items={group.items} />
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
