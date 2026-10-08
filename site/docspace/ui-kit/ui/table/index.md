---
description: "Columnar list with resizable, sortable and hideable columns, laid out by a CSS grid the header writes."
custom_edit_url: "https://github.com/ONLYOFFICE/docspace-ui-kit-react/blob/9954315f61fd4830b7ea0582c3d58bee0e85d0aa/components/table/README.md"
---

import APITable from '@site/src/components/APITable/APITable';

# Table

Columnar list with resizable, sortable and hideable columns, laid out by a CSS grid the header
writes. Six components that only work together, and only one table to a page.

## Use this when / not when

- Use for data the user reads across and sorts: files, members, sessions, anything with columns
  worth resizing and hiding.
- Not for a list of items with one line each — [`Rows`](../rows/index.md) is the portal's own
  list, and a flex column of your own is smaller than either.
- Not for a short, fixed table. This one persists column widths in `localStorage`, measures the
  container and rewrites a grid on every resize; a `<table>` element of your own does not.
- Not twice on one page. The container's id, the header's id and the column ids are all
  literal.

## Import

```ts
import {
  TableBody,
  TableCell,
  TableContainer,
  TableHeader,
  TableRow,
} from "@onlyoffice/apps-ui-kit/components/table";
```

Also exported from the root barrel `@onlyoffice/apps-ui-kit`.

None of the props types are exported either — `TTableColumn` and `TGroupMenuItem` are, and they
are the two you write by hand.

Needs `ThemeProvider` from `@onlyoffice/apps-ui-kit/providers/theme`, and
`TranslationProvider` from `@onlyoffice/apps-ui-kit/providers/translation` for the group menu's
own labels.

## Minimal example

The header needs the container's ref to write the grid on it, and a `columnStorageName` to save
the widths under.

```tsx
import { useRef } from "react";
import {
  TableBody,
  TableCell,
  TableContainer,
  TableHeader,
  type TTableColumn,
} from "@onlyoffice/apps-ui-kit/components/table";

const COLUMNS: TTableColumn[] = [
  { key: "name", title: "Name", enable: true, resizable: true },
  { key: "role", title: "Role", enable: true },
];

export function MemberTable({ members }: { members: string[] }) {
  const container = useRef<HTMLDivElement>(null);

  return (
    <TableContainer forwardedRef={container} useReactWindow={false}>
      <TableHeader
        containerRef={container}
        columns={COLUMNS}
        columnStorageName="membersTableColumns"
        columnInfoPanelStorageName="membersTableColumnsInfoPanel"
        sectionWidth={960}
        useReactWindow={false}
        showSettings={false}
      />
      <TableBody
        columnStorageName="membersTableColumns"
        columnInfoPanelStorageName="membersTableColumnsInfoPanel"
        filesLength={members.length}
        itemCount={members.length}
        itemHeight={41}
        hasMoreFiles={false}
        useReactWindow={false}
        fetchMoreFiles={() => Promise.resolve()}
      >
        {members.map((name) => (
          <TableCell key={name}>{name}</TableCell>
        ))}
      </TableBody>
    </TableContainer>
  );
}
```

## Props

Each part has its own props. `TTableColumn`, the shape of an entry in `columns`, is where most
of the table's behaviour is configured.

### `TableContainer`


<APITable name="TableContainer">

| Property | Type | Description |
| --- | --- | --- |
| `forwardedRef` | `React.Ref<HTMLDivElement>` | Ref of the container element, which the header needs to set the grid on. |
| `useReactWindow` | `boolean` | Whether the body inside is virtualised. It only switches a class here. |
| `children`? | `React.ReactNode` | The header, the group menu and the body. |
| `className`? | `string` | Applied to the container. |
| `noSelect`? | `boolean` | Disables text selection inside the table. |

</APITable>

### `TableHeader`


<APITable name="TableHeader">

