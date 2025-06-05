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

const Playgrounds = [
  {
    name: 'Text document API',
    image: require('@site/static/assets/images/editor/word-playground.png').default + '#gh-light-mode-only',
    imageDark: require('@site/static/assets/images/editor/word-playground.dark.png').default + '#gh-dark-mode-only',
    url: 'pathname:///playground/playground.html?editor=word',
    description: 'Engage with the text document editor to create and manipulate text files.',
  },
  {
    name: 'Spreadsheet API',
    image: require('@site/static/assets/images/editor/cell-playground.png').default + '#gh-light-mode-only',
    imageDark: require('@site/static/assets/images/editor/cell-playground.dark.png').default + '#gh-dark-mode-only',
    url: 'pathname:///playground/playground.html?editor=cell',
    description: 'Access the spreadsheet editor for data analysis and management tasks.',
  },
  {
    name: 'Presentation API',
    image: require('@site/static/assets/images/editor/slide-playground.png').default + '#gh-light-mode-only',
    imageDark: require('@site/static/assets/images/editor/slide-playground.dark.png').default + '#gh-dark-mode-only',
    url: 'pathname:///playground/playground.html?editor=slide',
    description: 'Use the presentation editor to design and present slideshows.',
  },
  {
    name: 'Form API',
    image: require('@site/static/assets/images/editor/form-playground.png').default + '#gh-light-mode-only',
    imageDark: require('@site/static/assets/images/editor/form-playground.dark.png').default + '#gh-dark-mode-only',
    url: 'pathname:///playground/playground.html?editor=form',
    description: 'Interact with the form editor to create and manage forms.',
  },
];

interface Props {
  name: string;
  image: string;
  imageDark: string;
  url: string;
  description: string;
}

function PlaygroundCard({name, image, imageDark, url, description}: Props) {
  const {
    siteConfig: {customFields},
  } = useDocusaurusContext();
  const documentServer = customFields.documentServer as string;
  const documentServerSecret = customFields.documentServerSecret as string;

  const handleClick = (e: React.MouseEvent) => {
    if (window===undefined) return;

    e.preventDefault();
    const fullUrl = new URL(e.currentTarget.getAttribute('href'), window.location.origin).href + `&documentServer=${documentServer}&documentServerSecret=${documentServerSecret}`;
    window.open(fullUrl, '_blank');
  };

  return (
    <div className="col col--6 margin-bottom--lg">
      <div className={clsx('card')}>
        <div className={clsx('card__image')}>
          <Link to={typeof window !== 'undefined' ? url : `${url}&documentServer=${documentServer}&documentServerSecret=${documentServerSecret}`}
                onClick={handleClick}>
            <img src={image} alt={name} /><img src={imageDark} alt={name} />
          </Link>
        </div>
        <div className="card__body">
          <Heading as="h3">{name}</Heading>
          <p>{description}</p>
        </div>
        <div className="card__footer">
          <div className="button-group button-group--block">
            <Link className="button button--secondary" to={typeof window !== 'undefined' ? url : `${url}&documentServer=${documentServer}&documentServerSecret=${documentServerSecret}`}
                  onClick={handleClick}>
              Try it now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

interface PlaygroundCardsRowProps {
  searchParams?: {
    [parameter: string]: string
  }[]
};

export function PlaygroundCardsRow({ searchParams }: PlaygroundCardsRowProps): ReactNode {
  const updatedPlaygrounds = Playgrounds.map(playground => {
    const newPlayground = { ...playground };
    
    if (searchParams?.length > 0) {
      const stringifiedSearchParams = searchParams
        .filter(parameter => {
          const key = Object.keys(parameter)[0];
          return !newPlayground.url.includes(key);
        })
        .map(parameter => {
          const key = Object.keys(parameter)[0];
          return `${key}=${parameter[key]}`;
        });

      if (stringifiedSearchParams.length > 0) {
        newPlayground.url += 
          (newPlayground.url.includes("?") ? "&" : "?") + 
          stringifiedSearchParams.join("&");
      }
    }

    return newPlayground;
  });

  return (
    <div className="row">
      {updatedPlaygrounds.map((playground) => (
        <PlaygroundCard key={playground.name} {...playground} />
      ))}
    </div>
  );
}