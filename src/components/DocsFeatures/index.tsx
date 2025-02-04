import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  link: string,
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Docs API',
    link: 'Get Started/Basic concepts',
    description: (
      <>
        In this section, you will learn how to bring document editing and{" "}
        co-authoring to your web app users, set up, configure, and integrate{" "}
        ONLYOFFICE Docs.
      </>
    ),
  },
  {
    title: 'Office API',
    link: 'Get Started/Overview',
    description: (
      <>
        In this section, you will learn how to use our JavaScript library to{" "}
        write code for your plugins, macros, builder scripts, etc. This library{" "}
        contains classes and methods for every document type: Text document API,{" "}
        Spreadsheet API, Presentation API, and Form API.
      </>
    ),
  },
  {
    title: 'Plugin and Macros',
    link: 'Get Started/Overview',
    description: (
      <>
        In this section, you will learn how to extend the ONLYOFFICE Docs{" "}
        functionality by creating your own plugins/macros. Here you will find{" "}
        the information about their structure, development lifecycle, and examples.
      </>
    ),
  },
  {
    title: 'Document Builder',
    link: 'Get Started/Overview',
    description: (
      <>
        In this section, you will learn how to generate documents easily without{" "}
        running a document editor and integrate Document builder into your DMS,{" "}
        CRM system, etc.
      </>
    ),
  },
  {
    title: 'Desktop Editors',
    link: 'Get Started/Overview',
    description: (
      <>
        In this section, you will learn how to extend the ONLYOFFICE Desktop{" "}
        Editors functionality by setting up, customizing and integrating them{" "}
        with the document management systems.
      </>
    ),
  },
];

function Feature({title, link, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <Link to={`docs/${title}/${link}`}>
          <Heading as="h3">{title}</Heading>
        </Link>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function DocSpaceFeatures(): ReactNode {
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
