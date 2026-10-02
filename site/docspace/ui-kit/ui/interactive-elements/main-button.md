---
description: "Accent button at the top of a side menu that opens a menu of the things a user can create."
custom_edit_url: "https://github.com/ONLYOFFICE/docspace-ui-kit-react/blob/446f115916d79a87d07b9e3dddb1e39a263784ee/components/main-button/README.md"
---

import ThemedImage from '@theme/ThemedImage';

import APITable from '@site/src/components/APITable/APITable';

# MainButton

Accent button at the top of a side menu that opens a menu of the things a user can create. It
is the portal's "New document / New folder / Upload" button, and it fills the width it is
given.

<ThemedImage alt="MainButton" width={226} sources={{ light: require('./main-button--primary-light.png').default, dark: require('./main-button--primary-dark.png').default }} />

## Use this when / not when

- Use for the one creating action of a whole section, at the top of its navigation panel.
- Not for an ordinary action in a form or a dialog — [`Button`](./button.md) has the
  sizes, the primary and secondary looks and a loading state, and it is a real `<button>`.
- Not for a menu opened from an arbitrary element: [`ContextMenu`](../overlays/context-menu.md)
  is the menu itself, and you open it where you like through its ref.
- Not on a phone layout. The portal swaps in
  [`MainButtonMobile`](./main-button-mobile.md), a floating disc in the corner.
- There is no icon prop and no sizes. The button is the text, an optional arrow, and the
  accent background.

## Import

```ts
import { MainButton } from "@onlyoffice/apps-ui-kit/components/main-button";
```

Also exported from the root barrel `@onlyoffice/apps-ui-kit`.

Needs `ThemeProvider` from `@onlyoffice/apps-ui-kit/providers/theme`: every value the button
draws itself with — background, padding, radius, font size and weight — is defined under the
theme's `.light` / `.dark` class, so without it the button is unstyled text. The menu is a
[`ContextMenu`](../overlays/context-menu.md), which needs `TranslationProvider` from
`@onlyoffice/apps-ui-kit/providers/translation` for its own labels.


## Stories

### Default

The button with its menu: click it to open the list of things to create, then change any other prop live in the Controls panel below.

<ThemedImage alt="Default" width={226} sources={{ light: require('./main-button--default-light.png').default, dark: require('./main-button--default-dark.png').default }} />

### Disabled

MainButton in a disabled state. The button cannot be interacted with and appears with reduced opacity.

<ThemedImage alt="Disabled" width={226} sources={{ light: require('./main-button--disabled-light.png').default, dark: require('./main-button--disabled-dark.png').default }} />

### Disabled With Dropdown

MainButton with a dropdown menu in a disabled state. Both the button and dropdown are non-interactive.

<ThemedImage alt="Disabled With Dropdown" width={326} sources={{ light: require('./main-button--disabled-with-dropdown-light.png').default, dark: require('./main-button--disabled-with-dropdown-dark.png').default }} />

### With Action

For a single action that needs no menu: the button has no arrow, and a click is reported in the Actions panel instead of opening a list (`isDropdown={false}`, `onAction`).

<ThemedImage alt="With Action" width={226} sources={{ light: require('./main-button--with-action-light.png').default, dark: require('./main-button--with-action-dark.png').default }} />

### With Item Descriptions

For choices that need a word of explanation: click the button and each item shows its label with a description under it, while the menu grows wider than the button to fit the text (`description` on the items of `model`).

<ThemedImage alt="With Item Descriptions" width={226} sources={{ light: require('./main-button--with-item-descriptions-light.png').default, dark: require('./main-button--with-item-descriptions-dark.png').default }} />

### With Dropdown

MainButton with a full dropdown menu including icons, nested sub-menus, and separators. Click the button to see the dropdown.

<ThemedImage alt="With Dropdown" width={226} sources={{ light: require('./main-button--with-dropdown-light.png').default, dark: require('./main-button--with-dropdown-dark.png').default }} />

### Without Arrow

For a button whose label alone says it opens a list: the arrow beside the text is gone, yet a click still opens the same menu (`hideArrow`).

<ThemedImage alt="Without Arrow" width={226} sources={{ light: require('./main-button--without-arrow-light.png').default, dark: require('./main-button--without-arrow-dark.png').default }} />

### Right To Left

The button in a right-to-left layout: the text moves to the right edge and the arrow to the left; click it and the menu opens with its icons on the right and the sub-menu chevron on the left. The wrapper carries `dir="rtl"`; the direction also comes from the theme's `interfaceDirection` (the Direction toolbar).

