---
description: "The tile shell: an icon that turns into a checkbox, a slot for the content, a three-dot menu and a lower half."
custom_edit_url: "https://github.com/ONLYOFFICE/docspace-ui-kit-react/blob/9954315f61fd4830b7ea0582c3d58bee0e85d0aa/components/tiles/base-tile/README.md"
---

import ThemedImage from '@theme/ThemedImage';

import APITable from '@site/src/components/APITable/APITable';

# BaseTile

The tile shell: an icon that turns into a checkbox, a slot for the content, a three-dot menu and a
lower half. [`RoomTile`](./room-tile.md) and
[`TemplateTile`](./template-tile.md) are this component with their halves filled in; the
file and folder tiles are not, and repeat the same logic separately.

<ThemedImage alt="BaseTile" width={316} sources={{ light: require('./base-tile--primary-light.png').default, dark: require('./base-tile--primary-dark.png').default }} />

## Use this when / not when

- Use for a tile the kit does not already have — anything that wants the same selection
  behaviour, context menu and two-part layout.
- Not for a file or a folder — [`FileTile`](./file-tile.md) and
  [`FolderTile`](./folder-tile.md) add the thumbnail and the click-to-select handling that
  this component does not have.
- Not for a room or a template — [`RoomTile`](./room-tile.md) and
  [`TemplateTile`](./template-tile.md) already wrap this one.
- **A plain click does not select.** Unlike the file and folder tiles, this one only selects
  through the checkbox, or through a tap on the icon below 600px. `onRoomClick` is where you put
  your own handler.
- **There is no thumbnail.** `thumbnailClick` is in the type and is read by nothing; the picture,
  if you want one, goes in `topContent`.

## Import

```ts
import { BaseTile } from "@onlyoffice/apps-ui-kit/components/tiles/base-tile";
```

`components/index.ts` does not list this folder, but it lists `tiles`, and `export *`
is transitive — so the name arrives from `@onlyoffice/apps-ui-kit/components/tiles` and from
the root barrel `@onlyoffice/apps-ui-kit` as well.

Needs `ThemeProvider` for its colours and `TranslationProvider` for the three-dot button's
tooltip, which it asks the kit's own translation hook for under the key
`TitleShowFolderActions`; without it that tooltip is empty.

## Stories

### Default

A document as a tile: its icon, its name, and a checkbox that takes the icon's place on hover. Tick it, right-click the tile for its menu, and change any other prop live in the Controls panel below.

<ThemedImage alt="Default" width={316} sources={{ light: require('./base-tile--default-light.png').default, dark: require('./base-tile--default-dark.png').default }} />

### Checked

A selected tile, as it looks among others the reader has picked: the checkbox stays ticked in place of the icon and the background stays tinted (`checked`).

<ThemedImage alt="Checked" width={316} sources={{ light: require('./base-tile--checked-light.png').default, dark: require('./base-tile--checked-dark.png').default }} />

### Active

The tile whose menu is open or that an action is running on keeps the hover background after the pointer leaves, so the reader can tell which one it is (`isActive`).

<ThemedImage alt="Active" width={316} sources={{ light: require('./base-tile--active-light.png').default, dark: require('./base-tile--active-dark.png').default }} />

### In Progress

A tile whose item is busy, being copied or converted: a small loader stands where the icon and the checkbox were (`inProgress`).

<ThemedImage alt="In Progress" width={316} sources={{ light: require('./base-tile--in-progress-light.png').default, dark: require('./base-tile--in-progress-dark.png').default }} />

### With Hotkey Border

The tile the keyboard is on while the reader moves through the grid with the arrow keys: an accent border marks it (`showHotkeyBorder`). The tile does not handle the keys itself.

<ThemedImage alt="With Hotkey Border" width={316} sources={{ light: require('./base-tile--with-hotkey-border-light.png').default, dark: require('./base-tile--with-hotkey-border-dark.png').default }} />

### With Bottom Content

A tile with a second row under the title, for tags or a line of details (`bottomContent`).

<ThemedImage alt="With Bottom Content" width={316} sources={{ light: require('./base-tile--with-bottom-content-light.png').default, dark: require('./base-tile--with-bottom-content-dark.png').default }} />

### With Menu Button

