---
description: "Tile for a room template: the name on top, and an owner and storage pair along the bottom."
custom_edit_url: "https://github.com/ONLYOFFICE/docspace-ui-kit-react/blob/446f115916d79a87d07b9e3dddb1e39a263784ee/components/tiles/template-tile/README.md"
---

import ThemedImage from '@theme/ThemedImage';

import APITable from '@site/src/components/APITable/APITable';

# TemplateTile

Tile for a room template: the name on top, and an owner and storage pair along the bottom. It is
[`BaseTile`](./base-tile.md) with a two-column caption in its lower half, where the room
tile puts its tags.

<ThemedImage alt="TemplateTile" width={316} sources={{ light: require('./template-tile--primary-light.png').default, dark: require('./template-tile--primary-dark.png').default }} />

## Use this when / not when

- Use for a room template in a tile listing, where the owner matters and the tags do not.
- Not for a room — [`RoomTile`](./room-tile.md) shows the tags and the room type.
- Not for a folder or a document — [`FolderTile`](./folder-tile.md) and
  [`FileTile`](./file-tile.md).
- Not for a card of your own — [`BaseTile`](./base-tile.md) is the same shell with an
  empty lower half.
- **The labels are not yours to choose.** "Owner" and "Storage" come from the kit's own
  translations under exactly those keys; there is no prop for either.
- **The storage figure is not rendered by this component.** `showStorageInfo` adds the label;
  the value needs a `SpaceQuotaComponent` of your own beside it.

## Import

```ts
import { TemplateTile } from "@onlyoffice/apps-ui-kit/components/tiles/template-tile";
```

`components/index.ts` does not list this folder, but it lists `tiles`, and `export *`
is transitive — so the name arrives from `@onlyoffice/apps-ui-kit/components/tiles` and from
the root barrel `@onlyoffice/apps-ui-kit` as well.

Needs `ThemeProvider` for its colours and `TranslationProvider` for the two captions and the
three-dot button's tooltip, which it asks the kit's own translation hook for; without it the lower
half is two empty lines.


## Stories

### Default

A template with its owner and the storage it uses: the icon, the name with a create-room button, the menu, and the two lines below. Hover the icon and tick the checkbox to select it, click the owner to see `openUser` in the Actions panel, and change any other prop live in the Controls panel below.

<ThemedImage alt="Default" width={316} sources={{ light: require('./template-tile--default-light.png').default, dark: require('./template-tile--default-dark.png').default }} />

### Checked

A selected template, as it looks among others the reader has picked: the checkbox stays ticked in place of the icon and the tile is tinted (`checked`).

<ThemedImage alt="Checked" width={316} sources={{ light: require('./template-tile--checked-light.png').default, dark: require('./template-tile--checked-dark.png').default }} />

### With Space Quota

A template with a storage limit the reader may change: the storage line shows the space used and a drop-down with the limit, both drawn by the host's quota component (`showStorageInfo`, `SpaceQuotaComponent`, `security.EditRoom`).

<ThemedImage alt="With Space Quota" width={316} sources={{ light: require('./template-tile--with-space-quota-light.png').default, dark: require('./template-tile--with-space-quota-dark.png').default }} />

### With Read Only Quota

The same template for a reader who may not edit it: the tile tells the quota component the figure is read-only, so it shows the used space and the limit as plain text (`security.EditRoom: false`).

<ThemedImage alt="With Read Only Quota" width={316} sources={{ light: require('./template-tile--with-read-only-quota-light.png').default, dark: require('./template-tile--with-read-only-quota-dark.png').default }} />

### Blocking Operation

A template an operation is running over, which must not be picked or opened until it ends: hover it, click it or right-click it and nothing happens (`isBlockingOperation`). It looks the same as an idle template, so show the operation somewhere else.

<ThemedImage alt="Blocking Operation" width={316} sources={{ light: require('./template-tile--blocking-operation-light.png').default, dark: require('./template-tile--blocking-operation-dark.png').default }} />

### In Progress

A template that is busy, being saved or copied: a small loader stands where the icon and the checkbox were (`inProgress`).

<ThemedImage alt="In Progress" width={316} sources={{ light: require('./template-tile--in-progress-light.png').default, dark: require('./template-tile--in-progress-dark.png').default }} />

### With Hotkey Border

The tile the keyboard is on while the reader moves through the grid with the arrow keys: its border turns the accent colour (`showHotkeyBorder`). The tile does not handle the keys itself.

<ThemedImage alt="With Hotkey Border" width={316} sources={{ light: require('./template-tile--with-hotkey-border-light.png').default, dark: require('./template-tile--with-hotkey-border-dark.png').default }} />

### Renaming State

A template whose name is being edited: the icon and the checkbox go, so the name can become a text field, and hovering no longer tints the tile (`isEdit`).

<ThemedImage alt="Renaming State" width={316} sources={{ light: require('./template-tile--renaming-state-light.png').default, dark: require('./template-tile--renaming-state-dark.png').default }} />

