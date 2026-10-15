---
description: "Tile for a room: the logo and name on top, and the room's tags along the bottom."
custom_edit_url: "https://github.com/ONLYOFFICE/docspace-ui-kit-react/blob/9954315f61fd4830b7ea0582c3d58bee0e85d0aa/components/tiles/room-tile/README.md"
---

import ThemedImage from '@theme/ThemedImage';

import APITable from '@site/src/components/APITable/APITable';

# RoomTile

Tile for a room: the logo and name on top, and the room's tags along the bottom. It is
[`BaseTile`](./base-tile.md) with a tag row built for it, and the tag row is the part that
makes it worth using rather than building your own.

<ThemedImage alt="RoomTile" width={316} sources={{ light: require('./room-tile--primary-light.png').default, dark: require('./room-tile--primary-dark.png').default }} />

## Use this when / not when

- Use for a room in a tile listing, where the tags and the room type should be visible and
  clickable.
- Not for a folder or a document — [`FolderTile`](./folder-tile.md) and
  [`FileTile`](./file-tile.md).
- Not for a template — [`TemplateTile`](./template-tile.md) shows the owner and the
  storage instead of tags.
- Not for a card of your own — [`BaseTile`](./base-tile.md) is the same shell with an
  empty lower half.
- **Four props are required and have no sensible empty value**: `columnCount`, `selectTag`,
  `selectOption` and `getRoomTypeName`. The last one is how a room type becomes a readable label;
  the kit does not know the portal's room types.

## Import

```ts
import { RoomTile } from "@onlyoffice/apps-ui-kit/components/tiles/room-tile";
```

`components/index.ts` does not list this folder, but it lists `tiles`, and `export *`
is transitive — so the name arrives from `@onlyoffice/apps-ui-kit/components/tiles` and from
the root barrel `@onlyoffice/apps-ui-kit` as well.

Needs `ThemeProvider` for its colours and `TranslationProvider` for two labels it asks the kit's
own translation hook for: the three-dot button's tooltip, and the `NoTags` line an AI agent gets
when it has no tags.

## Stories

### Default

A room with one tag: the logo, the name with a pin badge, the menu, and the tag row below. Hover the logo and tick the checkbox to select the room, click anywhere else or on the tag to see the callbacks in the Actions panel, and change any other prop live in the Controls panel below.

<ThemedImage alt="Default" width={316} sources={{ light: require('./room-tile--default-light.png').default, dark: require('./room-tile--default-dark.png').default }} />

### Checked

A selected room, as it looks among others the reader has picked: the checkbox stays ticked in place of the logo and the tile and its tags are tinted (`checked`).

<ThemedImage alt="Checked" width={316} sources={{ light: require('./room-tile--checked-light.png').default, dark: require('./room-tile--checked-dark.png').default }} />

### In Progress

A room that is busy, being created or copied: a small loader stands where the logo and the checkbox were (`inProgress`).

<ThemedImage alt="In Progress" width={316} sources={{ light: require('./room-tile--in-progress-light.png').default, dark: require('./room-tile--in-progress-dark.png').default }} />

### Blocking Operation

A room an operation is running over, which must not be picked or opened until it ends: hover it, click it or right-click it and nothing happens (`isBlockingOperation`). It looks the same as an idle room, so show the operation somewhere else.

<ThemedImage alt="Blocking Operation" width={316} sources={{ light: require('./room-tile--blocking-operation-light.png').default, dark: require('./room-tile--blocking-operation-dark.png').default }} />

### Generated Tags

A room with no tags of its own, kept on a connected storage: the tile makes two tags for it: first the storage, drawn as its icon alone (`providerType`, `thirdPartyIcon`), then the room type (`getRoomTypeName`). Click either to see `selectOption` in the Actions panel.

<ThemedImage alt="Generated Tags" width={316} sources={{ light: require('./room-tile--generated-tags-light.png').default, dark: require('./room-tile--generated-tags-dark.png').default }} />

### With Hotkey Border

The tile the keyboard is on while the reader moves through the grid with the arrow keys: its border turns the accent colour (`showHotkeyBorder`). The tile does not handle the keys itself.

<ThemedImage alt="With Hotkey Border" width={316} sources={{ light: require('./room-tile--with-hotkey-border-light.png').default, dark: require('./room-tile--with-hotkey-border-dark.png').default }} />