A tile whose actions are reachable without a right-click: the three-dot button opens the same menu. It is drawn only when the item carries a `contextOptions` key of its own, whatever the `contextOptions` prop holds.

<ThemedImage alt="With Menu Button" width={316} sources={{ light: require('./base-tile--with-menu-button-light.png').default, dark: require('./base-tile--with-menu-button-dark.png').default }} />

### Renaming State

A tile whose name is being edited: the icon and the checkbox go, so the title row can hold a text field across the tile, and hovering no longer tints it (`isEdit`).

<ThemedImage alt="Renaming State" width={316} sources={{ light: require('./base-tile--renaming-state-light.png').default, dark: require('./base-tile--renaming-state-dark.png').default }} />

### Blocking Operation

A tile an operation is running over, which must not be picked or opened until it ends: hover it, click it or right-click it and nothing happens (`isBlockingOperation`). It looks the same as an idle tile, so show the operation somewhere else.

<ThemedImage alt="Blocking Operation" width={316} sources={{ light: require('./base-tile--blocking-operation-light.png').default, dark: require('./base-tile--blocking-operation-dark.png').default }} />

### Css Customization

Every overridable variable set on one wrapper -- the variables are listed under CSS variables on this page. The first tile shows every variable but the hotkey colour; hover it for the hover background. The second is there for `--tile-hotkey-color`, which only a tile with `showHotkeyBorder` draws.

<ThemedImage alt="Css Customization" width={316} sources={{ light: require('./base-tile--css-customization-light.png').default, dark: require('./base-tile--css-customization-dark.png').default }} />

## Minimal example

```tsx
import { BaseTile } from "@onlyoffice/apps-ui-kit/components/tiles/base-tile";
import { TileContent } from "@onlyoffice/apps-ui-kit/components/tiles/tile-content";
import { Text } from "@onlyoffice/apps-ui-kit/components/text";

const item = { id: "a1", title: "Quarterly report" };

export function SimpleTile() {
  return (
    <BaseTile
      item={item}
      contextOptions={[]}
      topContent={
        <TileContent>
          <Text truncate>{item.title}</Text>
        </TileContent>
      }
    />
  );
}
```

## Props


<APITable>

| Property | Type | Description |
| --- | --- | --- |
| `contextOptions` | `ContextMenuModel[]` | The menu's entries. Required — but the three-dot button appears only when `item` also carries a `contextOptions` key of its own. |
| `item` | `TileItem` | The item this tile stands for. It is also what `onSelect` is called with, and the fallback source of the context menu's header. |
| `badgeUrl`? | `string` | Passed to the context menu, for the badge it draws in its header. |
| `bottomContent`? | `ReactNode` | The lower half of the tile — where the room tile puts its tags. |
| `checkboxContainerRef`? | `RefObject<HTMLDivElement \| null>` | Attached to the element holding the icon and the checkbox, so a wrapper can tell clicks on it apart. |
| `checked`? | `boolean` | Whether the tile is selected. It ticks the checkbox and keeps it visible when the pointer leaves. |
| `className`? | `string` | Added after the component's own classes on the outer element. |
| `dataTestId`? | `string` | Value of `data-testid` on the outer element. Default: `"tile"`. |
| `element`? | `ReactNode` | The icon in the corner. Without it neither the icon nor the checkbox is rendered at all. |
| `forwardRef`? | `RefObject<HTMLDivElement \| null>` | A ref the component clicks on a right-click when the menu is not mounted yet. It is not attached to anything here. |
| `getContextModel`? | `() => ContextMenuModel[]` | Builds the menu shown on right-click. Without it the right-click menu never opens, whatever `contextOptions` holds. |
| `hideContextMenu`? | `() => void` | Called when the menu closes. |
| `indeterminate`? | `boolean` | Draws the checkbox in its indeterminate state. |
| `inProgress`? | `boolean` | Replaces the icon and the checkbox with the kit's track loader. |
| `isActive`? | `boolean` | Whether the tile is the one being acted on, which keeps its hover background. |
| `isBlockingOperation`? | `boolean` | Turns the pointer off while an operation is running over the tile: hover, clicks and right-clicks stop reaching it. It does not change how the tile looks. |
| `isEdit`? | `boolean` | Renaming state: it removes the icon and the checkbox and leaves `topContent` the whole row. |
| `onHover`? | `() => void` | Called when the pointer enters the tile. |
| `onLeave`? | `() => void` | Called when the pointer leaves the tile. |
| `onRoomClick`? | `(e: React.MouseEvent) => void` | Called with the event on any click on the tile. It is the tile's `onClick`, not a room-specific one. |
| `onSelect`? | `(checked: boolean, item: TileItem) => void` | Called with the new checked state and the `item` when the checkbox changes, or when the icon is tapped on a screen narrower than 600px. |
| `showHotkeyBorder`? | `boolean` | Draws the accent outline that marks the tile the keyboard is on. |
| `thumbnailClick`? | `(e: React.MouseEvent) => void` | Ignored. Nothing in this component reads it; put the handler on `onRoomClick` or on your own `topContent`. |
| `tileContextClick`? | `(isRightClick?: boolean) => void` | Called before the menu opens, with `true` when the trigger was a right-click. It is the hook for building the options lazily. |
| `topContent`? | `ReactNode` | The upper half of the tile. Its first child is read for a nested `item`, which then takes over the context menu's header. |

