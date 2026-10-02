---
description: "Scrolling list the rows go in, virtualised and paged in as the user reaches the end."
custom_edit_url: "https://github.com/ONLYOFFICE/docspace-ui-kit-react/blob/446f115916d79a87d07b9e3dddb1e39a263784ee/components/rows/row-container/README.md"
---

import ThemedImage from '@theme/ThemedImage';

import APITable from '@site/src/components/APITable/APITable';

# RowContainer

Scrolling list the rows go in, virtualised and paged in as the user reaches the end. Its
virtualisation is built for the DocSpace portal and needs the portal's own scroll element.

<ThemedImage alt="RowContainer" width={1007} sources={{ light: require('./row-container--primary-light.png').default, dark: require('./row-container--primary-dark.png').default }} />

## Use this when / not when

- Use around [`Row`](./row.md)s, which is the only thing it is laid out for.
- Not outside the portal with virtualisation on: the list looks for the portal's scroll
  container and measures its width through a literal element id. Pass `useReactWindow={false}`
  and the container becomes a plain `<div>` that renders every child.
- Not for a list with columns — [`Table`](../table/index.md) — and not for a handful of
  items, which need no container at all.

## Import

```ts
import { RowContainer } from "@onlyoffice/apps-ui-kit/components/rows/row-container";
```

`components/index.ts` does not list this folder, but it lists `rows`, and `export *`
is transitive — so the name arrives from `@onlyoffice/apps-ui-kit/components/rows` and from
the root barrel `@onlyoffice/apps-ui-kit` as well.

`RowContainerProps` is **not** exported — type a wrapper's props yourself, or import the type
from its file path.

Needs `ThemeProvider` from `@onlyoffice/apps-ui-kit/providers/theme` for the rows inside it.


## Stories

### Default

A short list of twenty files rendered as it is, with virtualisation off (`useReactWindow`), which is how the list works on a page that has no portal section around it. Select the text of a row to see that selection is allowed; change any other prop live in the Controls panel below.

<ThemedImage alt="Default" width={1007} sources={{ light: require('./row-container--default-light.png').default, dark: require('./row-container--default-dark.png').default }} />

### No Text Selection

A list whose rows are picked with clicks and drags rather than read and copied: dragging across a title selects no text (`noSelect`).

<ThemedImage alt="No Text Selection" width={1007} sources={{ light: require('./row-container--no-text-selection-light.png').default, dark: require('./row-container--no-text-selection-dark.png').default }} />

### Virtualised

A list of a hundred files of which twenty are loaded: scroll the box and only the rows in view are mounted, each 56px high (`itemHeight`). Near the end of the loaded rows the list asks for the next range (`fetchMoreFiles`, logged in the Actions panel) and shows skeleton rows until it arrives half a second later.

<ThemedImage alt="Virtualised" width={991} sources={{ light: require('./row-container--virtualised-light.png').default, dark: require('./row-container--virtualised-dark.png').default }} />

## Minimal example

Without virtualisation the container is a plain `<div>` as tall as its rows. It sets no
height and no scrollbar of its own, and `manualHeight` is not read in this mode; a list that
has to scroll gets both from a wrapper of yours.

```tsx
import { RowContainer } from "@onlyoffice/apps-ui-kit/components/rows/row-container";
import { Row } from "@onlyoffice/apps-ui-kit/components/rows/row";
import { RowContent } from "@onlyoffice/apps-ui-kit/components/rows/row-content";
import { Text } from "@onlyoffice/apps-ui-kit/components/text";

export function FileList({ names }: { names: string[] }) {
  return (
    <RowContainer useReactWindow={false}>
      {names.map((name) => (
        <Row key={name} contextOptions={[]}>
          <RowContent>
            <Text fontWeight={600}>{name}</Text>
            <span />
          </RowContent>
        </Row>
      ))}
    </RowContainer>
  );
}
```

## Props


<APITable>

