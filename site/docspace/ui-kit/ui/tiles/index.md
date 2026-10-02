---
description: "The card view of the DocSpace listing: a sorting container, four kinds of tile and the slot their names go in."
custom_edit_url: "https://github.com/ONLYOFFICE/docspace-ui-kit-react/blob/446f115916d79a87d07b9e3dddb1e39a263784ee/components/tiles/README.md"
---

import APITable from '@site/src/components/APITable/APITable';

# Tiles

The card view of the DocSpace listing: a sorting container, four kinds of tile and the slot their
names go in. It is the counterpart of [`Rows`](../rows/index.md), and like that family it is
shaped around the portal's data rather than around cards in general.

## Use this when / not when

- Use to reproduce the portal's tile listing, with its grouping into rooms, templates, folders and
  files.
- Not as a general card grid — the container reads each child's `item` prop to decide where it
  goes, and **drops any child that does not have one**. Your own markup between the tiles will not
  appear. A plain CSS grid is the right tool for that.
- Not for the list view — [`Rows`](../rows/index.md) is the same listing as rows.
- Not for a single card — [`Card`](../data-display/card.md) takes children and asks nothing of them.
- **The skeletons are not re-exported here.** `TilesSkeleton` and `TileSkeleton` live in
  `components/tiles/sub-components/skeletons` and are reachable only by that subpath.
- **None of the tiles is keyboard-operable.** Every one of them is a `div` with click handlers;
  the checkbox and whatever you put in the content are the only focusable parts.

## Import

```ts
import {
  TileContainer,
  TileContent,
  FileTile,
  FolderTile,
  RoomTile,
  TemplateTile,
} from "@onlyoffice/apps-ui-kit/components/tiles";
```

Also exported from the root barrel `@onlyoffice/apps-ui-kit`.

Each part is equally available at its own subpath — `components/tiles/file-tile` and so on — which
is what keeps a bundle to the tiles you use. `FolderTile` also has a default export at its own
subpath; the star re-export here carries only the name.

Needs `ThemeProvider` for every colour in the family, and `TranslationProvider` for the labels the
tiles ask the kit's own translation hook for: the three-dot button's tooltip on all of them, the
`NoTags` line on a room tile and the `Owner` and `Storage` captions on a template tile.

## Minimal example

```tsx
import { Link } from "@onlyoffice/apps-ui-kit/components/link";
import {
  FileTile,
  FolderTile,
  TileContainer,
  TileContent,
} from "@onlyoffice/apps-ui-kit/components/tiles";

const folder = {
  id: "f1",
  title: "Contracts",
  isFolder: true,
  contextOptions: [],
};
const file = {
  id: "d1",
  title: "Report.docx",
  fileExst: ".docx",
  contextOptions: [],
};

export function Listing() {
  return (
    <TileContainer headingFolders="Folders" headingFiles="Documents">
      <FolderTile item={folder} contextOptions={[]}>
        <TileContent>
          <Link className="item-file-name">{folder.title}</Link>
        </TileContent>
      </FolderTile>
      <FileTile item={file} contextOptions={[]} temporaryIcon="/icons/docx.svg">
        <TileContent>
          <Link className="item-file-name">{file.title}</Link>
        </TileContent>
      </FileTile>
    </TileContainer>
  );
}
```

## Recipes

### Which tile to reach for

<APITable>

| The item is     | Use                                       | Because                                                      |
| --------------- | ----------------------------------------- | ------------------------------------------------------------ |
| a document      | [`FileTile`](./file-tile.md)         | it is the only one with a thumbnail and its failure fallback |
| a folder        | [`FolderTile`](./folder-tile.md)     | one name row, or a tall card with `isBigFolder`              |
| a room          | [`RoomTile`](./room-tile.md)         | it builds the tag row, including the generated room-type tag |
| a room template | [`TemplateTile`](./template-tile.md) | it shows the owner and the storage instead of tags           |
| anything else   | [`BaseTile`](./base-tile.md)         | the shell, with both halves yours to fill                    |

