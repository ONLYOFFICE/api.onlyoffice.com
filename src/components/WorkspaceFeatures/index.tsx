import type {ReactNode} from 'react';
import styles from './styles.module.css';
import { FeaturesGrid } from "@site/src/components/FeaturesGrid";
import DocSpaceApiIcon from '@site/static/icons/docspace-api-icon.svg';
import HostingIcon from '@site/static/icons/self-hosted-icon.svg';

const FeatureList: FeaturesGrid.Item[] = [
  {
    title: 'API Backend',
    link: 'Get Started/Basic concepts',
    description: (
      <>
        In this section, you will learn how to integrate ONLYOFFICE Workspace{" "}
        into your own application and interact with its backend using the{" "}
        Workspace API Backend which is implemented as REST over HTTP using{" "}
        GET/POST/PUT/DELETE. This solution is provided without editors, you{" "}
        need to install ONLYOFFICE Docs separately.
      </>
    ),
    icon: <DocSpaceApiIcon/>
  },
  {
    title: 'For Hosting Providers',
    link: 'Get Started/Authentication',
    description: (
      <>
        In this section, you will learn how to provide the Workspace portal as a{" "}
        SaaS solution on your own servers using our API methods.
      </>
    ),
    icon: <HostingIcon/>
  },
];

export default function WorkspaceFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          <FeaturesGrid linkPrefix='workspace' items={FeatureList}/>
        </div>
      </div>
    </section>
  );
}