### Renaming State

A room whose name is being edited: the logo and the checkbox go, so the name can become a text field, and hovering no longer tints the tile (`isEdit`).

<ThemedImage alt="Renaming State" width={316} sources={{ light: require('./room-tile--renaming-state-light.png').default, dark: require('./room-tile--renaming-state-dark.png').default }} />

### Custom Bottom Row

A room whose bottom row is the host's own: here a line of text that counts the tags and changes when the pointer is over the tile (`customBottomContent`). The tile no longer draws its tags.

<ThemedImage alt="Custom Bottom Row" width={316} sources={{ light: require('./room-tile--custom-bottom-row-light.png').default, dark: require('./room-tile--custom-bottom-row-dark.png').default }} />

### Css Customization

The variables are listed under CSS variables on this page.

Two instances:
- **Sample Room** — for every variable but the hotkey colour; hover it for `--tile-hover-bg` and `--tile-tag-hover-bg`.
- **Team Room** — `showHotkeyBorder`, for `--tile-hotkey-color`.

<ThemedImage alt="Css Customization" width={316} sources={{ light: require('./room-tile--css-customization-light.png').default, dark: require('./room-tile--css-customization-dark.png').default }} />

## Minimal example

```tsx
import { RoomTile } from "@onlyoffice/apps-ui-kit/components/tiles/room-tile";
import { TileContent } from "@onlyoffice/apps-ui-kit/components/tiles/tile-content";
import { Text } from "@onlyoffice/apps-ui-kit/components/text";

const room = {
  id: "r1",
  title: "Marketing",
  roomType: "2",
  isRoom: true,
  contextOptions: [],
};

export function SimpleRoomTile() {
  return (
    <RoomTile
      item={room}
      contextOptions={[]}
      columnCount={2}
      selectTag={() => {}}
      selectOption={() => {}}
      getRoomTypeName={(type) => (type === "2" ? "Collaboration room" : "Room")}
    >
      <TileContent>
        <Text truncate>{room.title}</Text>
      </TileContent>
    </RoomTile>
  );
}
```

## Props


<APITable>

| Property | Type | Description |
| --- | --- | --- |
| `columnCount` | `number` | How many columns the tag row is laid out in. Required. |
| `contextOptions` | `ContextMenuModel[]` | The menu's entries. Required — but see `item`. |
| `getRoomTypeName` | `(type: string, t: TFunction \| ((key: string, interpolation?: Record<string, string \| number>) => string)) => string` | Turns a room type into the label of the tag shown when the room has no tags of its own. It is handed the kit's own translation function. Required. |
| `item` | `RoomItem` | The room this tile stands for. Its `tags`, `providerType` and `isAIAgent` decide what the bottom row shows, and its `contextOptions` key decides whether the three-dot button appears. |
| `selectOption` | `(option: SelectOption) => void` | Called when the generated third-party or room-type tag is clicked, with which of the two it was. Required. |
| `selectTag` | `(tag: TagClickEvent) => void` | Called with a clicked tag, but only one that carries both a label and a room type — a plain string tag never reaches it, and neither does any tag on an AI agent that has none of its own. |
| `badges`? | `ReactNode` | Badges drawn beside the content, in the upper half. |
| `checked`? | `boolean` | Whether the tile is selected. |
| `children`? | `ReactNode` | The tile's content. Only the first element is rendered, above the tags. |
| `customBottomContent`? | `(isHovered: boolean, tags: Array<TagType \| string>) => React.ReactNode` | Replaces the whole tag row. It is called on every render with the hover state and the tags the component worked out. |
| `dataTestId`? | `string` | Value of `data-testid` on the outer element. Default: `"tile"`. |
| `element`? | `ReactNode` | The room logo beside the checkbox. Without it neither the logo nor the checkbox is rendered at all. |
| `getContextModel`? | `() => ContextMenuModel[]` | Builds the menu shown on right-click. Without it the right-click menu never opens. |
| `indeterminate`? | `boolean` | Draws the checkbox in its indeterminate state. |
| `inProgress`? | `boolean` | Replaces the logo and the checkbox with the kit's track loader. |
| `isActive`? | `boolean` | Whether the tile is the one being acted on, which keeps its hover background. |
| `isBlockingOperation`? | `boolean` | Turns the pointer off while an operation is running over the tile: hover, clicks and right-clicks stop reaching it. It does not change how the tile looks. |
| `isEdit`? | `boolean` | Renaming state: it removes the logo and the checkbox. |
| `onSelect`? | `(checked: boolean, item: RoomItem) => void` | Called with the new checked state and the `item` when the checkbox changes, or when the logo is tapped on a screen narrower than 600px. |
| `showHotkeyBorder`? | `boolean` | Draws the accent outline that marks the tile the keyboard is on. |
| `thumbnailClick`? | `(e: React.MouseEvent) => void` | Called with the event on a click anywhere on the tile except the checkbox, the tags, the badges, an open dialog, the three-dot button and the menu. It is the tile's open handler, not a thumbnail's. |