</APITable>

### Selection across the listing

Every tile reports through `onSelect` and none of them holds the state. Keep a set of ids and hand
each tile its own `checked`.

```tsx
import { useState } from "react";

import { Text } from "@onlyoffice/apps-ui-kit/components/text";
import {
  FolderTile,
  TileContainer,
  TileContent,
} from "@onlyoffice/apps-ui-kit/components/tiles";

const folders = [
  { id: "f1", title: "Contracts", isFolder: true, contextOptions: [] },
  { id: "f2", title: "Invoices", isFolder: true, contextOptions: [] },
];

export function SelectableListing() {
  const [selected, setSelected] = useState<string[]>([]);

  const toggle = (id: string, checked: boolean) =>
    setSelected((ids) =>
      checked ? [...ids, id] : ids.filter((other) => other !== id),
    );

  return (
    <TileContainer headingFolders="Folders">
      {folders.map((folder) => (
        <FolderTile
          key={folder.id}
          item={folder}
          contextOptions={[]}
          checked={selected.includes(folder.id)}
          element={<span aria-hidden="true">📁</span>}
          onSelect={(checked) => toggle(folder.id, checked)}
        >
          <TileContent>
            <Text truncate>{folder.title}</Text>
          </TileContent>
        </FolderTile>
      ))}
    </TileContainer>
  );
}
```

### The skeletons

They are in the folder but not in this index, so they come from their own subpath.

```tsx
import { TilesSkeleton } from "@onlyoffice/apps-ui-kit/components/tiles/sub-components/skeletons";

export function LoadingListing() {
  return <TilesSkeleton />;
}
```

## Behaviour the types don't state

- **The container decides the order, not you.** Rooms first, then templates, then folders under
  their heading, then files under theirs. The order you pass the children in only decides the order
  inside a group.
- **A child without `props.item` is dropped silently**, so nothing but a tile can go inside the
  container.
- **The three-dot button has a two-part gate everywhere in this family.** It appears only when the
  `contextOptions` prop is non-empty **and** the `item` object has a `contextOptions` key of its
  own — a key none of the item types declares. The right-click menu additionally needs
  `getContextModel`.
- **Only the first child of a tile is rendered.** All five tiles take `children`, read
  `React.Children.toArray(...)[0]`, and drop the rest.
- **Selection behaviour differs between the tiles.** A plain click selects on the file and folder
  tiles and does not on the base, room and template tiles. A tap on the icon selects on all of
  them, but only on a window narrower than 600px.
- **The prop types are exported from each tile's own subpath**, not from this index — which
  re-exports the components only.
- **`TilesSkeleton` and `TileSkeleton` are not re-exported here** either, although the rows family
  does re-export its equivalents.
- **Several props across the family are inert**: `thumbnailClick` on the base, folder and template
  tiles; `columnCount` on the template tile; `dragging` and `contextMenuHeader` on the folder tile;
  `thumbSize`, `contextButtonSpacerWidth` and `sideColor` on the file tile — the last two of which
  also reach the DOM as unknown attributes.

## Sub-components

<APITable>

| Part                                        | For                                                              |
| ------------------------------------------- | ---------------------------------------------------------------- |
| [`TileContainer`](./tile-container.md) | sorting the tiles into four groups and laying each out as a grid |
| [`TileContent`](./tile-content.md)     | the name slot inside a tile                                      |
| [`BaseTile`](./base-tile.md)           | the shell: icon, checkbox, menu, two halves                      |
| [`FileTile`](./file-tile.md)           | a document, with a thumbnail                                     |
| [`FolderTile`](./folder-tile.md)       | a folder, short or tall                                          |
| [`RoomTile`](./room-tile.md)           | a room, with its tag row                                         |
| [`TemplateTile`](./template-tile.md)   | a room template, with owner and storage                          |

</APITable>

`TilesSkeleton` and `TileSkeleton` are in `sub-components/skeletons` and are imported from that
subpath.