| Property | Type | Description |
| --- | --- | --- |
| `columns` | `TTableColumn[]` | The columns, in order. The header also calls a column's `onChange` itself when the table is sorted by a column that is not enabled. |
| `columnStorageName` | `string` | `localStorage` key the column widths are saved under. It is required and has to be unique per table, or two tables overwrite each other's layout. |
| `containerRef` | `{ current: HTMLDivElement \| null; }` | Ref of the `TableContainer`, whose `grid-template-columns` this component writes. |
| `sectionWidth` | `number` | Width of the section around the table, in pixels. |
| `showSettings` | `boolean` | Whether the settings cog is rendered at the end of the header. Default: `true`. |
| `useReactWindow` | `boolean` | Whether the body is virtualised, which changes how the rows are re-laid out. Default: `false`. |
| `columnInfoPanelStorageName`? | `string` | `localStorage` key used instead of `columnStorageName` while the info panel is open. |
| `infoPanelVisible`? | `boolean` | Tells the header to use the info-panel storage key and its narrower layout. |
| `isIndexEditingMode`? | `boolean` | Disables the settings cog while the rows are being reordered. |
| `isLengthenHeader`? | `boolean` | Lets the header run past the table's width. |
| `onClick`? | `() => void` | Called on a click on the header. |
| `resetColumnsSize`? | `boolean` | Discards the saved widths and measures the columns again. |
| `setHideColumns`? | `(value: boolean) => void` | Called when the header runs out of room and hides its columns. |
| `settingsTitle`? | `string` | Hover tooltip of the settings cog. |
| `sortBy`? | `string` | Field the table is sorted by; the matching column is highlighted. |
| `sorted`? | `boolean` | Whether the sort is descending, which turns the arrow. |
| `sortingVisible`? | `boolean` | Whether the sort arrows are rendered and the cells react to a click. Default: `true`. |
| `style`? | `React.CSSProperties` | Ignored. Nothing reads this prop. |
| `tagRef`? | `((node: HTMLDivElement) => void) \| React.ForwardedRef<HTMLDivElement>` | Ref handed to the cell of the column that asks for it with `withTagRef`. |
| `withoutWideColumn`? | `boolean` | Stops the last column being stretched to fill the leftover width. |

</APITable>

### `TableBody`


<APITable name="TableBody">

| Property | Type | Description |
| --- | --- | --- |
| `children` | `React.ReactNode[]` | The rows. It must be an array, one entry per row. |
| `columnStorageName` | `string` | `localStorage` key of the column widths. The body renders **nothing but an empty element** unless this and `columnInfoPanelStorageName` are both set. |
| `fetchMoreFiles` | `(params: IndexRange) => Promise<void>` | Called with the range to load when the user scrolls near the end. |
| `filesLength` | `number` | How many rows are loaded so far. |
| `hasMoreFiles` | `boolean` | Whether there is another page to ask for. |
| `itemCount` | `number` | How many rows there are in total. |
| `itemHeight` | `number` | Height of one row in pixels, the same for every row. Default: `41`. |
| `useReactWindow` | `boolean` | Whether the rows are virtualised. Default: `true`. |
| `columnInfoPanelStorageName`? | `string` | The info-panel variant of that key. It is as required as the other one. |
| `infoPanelVisible`? | `boolean` | Narrows the body for an open info panel. Default: `false`. |
| `isIndexEditingMode`? | `boolean` | Passed through while the rows are being reordered. |
| `onScroll`? | `() => void` | Called as the list scrolls. Only with virtualisation on. |

</APITable>

### `TableRow`


<APITable name="TableRow">

