import type { FC } from "react";
import Heading from "@theme/Heading";
import Link from '@docusaurus/Link';
import { BlogGrid } from "@site/src/components/BlogGrid";
import styles from "./styles.module.css";

export namespace HomepageBlogProps {
  export type BlogGroup = {
    items: BlogGrid.Item[];
    linkPrefix?: string;
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
      <div className={styles.samplesСontainer}>
        <div className={styles.samplesСontainerInner}>
          <main>
            {blogGroups.map((group, index) => (
              <section key={index} className={styles.blogGroup}>
                <Heading as="h2" className={styles.samplesHeading}>
                  Want to know more?
                </Heading>
                <div className={styles.samplesGridWrapper}>
                  <BlogGrid
                    items={group.items}
                  />
                </div>
                <div className={styles.buttonWrapper}>
                  <Link className={styles.samplesButton} to="https://www.onlyoffice.com/blog/category/for-developers" >
                    More news here
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

export default HomepageBlog;
