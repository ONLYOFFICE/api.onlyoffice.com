---
description: "Tile for a folder, as a single name row or, with one flag, a tall card with a picture on top."
custom_edit_url: "https://github.com/ONLYOFFICE/docspace-ui-kit-react/blob/9954315f61fd4830b7ea0582c3d58bee0e85d0aa/components/tiles/folder-tile/README.md"
---

import ThemedImage from '@theme/ThemedImage';

import APITable from '@site/src/components/APITable/APITable';

# FolderTile

Tile for a folder, as a single name row or, with one flag, a tall card with a picture on top. The
short form is what a folder normally looks like in a tile listing; `isBigFolder` is the form the
portal uses for a room's own subfolders.

<ThemedImage alt="FolderTile" width={316} sources={{ light: require('./folder-tile--primary-light.png').default, dark: require('./folder-tile--primary-dark.png').default }} />

## Use this when / not when

- Use for a folder in a tile listing.
- Not for a document — [`FileTile`](./file-tile.md) has the thumbnail chain and the
  badge strip.
- Not for a room or a template — [`RoomTile`](./room-tile.md) and
  [`TemplateTile`](./template-tile.md).
- Not for a card of your own — [`BaseTile`](./base-tile.md) is the shell without the
  folder-specific click handling.
- **A plain click selects the folder; it does not open it.** Put the opening on the name, with the
  class `item-file-name` so that the click is not taken as a selection.

## Import

```ts
import FolderTile from "@onlyoffice/apps-ui-kit/components/tiles/folder-tile";
```

`components/index.ts` does not list this folder, but it lists `tiles`, and `export *`
is transitive — so the name arrives from `@onlyoffice/apps-ui-kit/components/tiles` and from
the root barrel `@onlyoffice/apps-ui-kit` as well.

Needs `ThemeProvider` for its colours and `TranslationProvider` for the three-dot button's
tooltip, which it asks the kit's own translation hook for under the key `TitleShowActions`.

## Stories

### Default

A folder as a single row: the icon, the name, and a badge beside the menu. Click the tile to select it, Ctrl- or Shift-click it to see the other callbacks in the Actions panel, and change any other prop live in the Controls panel below.

<ThemedImage alt="Default" width={316} sources={{ light: require('./folder-tile--default-light.png').default, dark: require('./folder-tile--default-dark.png').default }} />

### Big

The tall layout, for a grid where folders should stand out as much as files: a picture on top with the badge in its corner, and the name row below it (`isBigFolder`, `temporaryIcon`).

<ThemedImage alt="Big" width={316} sources={{ light: require('./folder-tile--big-light.png').default, dark: require('./folder-tile--big-dark.png').default }} />

### Checked

A selected folder, as it looks among others the reader has picked: the checkbox stays ticked in place of the icon and the whole tile is tinted (`checked`).

<ThemedImage alt="Checked" width={316} sources={{ light: require('./folder-tile--checked-light.png').default, dark: require('./folder-tile--checked-dark.png').default }} />

### In Progress

A folder that is busy, being copied or moved: a small loader stands where the icon and the checkbox were (`inProgress`).

<ThemedImage alt="In Progress" width={316} sources={{ light: require('./folder-tile--in-progress-light.png').default, dark: require('./folder-tile--in-progress-dark.png').default }} />

### With Hotkey Border

The tile the keyboard is on while the reader moves through the grid with the arrow keys: its border turns the accent colour (`showHotkeyBorder`). The tile does not handle the keys itself.

<ThemedImage alt="With Hotkey Border" width={316} sources={{ light: require('./folder-tile--with-hotkey-border-light.png').default, dark: require('./folder-tile--with-hotkey-border-dark.png').default }} />

### Renaming State

A folder whose name is being edited: the icon and the checkbox go, so the name row can hold a text field, and hovering no longer tints the tile (`isEdit`).

<ThemedImage alt="Renaming State" width={316} sources={{ light: require('./folder-tile--renaming-state-light.png').default, dark: require('./folder-tile--renaming-state-dark.png').default }} />

