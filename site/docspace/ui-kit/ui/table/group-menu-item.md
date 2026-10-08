---
description: "GroupMenuItem is one action button of a TableGroupMenu, the toolbar that replaces the table header while rows are selected."
custom_edit_url: "https://github.com/ONLYOFFICE/docspace-ui-kit-react/blob/9954315f61fd4830b7ea0582c3d58bee0e85d0aa/components/table/sub-components/group-menu-item/GroupMenuItem.stories.tsx"
---

import ThemedImage from '@theme/ThemedImage';

import APITable from '@site/src/components/APITable/APITable';

# GroupMenuItem

GroupMenuItem is one action button of a TableGroupMenu, the toolbar that replaces the table header while rows are selected.

The Table README describes it in full.

<ThemedImage alt="GroupMenuItem" width={112} sources={{ light: require('./group-menu-item--primary-light.png').default, dark: require('./group-menu-item--primary-dark.png').default }} />

## Props

<APITable>

| Property | Type | Description |
| --- | --- | --- |
| `item` | `TGroupMenuItem` | The action: its label, icon URL, tooltip, click handler, and the options of its menu when it has one. |
| `isBlocked`? | `booleanundefined` | Greys the button out and ignores clicks on it. Default: `false`. |
| `dataTestId`? | `stringundefined` | Value of the item's data-testid attribute. Default: `group-menu-item`. |

</APITable>

## Stories

### Default

A single action applied to every selected row with one click, the most common entry of a group menu; change any other prop live in the Controls panel below.

<ThemedImage alt="Default" width={112} sources={{ light: require('./group-menu-item--default-light.png').default, dark: require('./group-menu-item--default-dark.png').default }} />

### With Dropdown

An action with variants: click the button and pick one of its options from the menu under it (`withDropDown`, `options`).

<ThemedImage alt="With Dropdown" width={112} sources={{ light: require('./group-menu-item--with-dropdown-light.png').default, dark: require('./group-menu-item--with-dropdown-dark.png').default }} />

### Blocked

The same button greyed out and ignoring clicks, while an operation on the selection is still running (`isBlocked`).

<ThemedImage alt="Blocked" width={80} sources={{ light: require('./group-menu-item--blocked-light.png').default, dark: require('./group-menu-item--blocked-dark.png').default }} />
