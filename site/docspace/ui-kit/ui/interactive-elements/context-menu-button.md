---
description: "Icon that opens a menu of actions, built afresh from a callback each time it is clicked."
custom_edit_url: "https://github.com/ONLYOFFICE/docspace-ui-kit-react/blob/9954315f61fd4830b7ea0582c3d58bee0e85d0aa/components/context-menu-button/README.md"
---

import ThemedImage from '@theme/ThemedImage';

import APITable from '@site/src/components/APITable/APITable';

# ContextMenuButton

Icon that opens a menu of actions, built afresh from a callback each time it is clicked. The
callback is what the menu shows — the `data` prop is read once and then forgotten.

<ThemedImage alt="ContextMenuButton" width={32} sources={{ light: require('./context-menu-button--primary-light.png').default, dark: require('./context-menu-button--primary-dark.png').default }} />

## Use this when / not when

- Use for the "more" button of a row, a card or a toolbar, where the actions depend on what is
  selected at the moment of the click.
- Not for a right-click menu on a region — that is [`ContextMenu`](../overlays/context-menu.md),
  which this one opens for [`Row`](../rows/row.md) in its `toggle` mode.
- Not for choosing a value: [`ComboBox`](../form-controls/combobox.md).
- Not for a menu you control yourself — [`DropDown`](../overlays/drop-down.md) anchored to an
  [`IconButton`](./icon-button.md) of your own is less indirect.

## Import

```ts
import {
  ContextMenuButton,
  ContextMenuButtonDisplayType,
} from "@onlyoffice/apps-ui-kit/components/context-menu-button";
```

Also exported from the root barrel `@onlyoffice/apps-ui-kit`.

Needs `ThemeProvider` from `@onlyoffice/apps-ui-kit/providers/theme` for the icon and menu
colours, and `TranslationProvider` from `@onlyoffice/apps-ui-kit/providers/translation` because
the items are [`DropDownItem`](../overlays/drop-down-item.md)s.

## Stories

### Default

The row-level "more" button: click the dots to open the menu and click again or outside it to close it. Change any other prop live in the Controls panel below.

<ThemedImage alt="Default" width={32} sources={{ light: require('./context-menu-button--default-light.png').default, dark: require('./context-menu-button--default-dark.png').default }} />

### Disabled

Use it when the actions do not apply to the current item: the icon greys out and a click opens nothing (`isDisabled`).

<ThemedImage alt="Disabled" width={32} sources={{ light: require('./context-menu-button--disabled-light.png').default, dark: require('./context-menu-button--disabled-dark.png').default }} />

### With Icon Border

Gives the icon a larger, boxed click target (`displayIconBorder`): the dots sit in a rounded 32px square. The default theme draws no line around it; set `--cmb-border` to add one, as the CSS customization story does.

<ThemedImage alt="With Icon Border" width={46} sources={{ light: require('./context-menu-button--with-icon-border-light.png').default, dark: require('./context-menu-button--with-icon-border-dark.png').default }} />

### Custom Colors

Matches the icon to the surface it sits on: each button has its own colour, and hovering it shows its hover colour (`color`, `hoverColor`). Click any to open its menu.

<ThemedImage alt="Custom Colors" width={112} sources={{ light: require('./context-menu-button--custom-colors-light.png').default, dark: require('./context-menu-button--custom-colors-dark.png').default }} />

### Css Customization

Every overridable variable set on one wrapper -- the variables are listed under CSS variables on this page. The example opens the menu in a bordered box (`displayIconBorder`), so every variable is on screen at once; hover the dots to see `--cmb-hover-border`. The menu is kept inline (`usePortal={false}`): in a portal it leaves the wrapper, so set the `--dropdown-*` variables on `document.body` instead.

<ThemedImage alt="Css Customization" width={96} sources={{ light: require('./context-menu-button--css-customization-light.png').default, dark: require('./context-menu-button--css-customization-dark.png').default }} />

## Minimal example

`getData` is what the menu is built from, and the component calls it without checking — a
button without one throws on the first click.

```tsx
import { ContextMenuButton } from "@onlyoffice/apps-ui-kit/components/context-menu-button";

export function RowActions({
  onRename,
  onDelete,
}: {
  onRename: () => void;
  onDelete: () => void;
}) {
  return (
    <ContextMenuButton
      title="Actions"
      getData={() => [
        { key: "rename", label: "Rename", onClick: onRename },
        { key: "delete", label: "Delete", onClick: onDelete },
      ]}
    />
  );
}
```

