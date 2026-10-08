---
description: "TableRow is one row of a table: its cells followed by a last cell with the row's context menu button."
custom_edit_url: "https://github.com/ONLYOFFICE/docspace-ui-kit-react/blob/9954315f61fd4830b7ea0582c3d58bee0e85d0aa/components/table/table-row/TableRow.stories.tsx"
---

import ThemedImage from '@theme/ThemedImage';

import APITable from '@site/src/components/APITable/APITable';

# TableRow

TableRow is one row of a table: its cells followed by a last cell with the row's context menu button.

The Table README describes it in full.

<ThemedImage alt="TableRow" width={1005} sources={{ light: require('./table-row--primary-light.png').default, dark: require('./table-row--primary-dark.png').default }} />

## Props

<APITable>

| Property | Type | Description |
| --- | --- | --- |
| `fileContextClick`? | `((value?: boolean \| undefined) => void) \| undefined` | Called when the context menu is asked for, with true for a right-click. |
| `children` | `ReactNode` | The row's cells, normally one TableCell per column. |
| `contextOptions`? | `ContextMenuModel[] \| undefined` | Items of the context menu; a non-empty list renders the three-dot button, an empty one leaves a blank space instead. |
| `onHideContextMenu`? | `(() => void) \| undefined` | Called when the context menu closes. |
| `selectionProp`? | `{ className?: string \| undefined; value?: string \| undefined; } \| undefined` | Class and value spread onto the last cell, which holds the context menu button. |
| `className`? | `stringundefined` | Class applied to the row after the component's own. |
| `style`? | `CSSPropertiesundefined` | Inline styles of the row; inside a table the header overwrites its grid columns. |
| `contextMenuCellStyle`? | `CSSPropertiesundefined` | Inline styles of the last cell. |
| `title`? | `stringundefined` | Hover tooltip of the three-dot button. |
| `getContextModel`? | `(() => ContextMenuModel[]) \| undefined` | Builds the context menu items at the moment the menu opens. |
| `badgeUrl`? | `stringundefined` | URL of a badge image shown in the context menu's header. |
| `isIndexEditingMode`? | `booleanundefined` | Leaves out the last cell with the context menu button, for rows being reordered. Default: `false`. |
| `onClick`? | `((e: MouseEvent<Element, MouseEvent>) => void) \| undefined` | Called with the mouse event on a click anywhere in the row. |
| `onDoubleClick`? | `((e: MouseEvent<Element, MouseEvent>) => void) \| undefined` | Called with the mouse event on a double click anywhere in the row. |
| `forwardedRef`? | `ForwardedRef<HTMLDivElement> \| undefined` | Ref of the row element. |
| `hideColumns`? | `booleanundefined` | Adds a class for the narrow layout the header asks for when it runs out of room; the kit styles nothing with it. Default: `false`. |
| `isActive`? | `booleanundefined` | Marks the row whose context menu is open: reveals children marked create-share-link and turns off the drop highlight. Default: `false`. |
| `checked`? | `booleanundefined` | Adds a checked class to the row for the consumer's highlight and reveals children marked create-share-link. Default: `false`. |
| `dragging`? | `booleanundefined` | Fills children marked droppable-hover with the drop colour while something is dragged over the table. Default: `false`. |
| `dataTestId`? | `stringundefined` | Value of the row's data-testid attribute. Default: `table-row`. |
| `contextMenuTestId`? | `stringundefined` | Value of the context menu's data-testid attribute. |
| `onMouseEnter`? | `((e: MouseEvent<Element, MouseEvent>) => void) \| undefined` | Called when the pointer enters the row. |
| `onMouseLeave`? | `((e: MouseEvent<Element, MouseEvent>) => void) \| undefined` | Called when the pointer leaves the row. |

</APITable>

## Stories

### Default

A row with a context menu, the way rows in a file list offer their actions: right-click anywhere in the row, or click the three-dot button at its end.

<ThemedImage alt="Default" width={1005} sources={{ light: require('./table-row--default-light.png').default, dark: require('./table-row--default-dark.png').default }} />

### Index Editing Mode

While rows are being reordered the last cell with the context menu button is left out, so a drag cannot open a menu by accident (`isIndexEditingMode`).

<ThemedImage alt="Index Editing Mode" width={696} sources={{ light: require('./table-row--index-editing-mode-light.png').default, dark: require('./table-row--index-editing-mode-dark.png').default }} />
