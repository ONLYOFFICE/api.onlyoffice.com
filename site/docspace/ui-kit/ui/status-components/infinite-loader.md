---
description: "Virtualised list or grid that asks for the next page as the user scrolls towards the end."
custom_edit_url: "https://github.com/ONLYOFFICE/docspace-ui-kit-react/blob/446f115916d79a87d07b9e3dddb1e39a263784ee/components/infinite-loader/README.md"
---

import ThemedImage from '@theme/ThemedImage';

import APITable from '@site/src/components/APITable/APITable';

# InfiniteLoader

Virtualised list or grid that asks for the next page as the user scrolls towards the end. It is
built for the DocSpace portal's layout and looks for the portal's own elements by id.

<ThemedImage alt="InfiniteLoader" width={989} sources={{ light: require('./infinite-loader--primary-light.png').default, dark: require('./infinite-loader--primary-dark.png').default }} />

## Use this when / not when

- Use for thousands of rows or tiles, where rendering them all would be too slow —
  [`RowContainer`](../rows/row-container.md) and [`Table`](../table/index.md) use it for
  exactly that.
- Not in an application that is not the portal, unless you reproduce the portal's scroll
  element: this component looks for `#sectionScroll` and falls back to the window.
- Not for a list of a few dozen items. Virtualisation costs a fixed row height, a measured
  container and a scroll container; a plain list costs none of that.
- Not to show that something is loading — [`Loader`](./loader.md) or
  [`RectangleSkeleton`](../skeletons/rectangle.md) is that.

## Import

```ts
import { InfiniteLoaderComponent } from "@onlyoffice/apps-ui-kit/components/infinite-loader";
```

Also exported from the root barrel `@onlyoffice/apps-ui-kit`.

The export is named `InfiniteLoaderComponent`, not `InfiniteLoader`, and `InfiniteLoaderProps`
is **not** exported — import the type from its file path if you need it.

Needs `ThemeProvider` from `@onlyoffice/apps-ui-kit/providers/theme` for the skeletons it shows
between pages.


## Stories

### Default

Scroll the box: when the end of the loaded items comes near, the loader asks for the next range, and the new items arrive half a second later (`loadMoreItems`, logged in the Actions panel). In the `tile` layout each child is one row of the grid; here a plain box stands in for a row of tiles. Change any other prop live in the Controls panel below.

<ThemedImage alt="Default" width={989} sources={{ light: require('./infinite-loader--default-light.png').default, dark: require('./infinite-loader--default-dark.png').default }} />

### Row Layout

A list of rows of one height (`viewAs="row"`, `itemSize`). Scroll to the end: the rows after the last loaded item are skeleton rows until the next page arrives, and a jump of more than 800px, such as dragging the scrollbar, turns every row in view into a skeleton while the scrolling lasts.

<ThemedImage alt="Row Layout" width={989} sources={{ light: require('./infinite-loader--row-layout-light.png').default, dark: require('./infinite-loader--row-layout-dark.png').default }} />

### Table Layout

A table whose rows share one column layout (`viewAs="table"`). The layout is not passed as a prop: the loader reads it from `localStorage` under the key it is given (`columnStorageName`, or `columnInfoPanelStorageName` while `infoPanelVisible` is set), which lets the table header that saves the widths and the rows below stay in step. The rows not loaded yet show the table skeleton.

<ThemedImage alt="Table Layout" width={1018} sources={{ light: require('./infinite-loader--table-layout-light.png').default, dark: require('./infinite-loader--table-layout-dark.png').default }} />

### Right To Left

The row layout in a right-to-left interface: the text of each row starts at the right edge of the row instead of the left.

<ThemedImage alt="Right To Left" width={989} sources={{ light: require('./infinite-loader--right-to-left-light.png').default, dark: require('./infinite-loader--right-to-left-dark.png').default }} />

### Css Customization