</APITable>

## Recipes

### Opening the room

`thumbnailClick` is the tile's open handler despite its name: it fires on a click anywhere except
the checkbox, the tags, the badges, an open dialog, the three-dot button and the menu.

```tsx
import { RoomTile } from "@onlyoffice/apps-ui-kit/components/tiles/room-tile";
import { TileContent } from "@onlyoffice/apps-ui-kit/components/tiles/tile-content";
import { Text } from "@onlyoffice/apps-ui-kit/components/text";

const room = {
  id: "r1",
  title: "Marketing",
  roomType: "2",
  contextOptions: [],
};

export function OpenableRoomTile({ open }: { open: () => void }) {
  return (
    <RoomTile
      item={room}
      contextOptions={[]}
      columnCount={2}
      thumbnailClick={open}
      selectTag={() => {}}
      selectOption={() => {}}
      getRoomTypeName={() => "Collaboration room"}
    >
      <TileContent>
        <Text truncate>{room.title}</Text>
      </TileContent>
    </RoomTile>
  );
}
```

### Filtering from a tag

A room with tags of its own gets them in the bottom row; a room without gets one generated tag
carrying its type. Clicking a real tag reaches `selectTag`, clicking a generated one reaches
`selectOption` with which of the two kinds it was.

```tsx
import { RoomTile } from "@onlyoffice/apps-ui-kit/components/tiles/room-tile";
import { TileContent } from "@onlyoffice/apps-ui-kit/components/tiles/tile-content";
import { Text } from "@onlyoffice/apps-ui-kit/components/text";

const room = {
  id: "r1",
  title: "Marketing",
  roomType: "2",
  tags: [{ label: "Q4", roomType: 2 }],
  contextOptions: [],
};

export function FilterableRoomTile({
  filterByTag,
  filterByType,
}: {
  filterByTag: (label: string) => void;
  filterByType: (value: string) => void;
}) {
  return (
    <RoomTile
      item={room}
      contextOptions={[]}
      columnCount={2}
      selectTag={(tag) => filterByTag(String(tag.label))}
      selectOption={(option) => filterByType(option.value)}
      getRoomTypeName={() => "Collaboration room"}
    >
      <TileContent>
        <Text truncate>{room.title}</Text>
      </TileContent>
    </RoomTile>
  );
}
```

### Your own bottom row

`customBottomContent` replaces the tag row entirely. It is called on every render with the hover
state and the tags the component worked out, so you can keep those and lay them out differently.

```tsx
import { RoomTile } from "@onlyoffice/apps-ui-kit/components/tiles/room-tile";
import { TileContent } from "@onlyoffice/apps-ui-kit/components/tiles/tile-content";
import { Text } from "@onlyoffice/apps-ui-kit/components/text";

const room = {
  id: "r1",
  title: "Marketing",
  roomType: "2",
  contextOptions: [],
};

export function RoomTileWithFooter() {
  return (
    <RoomTile
      item={room}
      contextOptions={[]}
      columnCount={2}
      selectTag={() => {}}
      selectOption={() => {}}
      getRoomTypeName={() => "Collaboration room"}
      customBottomContent={(isHovered, tags) => (
        <Text fontSize="12px">
          {isHovered ? "Open room" : `${tags.length} tag(s)`}
        </Text>
      )}
    >
      <TileContent>
        <Text truncate>{room.title}</Text>
      </TileContent>
    </RoomTile>
  );
}
```