### Css Customization

The variables are listed under CSS variables on this page.

Two instances:
- **Sample Template** — for every variable but the hotkey colour; hover it for `--tile-hover-bg`.
- **Team Template** — `showHotkeyBorder`, for `--tile-hotkey-color`.

<ThemedImage alt="Css Customization" width={316} sources={{ light: require('./template-tile--css-customization-light.png').default, dark: require('./template-tile--css-customization-dark.png').default }} />

## Minimal example

```tsx
import { TemplateTile } from "@onlyoffice/apps-ui-kit/components/tiles/template-tile";
import { TileContent } from "@onlyoffice/apps-ui-kit/components/tiles/tile-content";
import { Text } from "@onlyoffice/apps-ui-kit/components/text";

const template = {
  id: "t1",
  title: "Onboarding template",
  isTemplate: true,
  createdBy: { id: "u1", displayName: "Anna Petrova" },
  contextOptions: [],
};

export function SimpleTemplateTile() {
  return (
    <TemplateTile
      item={template}
      contextOptions={[]}
      columnCount={2}
      openUser={() => {}}
    >
      <TileContent>
        <Text truncate>{template.title}</Text>
      </TileContent>
    </TemplateTile>
  );
}
```

## Props


<APITable>

| Property | Type | Description |
| --- | --- | --- |
| `columnCount` | `number` | Ignored. It is required by the type and read by nothing — the lower half is a two-column list, not a grid. |
| `contextOptions` | `ContextMenuModel[]` | The menu's entries. Required — but the three-dot button appears only when `item` also carries a `contextOptions` key of its own. |
| `item` | `TemplateItem` | The template this tile stands for. Its `createdBy` fills the owner line and its `security.EditRoom` decides whether the quota control is read-only. |
| `openUser` | `() => void` | Called when the owner's name is clicked. Required, even when the template has no `createdBy` and the name is never rendered. |
| `badges`? | `ReactNode` | Badges beside the content, in the upper half. |
| `checked`? | `boolean` | Whether the tile is selected. |
| `children`? | `ReactNode` | The tile's content. Only the first element is rendered, above the badges. |
| `element`? | `ReactNode` | The icon beside the checkbox. Without it neither the icon nor the checkbox is rendered at all. |
| `getContextModel`? | `() => ContextMenuModel[]` | Builds the menu shown on right-click. Without it the right-click menu never opens. |
| `hideContextMenu`? | `() => void` | Called when the menu closes. |
| `indeterminate`? | `boolean` | Draws the checkbox in its indeterminate state. |
| `inProgress`? | `boolean` | Replaces the icon and the checkbox with the kit's track loader. |
| `isActive`? | `boolean` | Whether the tile is the one being acted on, which keeps its hover background. |
| `isBlockingOperation`? | `boolean` | Turns the pointer off while an operation is running over the tile: hover, clicks and right-clicks stop reaching it. It does not change how the tile looks. |
| `isEdit`? | `boolean` | Renaming state: it removes the icon and the checkbox. |
| `onSelect`? | `(checked: boolean, item: TemplateItem) => void` | Called with the new checked state and the `item`. A checked item that has no string `title` is dropped before it reaches you. |
| `showHotkeyBorder`? | `boolean` | Draws the accent outline that marks the tile the keyboard is on. |
| `showStorageInfo`? | `boolean` | Adds the storage line to the lower half. The value beside it appears only when `SpaceQuotaComponent` is given as well. |
| `SpaceQuotaComponent`? | `ComponentType<SpaceQuotaProps>` | Renders the storage figure. It is handed the `item`, the literal type `"room"` and whether editing is allowed. |
| `thumbnailClick`? | `(e: React.MouseEvent) => void` | Ignored. It reaches the base tile, which does not read it either. |
| `tileContextClick`? | `() => void` | Called before the menu opens. |

</APITable>

## Recipes

### With the storage figure

Both pieces are needed: `showStorageInfo` draws the caption, `SpaceQuotaComponent` draws the value
beside it. Your component is handed the item, the literal type `"room"` and whether editing is
allowed, which is taken from `item.security.EditRoom`.

```tsx
import { TemplateTile } from "@onlyoffice/apps-ui-kit/components/tiles/template-tile";
import type { SpaceQuotaProps } from "@onlyoffice/apps-ui-kit/components/tiles/template-tile";
import { TileContent } from "@onlyoffice/apps-ui-kit/components/tiles/tile-content";
import { Text } from "@onlyoffice/apps-ui-kit/components/text";

const template = {
  id: "t1",
  title: "Onboarding template",
  createdBy: { id: "u1", displayName: "Anna Petrova" },
  security: { EditRoom: true },
  contextOptions: [],
};

function Quota({ isReadOnly, className }: SpaceQuotaProps) {
  return (
    <Text className={className} fontSize="13px">
      {isReadOnly ? "1.2 GB" : "1.2 GB of 10 GB"}
    </Text>
  );
}

export function TemplateTileWithQuota() {
  return (
    <TemplateTile
      item={template}
      contextOptions={[]}
      columnCount={2}
      showStorageInfo
      SpaceQuotaComponent={Quota}
      openUser={() => {}}
    >
      <TileContent>
        <Text truncate>{template.title}</Text>
      </TileContent>
    </TemplateTile>
  );
}
```

