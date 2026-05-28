import type { FC } from "react";
import Heading from "@theme/Heading";
import Link from '@docusaurus/Link';
import { BlogGrid } from "@site/src/components/BlogGrid";
import styles from "@site/src/css/sectionGroup.module.css";

export namespace HomepageBlogProps {
  export type BlogGroup = {
    items: BlogGrid.Item[];
  };

  export type Props = {
    blogGroups: BlogGroup[];
  };
}

const HomepageBlog: FC<HomepageBlogProps.Props> = ({
  blogGroups,
}) => {
  return (
    <section className={styles.samples}>
      <div className={styles.samplesContainer}>
        <section className={`${styles.sectionGroup} ${styles.blogGroup}`}>
          <div className={styles.sectionHead}>
            <Heading as="h2" className={styles.samplesHeading}>
              Want to know more?
            </Heading>
            <Link className={styles.samplesButton} to="https://www.onlyoffice.com/blog/category/for-developers" >
              More news here
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6"/>
              </svg>
            </Link>
          </div>
          <div className={styles.samplesGridWrapper}>
            {blogGroups.map((group, index) => (
            <BlogGrid key={index}
              items={group.items}
            />
            ))}
          </div>
        </section>
      </div>
    </section>
  );
};

export default HomepageBlog;