`TilesSkeleton` is the placeholder for a whole listing while the tiles load. It draws
`foldersCount` folder placeholders (2 by default) above `filesCount` file placeholders (8 by
default), each group under a bar standing for its heading; a group of zero loses its bar too, and
`withTitle={false}` drops the bar above the files alone. A folder placeholder is a 64px bar and a
file placeholder a 220px card, both with 12px corners unless `borderRadius` says otherwise. On a
tablet each group shows at most seven placeholders, on a phone at most two. `isRooms` is meant to
widen the columns for room tiles and currently changes nothing: its rule is written for a
descendant of the grid, not the grid itself.

`TileSkeleton` is one placeholder: a file card by default, a folder bar with `isFolder`, and with
`isRoom` a room card with a logo, a title bar, a menu square and two tag bars. Both take the
`RectangleSkeleton` props — `speed`, the two colours and their opacities — for the band that sweeps
across every shape.

Every shape is an SVG with `role="img"`, so a screen reader meets one image per placeholder and per
heading bar. `title` names them all through an SVG `<title>`; without it they have no name. Neither
component sets `aria-busy` — mark the loading region with it yourself.

## CSS variables

The container's own knob is below; each tile's variables are documented on its own page, and they
share the `--tile-*` prefix. They inherit, so a value set on the container reaches every tile.

<APITable>

| Variable               | Default | Effect                           |
| ---------------------- | ------- | -------------------------------- |
| `--tile-container-gap` | `16px`  | Gap between tiles in every group |

</APITable>

The group headings have no variable: the container's stylesheet has rules reading
`--tile-container-sort-font-size` and `--tile-container-sort-font-weight`, but under a selector
that matches no element, so they have no effect.

## Accessibility

- **Nothing in this family is a list.** The container and the group wrappers are plain `<div>`s
  with no `role` and no count, so a screen reader hears a run of unrelated elements.
- **No tile is keyboard-operable.** Each is a `<div>` with click and context-menu handlers; the
  focusable parts are the checkbox and whatever you put in the content. Make the item's name a real
  link so that it can be opened without a mouse.
- The right-click menu is pointer-only. The three-dot button is the keyboard path to the same
  actions, and it depends on the two-part gate above — so a listing that fails that gate has no
  keyboard access to its actions at all.
- Only the folders and files groups get a heading. A listing that is only rooms or only templates
  has none; supply one above the container.
- Ctrl-click and Shift-click, on the tiles that support them, have no keyboard equivalent.

## Test ids

The container and the content slot set none. All five tiles carry `tile` on their outer element,
overridable through `dataTestId` on every one except the template tile, which has no such prop.
The file and folder tiles also mark their picture with `file-thumbnail`.

## Related

- [`TileContainer`](./tile-container.md) — the grid, and the piece that does the sorting.
- [`BaseTile`](./base-tile.md) — the shell to build a tile of your own on.
- [`Rows`](../rows/index.md) — the same listing as rows instead of cards.

## In this section

The following components are available:

| Component | Description |
| --- | --- |
| [BaseTile](./base-tile.md) | The tile shell: an icon that turns into a checkbox, a slot for the content, a three-dot menu and a lower half. |
| [FileTile](./file-tile.md) | Tile for a document: a thumbnail with badges over it, and a name row with a checkbox and a menu. |
| [FolderTile](./folder-tile.md) | Tile for a folder, as a single name row or, with one flag, a tall card with a picture on top. |
| [RoomTile](./room-tile.md) | Tile for a room: the logo and name on top, and the room's tags along the bottom. |
| [TilesSkeleton](./tilesskeleton.md) | Placeholder in the shape of a tile listing, shown while the tiles themselves are loading. The Tiles page describes it in full. |
| [TemplateTile](./template-tile.md) | Tile for a room template: the name on top, and an owner and storage pair along the bottom. |
| [TileContainer](./tile-container.md) | Grid that sorts the tiles it is given into rooms, templates, folders and files and gives two of them a heading. |
| [TileContent](./tile-content.md) | The title slot of a tile: three nested wrappers that give the name its width and its truncation. |