<ThemedImage alt="Right To Left" width={226} sources={{ light: require('./main-button--right-to-left-light.png').default, dark: require('./main-button--right-to-left-dark.png').default }} />

### Css Customization

Every overridable variable set on a wrapper around one button -- the variables are listed under CSS variables on this page. Click it to see the menu keep the button's new width.

<ThemedImage alt="Css Customization" width={226} sources={{ light: require('./main-button--css-customization-light.png').default, dark: require('./main-button--css-customization-dark.png').default }} />

## Minimal example

```tsx
import { MainButton } from "@onlyoffice/apps-ui-kit/components/main-button";

export function CreateNew({ onCreate }: { onCreate: (kind: string) => void }) {
  return (
    <div style={{ maxWidth: 210 }}>
      <MainButton
        text="Create new"
        model={[
          { key: "doc", label: "New document", onClick: () => onCreate("doc") },
          { key: "sep", isSeparator: true },
          { key: "upload", label: "Upload", onClick: () => onCreate("upload") },
        ]}
      />
    </div>
  );
}
```

## Props


<APITable>

| Property | Type | Description |
| --- | --- | --- |
| `model` | `ContextMenuModel[]` | Items of the menu. Required even with `isDropdown={false}`, when nothing reads it. |
| `anchorRef`? | `RefObject<HTMLElement \| null>` | Element the menu is anchored to and sized from. Without it the button's own box is used; pass an outer wrapper when the button sits inside a larger clickable area. |
| `className`? | `string` | Applied to the button, after the component's own classes. |
| `hideArrow`? | `boolean` | Whether the arrow beside the text is left out. The menu still opens. Default: `false`. |
| `id`? | `string` | Applied to the button, not to the wrapper around it. |
| `isDisabled`? | `boolean` | Whether the button is inert: it dims to 60% opacity and the click is dropped. Default: `false`. |
| `isDropdown`? | `boolean` | Whether clicking opens the menu built from `model`. When `false`, the click calls `onAction` instead. Default: `true`. |
| `onAction`? | `(e: React.MouseEvent) => void` | Called with the event when the button is clicked. Only reached while `isDropdown` is `false`. |
| `opened`? | `boolean` | Ignored. Nothing reads this prop, and it reaches the DOM as an unknown attribute. |
| `style`? | `CSSProperties` | Applied to the button as inline style. |
| `text`? | `string` | Text drawn in the button. It is the whole label: the component takes no children. Default: `"Button"`. |

</APITable>

#### Portal-only props

These need DocSpace portal context and do nothing in a standalone app.

<APITable>

| Property | Type | Description |
| --- | --- | --- |
| `setRefMap`? | `(key: GuidanceRefKey, ref: RefObject<HTMLDivElement \| null>) => void` | Registers the button's element in the portal's guidance map, for the onboarding tour. |

</APITable>

## Recipes

### As a plain action button

`isDropdown={false}` turns the button into a single action: the arrow disappears, no menu is
rendered, and the click calls `onAction`. `model` is still required by the type, and nothing
reads it.

```tsx
import { MainButton } from "@onlyoffice/apps-ui-kit/components/main-button";

export function InviteButton({ onInvite }: { onInvite: () => void }) {
  return (
    <div style={{ maxWidth: 210 }}>
      <MainButton
        text="Invite"
        isDropdown={false}
        model={[]}
        onAction={onInvite}
      />
    </div>
  );
}
```

### Disabled / read-only

`isDisabled` fades the button to 60% and drops the click, in both modes: the menu does not
open and `onAction` is not called.

```tsx
import { MainButton } from "@onlyoffice/apps-ui-kit/components/main-button";

export function CreateNewLocked({ canCreate }: { canCreate: boolean }) {
  return (
    <div style={{ maxWidth: 210 }}>
      <MainButton
        text="Create new"
        isDisabled={!canCreate}
        model={[{ key: "doc", label: "New document" }]}
      />
    </div>
  );
}
```

### Items with descriptions

An item carrying `description` is drawn as two lines, and one such item changes how the whole
menu is sized: instead of being clamped to the button's width it is sized by its content,
with the button's width as a minimum.

```tsx
import { MainButton } from "@onlyoffice/apps-ui-kit/components/main-button";

export function InviteMenu({ onInvite }: { onInvite: (role: string) => void }) {
  return (
    <div style={{ maxWidth: 210 }}>
      <MainButton
        text="Invite"
        model={[
          {
            key: "admin",
            label: "Room admin",
            description: "Manages the rooms they are assigned to.",
            onClick: () => onInvite("admin"),
          },
          {
            key: "user",
            label: "User",
            description: "Sees only the rooms they were invited to.",
            onClick: () => onInvite("user"),
          },
        ]}
      />
    </div>
  );
}
```