| Property | Type | Description |
| --- | --- | --- |
| `children` | `React.ReactNode` | The row's cells, normally `TableCell`s, one per column. |
| `badgeUrl`? | `string` | URL of the badge image shown in the context menu's header. |
| `checked`? | `boolean` | Highlights the row as selected. There is no checkbox here — put one in a cell. |
| `className`? | `string` | Applied to the row. |
| `contextMenuCellStyle`? | `React.CSSProperties` | Applied to the cell that holds the context button. |
| `contextMenuTestId`? | `string` | Value of `data-testid` on the context menu. |
| `contextOptions`? | `ContextMenuModel[]` | Items of the context menu. Its **presence** is what renders the context button — an empty array renders a spacer instead. |
| `dataTestId`? | `string` | Value of `data-testid` on the row. Default: `"table-row"`. |
| `dragging`? | `boolean` | Dims the row while it is being dragged. |
| `fileContextClick`? | `(value?: boolean) => void` | Called when the context menu is asked for, with `true` for a right-click. |
| `forwardedRef`? | `React.ForwardedRef<HTMLDivElement>` | Ref of the row element. |
| `getContextModel`? | `() => ContextMenuModel[]` | Builds the context menu's items when it opens. |
| `hideColumns`? | `boolean` | Applies the narrow layout the header asks for when it runs out of room. |
| `isActive`? | `boolean` | Highlights the row as the one the context menu belongs to. |
| `isIndexEditingMode`? | `boolean` | Hides the context button while the rows are being reordered. |
| `onClick`? | `(e: React.MouseEvent) => void` | Called on a click anywhere in the row. |
| `onDoubleClick`? | `(e: React.MouseEvent) => void` | Called on a double click anywhere in the row. |
| `onHideContextMenu`? | `() => void` | Called when the context menu closes. |
| `onMouseEnter`? | `(e: React.MouseEvent) => void` | Called when the pointer enters the row. |
| `onMouseLeave`? | `(e: React.MouseEvent) => void` | Called when the pointer leaves the row. |
| `selectionProp`? | `{ className?: string; value?: string; }` | Class and value spread onto the cell that holds the context button. |
| `style`? | `React.CSSProperties` | Applied to the row. The header overwrites the grid columns of every row. |
| `title`? | `string` | Hover tooltip of the context button. |

</APITable>

### `TableCell`


<APITable name="TableCell">

| Property | Type | Description |
| --- | --- | --- |
| `checked`? | `boolean` | Applies the selected styling. |
| `children`? | `React.ReactNode` | Content of the cell. |
| `className`? | `string` | Applied to the cell. |
| `dataTestId`? | `string` | Value of `data-testid` on the cell. Default: `"table-cell"`. |
| `documentTitle`? | `string` | Written to the element as `data-document-title`. |
| `forwardedRef`? | `React.ForwardedRef<HTMLDivElement>` | Ref of the cell element. |
| `hasAccess`? | `boolean` | Applies the styling of a cell whose row the user may act on. |
| `style`? | `React.CSSProperties` | Applied to the cell. |
| `value`? | `string` | Written to the element as a `value` attribute, which drag and drop reads. |

</APITable>

### `TableGroupMenu`


<APITable name="TableGroupMenu">

| Property | Type | Description |
| --- | --- | --- |
| `headerMenu` | `TGroupMenuItem[]` | The buttons of the menu, in order. |
| `isChecked` | `boolean` | Whether the select-all checkbox is ticked. |
| `isIndeterminate` | `boolean` | Whether it is drawn as partly ticked. |
| `onChange` | `(isChecked: boolean) => void` | Called with the new state when the select-all checkbox changes. |
| `withoutInfoPanelToggler` | `boolean` | Whether the info-panel button at the end is left out. |
| `checkboxMargin`? | `string` | Margin around that checkbox, as a CSS length. |
| `checkboxOptions`? | `React.ReactElement<{ children?: React.ReactNode; }, string \| React.JSXElementConstructor<any>>` | Element whose children become the options of the selection combo box. |
| `headerLabel`? | `string` | Text shown instead of the select-all checkbox. |
| `isBlocked`? | `boolean` | Greys every button out. |
| `isCloseable`? | `boolean` | Whether a close cross is rendered. It comes with `onCloseClick` or not at all. |
| `isInfoPanelVisible`? | `boolean` | Colours that button as active. |
| `isMobileView`? | `boolean` | Lays the buttons out for a phone. |
| `onClick`? | `() => void` | Called on a click anywhere in the menu. |
| `onCloseClick`? | `() => void` | Called by that cross. |
| `toggleInfoPanel`? | `() => void` | Called when the info-panel button is clicked. |
| `withComboBox`? | `boolean` | Whether the selection combo box is rendered next to the checkbox. Default: `true`. |

