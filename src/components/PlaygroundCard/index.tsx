/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* eslint-disable global-require */

import React, { type ReactNode, type ComponentProps } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';

const Playgrounds = [
  {
    name: 'Text document API',
    image: require('@site/static/assets/images/editor/word-playground.png').default + '#gh-light-mode-only',
    imageDark: require('@site/static/assets/images/editor/word-playground.dark.png').default + '#gh-dark-mode-only',
    url: 'pathname:///playground/?editor=word',
    description: 'Engage with the text document editor to create and manipulate text files.',
  },
  {
    name: 'Spreadsheet API',
    image: require('@site/static/assets/images/editor/cell-playground.png').default + '#gh-light-mode-only',
    imageDark: require('@site/static/assets/images/editor/cell-playground.dark.png').default + '#gh-dark-mode-only',
    url: 'pathname:///playground/?editor=cell',
    description: 'Access the spreadsheet editor for data analysis and management tasks.',
  },
  {
    name: 'Presentation API',
    image: require('@site/static/assets/images/editor/slide-playground.png').default + '#gh-light-mode-only',
    imageDark: require('@site/static/assets/images/editor/slide-playground.dark.png').default + '#gh-dark-mode-only',
    url: 'pathname:///playground/?editor=slide',
    description: 'Use the presentation editor to design and present slideshows.',
  },
  {
    name: 'Form API',
    image: require('@site/static/assets/images/editor/form-playground.png').default + '#gh-light-mode-only',
    imageDark: require('@site/static/assets/images/editor/form-playground.dark.png').default + '#gh-dark-mode-only',
    url: 'pathname:///playground/?editor=form',
    description: 'Interact with the form editor to create and manage forms.',
  },
  {
    name: 'PDF API',
    image: require('@site/static/assets/images/editor/pdf-playground.png').default + '#gh-light-mode-only',
    imageDark: require('@site/static/assets/images/editor/pdf-playground.dark.png').default + '#gh-dark-mode-only',
    url: 'pathname:///playground/?editor=pdf',
    description: 'Use the PDF editor to create, edit, and annotate PDF documents.',
  },
  {
    name: 'Builder API',
    image: require('@site/static/assets/images/editor/builder-playground.png').default + '#gh-light-mode-only',
    imageDark: require('@site/static/assets/images/editor/builder-playground.dark.png').default + '#gh-dark-mode-only',
    url: 'pathname:///playground/?editor=word&testType=builder',
    description: 'Interact with Document Builder for working with text documents, spreadsheets, presentations, and forms.',
  },
];

type Props = ComponentProps<'div'> & {
  name: string;
  image: string;
  imageDark: string;
  url: string;
  description: string;
}

function PlaygroundCard({name, image, imageDark, url, description}: Props) {
  return (
    <div className="col col--6 margin-bottom--lg">
      <div className={clsx('card')}>
        <div className={clsx('card__image')}>
          <Link to={url} target='_blank'>
            <img src={image} alt={name} /><img src={imageDark} alt={name} />
          </Link>
        </div>
        <div className="card__body">
          <Heading as="h3">{name}</Heading>
          <p>{description}</p>
        </div>
        <div className="card__footer">
          <div className="button-group button-group--block">
            <Link className="button button--secondary" to={url} target='_blank'>
              Try it now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

const DocSpacePlaygrounds = [
  {
    name: 'Manager',
    image: require('@site/static/assets/images/docspace/manager-mode.png').default + '#gh-light-mode-only',
    imageDark: require('@site/static/assets/images/docspace/manager-mode.dark.png').default + '#gh-dark-mode-only',
    url: 'pathname:///docspace-playground/?mode=manager',
    description: 'Explore the document manager to work with rooms, folders, and documents within DocSpace.',
  },
  {
    name: 'Editor',
    image: require('@site/static/assets/images/docspace/editor-mode.png').default + '#gh-light-mode-only',
    imageDark: require('@site/static/assets/images/docspace/editor-mode.dark.png').default + '#gh-dark-mode-only',
    url: 'pathname:///docspace-playground/?mode=editor',
    description: 'Open and edit documents directly in the embedded DocSpace editor.',
  },
  {
    name: 'Viewer',
    image: require('@site/static/assets/images/docspace/viewer-mode.png').default + '#gh-light-mode-only',
    imageDark: require('@site/static/assets/images/docspace/viewer-mode.dark.png').default + '#gh-dark-mode-only',
    url: 'pathname:///docspace-playground/?mode=viewer',
    description: 'View documents in a read-only embedded viewer.',
  },
  {
    name: 'Room selector',
    image: require('@site/static/assets/images/docspace/room-selector-mode.png').default + '#gh-light-mode-only',
    imageDark: require('@site/static/assets/images/docspace/room-selector-mode.dark.png').default + '#gh-dark-mode-only',
    url: 'pathname:///docspace-playground/?mode=room-selector',
    description: 'Embed a room selector to let users pick a DocSpace room.',
  },
  {
    name: 'File selector',
    image: require('@site/static/assets/images/docspace/file-selector-mode.png').default + '#gh-light-mode-only',
    imageDark: require('@site/static/assets/images/docspace/file-selector-mode.dark.png').default + '#gh-dark-mode-only',
    url: 'pathname:///docspace-playground/?mode=file-selector',
    description: 'Embed a file selector to let users pick files from DocSpace.',
  },
  {
    name: 'System',
    image: require('@site/static/assets/images/docspace/system-mode.png').default + '#gh-light-mode-only',
    imageDark: require('@site/static/assets/images/docspace/system-mode.dark.png').default + '#gh-dark-mode-only',
    url: 'pathname:///docspace-playground/?mode=system',
    description: 'Use the system mode to call SDK methods without a visible frame.',
  },
];

export function DocSpacePlaygroundCardsRow(): ReactNode {
  return (
    <div className="row">
      {DocSpacePlaygrounds.map((playground) => (
        <PlaygroundCard key={playground.name} {...playground} />
      ))}
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