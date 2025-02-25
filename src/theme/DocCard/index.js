/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import {
  useDocById,
  findFirstSidebarItemLink,
} from '@docusaurus/plugin-content-docs/client';
import {usePluralForm} from '@docusaurus/theme-common';
import isInternalUrl from '@docusaurus/isInternalUrl';
import {translate} from '@docusaurus/Translate';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
function useCategoryItemsPlural() {
  const {selectMessage} = usePluralForm();
  return (count) =>
    selectMessage(
      count,
      translate(
        {
          message: '1 item|{count} items',
          id: 'theme.docs.DocCard.categoryDescription.plurals',
          description:
            'The default description for a category card in the generated index about how many items this category includes',
        },
        {count},
      ),
    );
}
function CardContainer({href, children}) {
  return (
    <Link
      href={href}
      className={clsx('card padding--lg', styles.cardContainer)}>
      {children}
    </Link>
  );
}
function CardLayout({href, icon, title, description}) {
  return (
    <CardContainer href={href}>
      <Heading
        as="h2"
        className={clsx('text--truncate', styles.cardTitle)}
        title={title}>
        {icon} {title}
      </Heading>
      {description && (
        <p
          className={clsx('text--truncate', styles.cardDescription)}
          title={description}>
          {description}
        </p>
      )}
    </CardContainer>
  );
}
function CardCategory({item}) {
  const href = findFirstSidebarItemLink(item);
  const categoryItemsPlural = useCategoryItemsPlural();
  // Unexpected: categories that don't have a link have been filtered upfront
  if (!href) {
    return null;
  }
  return (
    <CardLayout
      href={href}
      icon="🗃️"
      title={item.label}
      description={item.description ?? categoryItemsPlural(item.items.length)}
    />
  );
}
function CardLink({item}) {
    const icons = {
        'docs/docs-api/get-started/ready-to-use-connectors/alfresco-integration': '/assets/images/editor/connectors/alfresco.svg',
        'docs/docs-api/get-started/ready-to-use-connectors/chamilo-integration': '/assets/images/editor/connectors/chamilo.svg',
        'docs/docs-api/get-started/ready-to-use-connectors/confluence-integration': '/assets/images/editor/connectors/confluence.svg',
        'docs/docs-api/get-started/ready-to-use-connectors/drupal-integration': '/assets/images/editor/connectors/drupal.svg',
        'docs/docs-api/get-started/ready-to-use-connectors/humhub-integration': '/assets/images/editor/connectors/humhub.svg',
        'docs/docs-api/get-started/ready-to-use-connectors/jira-integration': '/assets/images/editor/connectors/jira.svg',
        'docs/docs-api/get-started/ready-to-use-connectors/liferay-integration': '/assets/images/editor/connectors/liferay.svg',
        'docs/docs-api/get-started/ready-to-use-connectors/mattermost-integration': '/assets/images/editor/connectors/mattermost.svg',
        'docs/docs-api/get-started/ready-to-use-connectors/moodle-integration': '/assets/images/editor/connectors/moodle.svg',
        'docs/docs-api/get-started/ready-to-use-connectors/nextcloud-integration': '/assets/images/editor/connectors/nextcloud.svg',
        'docs/docs-api/get-started/ready-to-use-connectors/nuxeo-integration': '/assets/images/editor/connectors/nuxeo.svg',
        'docs/docs-api/get-started/ready-to-use-connectors/odoo-integration': '/assets/images/editor/connectors/odoo.svg',
        'docs/docs-api/get-started/ready-to-use-connectors/owncloud-integration': '/assets/images/editor/connectors/owncloud.svg',
        'docs/docs-api/get-started/ready-to-use-connectors/plone-integration': '/assets/images/editor/connectors/plone.svg',
        'docs/docs-api/get-started/ready-to-use-connectors/redmine-integration': '/assets/images/editor/connectors/redmine.svg',
        'docs/docs-api/get-started/ready-to-use-connectors/sharepoint-integration': '/assets/images/editor/connectors/sharepoint.svg',
        'docs/docs-api/get-started/ready-to-use-connectors/strapi-integration': '/assets/images/editor/connectors/strapi.svg',
        'docs/docs-api/get-started/ready-to-use-connectors/suitecrm-integration': '/assets/images/editor/connectors/suitecrm.svg',
        'docs/docs-api/get-started/ready-to-use-connectors/wordpress-integration': '/assets/images/editor/connectors/wordpress.svg'
    };
    
    // Используем кастомную иконку, если есть, иначе стандартную
    const icon = icons[item.docId] 
    ? <img src={icons[item.docId]} alt={item.label} className={styles.customIcon} />
    : (isInternalUrl(item.href) ? '📄️' : '🔗'); // Фолбэк к эмодзи

    const doc = useDocById(item.docId ?? undefined);

    return (
    <CardLayout
        href={item.href}
        icon={icon}
        title={item.label}
        description={item.description ?? doc?.description}
    />
    );
}
export default function DocCard({item}) {
  switch (item.type) {
    case 'link':
      return <CardLink item={item} />;
    case 'category':
      return <CardCategory item={item} />;
    default:
      throw new Error(`unknown item type ${JSON.stringify(item)}`);
  }
}
