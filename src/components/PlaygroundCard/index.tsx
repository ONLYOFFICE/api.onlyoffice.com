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

const PLAYGROUNDS = [
  { type: 'word', name: 'Document API', description: 'Engage with the document editor to create and manipulate text files.' },
  { type: 'cell', name: 'Spreadsheet API', description: 'Access the spreadsheet editor for data analysis and management tasks.' },
  { type: 'slide', name: 'Presentation API', description: 'Use the presentation editor to design and present slideshows.' },
  { type: 'form', name: 'Form API', description: 'Interact with the form editor to create and manage forms.' },
  { type: 'pdf', name: 'PDF API', description: 'Use the PDF editor to create, edit, and annotate PDF documents.' },
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

const CONFIG_PLAYGROUNDS = [
  { type: 'word', name: 'Document', description: 'Configure the document editor for creating and editing .docx files.' },
  { type: 'cell', name: 'Spreadsheet', description: 'Configure the spreadsheet editor for data analysis and management.' },
  { type: 'slide', name: 'Presentation', description: 'Configure the presentation editor for designing and delivering slideshows.' },
  { type: 'form', name: 'Form', description: 'Configure the form editor for creating and managing fillable forms.' },
  { type: 'pdf', name: 'PDF', description: 'Configure the PDF editor for viewing, editing, and annotating PDF documents.' },
];

const DOCSPACE_PLAYGROUNDS = [
  { type: 'manager', name: 'Manager', description: 'Explore the document manager to work with rooms, folders, and documents within DocSpace.' },
  { type: 'editor', name: 'Editor', description: 'Open and edit documents directly in the embedded DocSpace editor.' },
  { type: 'viewer', name: 'Viewer', description: 'View documents in a read-only embedded viewer.' },
  { type: 'room-selector', name: 'Room selector', description: 'Embed a room selector to let users pick a DocSpace room.' },
  { type: 'file-selector', name: 'File selector', description: 'Embed a file selector to let users pick files from DocSpace.' },
  { type: 'system', name: 'System', description: 'Use the system mode to call SDK methods without a visible frame.' },
];

type CardDef = { type: string; name: string; description: string }
type ResolvedCard = { type: string; name: string; description: string; image: string; imageDark: string; url: string }

function CardsRow({ cards, searchParams }: {
  cards: ResolvedCard[]
  searchParams?: { [parameter: string]: string }[]
}) {
  return (
    <div className="row">
      {cards.map(({ type, name, description, image, imageDark, url: baseUrl }) => {
        let url = baseUrl;

        if (searchParams && searchParams.length > 0) {
          const extra = searchParams
            .filter(p => {
              const key = Object.keys(p)[0];
              return !url.includes(key);
            })
            .map(p => {
              const key = Object.keys(p)[0];
              return `${key}=${p[key]}`;
            });

          if (extra.length > 0) {
            url += (url.includes('?') ? '&' : '?') + extra.join('&');
          }
        }

        return (
          <PlaygroundCard
            key={type}
            name={name}
            description={description}
            image={image}
            imageDark={imageDark}
            url={url}
          />
        );
      })}
    </div>
  );
}

function resolveEditorCards(cards: CardDef[], urlBase: string, paramName: string, imageSuffix?: string): ResolvedCard[] {
  const suffix = imageSuffix ?? 'playground';
  return cards.map(({ type, name, description }) => ({
    type, name, description,
    image: require(`@site/static/assets/images/editor/${type}-${suffix}.png`).default + '#gh-light-mode-only',
    imageDark: require(`@site/static/assets/images/editor/${type}-${suffix}.dark.png`).default + '#gh-dark-mode-only',
    url: `pathname:///${urlBase}/?${paramName}=${type}`,
  }));
}

function resolveDocspaceCards(cards: CardDef[]): ResolvedCard[] {
  return cards.map(({ type, name, description }) => ({
    type, name, description,
    image: require(`@site/static/assets/images/docspace/${type}-mode.png`).default + '#gh-light-mode-only',
    imageDark: require(`@site/static/assets/images/docspace/${type}-mode.dark.png`).default + '#gh-dark-mode-only',
    url: `pathname:///docspace-playground/?mode=${type}`,
  }));
}

export function ConfigPlaygroundCardsRow(): ReactNode {
  return <CardsRow cards={resolveEditorCards(CONFIG_PLAYGROUNDS, 'playground', 'editor', 'config-playground')} searchParams={[{ script: 'config' }]} />;
}

export function DocSpacePlaygroundCardsRow(): ReactNode {
  return <CardsRow cards={resolveDocspaceCards(DOCSPACE_PLAYGROUNDS)} />;
}

interface PlaygroundCardsRowProps {
  searchParams?: { [parameter: string]: string }[]
}

export function PlaygroundCardsRow({ searchParams }: PlaygroundCardsRowProps): ReactNode {
  return <CardsRow cards={resolveEditorCards(PLAYGROUNDS, 'playground', 'editor')} searchParams={searchParams} />;
}