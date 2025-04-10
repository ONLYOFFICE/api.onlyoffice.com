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

const Playgrounds = [
  {
    name: 'Text document API',
    image: require('@site/static/assets/images/editor/word-playground.png').default,
    url: 'pathname:///playground/playground.html?editor=word',
    description: 'Engage with the text document editor to create and manipulate text files.',
  },
  {
    name: 'Spreadsheet API',
    image: require('@site/static/assets/images/editor/cell-playground.png').default,
    url: 'pathname:///playground/playground.html?editor=cell',
    description: 'Access the spreadsheet editor for data analysis and management tasks.',
  },
  {
    name: 'Presentation API',
    image: require('@site/static/assets/images/editor/slide-playground.png').default,
    url: 'pathname:///playground/playground.html?editor=slide',
    description: 'Use the presentation editor to design and present slideshows.',
  },
  {
    name: 'Form API',
    image: require('@site/static/assets/images/editor/form-playground.png').default,
    url: 'pathname:///playground/playground.html?editor=form',
    description: 'Interact with the form editor to create and manage forms.',
  },
];

interface Props {
  name: string;
  image: string;
  url: string;
  description: string;
}

function PlaygroundCard({name, image, url, description}: Props) {
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

export function PlaygroundCardsRow(): ReactNode {
  return (
    <div className="row">
      {Playgrounds.map((playground) => (
        <PlaygroundCard key={playground.name} {...playground} />
      ))}
    </div>
  );
}