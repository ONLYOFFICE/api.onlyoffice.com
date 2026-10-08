---
description: "TableCell is one cell of a TableRow: a fixed-height box that sits in the column the table's grid gives it."
custom_edit_url: "https://github.com/ONLYOFFICE/docspace-ui-kit-react/blob/9954315f61fd4830b7ea0582c3d58bee0e85d0aa/components/table/sub-components/table-cell/TableCell.stories.tsx"
---

import ThemedImage from '@theme/ThemedImage';

import APITable from '@site/src/components/APITable/APITable';

# TableCell

TableCell is one cell of a TableRow: a fixed-height box that sits in the column the table's grid gives it.

The Table README describes it in full.

<ThemedImage alt="TableCell" width={1014} sources={{ light: require('./table-cell--primary-light.png').default, dark: require('./table-cell--primary-dark.png').default }} />

## Props

<APITable>

| Property | Type | Description |
| --- | --- | --- |
| `className`? | `stringundefined` | Class applied to the cell after the component's own. |
| `hasAccess`? | `booleanundefined` | Shows the child marked table-container_row-checkbox in place of the child marked table-container_element while the pointer is over the cell. Default: `false`. |
| `checked`? | `booleanundefined` | Shows the child marked table-container_row-checkbox in place of the child marked table-container_element all the time. Default: `false`. |
| `forwardedRef`? | `ForwardedRef<HTMLDivElement> \| undefined` | Ref of the cell element. |
| `style`? | `CSSPropertiesundefined` | Inline styles applied to the cell. |
| `children`? | `ReactNode` | Content of the cell: text or elements. |
| `value`? | `stringundefined` | Written onto the cell as a value attribute, which drag and drop reads to identify the item. |
| `dataTestId`? | `stringundefined` | Value of the cell's data-testid attribute. Default: `table-cell`. |
| `documentTitle`? | `stringundefined` | Written onto the cell as a data-document-title attribute. |

</APITable>

## Stories

### Default

A cell holding plain text, the most common case; change any other prop live in the Controls panel below.

<ThemedImage alt="Default" width={1014} sources={{ light: require('./table-cell--default-light.png').default, dark: require('./table-cell--default-dark.png').default }} />

### With Element

An avatar that turns into a checkbox when the pointer is over the cell, so a row can be picked without a separate checkbox column (`hasAccess`). Hover the cell to see the swap.

<ThemedImage alt="With Element" width={57} sources={{ light: require('./table-cell--with-element-light.png').default, dark: require('./table-cell--with-element-dark.png').default }} />

### With Element Checked

Once the row is selected the checkbox stays in place of the avatar even without the pointer over it (`checked`).

<ThemedImage alt="With Element Checked" width={57} sources={{ light: require('./table-cell--with-element-checked-light.png').default, dark: require('./table-cell--with-element-checked-dark.png').default }} />

### With Element No Access

Without `hasAccess` the cell keeps the avatar on hover and never shows the checkbox, for a row the user may not select.

<ThemedImage alt="With Element No Access" width={48} sources={{ light: require('./table-cell--with-element-no-access-light.png').default, dark: require('./table-cell--with-element-no-access-dark.png').default }} />