</APITable>

### `TTableColumn`


<APITable name="TTableColumn">

| Property | Type | Description |
| --- | --- | --- |
| `key` | `string` | Identifier of the column, used as its React key and in the settings menu. |
| `title` | `string` | Text in the header cell. It is rendered only while `enable` is true. |
| `active`? | `boolean` | Highlights the header cell without sorting by it. |
| `checkbox`? | `{ value: boolean; isIndeterminate: boolean; onChange: (e?: React.ChangeEvent<HTMLInputElement>) => void; }` | Renders a checkbox before the title, shown only while it is ticked or indeterminate. |
| `default`? | `boolean` | Marks the column as one of the set restored on a reset. |
| `defaultSize`? | `number` | Width the column is reset to, in pixels. |
| `enable`? | `boolean` | Whether the column is shown. A hidden column keeps its place in the grid. |
| `isDisabled`? | `boolean` | Keeps the column out of the settings menu. |
| `isShort`? | `boolean` | Renders the cell in its narrow form. |
| `minWidth`? | `number` | Narrowest the column may be dragged, in pixels. The default is 110, or 210 for the first column. |
| `onChange`? | `(key: string, e?: React.ChangeEvent<HTMLInputElement>) => void` | Called with the column's key when it is ticked in the settings menu. A column without this callback is not offered in that menu at all. |
| `onClick`? | `(sortBy: string, e: React.MouseEvent) => void` | Called when the header cell is clicked, with `sortBy` and the event. |
| `onIconClick`? | `() => void` | Called when the sort arrow is clicked, instead of `onClick`. |
| `resizable`? | `boolean` | Whether the _next_ column may be dragged by this one's right edge. |
| `sortBy`? | `string` | Field this column sorts by; the header compares it with its own `sortBy`. |
| `withTagRef`? | `boolean` | Hands the header's `tagRef` to this column's cell. |

</APITable>

## Recipes

### Sorting

A column sorts by calling back: the table does not reorder anything, and the arrow follows
`sortBy` and `sorted` on the header.

```tsx
import { useRef, useState } from "react";
import {
  TableContainer,
  TableHeader,
  type TTableColumn,
} from "@onlyoffice/apps-ui-kit/components/table";

export function SortableHeader() {
  const container = useRef<HTMLDivElement>(null);
  const [sortBy, setSortBy] = useState("name");
  const [descending, setDescending] = useState(false);

  const columns: TTableColumn[] = [
    {
      key: "name",
      title: "Name",
      enable: true,
      sortBy: "name",
      resizable: true,
      onClick: (field) => {
        setDescending(field === sortBy ? !descending : false);
        setSortBy(field);
      },
    },
    {
      key: "date",
      title: "Modified",
      enable: true,
      sortBy: "date",
      onClick: (field) => setSortBy(field),
    },
  ];

  return (
    <TableContainer forwardedRef={container} useReactWindow={false}>
      <TableHeader
        containerRef={container}
        columns={columns}
        sortBy={sortBy}
        sorted={descending}
        columnStorageName="filesTableColumns"
        columnInfoPanelStorageName="filesTableColumnsInfoPanel"
        sectionWidth={960}
        useReactWindow={false}
        showSettings
      />
    </TableContainer>
  );
}
```

### Selection, with the group menu

The group menu appears in place of the header while something is selected; the select-all
checkbox is its own, and the per-row checkbox is yours to put in a cell.