## Behaviour the types don't state

- **The button has no width of its own.** It is `display: flex` with
  `justify-content: space-between`, so it fills its parent and pushes the arrow to the far
  edge. Give it a parent with a width; the portal's is 210px.
- **The menu's width is the button's width**, measured with `getBoundingClientRect` on mount
  and on every `window` resize. There is no `ResizeObserver`: a button that changes width
  without the window changing keeps the previous menu width until the next resize. One item
  with a `description` switches that width to a `min-width` and lets the menu grow.
- **`model` goes to the menu unchanged**, so an item takes everything a
  [`ContextMenu`](../overlays/context-menu.md) item does: an `icon` of its own, `isSeparator` for
  a divider between groups, and `items` for a sub-menu that an arrow on the item opens to the
  side.
- **The menu is a [`ContextMenu`](../overlays/context-menu.md) appended to `document.body`** and
  positioned `fixed` at the button's bottom inline-start corner, through a synthetic mouse
  event built from the button's rect. It is not inside the button's DOM subtree, so a parent's
  `overflow: hidden` does not clip it and a parent's `z-index` does not raise it.
- **Opening is not observable.** There is no `onOpen`, `onClose` or `open` prop, and the menu's
  state lives inside the component; `opened` is declared, never read, and lands on the DOM
  element as an unknown attribute.
- **`onAction` is only called while `isDropdown` is `false`.** In dropdown mode the click
  toggles the menu and `onAction` is never reached — a handler passed alongside the default
  `isDropdown` silently never runs.
- **`hideArrow` hides only the arrow.** The menu still opens on click; it removes the
  affordance, not the behaviour.
- **`text` is the whole label.** Children are not rendered, and there is no icon prop. The text
  is a [`Text`](../data-display/text.md) with `display: inline` and no truncation, so a label longer
  than the button wraps rather than ellipsising.
- **`className`, `id` and `style` all land on the button**, not on the `position: relative`
  wrapper around it, so none of them can be used to position the button.
- `anchorRef` replaces the button as the element the menu is measured and positioned against —
  for a button visually nested inside a larger control.

## CSS variables

Set them on any ancestor. Each has a theme value behind it; these are the overrides.

<APITable>

| Variable                         | Default                | Effect                     |
| -------------------------------- | ---------------------- | -------------------------- |
| `--main-button-bg`               | accent, else `#4781D1` | Background of the button.  |
| `--main-button-color`            | white                  | Colour of the text.        |
| `--main-button-icon-color`       | white                  | Fill of the arrow.         |
| `--main-button-radius`           | `3px`                  | Corner radius.             |
| `--main-button-inner-padding`    | `5px 14px 5px 12px`    | Padding inside the button. |
| `--main-button-text-size`        | `16px`                 | Font size of the label.    |
| `--main-button-text-weight`      | `700`                  | Font weight of the label.  |
| `--main-button-text-line-height` | `22px`                 | Line height of the label.  |

</APITable>

The background falls back to the kit's blue when the theme carries no colour scheme, so unlike
[`FloatingButton`](./floating-button.md) this one is never invisible.

## Accessibility

- **The button is a `<div>` with a click handler.** No `role`, no `tabIndex`, no key handler:
  it cannot be focused or activated from the keyboard, and a screen reader announces the text
  as ordinary content.
- Nothing announces that the element opens a menu — there is no `aria-haspopup` or
  `aria-expanded`, and neither can be supplied, because unknown props are not accepted by
  `MainButtonProps`.
- The disabled state is opacity plus a dropped handler. `aria-disabled` is not set, so the
  difference is invisible to assistive technology.
- The menu that opens is a [`ContextMenu`](../overlays/context-menu.md) and has keyboard
  navigation of its own once it is open — reaching it is the part that does not work.

## Test ids

<APITable>

| Element              | `data-testid` |
| -------------------- | ------------- |
| The wrapper          | `main-button` |
| The button inside it | none          |

</APITable>

The menu carries `context-menu`, from [`ContextMenu`](../overlays/context-menu.md). None of them
can be overridden by a prop; the button itself is reached through `id`.

## Related

- [`ContextMenu`](../overlays/context-menu.md) — the menu this button opens, on its own.
- [`Button`](./button.md) — the ordinary button, with sizes, variants and a loader.
- [`MainButtonMobile`](./main-button-mobile.md) — the phone form of the same action.
