/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* eslint-disable global-require */

import React, {type ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

const AutomationAPISamples = [
  {
    name: 'Working with comments',
    image: require('@site/static/assets/images/editor/working-with-comments.png').default,
    url: 'working-with-comments',
    description: 'This example shows how to collect all comments from the document and display them in the custom interface.',
  },
  {
    name: 'Working with review changes',
    image: require('@site/static/assets/images/editor/working-with-review-changes.png').default,
    url: 'working-with-review-changes',
    description: 'This example shows how to manage review process from an external source.',
  },
  {
    name: 'Filling out the form',
    image: require('@site/static/assets/images/editor/filling-out-the-form.png').default,
    url: 'filling-out-the-form',
    description: 'This example shows how to fill in the empty cells in the form.',
  },
  {
    name: 'Working with content controls',
    image: require('@site/static/assets/images/editor/working-with-content-controls.png').default,
    url: 'working-with-content-controls',
    description: 'This example shows how to add different types of content controls and inspect their properties from an external UI.',
  },
  {
    name: 'Searching in PDF',
    image: require('@site/static/assets/images/editor/searching-in-pdf.png').default,
    url: 'searching-in-pdf',
    description: 'This example shows how to search for text in a PDF and highlight all matching occurrences from an external interface.',
  },
  {
    name: 'Redacting in PDF',
    image: require('@site/static/assets/images/editor/redacting-in-pdf.png').default,
    url: 'redacting-in-pdf',
    description: 'This example shows how to find and permanently redact sensitive text in a PDF from an external interface.',
  },
  {
    name: 'Changing text in PDF',
    image: require('@site/static/assets/images/editor/changing-text-in-pdf.png').default,
    url: 'changing-text-in-pdf',
    description: 'This example shows how to find and replace text in a PDF by recognizing page content and iterating through objects.',
  },
];

interface Props {
  name: string;
  image: string;
  url: string;
  description: string;
}

function AutomationAPISamplesCard({name, image, url, description}: Props) {
    const {
        siteConfig: {customFields},
      } = useDocusaurusContext();

    return (
        <div className="col col--6 margin-bottom--lg">
        <div className={clsx('card')}>
            <div className={clsx('card__image')}>
            <Link to={url}>
                <img src={image} alt={name} />
            </Link>
            </div>
            <div className="card__body">
            <Heading as="h3">{name}</Heading>
            <p>{description}</p>
            </div>
            <div className="card__footer">
            <div className="button-group button-group--block">
                <Link className="button button--secondary" to={url}>
                Try it now
                </Link>
            </div>
            </div>
        </div>
        </div>
    );
}

export function AutomationAPISamplesCardsRow(): ReactNode {
  const updatedAutomationAPISamples = AutomationAPISamples.map(automationAPISamples => {
    const newAutomationAPISamples = { ...automationAPISamples };

    return newAutomationAPISamples;
  });

  return (
    <div className="row">
      {updatedAutomationAPISamples.map((automationAPISamples) => (
        <AutomationAPISamplesCard key={automationAPISamples.name} {...automationAPISamples} />
      ))}
    </div>
  );
}