```tsx
import { useState } from "react";
import { Checkbox } from "@onlyoffice/apps-ui-kit/components/checkbox";
import {
  TableCell,
  TableGroupMenu,
  TableRow,
} from "@onlyoffice/apps-ui-kit/components/table";

export function SelectableRows({ names }: { names: string[] }) {
  const [selected, setSelected] = useState<string[]>([]);

  const toggle = (name: string) =>
    setSelected((current) =>
      current.includes(name)
        ? current.filter((item) => item !== name)
        : [...current, name],
    );

  return (
    <>
      {selected.length > 0 ? (
        <TableGroupMenu
          isChecked={selected.length === names.length}
          isIndeterminate={
            selected.length > 0 && selected.length < names.length
          }
          withoutInfoPanelToggler
          withComboBox={false}
          headerMenu={[
            {
              id: "delete",
              label: "Delete",
              title: "Delete",
              iconUrl: "",
              disabled: false,
              onClick: () => setSelected([]),
            },
          ]}
          onChange={(checked) => setSelected(checked ? names : [])}
        />
      ) : null}
      {names.map((name) => (
        <TableRow key={name} checked={selected.includes(name)}>
          <TableCell>
            <Checkbox
              isChecked={selected.includes(name)}
              onChange={() => toggle(name)}
            />
          </TableCell>
          <TableCell>{name}</TableCell>
        </TableRow>
      ))}
    </>
  );
}
```

## Behaviour the types don't state

- **The header lays out the whole table.** It computes a `grid-template-columns` string and
  writes it onto the container element and onto itself. The plain body and every `TableRow` are
  `display: contents`, so each cell is an item of the container's grid and lines up under its
  header cell. Cells have no widths of their own, and a row rendered outside that container is
  not laid out at all.
- **With `useReactWindow` the grid moves onto the rows.** The container and the body become
  full-height blocks, the virtual list wraps each row in a `.table-list-item` element whose grid
  is read from the stored widths, and the header rewrites every `.table-list-item` (and
  `.table-row`) inside the container as it resizes.
- **The first layout.** A column with `defaultSize` gets that width, an `isShort` one its
  `minWidth`, and the `default` column 40% of what is left — all of it when no other column is
  enabled — while the other enabled columns share the remaining 60% equally, never below 110px.
  With `withoutWideColumn` every column gets an equal share.
- **Running out of room.** When the enabled columns no longer fit at their minimum widths, the
  header collapses every column to `0px` except the `default` one, which takes the free width,
  and the `isShort` and `defaultSize` ones; it greys the settings cog out and reports the change
  through `setHideColumns`.
- **`TableBody` renders an empty element unless both storage names are set.** The guard is
  `if (!columnStorageName || !columnInfoPanelStorageName) return <div />`, so a table missing
  the info-panel key shows nothing — no error, no rows. Pass both, always.
- **Column widths live in `localStorage`** under `columnStorageName`, or
  `columnInfoPanelStorageName` while `infoPanelVisible` is set. Two tables sharing a key
  overwrite each other's layout, and a stored string whose column count no longer matches makes
  the header reset the widths.
- **The ids are literal.** The container is `#table-container`, the header
  `#table-container_caption-header`, and each header cell `#column_<index>`; the virtual list
  measures the first of those by id. One table to a page.
- **Only columns with an `onChange` appear in the settings menu**, and `isDisabled` keeps a
  column out of it, so a column that must always show cannot be unticked. Each entry is a
  checkbox labelled with the column's `title` and ticked while `enable` is set; ticking it calls
  `onChange` with the column's key and changes nothing else — flipping `enable` and storing the
  choice is the caller's job. The list stays open across ticks and closes on a click anywhere
  else or on the cog again. A column whose `enable` is false keeps its slot in the grid but
  renders no title.
- **The sort arrow belongs to a column with an `onClick`.** It shows while the pointer is over
  the header cell or while the column is the one sorted by (or `active`), and it is turned over
  while `sorted` is off. A click on the title calls `onClick` with the column's `sortBy`; a
  click on the arrow calls `onIconClick` instead when the column has one. With `sortingVisible`
  off the arrow is gone and clicks do nothing.
- `isShort` narrows the space a header cell keeps for the resize handle from 22px to 12px, for
  a narrow column such as a row number.
