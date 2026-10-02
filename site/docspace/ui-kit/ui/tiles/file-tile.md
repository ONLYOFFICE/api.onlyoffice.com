---
description: "Tile for a document: a thumbnail with badges over it, and a name row with a checkbox and a menu."
custom_edit_url: "https://github.com/ONLYOFFICE/docspace-ui-kit-react/blob/446f115916d79a87d07b9e3dddb1e39a263784ee/components/tiles/file-tile/README.md"
---

import ThemedImage from '@theme/ThemedImage';

import APITable from '@site/src/components/APITable/APITable';

# FileTile

Tile for a document: a thumbnail with badges over it, and a name row with a checkbox and a menu.
It is the card form of one file in the DocSpace listing, and the only tile in the family with a
preview image.

<ThemedImage alt="FileTile" width={316} sources={{ light: require('./file-tile--primary-light.png').default, dark: require('./file-tile--primary-dark.png').default }} />

## Use this when / not when

- Use for a document in a tile listing, with a thumbnail when you have one and an icon when you
  do not.
- Not for a folder — [`FolderTile`](./folder-tile.md) has its own two layouts and no
  thumbnail fallback chain.
- Not for a room or a template — [`RoomTile`](./room-tile.md) and
  [`TemplateTile`](./template-tile.md).
- Not for a card of your own — [`BaseTile`](./base-tile.md) is the shell without the
  file-specific click handling.
- **A plain click selects the file; it does not open it.** Opening is up to the link you put in
  the content, or to `thumbnailClick`. See the note about the class names that make a click
  harmless.

## Import

```ts
import { FileTile } from "@onlyoffice/apps-ui-kit/components/tiles/file-tile";
```

`components/index.ts` does not list this folder, but it lists `tiles`, and `export *`
is transitive — so the name arrives from `@onlyoffice/apps-ui-kit/components/tiles` and from
the root barrel `@onlyoffice/apps-ui-kit` as well.

Needs `ThemeProvider` for its colours and `TranslationProvider` for the three-dot button's
tooltip, which it asks the kit's own translation hook for under the key `TitleShowActions`.


## Stories

### Default

A document with no preview yet: a placeholder picture, a badge and a quick action over it, and the name row with the menu. Click the tile to select it, Ctrl- or Shift-click it to see the other callbacks in the Actions panel, and change any other prop live in the Controls panel below.

<ThemedImage alt="Default" width={316} sources={{ light: require('./file-tile--default-light.png').default, dark: require('./file-tile--default-dark.png').default }} />

### Checked

A selected file, as it looks among others the reader has picked: the checkbox stays ticked in place of the icon and the whole tile is tinted (`checked`).

<ThemedImage alt="Checked" width={316} sources={{ light: require('./file-tile--checked-light.png').default, dark: require('./file-tile--checked-dark.png').default }} />

### In Progress

A file that is busy, being uploaded or converted: a small loader stands where the icon and the checkbox were (`inProgress`).

<ThemedImage alt="In Progress" width={316} sources={{ light: require('./file-tile--in-progress-light.png').default, dark: require('./file-tile--in-progress-dark.png').default }} />

### With Thumbnail

A document with a preview: the image fills the upper part, cropped from the top, and the badges sit over it (`thumbnail`). If the image fails to load, the placeholder from `temporaryIcon` takes its place.

<ThemedImage alt="With Thumbnail" width={316} sources={{ light: require('./file-tile--with-thumbnail-light.png').default, dark: require('./file-tile--with-thumbnail-dark.png').default }} />

### With Hotkey Border

The tile the keyboard is on while the reader moves through the grid with the arrow keys: its border turns the accent colour (`showHotkeyBorder`). The tile does not handle the keys itself.

<ThemedImage alt="With Hotkey Border" width={316} sources={{ light: require('./file-tile--with-hotkey-border-light.png').default, dark: require('./file-tile--with-hotkey-border-dark.png').default }} />