## Props


<APITable>

| Property | Type | Description |
| --- | --- | --- |
| `asideHeader`? | `ReactNode` | Ignored. Nothing reads this prop. |
| `className`? | `string` | Applied to the wrapper around the icon and the menu. |
| `clickColor`? | `string` | Colour of the icon while it is held down. |
| `color`? | `string` | Any CSS colour for the icon, or the literal `"accent"`. |
| `columnCount`? | `number` | Ignored. It reaches the menu, which does not read it either. |
| `data`? | `ContextMenuModel[]` | Items of the menu, read **once** to seed the internal state. Every later change is ignored — `getData` is what the open menu is built from. Default: `[]`. |
| `directionX`? | `TDirectionX` | Preferred horizontal side of the menu. Default: `"left"`. |
| `directionY`? | `TDirectionY` | Preferred vertical side of the menu. |
| `displayIconBorder`? | `boolean` | Draws a rounded border around the icon, 32px square. Default: `false`. |
| `displayType`? | `ContextMenuButtonDisplayType` | `toggle` renders no menu of its own and leaves `onClick` to open one; `auto` behaves exactly like `dropdown`. Default: `ContextMenuButtonDisplayType.dropdown`. |
| `dropDownClassName`? | `string` | Applied to the menu element. |
| `fixedDirection`? | `boolean` | Keeps those directions as given instead of flipping them to fit. Default: `false`. |
| `getData`? | `() => ContextMenuModel[]` | Builds the items when the button is clicked. It is not optional in practice: the click handler calls it without checking, so a button without it throws on the first click. |
| `hoverColor`? | `string` | Colour of the icon while the pointer is over it. |
| `iconClassName`? | `string` | Applied to the icon. |
| `iconClickName`? | `string` | URL of the icon shown while the button is held down. |
| `iconHoverName`? | `string` | URL of the icon shown while the pointer is over the button. |
| `iconName`? | `string` | URL of the icon, fetched at runtime. Without it the kit's vertical dots are drawn. |
| `iconOpenName`? | `string` | URL of the icon shown while the menu is open. |
| `id`? | `string` | Applied to that wrapper. |
| `isDisabled`? | `boolean` | Greys the icon out and stops the menu opening. Default: `false`. |
| `isFill`? | `boolean` | Colours the icon by filling its shapes rather than stroking them. Default: `true`. |
| `onClick`? | `(e: React.MouseEvent) => void` | Called on a click — after the menu has opened in `dropdown` mode, and instead of opening anything in `toggle` mode, where it is how you render a menu of your own. |
| `onClose`? | `() => void` | Called when the menu closes by itself, after a click outside. |
| `onMouseEnter`? | `(e: React.MouseEvent) => void` | Called when the pointer enters the icon. |
| `onMouseLeave`? | `(e: React.MouseEvent) => void` | Called when the pointer leaves the icon. |
| `onMouseOut`? | `(e: React.MouseEvent) => void` | Called on **mouse up** on the icon, despite the name, and only for the middle and right buttons. |
| `onMouseOver`? | `(e: React.MouseEvent) => void` | Called on **mouse down** on the icon, despite the name. |
| `opened`? | `boolean` | Opens the menu from outside. Changing it opens or closes the menu. Default: `false`. |
| `size`? | `number` | Size of the icon in pixels. Default: `16`. |
| `style`? | `CSSProperties` | Applied to that wrapper. |
| `testId`? | `string` | Value of `data-testid` on the wrapper. Default: `"context-menu-button"`. |
| `title`? | `string` | Hover tooltip of the icon. It needs `RootTooltip` mounted. Default: `""`. |
| `usePortal`? | `boolean` | Whether the menu is rendered in a portal on `document.body`. Default: `true`. |
| `zIndex`? | `number` | Stacking order of the menu. |

</APITable>

### Enums

<APITable>

| Enum                           | Members                      |
| ------------------------------ | ---------------------------- |
| `ContextMenuButtonDisplayType` | `dropdown`, `toggle`, `auto` |

</APITable>

## Recipes

### Open and close, controlled

`opened` opens the menu when it changes, and `onClose` reports a close the component performed
itself after a click outside.