- **`resizable` on a column describes its neighbour.** The handle is drawn on a cell when the
  _next_ column is resizable, and dragging it moves the boundary between the two. The first
  column cannot go below 210px, the rest below 110px or their own `minWidth`.
- **`TableRow` renders the context button from the presence of `contextOptions`**, like
  [`Row`](../rows/row.md), and the button is a
  [`ContextMenuButton`](../interactive-elements/context-menu-button.md) in `toggle` mode, so the row's own
  right-click handler is what opens the menu. The context menu shows `contextOptions`, or the
  items `getContextModel` builds at the moment it opens.
- **`checked` and `isActive` paint nothing on the row.** `checked` adds a `checked` class, and
  on a device with hover, children marked `create-share-link` stay hidden until the row is
  hovered, checked or active; the highlight itself is the caller's styles. While `dragging` is set, children marked
  `droppable-hover` are filled with the drop colour, unless the row is active or the rows are
  being reordered.
- **`isIndexEditingMode` is a reorder mode.** The header stops columns being resized and greys
  the cog out, and each row drops its context-menu cell altogether.
- **`TableCell` is a 48px box.** It has a bottom border, centres its content vertically and
  clips whatever does not fit. With `hasAccess`, a child marked `table-container_element` is
  swapped for a child marked `table-container_row-checkbox` while the pointer is over the cell;
  with `checked` the checkbox stays in place either way.
- `TableCell` and `TableRow` are memoised with a deep comparison of their props, so updating
  one row does not redraw the others.
- **Virtualisation.** With `useReactWindow`, the body mounts only the rows near the visible part
  of the section's scroller (`#sectionScroll`, or the window when there is none) and three
  beyond it, each `itemHeight` tall. While `hasMoreFiles` is set it adds two placeholder rows
  after the loaded ones and calls `fetchMoreFiles` with the range to load as they come into view.
  Without it, every row is rendered at once, which suits a short list only.
- `noSelect` on the container stops text selection anywhere in the table, for example while rows
  are being dragged. The container colours an element marked `indexing-separator`, to show where
  a dragged row will land.
- The line under the header and the group menu stops 20px short of each edge; with
  `useReactWindow` it runs the full width while the pointer is over the first row.
- The header watches the container with a `ResizeObserver` as well as the window, so it
  re-lays out when a panel opens beside it.
- `useReactWindow` defaults to `false` on the header and `true` on the body; set it the same on
  both and on the container, or the header lays out rows the body never renders.
- `TableCell` writes its `value` prop to the element as a non-standard `value` attribute, which
  drag and drop reads.
- The group menu needs translations of its own for the select-all checkbox and the selection
  combo box.
- **A `headerMenu` entry whose `disabled` is true renders nothing**, rather than a greyed
  button, so an action that does not apply to the selection disappears from the toolbar.
  `isBlocked` is the greyed state: every button and its icon, clicks ignored, for while an
  operation on the selection runs.
- The group menu lays its buttons out after a separator in a scroller that runs sideways when
  they do not fit. Each button draws the icon fetched from `iconUrl` before its label, with
  `title` as the hover tooltip, or the label when `title` is empty. On a tablet the icon sits
  above the label; on a phone the label is not drawn.
- An entry with `withDropDown` calls its `onClick` and then opens its `options` in a menu under
  the button. The menu is 354px wide when its options carry descriptions; with
  `fixedDropdownStyles` it is 161px wide and five rows high at most.
- The group menu's info-panel button sits on a round background while `isInfoPanelVisible`, and
  its icon is mirrored in a right-to-left interface; the `isCloseable` cross comes before it.

## Sub-components

<APITable name="Sub-components">

| Export           | What it is                                                                       |
| ---------------- | -------------------------------------------------------------------------------- |
| `TableContainer` | The grid the header writes to. Give it a ref and hand the same ref to the header |
| `TableHeader`    | The column titles, the resize handles, the sorting and the settings cog          |
| `TableBody`      | The rows, virtualised and paged in when `useReactWindow` is on                   |
| `TableRow`       | One row: your cells, plus the context menu at the end                            |
| `TableCell`      | One cell. It has no width of its own — the grid decides                          |
| `TableGroupMenu` | The bar that replaces the header while rows are selected                         |

