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
      <div className={styles.samplesСontainer}>
        <div className={styles.samplesСontainerInner}>
          <main>
            {samplesGroups.map((group, index) => (
              <section key={index} className={styles.sectionGroup}>
                <Heading as="h2" className={styles.samplesHeading}>
                  Check out our popular samples
                </Heading>
                <div className={styles.samplesGridWrapper}>
                  <SamplesGrid
                    items={group.items}
                  />
                </div>
                <div className={styles.buttonWrapper}>
                  <Link className={styles.samplesButton} to={"123"} >
                    See all samples
                  </Link>
                </div>
              </section>
            ))}
          </main>
        </div>
      </div>
    </section>
  );
};

export default HomepageSamples;