| Property | Type | Description |
| --- | --- | --- |
| `children` | `ReactNode[]` | The rows. It must be an array, one entry per row. |
| `className`? | `string` | Applied to the container. |
| `fetchMoreFiles`? | `(params: IndexRange) => Promise<void>` | Called with the range to load when the user scrolls near the end. |
| `filesLength`? | `number` | How many rows are loaded so far. Read by the virtual list only. |
| `hasMoreFiles`? | `boolean` | Whether there is another page to ask for. |
| `id`? | `string` | Id of the container. The virtual list finds the container by the literal id `rowContainer` to measure its width, so changing this — or rendering two containers — leaves the rows with a width of zero. Default: `"rowContainer"`. |
| `itemCount`? | `number` | How many rows there are in total. Read by the virtual list only. |
| `itemHeight`? | `number` | Height of one row in pixels, which the virtualised list uses for every row alike. A row that is taller is clipped. Default: `50`. |
| `manualHeight`? | `string` | Height of the container as a CSS length, read only while `useReactWindow` is on. Without it the container is 100% of its parent, which has to have a height of its own; with virtualisation off the container is as tall as its rows and this prop does nothing. |
| `noSelect`? | `boolean` | Disables text selection, which is on by default inside the container. |
| `onScroll`? | `() => void` | Sets a callback function that is called when the list scroll positions change |
| `style`? | `CSSProperties` | Applied to the container. |
| `useReactWindow`? | `boolean` | Whether the rows are virtualised and paged in as the user scrolls. Turn it off for a short list: the virtual list needs the portal's own scroll container and measures its width by a literal element id. Default: `true`. |

</APITable>

## Recipes

### Paging in more rows

The four `…Files` props are the whole of the infinite loader's contract: how many rows are
loaded, how many there are, whether to ask for more, and what to call.

```tsx
import { RowContainer } from "@onlyoffice/apps-ui-kit/components/rows/row-container";
import { Row } from "@onlyoffice/apps-ui-kit/components/rows/row";
import { RowContent } from "@onlyoffice/apps-ui-kit/components/rows/row-content";
import { Text } from "@onlyoffice/apps-ui-kit/components/text";

export function PagedList({
  names,
  total,
  loadMore,
}: {
  names: string[];
  total: number;
  loadMore: () => Promise<void>;
}) {
  return (
    <RowContainer
      itemHeight={50}
      filesLength={names.length}
      itemCount={total}
      hasMoreFiles={names.length < total}
      fetchMoreFiles={() => loadMore()}
    >
      {names.map((name) => (
        <Row key={name} contextOptions={[]}>
          <RowContent>
            <Text fontWeight={600}>{name}</Text>
            <span />
          </RowContent>
        </Row>
      ))}
    </RowContainer>
  );
}
```

## Behaviour the types don't state

- **The virtual list measures its width through `document.getElementById("rowContainer")`.**
  That is this component's default `id`. Change it, or render two containers on a page, and the
  rows are laid out at a width of zero.
- **It scrolls the portal's scroll element, not itself.** The loader looks for
  `#sectionScroll .scroll-wrapper > .scroller`, or `#customScrollBar`'s on a phone, and falls
  back to the window when neither is there. Outside the portal that fallback is what you get,
  so a container with its own scrollbar wants `useReactWindow={false}`.
- **Every row is `itemHeight` tall**, 50px by default, whatever the row actually renders — a
  taller row is cut off. One height for the whole list.
- With virtualisation on, the container is `height: 100%` and needs a parent with a height, or
  `manualHeight`. With it off the container is `height: auto`, grows with its rows and ignores
  `manualHeight`.
- Text inside the container is selectable on purpose, including inside the rows; `noSelect`
  turns that off.
- `onScroll` is handed to the virtual list, so it is not called at all when virtualisation is
  off.

## Accessibility

- The container is a plain `<div>` with no list role, and virtualisation means only the rows
  near the viewport exist in the DOM — a screen reader is given no count and no position.
- There is no keyboard navigation between rows, and nothing here is focusable.
- A list users must work through from the keyboard needs [`Table`](../table/index.md) or
  markup of your own.

## Test ids

<APITable>

| Element       | `data-testid`   |
| ------------- | --------------- |
| The container | `row-container` |

</APITable>

It cannot be overridden by a prop.

## Related

- [`Row`](./row.md) — what goes inside.
- [`Rows`](./index.md) — the three parts together.
- [`InfiniteLoader`](../status-components/infinite-loader.md) — the virtualisation this delegates to.
