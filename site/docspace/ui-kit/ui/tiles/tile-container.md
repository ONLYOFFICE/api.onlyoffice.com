---
description: "Grid that sorts the tiles it is given into rooms, templates, folders and files and gives two of them a heading."
custom_edit_url: "https://github.com/ONLYOFFICE/docspace-ui-kit-react/blob/446f115916d79a87d07b9e3dddb1e39a263784ee/components/tiles/tile-container/README.md"
---

import ThemedImage from '@theme/ThemedImage';

import APITable from '@site/src/components/APITable/APITable';

# TileContainer

Grid that sorts the tiles it is given into rooms, templates, folders and files and gives two of
them a heading. It does not lay out a list of cards — it reads each child's `item` and decides
which of four groups it belongs to.

<ThemedImage alt="TileContainer" width={761} sources={{ light: require('./tile-container--primary-light.png').default, dark: require('./tile-container--primary-dark.png').default }} />

## Use this when / not when

- Use to render a DocSpace-shaped listing: rooms or templates at the top, then folders, then
  files, each in its own grid.
- Not as a general card grid — **a child without an `item` prop is dropped without a word**, so
  your own markup between the tiles never appears. Write a plain CSS grid instead.
- Not for the list view — that is [`RowContainer`](../rows/row-container.md).
- **It does not sort within a group.** The order inside each grid is the order you passed the
  children in; `isDesc` only flips a class on the headings.
- **It does not virtualise anything by itself.** `useReactWindow` hands the groups to the
  `infiniteGrid` you supply; on its own it removes the grid wrappers and leaves the tiles
  unlaid-out.

## Import

```ts
import { TileContainer } from "@onlyoffice/apps-ui-kit/components/tiles/tile-container";
```

`components/index.ts` does not list this folder, but it lists `tiles`, and `export *`
is transitive — so the name arrives from `@onlyoffice/apps-ui-kit/components/tiles` and from
the root barrel `@onlyoffice/apps-ui-kit` as well.

Needs `ThemeProvider` above it in the tree: the headings are the kit's `Heading`, which takes its
colour from the custom properties the provider's `.light` and `.dark` classes declare.


## Stories

### Default

Three documents under the files heading, in as many columns as the window has room for; resize the window to see the columns change, and change any other prop live in the Controls panel below.

<ThemedImage alt="Default" width={761} sources={{ light: require('./tile-container--default-light.png').default, dark: require('./tile-container--default-dark.png').default }} />

### Folders And Files

A listing that holds both kinds, passed in with the files first: the grid still puts the folders on top, each group under its own heading (`headingFolders`, `headingFiles`), because it sorts by each tile's `item`, not by the order of the children.

<ThemedImage alt="Folders And Files" width={508} sources={{ light: require('./tile-container--folders-and-files-light.png').default, dark: require('./tile-container--folders-and-files-dark.png').default }} />

### Css Customization

The variables are listed under CSS variables on this page. One grid of three files sets the gap and four of the tiles' variables; hover a tile for `--tile-hover-bg`. The container's own variable is the gap; the others are the tiles' and are set here once for the whole grid.

<ThemedImage alt="Css Customization" width={757} sources={{ light: require('./tile-container--css-customization-light.png').default, dark: require('./tile-container--css-customization-dark.png').default }} />

## Minimal example

```tsx
import { FolderTile } from "@onlyoffice/apps-ui-kit/components/tiles/folder-tile";
import { TileContainer } from "@onlyoffice/apps-ui-kit/components/tiles/tile-container";
import { TileContent } from "@onlyoffice/apps-ui-kit/components/tiles/tile-content";
import { Link } from "@onlyoffice/apps-ui-kit/components/link";

const folders = [
  { id: 1, title: "Contracts", isFolder: true, contextOptions: [] },
  { id: 2, title: "Invoices", isFolder: true, contextOptions: [] },
];

export function Listing() {
  return (
    <TileContainer headingFolders="Folders">
      {folders.map((folder) => (
        <FolderTile key={folder.id} item={folder} contextOptions={[]}>
          <TileContent>
            <Link className="item-file-name">{folder.title}</Link>
          </TileContent>
        </FolderTile>
      ))}
    </TileContainer>
  );
}
```

## Props


<APITable>

| Property | Type | Description |
| --- | --- | --- |
| `children` | `ReactNode` | The tiles. Each one must carry an `item` prop; a child without it is silently dropped, including plain markup. |
| `className`? | `string` | Added before the component's own class on the outer element. |
| `headingFiles`? | `ReactNode` | Heading above the files group. It is rendered only when that group has something in it. |
| `headingFolders`? | `ReactNode` | Heading above the folders group. It is rendered only when that group has something in it. |
| `id`? | `string` | Value of `id` on the outer element. Default: `"tileContainer"`. |
| `infiniteGrid`? | `ComponentType<{ children: React.ReactNode; isRooms?: boolean; isTemplates?: boolean; }>` | The virtualising grid to render the tiles into. It is told whether the current run is rooms or templates. |
| `isDesc`? | `boolean` | Flips the arrow class on both headings. It sorts nothing. |
| `noSelect`? | `boolean` | Turns off text selection across the whole container. |
| `style`? | `CSSProperties` | Inline style of the outer element, and where `--tile-container-gap` goes. |
| `useReactWindow`? | `boolean` | Hands the four groups to `infiniteGrid` instead of wrapping each in its own grid. Without an `infiniteGrid` alongside it the tiles are emitted with no grid at all. |

</APITable>

## Recipes

### Folders and files together

The groups appear in a fixed order — rooms, templates, folders, files — whatever order you hand
the children in. Only folders and files get a heading, and only when the group is not empty.