### Right To Left

The same row in a right-to-left layout: the icon moves to the right-hand end, the name is aligned right after it, and the badge and the three-dot button move to the left edge. The wrapper carries `dir="rtl"` for the layout; the side the three-dot menu opens on comes from the theme's `interfaceDirection` (the Direction toolbar).

<ThemedImage alt="Right To Left" width={316} sources={{ light: require('./folder-tile--right-to-left-light.png').default, dark: require('./folder-tile--right-to-left-dark.png').default }} />

### Css Customization

The variables are listed under CSS variables on this page.

Three instances:
- **My Folder** — the single row, for the border, radius and name variables; hover it for `--tile-hover-bg`, `--tile-hover-text-decoration` and `--tile-bg` behind the icon.
- **Projects** — the tall layout (`isBigFolder`), for `--tile-bg` and the badge variables.
- **Archive** — `showHotkeyBorder`, for `--tile-hotkey-color`, in a wrapper of its own that sets `--folder-tile-border-style` to a thicker border.

<ThemedImage alt="Css Customization" width={316} sources={{ light: require('./folder-tile--css-customization-light.png').default, dark: require('./folder-tile--css-customization-dark.png').default }} />

## Minimal example

```tsx
import { Link } from "@onlyoffice/apps-ui-kit/components/link";
import FolderTile from "@onlyoffice/apps-ui-kit/components/tiles/folder-tile";
import { TileContent } from "@onlyoffice/apps-ui-kit/components/tiles/tile-content";

const folder = {
  id: "f1",
  title: "Contracts",
  isFolder: true,
  contextOptions: [],
};

export function SimpleFolderTile() {
  return (
    <FolderTile item={folder} contextOptions={[]}>
      <TileContent>
        <Link className="item-file-name">{folder.title}</Link>
      </TileContent>
    </FolderTile>
  );
}
```

## Props


<APITable>

| Property | Type | Description |
| --- | --- | --- |
| `contextOptions` | `ContextMenuModel[]` | The menu's entries. Required — but see `item`. |
| `item` | `FolderItem` | The folder this tile stands for. Its `contextOptions` key — present or absent — is what decides whether the three-dot button appears. |
| `badges`? | `ReactNode` | Badges for the folder. In the tall layout they sit over the thumbnail; in the short one they follow the content. |
| `checked`? | `boolean` | Whether the tile is selected. |
| `children`? | `ReactNode` | The tile's content. Only the first element is rendered; the rest are dropped. |
| `contextMenuHeader`? | `ReactNode` | Ignored. The header is built from the first child's `item`; nothing reads this prop. |
| `dataTestId`? | `string` | Value of `data-testid` on the outer element. Default: `"tile"`. |
| `dragging`? | `boolean` | Ignored. `isDragging` is the one that is read. |
| `element`? | `ReactNode` | The icon beside the checkbox. Without it neither the icon nor the checkbox is rendered at all. |
| `forwardRef`? | `RefObject<HTMLDivElement \| null>` | Attached to the outer element, and clicked by the component itself on a right-click before the menu is mounted. |
| `getContextModel`? | `() => ContextMenuModel[]` | Builds the menu shown on right-click. Without it the right-click menu never opens. |
| `hideContextMenu`? | `() => void` | Called when the menu closes. |
| `indeterminate`? | `boolean` | Draws the checkbox in its indeterminate state. |
| `inProgress`? | `boolean` | Replaces the icon and the checkbox with the kit's track loader. |
| `isActive`? | `boolean` | Whether the tile is the one being acted on, which keeps its hover state. |
| `isBigFolder`? | `boolean` | Switches to the tall layout — a picture on top and the row below it — instead of the single row. |
| `isDragging`? | `boolean` | Marks the tile as being dragged: hovering it no longer tints it, underlines the name or swaps the icon for the checkbox. It does not dim the tile. |
| `isEdit`? | `boolean` | Renaming state: it removes the icon and the checkbox. |
| `onSelect`? | `(checked: boolean, item: FolderItem) => void` | Called with the new checked state and the `item` — from the checkbox, from a plain click on the tile, and from a tap on the icon below 600px. |
| `setSelection`? | `(items: FolderItem[]) => void` | Called with an empty array before a plain click selects the tile, unless the click landed on an image, an input or an SVG shape. |
| `showHotkeyBorder`? | `boolean` | Draws the accent outline that marks the tile the keyboard is on. |
| `temporaryIcon`? | `ReactElement<unknown, string \| JSXElementConstructor<any>> \| string` | The folder's picture, drawn only in the tall layout: a URL is fetched as an SVG, an element is rendered as given. |
| `thumbnailClick`? | `(e: React.MouseEvent) => void` | Ignored. Nothing reads it, and the component forwards no unknown props, so it never reaches the DOM either. |
| `tileContextClick`? | `(isRightClick?: boolean) => void` | Called before the menu opens, with `true` when the trigger was a right-click. |
| `withCtrlSelect`? | `(item: FolderItem) => void` | Called with the `item` on a Ctrl- or Cmd-click, instead of selecting. |
| `withShiftSelect`? | `(item: FolderItem) => void` | Called with the `item` on a Shift-click, instead of selecting. |