The three tile variables set on one wrapper -- the variables are listed under CSS variables on this page. They size only the skeleton tiles, which appear for a moment when the box is scrolled by more than 800px at once — drag the scrollbar quickly to see them.

<ThemedImage alt="Css Customization" width={989} sources={{ light: require('./infinite-loader--css-customization-light.png').default, dark: require('./infinite-loader--css-customization-dark.png').default }} />

## Minimal example

`itemSize` is the height of every row alike, and `loadMoreItems` is called with the range to
fetch.

```tsx
import { InfiniteLoaderComponent } from "@onlyoffice/apps-ui-kit/components/infinite-loader";

export function NameList({
  names,
  total,
  loadMore,
}: {
  names: string[];
  total: number;
  loadMore: () => Promise<void>;
}) {
  return (
    <div id="rowContainer" style={{ height: 400 }}>
      <InfiniteLoaderComponent
        viewAs="row"
        itemSize={50}
        filesLength={names.length}
        itemCount={total}
        hasMoreFiles={names.length < total}
        loadMoreItems={() => loadMore()}
      >
        {names.map((name) => (
          <div key={name}>{name}</div>
        ))}
      </InfiniteLoaderComponent>
    </div>
  );
}
```

## Props


<APITable>

| Property | Type | Description |
| --- | --- | --- |
| `children` | `ReactNode[]` | The items. It must be an array, one entry per row or tile. |
| `filesLength` | `number` | How many items are loaded so far. |
| `hasMoreFiles` | `boolean` | Whether there is another page to ask for. |
| `itemCount` | `number` | How many items there are in total, loaded or not. |
| `itemSize` | `number` | Height of one row, or of one tile, in pixels. It is the same for all of them. |
| `loadMoreItems` | `(params: IndexRange) => Promise<void>` | Called with the range to load when the user scrolls near the end. |
| `viewAs` | `TViewAs` | Which layout to render: `tile` lays the children out in a grid, anything else in a list. It also picks the skeleton shown while a page loads — `table` and `row` have one, the rest show nothing. |
| `className`? | `string` | Applied to the list element. |
| `columnInfoPanelStorageName`? | `string` | The info-panel variant of that key. |
| `columnStorageName`? | `string` | `localStorage` key of the table's column widths, for the table skeleton. |
| `countTilesInRow`? | `number` | How many tiles fit on a row, in the `tile` layout. |
| `currentFolderId`? | `number \| string` | Identifier of the folder being shown, which resets the grid when it changes. |
| `infoPanelVisible`? | `boolean` | Narrows the layout for an open info panel. |
| `isLoading`? | `boolean` | Renders nothing at all while it is true. |
| `isOneTile`? | `boolean` | Lays a single tile out on its own row. |
| `onScroll`? | `() => void` | Called as the list scrolls. |
| `showSkeleton`? | `boolean` | Ignored by the list; the loader sets it itself after a long jump. |
| `smallPreview`? | `boolean` | Renders the tiles in their small form. |

</APITable>

## Recipes

### Loading

`isLoading` renders nothing at all — not a skeleton, not an empty list — so show your own
placeholder beside it.

```tsx
import { InfiniteLoaderComponent } from "@onlyoffice/apps-ui-kit/components/infinite-loader";
import { RectangleSkeleton } from "@onlyoffice/apps-ui-kit/components/rectangle";

export function LoadableList({
  names,
  isLoading,
  loadMore,
}: {
  names: string[];
  isLoading: boolean;
  loadMore: () => Promise<void>;
}) {
  if (isLoading)
    return <RectangleSkeleton width="100%" height="200px" title="Loading" />;

  return (
    <div id="rowContainer" style={{ height: 400 }}>
      <InfiniteLoaderComponent
        viewAs="row"
        itemSize={50}
        filesLength={names.length}
        itemCount={names.length}
        hasMoreFiles={false}
        loadMoreItems={() => loadMore()}
      >
        {names.map((name) => (
          <div key={name}>{name}</div>
        ))}
      </InfiniteLoaderComponent>
    </div>
  );
}
```