```tsx
import { FileTile } from "@onlyoffice/apps-ui-kit/components/tiles/file-tile";
import { FolderTile } from "@onlyoffice/apps-ui-kit/components/tiles/folder-tile";
import { TileContainer } from "@onlyoffice/apps-ui-kit/components/tiles/tile-container";
import { TileContent } from "@onlyoffice/apps-ui-kit/components/tiles/tile-content";
import { Link } from "@onlyoffice/apps-ui-kit/components/link";

const folder = {
  id: "f1",
  title: "Drafts",
  isFolder: true,
  contextOptions: [],
};
const file = {
  id: "d1",
  title: "Report.docx",
  fileExst: ".docx",
  contextOptions: [],
};

export function MixedListing() {
  return (
    <TileContainer headingFolders="Folders" headingFiles="Documents">
      <FileTile item={file} contextOptions={[]}>
        <TileContent>
          <Link className="item-file-name">{file.title}</Link>
        </TileContent>
      </FileTile>
      <FolderTile item={folder} contextOptions={[]}>
        <TileContent>
          <Link className="item-file-name">{folder.title}</Link>
        </TileContent>
      </FolderTile>
    </TileContainer>
  );
}
```

### Changing the gap

`--tile-container-gap` is the space between tiles in every grid. It is read from the container,
so `style` is the natural place for it.

```tsx
import type { CSSProperties } from "react";

import { FolderTile } from "@onlyoffice/apps-ui-kit/components/tiles/folder-tile";
import { TileContainer } from "@onlyoffice/apps-ui-kit/components/tiles/tile-container";
import { TileContent } from "@onlyoffice/apps-ui-kit/components/tiles/tile-content";
import { Text } from "@onlyoffice/apps-ui-kit/components/text";

const folder = {
  id: 1,
  title: "Contracts",
  isFolder: true,
  contextOptions: [],
};

export function TightListing() {
  return (
    <TileContainer style={{ "--tile-container-gap": "8px" } as CSSProperties}>
      <FolderTile item={folder} contextOptions={[]}>
        <TileContent>
          <Text>{folder.title}</Text>
        </TileContent>
      </FolderTile>
    </TileContainer>
  );
}
```

## Behaviour the types don't state

- **A child without `props.item` is dropped silently.** The container walks its children, skips
  anything that is not a valid element or has no `item`, and renders the rest into one of four
  buckets. A separator, a heading of your own or a message between the tiles disappears.
- **The groups render in a fixed order**: rooms, templates, folders, files. The order you pass
  them in only decides the order inside a group.
- **The sorting rules are not what the names suggest.** A tile goes to folders when `isFolder` is
  set _or_ its `id` is the literal `-1`, and in both cases only while `fileExst` is absent and
  `isRoom` is not set. Templates are checked next, rooms after that, and everything left over is
  a file — so an item with none of the flags is rendered as a file.
- **`id` is the React key.** Two items with the same id produce a duplicate-key warning and the
  usual reconciliation trouble.
- **`useReactWindow` without `infiniteGrid` removes the layout.** The grid wrappers are only
  emitted on the non-virtualised path, so the flag on its own leaves the tiles as loose children
  of the container.
- **Only folders and files get a heading**, and only when their group is non-empty. Rooms and
  templates have no heading prop at all.
- **The folders heading carries the literal element id `folder-tile-heading`**; the files heading
  has none. Two containers on one page give you two elements with that id.
- **The outer element's id defaults to the literal `tileContainer`**, so the same applies unless
  you pass your own.
- **The columns are as wide as fit, with a floor that follows the viewport.** Every grid is
  `repeat(auto-fill, minmax(clamp(216px, 13.4vw, 360px), 1fr))` — rooms and templates use
  `clamp(275px, 13.4vw, 350px)` — so a column is never narrower than 216px (275px for rooms and
  templates), and on a wide screen the floor rises with the window, up to 360px (350px).
- **Text on the tiles is selectable by default.** The container sets `user-select: text` on itself
  and everything inside but images; `noSelect` turns it off for the whole grid.
- **Each tile is wrapped in a `div`** carrying `tile-item` and one of `room`, `template`,
  `folder` or `file` — stable hooks for a portal stylesheet, and the elements your own CSS has to
  target if you want to size a tile.

## CSS variables

<APITable>

| Variable               | Default | Effect                                             |
| ---------------------- | ------- | -------------------------------------------------- |
| `--tile-container-gap` | `16px`  | Gap between tiles, across and down, in every group |

</APITable>

The tiles' own variables — `--tile-bg`, `--tile-border-style`, `--tile-radius`, `--tile-hover-bg`
and the rest listed on each tile's page — are read by the tiles, not by the container, but they
inherit: set them once on the container to restyle every tile in the listing.

**There is no variable for the headings.** The stylesheet has rules reading
`--tile-container-sort-font-size`, `--tile-container-sort-font-weight` and a set of sort-control
colours, but they sit under a selector that matches no element, so none of them has any effect.

## Accessibility

- The container is a plain `<div>` and the groups are plain `<div>`s: there is no `list` role and
  no count, so a screen reader hears a run of tiles with nothing tying them together.
- The two headings are real heading elements from `Heading`, at the kit's smallest size. Rooms and
  templates have none, so a listing that is only rooms has no heading at all — supply one above
  the container.
- Nothing here manages focus or announces that the listing changed. Announce the result count
  yourself when the content is replaced by a filter.

## Test ids

The component sets none. Select the container by its `id`, which defaults to `tileContainer`, and
the individual wrappers by the `tile-item` class.

## Related

- [`Tiles`](./index.md) — the family this belongs to.
- [`FileTile`](./file-tile.md) — the tile for a document.
- [`FolderTile`](./folder-tile.md) — the tile for a folder.