</APITable>

## Recipes

### Selection

The checkbox is drawn next to `element` and reports through `onSelect`. Hold `checked` yourself:
the tile has no state.

```tsx
import { useState } from "react";

import { BaseTile } from "@onlyoffice/apps-ui-kit/components/tiles/base-tile";
import { TileContent } from "@onlyoffice/apps-ui-kit/components/tiles/tile-content";
import { Text } from "@onlyoffice/apps-ui-kit/components/text";

const item = { id: "a1", title: "Quarterly report" };

export function SelectableTile() {
  const [checked, setChecked] = useState(false);

  return (
    <BaseTile
      item={item}
      checked={checked}
      onSelect={(next) => setChecked(next)}
      contextOptions={[]}
      element={<span aria-hidden="true">📄</span>}
      topContent={
        <TileContent>
          <Text truncate>{item.title}</Text>
        </TileContent>
      }
    />
  );
}
```

### Loading

`inProgress` replaces the icon and the checkbox with the kit's track loader. On its own it is an
indicator, not a lock; `isBlockingOperation`, added here, is what stops the pointer reaching the
tile until the operation ends.

```tsx
import { BaseTile } from "@onlyoffice/apps-ui-kit/components/tiles/base-tile";
import { TileContent } from "@onlyoffice/apps-ui-kit/components/tiles/tile-content";
import { Text } from "@onlyoffice/apps-ui-kit/components/text";

const item = { id: "a1", title: "Uploading…" };

export function BusyTile() {
  return (
    <BaseTile
      item={item}
      inProgress
      isBlockingOperation
      contextOptions={[]}
      element={<span aria-hidden="true">📄</span>}
      topContent={
        <TileContent>
          <Text truncate>{item.title}</Text>
        </TileContent>
      }
    />
  );
}
```

### The context menu

Two conditions have to hold before the three-dot button appears: `contextOptions` must be
non-empty **and** `item` must have a `contextOptions` key of its own. The key's value is never
read — only its presence. For the right-click menu, add `getContextModel`.

```tsx
import { BaseTile } from "@onlyoffice/apps-ui-kit/components/tiles/base-tile";
import { TileContent } from "@onlyoffice/apps-ui-kit/components/tiles/tile-content";
import { Text } from "@onlyoffice/apps-ui-kit/components/text";

const options = [{ key: "open", label: "Open", onClick: () => {} }];
// The key on the item is the switch; its value is ignored.
const item = { id: "a1", title: "Quarterly report", contextOptions: [] };

export function TileWithMenu() {
  return (
    <BaseTile
      item={item}
      contextOptions={options}
      getContextModel={() => options}
      element={<span aria-hidden="true">📄</span>}
      topContent={
        <TileContent>
          <Text truncate>{item.title}</Text>
        </TileContent>
      }
    />
  );
}
```

## Behaviour the types don't state

- **The three-dot button needs the flag on the item as well as the prop.** The component tests
  `hasOwnProperty(item, "contextOptions")` and only then checks that the `contextOptions` prop is
  non-empty. `TileItem` does not declare that key, so the type system will not remind you; pass
  `contextOptions` alone and you get an empty placeholder `div` with the class `expandButton`
  instead of a button.
