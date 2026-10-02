---
description: "GroupMenuItem is one action button of a TableGroupMenu, the toolbar that replaces the table header while rows are selected.\n\nThe Table README describes it in full."
custom_edit_url: "https://github.com/ONLYOFFICE/docspace-ui-kit-react/blob/446f115916d79a87d07b9e3dddb1e39a263784ee/components/table/sub-components/group-menu-item/GroupMenuItem.stories.tsx"
---

import ThemedImage from '@theme/ThemedImage';

import APITable from '@site/src/components/APITable/APITable';

# GroupMenuItem

GroupMenuItem is one action button of a TableGroupMenu, the toolbar that replaces the table header while rows are selected.

The Table README describes it in full.

<ThemedImage alt="GroupMenuItem" width={112} sources={{ light: require('./groupmenuitem--primary-light.png').default, dark: require('./groupmenuitem--primary-dark.png').default }} />

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

<ThemedImage alt="Default" width={112} sources={{ light: require('./groupmenuitem--default-light.png').default, dark: require('./groupmenuitem--default-dark.png').default }} />

### With Dropdown

An action with variants: click the button and pick one of its options from the menu under it (`withDropDown`, `options`).

<ThemedImage alt="With Dropdown" width={112} sources={{ light: require('./groupmenuitem--with-dropdown-light.png').default, dark: require('./groupmenuitem--with-dropdown-dark.png').default }} />

### Blocked

The same button greyed out and ignoring clicks, while an operation on the selection is still running (`isBlocked`).

<ThemedImage alt="Blocked" width={112} sources={{ light: require('./groupmenuitem--blocked-light.png').default, dark: require('./groupmenuitem--blocked-dark.png').default }} />