</APITable>

## CSS variables

The table styles itself from the theme; the column widths are written as inline
`grid-template-columns`. The group menu reads one variable a consumer may set.

<APITable name="CSS-variables">

| Variable                             | Default | Effect                                                                                                          |
| ------------------------------------ | ------- | --------------------------------------------------------------------------------------------------------------- |
| `--table-group-menu-checkbox-margin` | `28px`  | `margin-inline-start` of the select-all checkbox or `headerLabel`, on desktop only; below it the margin is 24px |

</APITable>

The `checkboxMargin` prop writes the same variable onto the toolbar itself, so when it is set it
wins over a value set on a wrapper.

## Accessibility

- Nothing here is a table to assistive technology: every part is a `<div>`, with no `role`,
  no `columnheader`, no `aria-sort` and no row or column count. A screen reader is given a pile
  of text.
- Sorting is a click on a `<div>`; the sort arrow is an
  [`IconButton`](../interactive-elements/icon-button.md), which is not focusable either. There is no keyboard
  route to sorting, resizing or the settings menu.
- Selection is whatever [`Checkbox`](../form-controls/checkbox.md) you put in a cell — a real input,
  and the only reachable control in a row.
- The group menu's action buttons are native `<button>`s rendered by
  [`Button`](../interactive-elements/button.md): reachable with Tab and activated with Enter and Space. Each
  one's accessible name is its label, even on a phone where the label is not drawn, and
  `isBlocked` sets the native `disabled`, which takes them out of the tab order.
- Data a keyboard or screen-reader user has to work through is better served by a real
  `<table>` of your own, styled with the kit's `Text`.

## Test ids

<APITable name="Test-ids">

| Element          | `data-testid`                                        |
| ---------------- | ---------------------------------------------------- |
| The container    | `table-container`                                    |
| The header       | `table-header`                                       |
| A header cell    | `column-<key>`                                       |
| The settings cog | `table-settings`, its button `table-settings-button` |
| The body         | `table-body`                                         |
| A row            | `table-row`, overridable with `dataTestId`           |
| A cell           | `table-cell`, overridable with `dataTestId`          |
| The group menu   | `table-group-menu`                                   |

</APITable>

## Related

- [`Rows`](../rows/index.md) — the portal's one-line-per-item list.
- [`ContextMenu`](../overlays/context-menu.md) — the menu every row renders.
- [`Checkbox`](../form-controls/checkbox.md) — what selection is actually made of.

## In this section

The following components are available:

| Component | Description |
| --- | --- |
| [GroupMenuItem](./group-menu-item.md) | GroupMenuItem is one action button of a TableGroupMenu, the toolbar that replaces the table header while rows are selected. |
| [TableCell](./table-cell.md) | TableCell is one cell of a TableRow: a fixed-height box that sits in the column the table's grid gives it. |
| [TableHeaderCell](./table-header-cell.md) | TableHeaderCell is the title of one column in a TableHeader, with its sort arrow and the handle that resizes it. |
| [TableSettings](./table-settings.md) | TableSettings is the cog at the end of a TableHeader that opens a list of the columns, each with a checkbox that shows or hides it. |
| [TableBody](./table-body.md) | TableBody holds the rows of a table and, for a long list, renders only the rows in view and asks for the next page as the user scrolls. |
| [TableContainer](./table-container.md) | TableContainer is the outer element of a table, the grid that the header, the group menu and the rows are laid out in. |
| [TableGroupMenu](./table-group-menu.md) | TableGroupMenu is the toolbar that takes the place of the table header while rows are selected, with a select-all checkbox and the actions that apply to the selection. |
| [TableHeader](./table-header.md) | TableHeader is the row of column titles at the top of a table; it also decides the width of every column and writes them onto the table's grid. |
| [TableRow](./table-row.md) | TableRow is one row of a table: its cells followed by a last cell with the row's context menu button. |