### Renaming State

A file whose name is being edited: the icon and the checkbox go, so the name row can hold a text field (`isEdit`).

<ThemedImage alt="Renaming State" width={316} sources={{ light: require('./file-tile--renaming-state-light.png').default, dark: require('./file-tile--renaming-state-dark.png').default }} />

### Css Customization

The variables are listed under CSS variables on this page.

Two instances:
- **Document.docx** — a preview, a badge and a quick action, for every variable except `--file-tile-border-style`, `--tile-icon-display`, `--tile-hotkey-color` and `--highlightColor`; hover it for the hover variables.
- **Report.docx** — `showHotkeyBorder`, for `--tile-hotkey-color`, in a wrapper of its own that sets `--file-tile-border-style` to a thicker border and `--tile-icon-display` to `none`.

`--highlightColor` is not set here: the highlight plays once, on mount, and is gone before a reader looks.

<ThemedImage alt="Css Customization" width={316} sources={{ light: require('./file-tile--css-customization-light.png').default, dark: require('./file-tile--css-customization-dark.png').default }} />

## Minimal example

```tsx
import { Link } from "@onlyoffice/apps-ui-kit/components/link";
import { FileTile } from "@onlyoffice/apps-ui-kit/components/tiles/file-tile";
import { TileContent } from "@onlyoffice/apps-ui-kit/components/tiles/tile-content";

const file = {
  id: "d1",
  title: "Report.docx",
  fileExst: ".docx",
  contextOptions: [],
};

export function DocumentTile() {
  return (
    <FileTile item={file} contextOptions={[]} temporaryIcon="/icons/docx.svg">
      <TileContent>
        <Link className="item-file-name">{file.title}</Link>
      </TileContent>
    </FileTile>
  );
}
```

## Props


<APITable>

