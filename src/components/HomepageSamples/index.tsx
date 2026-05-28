import type { FC } from "react";
import Heading from "@theme/Heading";
import Link from '@docusaurus/Link';
import { SamplesGrid } from "@site/src/components/SamplesGrid";
import styles from "@site/src/css/sectionGroup.module.css";

export namespace HomepageSamplesProps {
  export type SamplesGroup = {
    items: SamplesGrid.Item[];
    linkPrefix?: string;
  };

  export type Props = {
    samplesGroups: SamplesGroup[];
  };
}

const HomepageSamples: FC<HomepageSamplesProps.Props> = ({
  samplesGroups,
}) => {
  return (
    <section className={styles.samples}>
      <div className={styles.samplesContainer}>
        {samplesGroups.map((group, index) => (
          <section key={index} className={styles.sectionGroup}>
            <div className={styles.sectionHead}>
              <Heading as="h2" className={styles.samplesHeading}>
                Check out our popular samples
              </Heading>
              <Link className={styles.samplesButton} to="/samples/" >
                See all samples
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14M13 6l6 6-6 6"/>
                </svg>
              </Link>
            </div>
            <div className={styles.samplesGridWrapper}>
              <SamplesGrid
                items={group.items}
              />
            </div>
          </section>
        ))}
      </div>
    </section>
  );
};

export default HomepageSamples;
