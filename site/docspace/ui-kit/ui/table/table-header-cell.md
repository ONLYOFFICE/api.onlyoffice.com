---
description: "TableHeaderCell is the title of one column in a TableHeader, with its sort arrow and the handle that resizes it."
custom_edit_url: "https://github.com/ONLYOFFICE/docspace-ui-kit-react/blob/9954315f61fd4830b7ea0582c3d58bee0e85d0aa/components/table/sub-components/table-header-cell/TableHeaderCell.stories.tsx"
---

import ThemedImage from '@theme/ThemedImage';

import APITable from '@site/src/components/APITable/APITable';

# TableHeaderCell

TableHeaderCell is the title of one column in a TableHeader, with its sort arrow and the handle that resizes it.

The Table README describes it in full.

<ThemedImage alt="TableHeaderCell" width={53} sources={{ light: require('./table-header-cell--primary-light.png').default, dark: require('./table-header-cell--primary-dark.png').default }} />

## Props

<APITable>

| Property | Type | Description |
| --- | --- | --- |
| `column` | `TTableColumn` | The column to render: its title, its sort field and callbacks, and the flags that shape the cell. |
| `index` | `number` | Position of the column, which becomes the cell's id column_&lt;index>. |
| `onMouseDown` | `(event: MouseEvent<Element, MouseEvent>) => void` | Called when the resize handle is pressed. |
| `resizable`? | `booleanundefined` | Draws the resize handle at the end of the cell. |
| `sorted` | `boolean` | Direction of the sort; turning it off turns the arrow over. |
| `sortBy` | `string` | Field the table is sorted by; the column with the same sortBy keeps its arrow visible. |
| `defaultSize`? | `numberundefined` | Width in pixels the column returns to when the widths are reset. |
| `sortingVisible` | `boolean` | Shows the sort arrow and lets clicks on the title and the arrow sort the table. |
| `tagRef`? | `ForwardedRef<HTMLDivElement> \| ((node: HTMLDivElement) => void) \| undefined` | Ref attached to the cell when the column asks for it with withTagRef. |
| `testId`? | `stringundefined` | Value of the cell's data-testid attribute. Default: `table-header-cell`. |

</APITable>

## Stories

### Default

The title of a column the table is not sorted by; hover it to see the arrow that sorts by this column, and change any other prop live in the Controls panel below.

<ThemedImage alt="Default" width={69} sources={{ light: require('./table-header-cell--default-light.png').default, dark: require('./table-header-cell--default-dark.png').default }} />

### Resizable

The short bar at the end of the cell is the handle a user drags to widen the column (`resizable`); here it only reports the press, since TableHeader does the resizing.

<ThemedImage alt="Resizable" width={69} sources={{ light: require('./table-header-cell--resizable-light.png').default, dark: require('./table-header-cell--resizable-dark.png').default }} />

### Sorted By This Column

The column the table is sorted by keeps its arrow on screen without a hover, so the user sees what the list is ordered by (`sortBy` matches the column's `sortBy`).

<ThemedImage alt="Sorted By This Column" width={69} sources={{ light: require('./table-header-cell--sorted-by-this-column-light.png').default, dark: require('./table-header-cell--sorted-by-this-column-dark.png').default }} />

### Without Sorting

A column that cannot sort: no arrow on hover and clicks on the title do nothing, for a list whose order is fixed (`sortingVisible` off).

<ThemedImage alt="Without Sorting" width={151} sources={{ light: require('./table-header-cell--without-sorting-light.png').default, dark: require('./table-header-cell--without-sorting-dark.png').default }} />

### With Unchecked Checkbox

A column with a select-all checkbox that nothing is ticked in yet shows only its title; the checkbox appears once a row is selected.

<ThemedImage alt="With Unchecked Checkbox" width={206} sources={{ light: require('./table-header-cell--with-unchecked-checkbox-light.png').default, dark: require('./table-header-cell--with-unchecked-checkbox-dark.png').default }} />

### With Checked Checkbox

The select-all checkbox before the title once every row is selected (`checkbox.value`); a click on it calls `checkbox.onChange`.

<ThemedImage alt="With Checked Checkbox" width={80} sources={{ light: require('./table-header-cell--with-checked-checkbox-light.png').default, dark: require('./table-header-cell--with-checked-checkbox-dark.png').default }} />

### With Indeterminate Checkbox

The same checkbox partly ticked, for a selection that covers some rows but not all (`checkbox.isIndeterminate`).

<ThemedImage alt="With Indeterminate Checkbox" width={80} sources={{ light: require('./table-header-cell--with-indeterminate-checkbox-light.png').default, dark: require('./table-header-cell--with-indeterminate-checkbox-dark.png').default }} />

### Short Column

A narrow column, such as a row number, keeps 12 pixels before its handle instead of 22, so the title is not cut off (`isShort`).

<ThemedImage alt="Short Column" width={291} sources={{ light: require('./table-header-cell--short-column-light.png').default, dark: require('./table-header-cell--short-column-dark.png').default }} />
