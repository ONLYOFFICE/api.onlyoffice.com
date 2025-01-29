import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Image: string | React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
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
  },
  {
    title: 'Workspace',
    Image: require('@site/static/assets/images/workspace-preview.png').default,
    description: (
      <>
        In this section, you will learn how to integrate ONLYOFFICE Workspace{" "}
        into your own application and interact with its backend using the{" "}
        Workspace API Backend. This solution is provided without editors, you{" "}
        need to install ONLYOFFICE Docs separately. You can also host a portal{" "}
        and interact with it using our methods for hosting providers.
      </>
    ),
  },
];

function Feature({title, Image, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        {typeof Image === 'string' ? (
          <img src={Image} alt={title} className={styles.featureSvg} />
        ) : (
          <Image className={styles.featureSvg} role="img" />
        )}
      </div>
      <div className="text--center padding-horiz--md">
        <Link to={title.toLowerCase()}>
          <Heading as="h3">{title}</Heading>
        </Link>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
