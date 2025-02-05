import type { ReactNode } from 'react';
import styles from './styles.module.css';
import { FeaturesGrid } from "@site/src/components/FeaturesGrid";

const FeatureList: FeaturesGrid.Item[] = [
  {
    title: 'JavaScript SDK',
    link: 'Get Started/Basic concepts',
    description: (
      <>
        In this section, you will learn how to connect DocSpace as a frame to{" "}
        your website using api.js. You can embed an entire DocSpace portal, a{" "}
        single room, or a document.
      </>
    ),
  },
  {
    title: 'Plugins SDK',
    link: 'Get Started/Basic concepts',
    description: (
      <>
        In this section, you will learn how to create your own plugins and add{" "}
        them to the DocSpace portal.
      </>
    ),
  },
  {
    title: 'OAuth API',
    link: 'Get Started/Basic concepts',
    description: (
      <>
        In this section, you will learn how to register a new OAuth application{" "}
        on the DocSpace portal.
      </>
    ),
  },
  {
    title: 'API Backend',
    link: 'Get Started/Basic concepts',
    description: (
      <>
        In this section, you will learn how to integrate ONLYOFFICE DocSpace into{" "}
        your own application and interact with its backend using the DocSpace API{" "}
        Backend which is implemented as REST over HTTP using GET/POST/PUT/DELETE.
      </>
    ),
  },
  {
    title: 'For Hosting Providers',
    link: 'Get Started/Authentication',
    description: (
      <>
        In this section, you will learn how to provide the DocSpace portal as a{" "}
        SaaS solution on your own servers using our API methods.
      </>
    ),
  },
];

export default function DocsFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <FeaturesGrid linkPrefix='docspace' items={FeatureList}/>
      </div>
    </section>
  );
}