</APITable>

## Recipes

### The tall layout

`isBigFolder` puts a picture above the name row and moves the badges over it. Without the flag
there is no picture at all and `temporaryIcon` is not rendered.

```tsx
import { Link } from "@onlyoffice/apps-ui-kit/components/link";
import FolderTile from "@onlyoffice/apps-ui-kit/components/tiles/folder-tile";
import { TileContent } from "@onlyoffice/apps-ui-kit/components/tiles/tile-content";

const folder = {
  id: "f1",
  title: "Contracts",
  isFolder: true,
  contextOptions: [],
};

export function BigFolderTile() {
  return (
    <FolderTile
      isBigFolder
      item={folder}
      contextOptions={[]}
      temporaryIcon="/icons/folder.svg"
    >
      <TileContent>
        <Link className="item-file-name">{folder.title}</Link>
      </TileContent>
    </FolderTile>
  );
}
```

### Selection

The checkbox appears beside `element` and reports through `onSelect`; so does a plain click on the
tile, and a tap on the icon below 600px. Hold `checked` yourself.

```tsx
import { useState } from "react";

import { Link } from "@onlyoffice/apps-ui-kit/components/link";
import FolderTile from "@onlyoffice/apps-ui-kit/components/tiles/folder-tile";
import { TileContent } from "@onlyoffice/apps-ui-kit/components/tiles/tile-content";

const folder = {
  id: "f1",
  title: "Contracts",
  isFolder: true,
  contextOptions: [],
};

export function SelectableFolderTile() {
  const [checked, setChecked] = useState(false);

  return (
    <FolderTile
      item={folder}
      checked={checked}
      contextOptions={[]}
      element={<span aria-hidden="true">📁</span>}
      onSelect={(next) => setChecked(next)}
    >
      <TileContent>
        <Link className="item-file-name">{folder.title}</Link>
      </TileContent>
    </FolderTile>
  );
}
```

## Behaviour the types don't state

- **Three props are dead.** `thumbnailClick`, `dragging` and `contextMenuHeader` are declared and
  never read, and because the component forwards no unknown props they do not even reach the DOM.
  Use `isDragging` for the drag state; the menu's header is built from the first child's `item`.
- **`temporaryIcon` is only drawn in the tall layout.** In the short form the picture block is not
  rendered at all, so the prop is silently ignored.
- **The badges move with the layout**: over the picture when `isBigFolder` is set, after the name
  inside the content row otherwise.
- **A plain click selects, with exceptions by class name.** The handler walks up from the click
  target looking for `.badges`, `.item-file-name`, `.expandButton`, `.p-contextmenu` and the
  internal checkbox class. Note that `.tag` and `.not-selectable` — which the file tile also
  honours — are **not** in this list.
- **`setSelection([])` runs first**, clearing the rest of the selection, unless the click landed on
  an `img`, an `input` or an SVG shape.