## Behaviour the types don't state

- **It scrolls the portal's element, not itself.** The component looks for
  `#sectionScroll .scroll-wrapper > .scroller`, or `#customScrollBar`'s on a viewport of 600px
  or less — the inner elements of a [`Scrollbar`](../layout/scrollbar.md) — and falls back to
  the window when neither exists. Nothing here creates a scrolling region of its own.
- **The width comes from an element found by a literal id**: `#table-container` for the `table`
  layout, `#tileContainer` for `tile` and `#rowContainer` for every other. Without the right one
  in the document the items are laid out at a width of zero, which is why the examples above
  put the id on the wrapper.
- **Every row and table row is `itemSize` tall**, and a taller one is clipped. The `tile` layout
  ignores `itemSize`: it sizes each grid row by the class name of the child in it — `isRoom`,
  `isFolder`, `isFile`, `isTemplate`, or a section header otherwise — so tiles of one kind share
  a row height.
- **The `table` layout takes its columns from `localStorage`.** Each row is a CSS grid whose
  `grid-template-columns` is the value saved under `columnStorageName`, or under
  `columnInfoPanelStorageName` while `infoPanelVisible` is set. Both keys are required there:
  rendering a table row without either throws.
- **Rows not loaded yet are skeletons.** In the `row` and `table` layouts every position past
  `filesLength` shows a `RowsSkeleton` or `TableSkeleton` row until its page arrives; the
  `tile` layout shows no placeholder for them.
- **A long jump in the scroll position shows skeletons for 200ms.** The component watches the
  scroll and, when it moves more than 800px in one event, swaps the rows still scrolling for
  skeletons briefly — `TileSkeleton`s in the `tile` layout, `RowsSkeleton` or `TableSkeleton`
  in `row` and `table`, and nothing for any other `viewAs`.
- `isLoading` returns `null`, so the region collapses rather than holding its height.
- `children` has to be an array; the loader indexes it and asks for two more entries than there
  are when `hasMoreFiles` is set, to leave room for the loading rows.

## CSS variables

Set these on an ancestor. Everything else the stylesheet defines is private to it.

<APITable>

| Variable                          | Default        | Effect                                                                                                                        |
| --------------------------------- | -------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `--infinite-loader-tile-gap`      | `14px 16px`    | Gap between the skeleton tiles of a `tile` row during a long scroll jump; on tablet and smaller screens it is fixed at `14px` |
| `--infinite-loader-tile-min-size` | `216px`        | Smallest width of those skeleton tiles                                                                                        |
| `--infinite-loader-tile-max-size` | `360px`        | Largest width of those skeleton tiles                                                                                         |
| `--infinite-loader-list-width`    | measured width | Width of the list in the `row` and `table` layouts, in place of the measured container width                                  |

</APITable>

The three tile variables size only the skeletons shown for a moment after a jump of more than
800px; the real tiles are whatever the children render. `--infinite-loader-table-width` is not
one to set: the list writes the measured width into it on its own element, overwriting a value
from outside, so use `--infinite-loader-list-width` instead.

## Accessibility

- The list is a stack of `<div>`s with no list or grid roles, and only the items near the
  viewport exist in the DOM — assistive technology is given no total and no position.
- Nothing here is focusable, and the scrolling element belongs to whatever wraps the component.
- A list a keyboard user has to work through is better built without virtualisation.

## Test ids

<APITable>

| Element  | `data-testid`                    |
| -------- | -------------------------------- |
| The list | `infinite-loader-container-list` |
| The grid | `infinite-loader-container-grid` |

</APITable>

Neither can be overridden by a prop.

## Related

- [`RowContainer`](../rows/row-container.md) — the row list built on this.
- [`Table`](../table/index.md) — the table body built on this.
- [`Scrollbar`](../layout/scrollbar.md) — the scrolling region this looks for.
