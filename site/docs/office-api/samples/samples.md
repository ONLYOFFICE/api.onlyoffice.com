---
sidebar_position: -1
---

import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

# Office API samples

The following examples will show you how to use ONLYOFFICE Office API to create and edit different types of documents.

## Text document editor

<DocCardList items={[...[...useCurrentSidebarCategory().items[0].items]]} />

## Spreadsheet editor

<DocCardList items={[...[...useCurrentSidebarCategory().items[1].items]]} />

## Presentation editor

<DocCardList items={[...[useCurrentSidebarCategory().items[2].items[0], ...useCurrentSidebarCategory().items[2].items.slice(2)]]} />

## PDF editor

<DocCardList items={[...[...useCurrentSidebarCategory().items[3].items]]} />