- **A double click selects once**: the handler requires `e.detail === 1`.
- **Ctrl or Cmd and Shift are diverted** to `withCtrlSelect` and `withShiftSelect` and never
  select on their own; without those props such a click does nothing.
- **The three-dot button needs the flag on the item as well as the prop** — the component tests
  `hasOwnProperty(item, "contextOptions")` before it checks the prop — and the right-click menu
  needs `getContextModel`. Without them you get an empty `div.expandButton` and a swallowed
  browser menu.
- **The menu opens on the reading side.** Its horizontal direction is taken from the interface
  direction context: right in a left-to-right layout, left in a right-to-left one.
- **Only the first child is rendered**; the rest of `children` is dropped.
- **The picture is wrapped in a link with no `href`**, so it is an `<a>` that is not focusable.

## CSS variables

<APITable>

| Variable                       | Default                          | Effect                                                                                                                                 |
| ------------------------------ | -------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `--tile-bg`                    | the theme's tile background      | Background of the tall layout, and of the box behind the icon on hover and when `checked`; the single row has no background of its own |
| `--tile-hover-bg`              | the checked background           | Background of the tile on hover (not under `isDragging` or `isEdit`), when `checked` and under `isActive`                              |
| `--tile-border-style`          | the theme's border               | Border of the tile, shared with the other tiles                                                                                        |
| `--folder-tile-border-style`   | `--tile-border-style`            | Border of a folder tile only; wins over `--tile-border-style`                                                                          |
| `--tile-radius`                | `12px`                           | Corner radius                                                                                                                          |
| `--tile-hover-text-decoration` | the page link's hover decoration | Decoration of the name on hover and under `isActive`                                                                                   |
| `--tile-hotkey-color`          | the theme's hotkey colour        | Border colour under `showHotkeyBorder`                                                                                                 |
| `--tile-text-size`             | `14px`                           | Font size of the name                                                                                                                  |
| `--tile-text-weight`           | `normal`                         | Font weight of the name                                                                                                                |
| `--tile-text-color`            | inherited                        | Colour of the name                                                                                                                     |
| `--tile-text-line-height`      | `16px`                           | Line height of the name                                                                                                                |
| `--tile-badge-bg`              | the theme's badge background     | Background of each badge over the picture                                                                                              |
| `--tile-badge-radius`          | `4px`                            | Corner radius of each badge over the picture                                                                                           |
| `--tile-badge-box-shadow`      | the theme's badge shadow         | Shadow of each badge over the picture                                                                                                  |
| `--tile-icon-color`            | the theme's icon colour          | Fill of a `.is-pinned` badge inside the content's `.badges`; the three-dot button does not read it                                     |

</APITable>

The three badge variables apply only in the tall layout: in the single row the badges sit in the
name row, outside the element that reads them. `--folder-tile-border-style` and the file tile's
`--file-tile-border-style` let the two kinds of tile differ while `--tile-border-style` stays the
fallback for both.

## Accessibility

- The tile is a plain `<div>` with click and context-menu handlers: no role, no `tabindex`, no key
  handling. Only the checkbox and the content are focusable.
- The checkbox carries no label of its own; the folder's name is a sibling, not a label, so give
  the set of tiles a structure of your own if the count and the names matter.
- Ctrl-click and Shift-click have no keyboard equivalent.
- The right-click menu is pointer-only; the three-dot button is the keyboard path to the same
  actions, so keep it available.
- Make the name a real link. The tile's own click handler selects rather than opens, and it is not
  reachable from the keyboard.

## Test ids

<APITable>

| Element       | `data-testid`                             |
| ------------- | ----------------------------------------- |
| Outer element | `tile`, overridden by `dataTestId`        |
| Picture       | `file-thumbnail`, in the tall layout only |

</APITable>

## Related

- [`Tiles`](./index.md) — the family this belongs to.
- [`FileTile`](./file-tile.md) — the same idea for a document.
- [`TileContent`](./tile-content.md) — what goes in `children`.