- **The right-click menu needs `getContextModel`.** Right-clicking always stops propagation and
  calls `tileContextClick(true)`, but the menu is only shown when that prop is set — a tile with
  `contextOptions` and no `getContextModel` swallows the browser's own menu and offers nothing in
  its place.
- **A right-click also clicks `forwardRef`.** When the menu is not mounted yet, the component
  calls `.click()` on whatever that ref points at. It attaches the ref to nothing itself, so this
  fires a click on an element you own.
- **A tap on the icon selects, but only below 600px.** The handler returns immediately on a wider
  window, so the same gesture does nothing on a narrow desktop window.
- **The context menu's header comes from the first child of `topContent`.** If that child has an
  `item` prop, its title, icon and logo are used; otherwise the tile's own `item` is. Passing a
  wrapper `div` as the first child therefore changes the menu's header.
- **`element` is the switch for the whole corner.** Without it neither the icon nor the checkbox
  is rendered, so a tile with no `element` cannot be selected at all.
- **The checkbox shows when the pointer is over the icon, not over the whole tile**, and stays
  shown while `checked`. Under `inProgress` hovering the corner shows nothing, because the loader
  has taken its place.
- **`isBlockingOperation` is `pointer-events: none` and nothing else.** Hover, clicks and
  right-clicks stop reaching the tile, but it looks exactly like an idle one, so show the
  operation somewhere else. Keyboard focus still reaches the checkbox.
- **`isEdit` removes that corner too**, leaving `topContent` the full width for a rename field.
- **`thumbnailClick` is dead** — declared and never read.
- **`onRoomClick` is the tile's `onClick`.** The name is the portal's; it fires on any click
  anywhere in the tile, including on the checkbox.

## CSS variables

<APITable>

| Variable              | Default                     | Effect                                                                           |
| --------------------- | --------------------------- | -------------------------------------------------------------------------------- |
| `--tile-bg`           | the theme's tile background | Background of the tile                                                           |
| `--tile-hover-bg`     | the checked background      | Background on hover (except under `isEdit`), when `checked` and under `isActive` |
| `--tile-border-style` | the theme's room border     | Border of the tile                                                               |
| `--tile-radius`       | `12px`                      | Corner radius                                                                    |
| `--tile-padding`      | `16px 0`                    | Padding of the tile                                                              |
| `--tile-row-gap`      | `16px`                      | Gap between the upper and lower halves                                           |
| `--tile-icon-color`   | the theme's icon colour     | Fill of the three-dot button                                                     |
| `--tile-hotkey-color` | the theme's hotkey colour   | Colour of the keyboard outline                                                   |

</APITable>

## Accessibility

- The tile is a plain `<div>` with click and context-menu handlers: no role, no `tabindex`, no key
  handling. Nothing in it is reachable by keyboard except the checkbox and whatever you put in
  `topContent` and `bottomContent`.
- The checkbox is the kit's `Checkbox` and is a real input, so selection is operable — but it
  carries no label. Give it one through the content, or mark the tile up as a list item yourself.
- The three-dot button has a tooltip title from the translation function, which is also its
  accessible name; without a translation provider it is an unlabelled control.
- Neither `isBlockingOperation` nor `inProgress` sets `aria-busy` or `aria-disabled`.
  `inProgress` changes only the appearance; `isBlockingOperation` turns off the pointer but not
  the keyboard, so a busy tile's checkbox can still be toggled from it.
- The right-click menu replaces the browser's own and is not reachable from the keyboard: the
  three-dot button is the only path to those actions, so keep it available.

## Test ids

<APITable>

| Element       | `data-testid`                      |
| ------------- | ---------------------------------- |
| Outer element | `tile`, overridden by `dataTestId` |

</APITable>

Everything inside carries the ids of `Checkbox`, `ContextMenuButton` and `ContextMenu`.

## Related

- [`Tiles`](./index.md) — the family this belongs to.
- [`RoomTile`](./room-tile.md) — this component with the room's tags in its lower half.
- [`TemplateTile`](./template-tile.md) — this component with the owner and storage lines.