| Property | Type | Description |
| --- | --- | --- |
| `contextOptions` | `ContextMenuModel[]` | The menu's entries. Required — but the three-dot button appears only when `item` also carries a `contextOptions` key of its own. |
| `item` | `FileItemType` | The file this tile stands for. |
| `badges`? | `ReactElement<unknown, string \| JSXElementConstructor<any>>` | Badges drawn in a row in the thumbnail's top end corner. Give them the class `badges` so a click on them does not select the tile. |
| `checked`? | `boolean` | Whether the tile is selected. |
| `children`? | `ReactElement<unknown, string \| JSXElementConstructor<any>> \| ReactElement<unknown, string \| JSXElementConstructor<any>>…` | The tile's content. Only the first element is rendered, in the row beside the icon; the rest are dropped. |
| `contentElement`? | `ReactElement<unknown, string \| JSXElementConstructor<any>>` | Quick-action buttons, stacked in a column in the thumbnail's top start corner. |
| `contextButtonSpacerWidth`? | `number` | Ignored. Nothing reads it, and it is spread onto the outer element as an unknown attribute. |
| `dataTestId`? | `string` | Value of `data-testid` on the outer element. Default: `"tile"`. |
| `element`? | `ReactElement<unknown, string \| JSXElementConstructor<any>>` | The icon beside the checkbox. Without it neither the icon nor the checkbox is rendered at all. |
| `forwardRef`? | `RefObject<HTMLDivElement \| null>` | Attached to the outer element, and clicked by the component itself on a right-click before the menu is mounted. |
| `getContextModel`? | `() => ContextMenuModel[]` | Builds the menu shown on right-click. Without it the right-click menu never opens. |
| `hideContextMenu`? | `() => void` | Called when the menu closes. |
| `inProgress`? | `boolean` | Replaces the icon and the checkbox with the kit's track loader. |
| `isActive`? | `boolean` | Whether the tile is the one being acted on, which keeps its hover state. |
| `isBlockingOperation`? | `boolean` | Meant to turn the pointer off while an operation runs over the tile, but the rule it adds never matches, so it currently changes nothing. |
| `isDragging`? | `boolean` | Marks the tile as being dragged: the checkbox no longer replaces the icon on hover. It does not dim the tile. |
| `isEdit`? | `boolean` | Renaming state: it removes the icon and the checkbox. |
| `isHighlight`? | `boolean` | Fades `--highlightColor` out of the lower half once, on mount, for a file that a search or a filter has just matched. The kit sets no such colour, so nothing shows until you do. |
| `onSelect`? | `(checked: boolean, item: FileItemType) => void` | Called with the new checked state and the `item` — from the checkbox, from a plain click on the tile, and from a tap on the icon below 600px. |
| `setSelection`? | `(items: FileItem[]) => void` | Called with an empty array before a plain click selects the tile, unless the click landed on an image, an input or an SVG shape. |
| `showHotkeyBorder`? | `boolean` | Draws the accent outline that marks the tile the keyboard is on. |
| `sideColor`? | `string` | Ignored. Nothing reads it, and it is spread onto the outer element as an unknown attribute. |
| `temporaryIcon`? | `ReactElement<unknown, string \| JSXElementConstructor<any>> \| string` | Drawn when there is no `thumbnail`: a URL is fetched as an SVG, an element is rendered as given. |
| `thumbnail`? | `string` | Preview image for the file. It falls back to `temporaryIcon` when the image fails to load. |
| `thumbnailClick`? | `(e: React.MouseEvent) => void` | Called with the event when the thumbnail area is clicked. The tile's own click handler runs as well. |
| `thumbSize`? | `number` | Ignored. Only its difference from `null` is tested, which a `number \| undefined` always satisfies, so the branch it guards is unreachable. |
| `tileContextClick`? | `(isRightClick?: boolean) => void` | Called before the menu opens, with `true` when the trigger was a right-click. |
| `withCtrlSelect`? | `(item: FileItemType) => void` | Called with the `item` on a Ctrl- or Cmd-click, instead of selecting. |
| `withShiftSelect`? | `(item: FileItemType) => void` | Called with the `item` on a Shift-click, instead of selecting. |

</APITable>

## Recipes

### Selection, including Ctrl and Shift

A plain click calls `onSelect` with the opposite of `checked`. Ctrl or Cmd and Shift are diverted
to their own callbacks and never select on their own — if you do not pass them, those clicks do
nothing.

```tsx
import { useState } from "react";

import { Link } from "@onlyoffice/apps-ui-kit/components/link";
import { FileTile } from "@onlyoffice/apps-ui-kit/components/tiles/file-tile";
import { TileContent } from "@onlyoffice/apps-ui-kit/components/tiles/tile-content";

const file = { id: "d1", title: "Report.docx", contextOptions: [] };

export function SelectableFileTile() {
  const [checked, setChecked] = useState(false);

  return (
    <FileTile
      item={file}
      checked={checked}
      contextOptions={[]}
      element={<span aria-hidden="true">📄</span>}
      onSelect={(next) => setChecked(next)}
      withCtrlSelect={() => setChecked((c) => !c)}
      withShiftSelect={() => setChecked(true)}
    >
      <TileContent>
        <Link className="item-file-name">{file.title}</Link>
      </TileContent>
    </FileTile>
  );
}
```

### Opening the file

The name and the thumbnail need to be exempt from the selecting click. The component checks the
target for a handful of literal class names — `item-file-name`, `badges`, `tag`,
`not-selectable`, `expandButton` — so put one of them on anything that should do something else.

