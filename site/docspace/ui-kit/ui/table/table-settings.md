---
description: "TableSettings is the cog at the end of a TableHeader that opens a list of the columns, each with a checkbox that shows or hides it."
custom_edit_url: "https://github.com/ONLYOFFICE/docspace-ui-kit-react/blob/9954315f61fd4830b7ea0582c3d58bee0e85d0aa/components/table/sub-components/table-settings/TableSettings.stories.tsx"
---

import ThemedImage from '@theme/ThemedImage';

import APITable from '@site/src/components/APITable/APITable';

# TableSettings

TableSettings is the cog at the end of a TableHeader that opens a list of the columns, each with a checkbox that shows or hides it.

The Table README describes it in full.

<ThemedImage alt="TableSettings" width={28} sources={{ light: require('./table-settings--primary-light.png').default, dark: require('./table-settings--primary-dark.png').default }} />

## Props

<APITable>

| Property | Type | Description |
| --- | --- | --- |
| `columns` | `TTableColumn[]` | The table's columns; only those with an onChange and without isDisabled get a checkbox. |
| `disableSettings`? | `booleanundefined` | Greys the cog out and stops the list of columns opening. Default: `false`. |

</APITable>

## Stories

### Default

The cog that lets a user choose which columns to see; click it to open the list, where Modified is unticked because that column is hidden.

<ThemedImage alt="Default" width={28} sources={{ light: require('./table-settings--default-light.png').default, dark: require('./table-settings--default-dark.png').default }} />

### Disabled

A greyed-out cog that does not open, for the moments the column set must not change, such as while rows are reordered (`disableSettings`).

<ThemedImage alt="Disabled" width={28} sources={{ light: require('./table-settings--disabled-light.png').default, dark: require('./table-settings--disabled-dark.png').default }} />

### With Locked Columns

Click the cog: only Type and Modified are listed. Name is marked `isDisabled` and Size has no `onChange`, so neither can be hidden, which keeps the column that identifies a row always on screen.

<ThemedImage alt="With Locked Columns" width={28} sources={{ light: require('./table-settings--with-locked-columns-light.png').default, dark: require('./table-settings--with-locked-columns-dark.png').default }} />
