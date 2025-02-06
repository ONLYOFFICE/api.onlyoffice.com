import type { ReactNode } from 'react';
import styles from './styles.module.css';
import { FeaturesGrid } from "@site/src/components/FeaturesGrid";
import SdkIcon from '@site/static/icons/javascript-sdk-icon.svg';
import PluginIcon from '@site/static/icons/plugins-icon.svg';
import DocsApiIcon from '@site/static/icons/docs-api-icon.svg';
import DocSpaceApiIcon from '@site/static/icons/docspace-api-icon.svg';
import HostingIcon from '@site/static/icons/self-hosted-icon.svg';

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
    icon: <SdkIcon/>,
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
    icon: <PluginIcon/>,
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
    icon: <DocsApiIcon/>,
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
    icon: <DocSpaceApiIcon/>,
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
    icon: <HostingIcon/>,
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
