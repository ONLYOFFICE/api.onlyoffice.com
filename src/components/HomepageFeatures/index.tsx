import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';
import { DocsFeatures, DocSpaceFeatures, type Features, WorkspaceFeatures } from "@site/src/features";

type FeatureItem = {
  title: string;
  Image: string | React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
  features: Features;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'DocSpace',
    Image: require('@site/static/assets/images/docspace-preview.svg').default,
    description: (
      <>
        In this section, you will learn how to integrate ONLYOFFICE{" "}
        DocSpace into your own application and interact with its backend{" "}
        using the DocSpace API Backend. You will also find the{" "}
        information on how to embed DocSpace using JavaScript SDK, create{" "}
        your own plugins with our Plugins SDK, and host a portal on your{" "}
        own servers using our methods for hosting providers.
      </>
    ),
    features: DocSpaceFeatures,
  },
  {
    title: 'Docs',
    Image: require('@site/static/assets/images/docs-preview.png').default,
    description: (
      <>
        In this section, you will learn how to bring document editing{" "}
        and co-authoring to your web app users, set up, configure and{" "}
        integrate ONLYOFFICE Docs, extend its functionality using your{" "}
        own plugins/macros, and integrate document editors into the desktop{" "}
        applications. You will also find the information on how to use Document{" "}
        Builder to generate documents easily without running document editors.
      </>
    ),
    features: DocsFeatures,
  },
];

function Feature({index, title, Image, description, features }: FeatureItem & { index: number }) {
  const is_reversed = index % 2;
  return (
      <div className={clsx(styles.featureBlock,{[styles.featureBlockReverse]:is_reversed})}>
        <div className={styles.homeDecr}>
          <h2>
            <Link to={title.toLowerCase()}>{title}</Link>
          </h2>
          <p>{description}</p>
          <Link to={title.toLowerCase()}>More</Link>
        </div>
        <ul className={styles.featuresList}>
          {features.items.map(((item, index) => (
            <li className={styles.featuresListItem} key={index}>
              {item.icon}
              <Link to={`${features.linkPrefix}/${item.link}`}>{item.title}</Link>
            </li>
          )))}
        </ul>
        <Link to={title.toLowerCase()} className={styles.homePreview}>
          <div>
            {typeof Image === 'string' ? (
              <img src={Image} alt={title} className={styles.featureSvg} />
            ) : (
              <Image className={styles.featureSvg} role="img" />
            )}
          </div>
        </Link>
      </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.containerFeatures}>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} index={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