```tsx
import { Link } from "@onlyoffice/apps-ui-kit/components/link";
import { FileTile } from "@onlyoffice/apps-ui-kit/components/tiles/file-tile";
import { TileContent } from "@onlyoffice/apps-ui-kit/components/tiles/tile-content";

const file = { id: "d1", title: "Report.docx", contextOptions: [] };

export function OpenableFileTile({ open }: { open: () => void }) {
  return (
    <FileTile
      item={file}
      contextOptions={[]}
      thumbnail="/thumbs/report.png"
      thumbnailClick={open}
    >
      <TileContent>
        <Link className="item-file-name" onClick={open}>
          {file.title}
        </Link>
      </TileContent>
    </FileTile>
  );
}
```

### Badges and quick actions

`badges` sits over the thumbnail and `contentElement` sits above it. Give the badges the class
`badges` so that clicking one does not select the tile.

```tsx
import { Link } from "@onlyoffice/apps-ui-kit/components/link";
import { Badge } from "@onlyoffice/apps-ui-kit/components/badge";
import { FileTile } from "@onlyoffice/apps-ui-kit/components/tiles/file-tile";
import { TileContent } from "@onlyoffice/apps-ui-kit/components/tiles/tile-content";

const file = { id: "d1", title: "Report.docx", contextOptions: [] };

export function BadgedFileTile() {
  return (
    <FileTile
      item={file}
      contextOptions={[]}
      thumbnail="/thumbs/report.png"
      badges={
        <div className="badges">
          <Badge label="New" />
        </div>
      }
    >
      <TileContent>
        <Link className="item-file-name">{file.title}</Link>
      </TileContent>
    </FileTile>
  );
}
```

## Behaviour the types don't state

- **Which picture is drawn follows a fixed chain**: a plugin icon when `item.isPlugin` and
  `item.fileTileIcon` are both set, otherwise the `thumbnail` until it fails to load, otherwise
  `temporaryIcon`. The failure is sticky for as long as the component stays mounted.
- **A plain click selects, with exceptions by class name.** The handler walks up from the click
  target looking for `.badges`, `.item-file-name`, `.tag`, `.not-selectable`, `.expandButton`,
  `.p-contextmenu` and the internal checkbox class; finding any of them cancels the selection. Those
  strings are the contract between this tile and your content.
- **`setSelection([])` runs first**, clearing the rest of the selection, unless the click landed on
  an `img`, an `input` or an SVG shape.
- **A double click selects once.** The handler requires `e.detail === 1`, so the second click of a
  pair is ignored rather than toggling back.
- **`thumbSize` does nothing.** The only test on it is `thumbSize !== null`, which a
  `number | undefined` always satisfies, so the branch it guards is unreachable and the value is
  never used as a size.
- **`contextButtonSpacerWidth` and `sideColor` are dead and leak.** Neither is read, and because
  the component spreads its remaining props onto the outer element, both arrive in the DOM as
  unknown attributes.
- **Only the first child is rendered.** Everything after it in `children` is dropped without a
  word.
- **The three-dot button needs the flag on the item as well as the prop** — see
  [`BaseTile`](./base-tile.md), which has the same gate; and the right-click menu still
  needs `getContextModel`.
- **The picture is wrapped in a link with no `href`**, so it is an `<a>` that is not focusable and
  is not announced as a link.
- **A tap on the icon selects, but only below 600px.**
- **`isBlockingOperation` currently does nothing.** It adds a class the stylesheet only matches on
  a descendant of the tile, not on the tile itself, so hover, clicks and right-clicks still reach
  a blocked file. Guard your handlers yourself while an operation runs.
- **The checkbox replaces the icon when the pointer is over the icon**, not over the whole tile,
  and stays while `checked`; under `isDragging` or `inProgress` hovering the icon changes nothing.

## CSS variables

<APITable>