### Selection

The checkbox appears beside `element` and reports through `onSelect`. A template whose `title` is
not a string is dropped before the callback runs, so the item you get back is always a real
template.

```tsx
import { useState } from "react";

import { TemplateTile } from "@onlyoffice/apps-ui-kit/components/tiles/template-tile";
import { TileContent } from "@onlyoffice/apps-ui-kit/components/tiles/tile-content";
import { Text } from "@onlyoffice/apps-ui-kit/components/text";

const template = { id: "t1", title: "Onboarding template", contextOptions: [] };

export function SelectableTemplateTile() {
  const [checked, setChecked] = useState(false);

  return (
    <TemplateTile
      item={template}
      checked={checked}
      contextOptions={[]}
      columnCount={2}
      element={<span aria-hidden="true">🗂️</span>}
      onSelect={(next) => setChecked(next)}
      openUser={() => {}}
    >
      <TileContent>
        <Text truncate>{template.title}</Text>
      </TileContent>
    </TemplateTile>
  );
}
```

## Behaviour the types don't state

- **`columnCount` is required and does nothing.** It is not read here and it is not read by the
  base tile either; the lower half is a two-column caption, not a grid. Pass any number.
- **`openUser` is required even when there is no owner.** The link it belongs to is rendered only
  when `item.createdBy` is set, so on a template without one the prop is never called.
- **`thumbnailClick` is dead.** It reaches the base tile, which declares it and reads it nowhere.
- **There is no `dataTestId` prop**, unlike every other tile in the family: the outer element keeps
  the base tile's default `tile`.
- **The owner's name is a link with no `href`**, so it is an `<a>` that is not focusable even
  though it is the one thing in the lower half that does something.
- **`onSelect` filters the item on the way out.** The base tile hands back its own `TileItem`; this
  component checks that it has a string `title` and drops the call otherwise.
- **The captions are fixed keys.** They are asked for as `Owner` and `Storage` in the kit's common
  namespace — not props, and not overridable.
- **The three-dot button needs the flag on the item as well as the prop**, and the right-click menu
  needs `getContextModel` — see [`BaseTile`](./base-tile.md), which this component wraps.
- **`isBlockingOperation` turns off the pointer and nothing else**: hover, clicks and right-clicks
  stop reaching the tile, but it looks exactly like an idle one, so show the operation elsewhere.
- **Only the first child is rendered**, above the badges; the rest of `children` is dropped.

## CSS variables

<APITable>

| Variable              | Default                     | Effect                                                               |
| --------------------- | --------------------------- | -------------------------------------------------------------------- |
| `--tile-sub-color`    | the theme's sub text        | Colour of the two captions in the lower half and of the owner's name |
| `--tile-bg`           | the theme's tile background | Background of the tile                                               |
| `--tile-hover-bg`     | the checked background      | Background of the tile on hover, when `checked` and under `isActive` |
| `--tile-border-style` | the theme's room border     | Border of the tile                                                   |
| `--tile-radius`       | `12px`                      | Corner radius                                                        |
| `--tile-icon-color`   | the theme's icon colour     | Fill of the three-dot button                                         |
| `--tile-hotkey-color` | the theme's hotkey colour   | Border colour under `showHotkeyBorder`                               |

</APITable>

All but `--tile-sub-color` are read by [`BaseTile`](./base-tile.md), which this component
wraps. **Its `--tile-padding` and `--tile-row-gap` do not reach a template tile**: this
component's stylesheet fixes both at `12px`, and the tile is capped at 128px high.

## Accessibility

- The tile is a plain `<div>` with click and context-menu handlers: no role, no `tabindex`, no key
  handling. Only the checkbox and whatever you put in the content are focusable.
- **The owner's name is not keyboard-reachable**: it is a link without an `href` carrying a click
  handler. If opening the owner's profile matters, render your own button in the content instead.
- The captions and their values are separate elements with nothing tying them together, so a screen
  reader reads "Owner", "Storage", the name and the figure as four unrelated pieces of text.
- Nothing here sets `aria-busy` or `aria-disabled`. `inProgress` changes only the appearance;
  `isBlockingOperation` turns off the pointer but not the keyboard, so a busy template's checkbox
  can still be toggled from it.

## Test ids

<APITable>

| Element       | `data-testid` |
| ------------- | ------------- |
| Outer element | `tile`        |

</APITable>

It cannot be changed from here.

## Related

- [`Tiles`](./index.md) — the family this belongs to.
- [`BaseTile`](./base-tile.md) — the shell this is built on.
- [`RoomTile`](./room-tile.md) — the same shell with tags instead of captions.