```tsx
import { useState } from "react";
import { ContextMenuButton } from "@onlyoffice/apps-ui-kit/components/context-menu-button";

export function ControlledActions({ onRename }: { onRename: () => void }) {
  const [open, setOpen] = useState(false);

  return (
    <ContextMenuButton
      opened={open}
      onClose={() => setOpen(false)}
      onClick={() => setOpen(true)}
      getData={() => [{ key: "rename", label: "Rename", onClick: onRename }]}
    />
  );
}
```

### Disabled

```tsx
import { ContextMenuButton } from "@onlyoffice/apps-ui-kit/components/context-menu-button";

export function MaybeActions({ canEdit }: { canEdit: boolean }) {
  return (
    <ContextMenuButton
      isDisabled={!canEdit}
      title="Actions"
      displayIconBorder
      getData={() => [{ key: "rename", label: "Rename", onClick: () => {} }]}
    />
  );
}
```

## Behaviour the types don't state

- **`data` is read once.** It seeds the internal state on the first render and is never looked
  at again, so a menu whose items change has to supply them through `getData`, which is called
  on every click.
- **It re-renders only for four props.** The component is memoised with a comparison that looks
  at `opened`, `displayType`, `isDisabled` and `getData` alone — a new `title`, `color`,
  `iconName` or handler does nothing until one of those four changes. Pass a stable `getData`
  that closes over fresh values, or key the component.
- **`onMouseOver` and `onMouseOut` are wired to the wrong events.** They are handed to the icon
  as its `onMouseDown` and `onMouseUp`, and that `onMouseUp` itself only fires for the middle
  and right buttons — see [`IconButton`](./icon-button.md).
- **`displayType="auto"` is `dropdown`.** The function that would choose by width returns
  `dropdown` unconditionally. `toggle` is the one that differs: no menu is rendered at all and
  `onClick` is left to open one, which is how [`Row`](../rows/row.md) uses it.
- The menu gets a backdrop only on a tablet or a phone, and a transparent one at that; on a
  desktop a click outside is caught by `click` and `mousedown` listeners instead.
- The icon is the kit's vertical dots unless `iconName` gives a URL, which is fetched at
  runtime.
- `columnCount` and `asideHeader` are declared and never read.

## CSS variables

<APITable>

| Variable             | Default               | Effect                                     |
| -------------------- | --------------------- | ------------------------------------------ |
| `--cmb-size`         | `32px`                | Width and height of the bordered box       |
| `--cmb-radius`       | `3px`                 | Corner radius of that box                  |
| `--cmb-icon-padding` | `6px 7px`             | Padding between the border and the icon    |
| `--cmb-border`       | a theme grey, no line | Border of the box, as a `border` shorthand |
| `--cmb-hover-border` | theme grey            | Colour of the border on hover              |

</APITable>

All five apply only with `displayIconBorder`. The theme's value for `--cmb-border` is a colour
with no width or style, so by default the box draws no line at all, and `--cmb-hover-border`
shows nothing until `--cmb-border` supplies a style, as in `1px solid`.

The menu is a [`DropDown`](../overlays/drop-down.md) and reads its own `--dropdown-*` variables.
By default it is portalled to `document.body`, outside the wrapper, so set them there, or pass
`usePortal={false}` to keep the menu inside the element that sets them. The icon colour is set
inline by the icon itself; change it with `color`, `hoverColor` and `clickColor`, not with a
variable.

## Accessibility

- The icon is an [`IconButton`](./icon-button.md): a `<div>` with no role, no tab stop
  and no Enter or Space activation, so the menu cannot be opened from the keyboard; a keyboard route to the same actions has
  to come from the host.
- The wrapper and the icon both carry `aria-disabled` while `isDisabled`, but there is no
  `aria-haspopup` or `aria-expanded`, and the menu is not linked to the button.
- The items are `role="option"` rows in a `role="listbox"`, which is not what a menu of actions
  is.
- `title` renders the kit's hover tooltip, not an accessible name.

## Test ids

<APITable>

| Element     | `data-testid`                                    |
| ----------- | ------------------------------------------------ |
| The wrapper | `context-menu-button`, overridable with `testId` |
| An item     | the item's `dataTestId`, otherwise `<key>_item`  |

</APITable>

## Related

- [`ContextMenu`](../overlays/context-menu.md) — the right-click menu, which `toggle` mode leaves
  you to open.
- [`DropDown`](../overlays/drop-down.md) — the menu this renders, and its own props.
- [`IconButton`](./icon-button.md) — the icon, and the props passed through to it.