| Variable                           | Default                          | Effect                                                                                                                 |
| ---------------------------------- | -------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `--tile-bg`                        | the theme's tile background      | Background of the tile                                                                                                 |
| `--tile-hover-bg`                  | the checked background           | Background of the name row on hover and under `isActive`, and of the whole tile when `checked`                         |
| `--tile-thumbnail-image-hover-bg`  | `--tile-bg`                      | Background of the thumbnail area on hover and under `isActive`; a `checked` tile takes `--tile-hover-bg` there instead |
| `--tile-thumbnail-transition`      | `background 0.2s`                | Transition of the thumbnail area's background                                                                          |
| `--tile-border-style`              | the theme's border               | Border of the tile, shared with the other tiles                                                                        |
| `--file-tile-border-style`         | `--tile-border-style`            | Border of a file tile only; wins over `--tile-border-style`                                                            |
| `--tile-radius`                    | `12px`                           | Corner radius                                                                                                          |
| `--tile-height`                    | `222px`                          | Height of the whole tile                                                                                               |
| `--tile-thumbnail-height`          | `100%`                           | Height of the preview image                                                                                            |
| `--tile-thumbnail-padding-inline`  | `0`                              | Side inset of the preview image                                                                                        |
| `--tile-thumbnail-image-radius`    | the tile's top corners           | Corner radius of the preview image                                                                                     |
| `--tile-bottom-padding-inline`     | `0`                              | Side padding of the name row                                                                                           |
| `--tile-text-size`                 | `14px`                           | Font size of the name                                                                                                  |
| `--tile-text-weight`               | `normal`                         | Font weight of the name                                                                                                |
| `--tile-text-color`                | inherited                        | Colour of the name                                                                                                     |
| `--tile-text-line-height`          | `16px`                           | Line height of the name                                                                                                |
| `--tile-hover-text-decoration`     | the page link's hover decoration | Decoration of the name on hover and under `isActive`                                                                   |
| `--tile-icon-display`              | `flex`                           | `display` of the box holding the icon and the checkbox; `none` hides both                                              |
| `--tile-badge-bg`                  | the theme's badge background     | Background of each badge and quick action over the thumbnail                                                           |
| `--tile-badge-radius`              | `3px`                            | Corner radius of each badge and quick action                                                                           |
| `--tile-badge-box-shadow`          | the theme's badge shadow         | Shadow of each badge and quick action                                                                                  |
| `--tile-icon-color`                | the theme's icon colour          | Fill of a `.is-pinned` badge inside the content's `.badges`; the three-dot button does not read it                     |
| `--tile-option-button-padding-end` | `16px`                           | End padding of the three-dot button                                                                                    |
| `--tile-hotkey-color`              | the theme's hotkey colour        | Border colour under `showHotkeyBorder`                                                                                 |
| `--highlightColor`                 | none                             | Colour that fades out of the name row while `isHighlight` plays                                                        |

</APITable>

**`isHighlight` shows nothing on its own.** The kit sets no `--highlightColor`; set one on the tile
or an ancestor, and the fade plays once, for two seconds, when the tile mounts.

## Accessibility

- The tile is a plain `<div>` with click and context-menu handlers: no role, no `tabindex`, no key
  handling. The only focusable things are the checkbox and whatever you put in the content.
- **The thumbnail's `alt` is the fixed English string `Thumbnail-img`**, which is neither
  descriptive nor translated and cannot be changed.
- Ctrl-click and Shift-click have no keyboard equivalent, so range and additive selection are
  pointer-only.
- The badges and quick actions are your own elements; they are not announced as belonging to the
  file unless you label them.
- The name is the one thing that should be a real link — make it one, rather than relying on the
  tile's click handler, so that the file can be opened from the keyboard.

## Test ids

<APITable>

| Element       | `data-testid`                      |
| ------------- | ---------------------------------- |
| Outer element | `tile`, overridden by `dataTestId` |
| Thumbnail     | `file-thumbnail`                   |

</APITable>

The checkbox, the three-dot button and the menu carry their own components' ids.

## Related

- [`Tiles`](./index.md) — the family this belongs to.
- [`FolderTile`](./folder-tile.md) — the same idea for a folder.
- [`TileContent`](./tile-content.md) — what goes in `children`.