## Behaviour the types don't state

- **`thumbnailClick` is the tile's click handler, not a thumbnail's.** There is no thumbnail here.
  It fires for a click anywhere in the tile except inside `.checkbox`, `.tags`, `.advanced-tag`,
  `.badges`, `#modal-dialog`, `.expandButton`, `.p-contextmenu`, or the element holding the logo
  and the checkbox.
- **The bottom row is always populated.** With `item.tags` it shows them; without, it shows one
  generated tag carrying the room type from `getRoomTypeName` — or, for an AI agent, a `NoTags`
  label from the translations.
- **A third-party room gets an extra tag first**, built from `providerKey` or `providerType`, and
  clicking it calls `selectOption` with `typeProvider`.
- **`selectTag` is not called for every tag.** A tag only reaches it if it carries both a `label`
  and a `roomType`, so a plain string tag is inert; and on an AI agent with no tags of its own,
  nothing reaches it at all.
- **The menu's own props are missing from this type.** `hideContextMenu` and `tileContextClick` are
  forwarded to the base tile untouched, but `RoomTileProps` does not declare either, so TypeScript
  rejects them on the JSX element and there is no way to be told when the menu closes.
- **A plain click does not select.** Unlike the file and folder tiles, selection here is the
  checkbox, or a tap on the logo below 600px.
- **The three-dot button needs the flag on the item as well as the prop**, and the right-click menu
  needs `getContextModel` — see [`BaseTile`](./base-tile.md), which this component wraps.
- **Only the first child is rendered**, above the badges; the rest of `children` is dropped.
- **`isBlockingOperation` turns off the pointer and nothing else**: hover, clicks and right-clicks
  stop reaching the tile, but it looks exactly like an idle one, so show the operation elsewhere.
- **`element` is the switch for the whole corner**: without it neither the logo nor the checkbox
  is rendered, and the tile cannot be selected.

## CSS variables

<APITable>

| Variable              | Default                                         | Effect                                                                                    |
| --------------------- | ----------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `--tile-bg`           | the theme's tile background                     | Background of the tile, and of the box behind the logo                                    |
| `--tile-hover-bg`     | the checked background                          | Background of the tile on hover, when `checked` and under `isActive`                      |
| `--tile-tag-hover-bg` | white; the checked background in the dark theme | Background of the tags on hover (not under `isEdit`), when `checked` and under `isActive` |
| `--tile-icon-color`   | the theme's icon colour                         | Fill of the three-dot button and of a pin badge (`.is-pinned` inside `.badges`)           |
| `--tile-border-style` | the theme's room border                         | Border of the tile                                                                        |
| `--tile-radius`       | `12px`                                          | Corner radius                                                                             |
| `--tile-padding`      | `16px 0`                                        | Padding of the tile                                                                       |
| `--tile-row-gap`      | `16px`                                          | Gap between the name row and the tag row                                                  |
| `--tile-hotkey-color` | the theme's hotkey colour                       | Border colour under `showHotkeyBorder`                                                    |

</APITable>

All but `--tile-tag-hover-bg` and the logo box are read by [`BaseTile`](./base-tile.md),
which this component wraps; its section has the details. Hovering the tile also underlines the
name when the content is a link, and that underline has no variable.

## Accessibility

- The tile is a plain `<div>` with click and context-menu handlers: no role, no `tabindex`, no key
  handling. The checkbox and whatever you put in the content are the only focusable parts.
- The tags are the kit's `Tags`; a tag that filters the listing is not a button, so filtering by
  tag is pointer-only.
- `thumbnailClick` is not reachable from the keyboard — make the room's name a real link if the
  room has to be openable without a mouse.
- The room type shown in the generated tag is the only place the type is stated; it is a label,
  not an accessible description of the tile.

## Test ids

<APITable>

| Element       | `data-testid`                      |
| ------------- | ---------------------------------- |
| Outer element | `tile`, overridden by `dataTestId` |

</APITable>

The tags, the checkbox and the menu carry their own components' ids.

## Related

- [`Tiles`](./index.md) — the family this belongs to.
- [`BaseTile`](./base-tile.md) — the shell this is built on.
- [`RoomIcon`](../data-display/room-icon.md) — what usually goes in `element`.
