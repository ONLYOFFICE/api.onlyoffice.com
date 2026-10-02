---
description: "Floating round button in the corner of the screen that opens a full-width sheet of actions."
custom_edit_url: "https://github.com/ONLYOFFICE/docspace-ui-kit-react/blob/446f115916d79a87d07b9e3dddb1e39a263784ee/components/main-button-mobile/README.md"
---

import ThemedImage from '@theme/ThemedImage';

import APITable from '@site/src/components/APITable/APITable';

# MainButtonMobile

Floating round button in the corner of the screen that opens a full-width sheet of actions. It
is the phone form of the portal's "create" button: a plus that becomes a minus while its sheet
is open.

<ThemedImage alt="MainButtonMobile" width={64} sources={{ light: require('./main-button-mobile--primary-light.png').default, dark: require('./main-button-mobile--primary-dark.png').default }} />

## Use this when / not when

- Use for the one creating action of a mobile screen, when there is no room for a button at
  the top of a panel.
- Not on desktop — [`MainButton`](./main-button.md) is the wide accent button that
  belongs at the top of a side menu. This component does not switch between the two forms;
  the portal renders one or the other.
- Not for the progress of a background operation, even though it is built on one:
  [`FloatingButton`](./floating-button.md) is the disc that shows progress.
- Not for an ordinary menu anchored to a control —
  [`DropDown`](../overlays/drop-down.md) with [`DropDownItem`](../overlays/drop-down-item.md)
  gives you the same items without the fixed corner placement.
- There is no progress bar and no upload section any more. `percent` and `title` are declared
  and ignored, and the `ProgressOption` type has nothing that accepts it.

## Import

```ts
import { MainButtonMobile } from "@onlyoffice/apps-ui-kit/components/main-button-mobile";
```

Also exported from the root barrel `@onlyoffice/apps-ui-kit`.

Needs `ThemeProvider` from `@onlyoffice/apps-ui-kit/providers/theme`. Everything this
component draws — the button's colour, the sheet's background and, under the light theme, the
sheet's whole placement — comes from custom properties defined on the theme's `.light` /
`.dark` class. See the dark-theme note under "Behaviour the types don't state".


## Stories

### Default

The button in the corner of the screen with both groups of items. Tap it to open the menu, tap outside or pick an item to close it, and change any other prop live in the Controls panel below.

<ThemedImage alt="Default" width={64} sources={{ light: require('./main-button-mobile--default-light.png').default, dark: require('./main-button-mobile--default-dark.png').default }} />

### With Alert

A badge on the closed button draws attention to something waiting for the user (`alert`). Click the badge to see `onAlertClick` in the Actions panel, which is called only while `withAlertClick` is set; the badge is hidden while the menu is open.

<ThemedImage alt="With Alert" width={106} sources={{ light: require('./main-button-mobile--with-alert-light.png').default, dark: require('./main-button-mobile--with-alert-dark.png').default }} />

### With Submenu

Groups related actions under one item without opening a second menu. **New form** opens its nested items in place under it, already expanded (`items`, `openByDefault`); **New folder** carries a second line under its label (`description`).

<ThemedImage alt="With Submenu" width={416} sources={{ light: require('./main-button-mobile--with-submenu-light.png').default, dark: require('./main-button-mobile--with-submenu-dark.png').default }} />

### Without Menu

For a screen with only one thing to create, the button runs that action directly (`withMenu`). Click it to see `onClick` in the Actions panel; no menu opens.

<ThemedImage alt="Without Menu" width={64} sources={{ light: require('./main-button-mobile--without-menu-light.png').default, dark: require('./main-button-mobile--without-menu-dark.png').default }} />

### Css Customization

The variables are listed under CSS variables on this page. One instance, with the alert badge on so the badge variables show. Open the menu to see the item padding and the lower group's background.

<ThemedImage alt="Css Customization" width={106} sources={{ light: require('./main-button-mobile--css-customization-light.png').default, dark: require('./main-button-mobile--css-customization-dark.png').default }} />

## Minimal example

The component keeps the open state internally; `opened` seeds it and overrides it whenever the
value you pass changes.

```tsx
import { useState } from "react";
import { MainButtonMobile } from "@onlyoffice/apps-ui-kit/components/main-button-mobile";

export function CreateSheet({
  onCreate,
}: {
  onCreate: (kind: string) => void;
}) {
  const [opened, setOpened] = useState(false);

  return (
    <div style={{ position: "relative", height: 400 }}>
      <MainButtonMobile
        opened={opened}
        isOpenButton
        onClose={() => setOpened(false)}
        actionOptions={[
          {
            key: "doc",
            label: "New document",
            onClick: () => onCreate("doc"),
          },
          {
            key: "folder",
            label: "New folder",
            onClick: () => onCreate("folder"),
          },
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
| `actionOptions`? | `ActionOption[]` | Items of the upper group of the menu. An item with `items` becomes a submenu. |
| `alert`? | `boolean` | Whether the alert badge is drawn over the button. It is hidden while the menu is open. |
| `buttonOptions`? | `ButtonOption[]` | Items of the lower group, drawn on a background of its own. An item with `items` becomes a submenu. |
| `className`? | `string` | Applied to the wrapper that carries the button and the menu. |
| `dropdownStyle`? | `CSSProperties` | Merged into the menu's inline style. The measured height is applied after it and wins. |
| `isOpenButton`? | `boolean` | Whether `onClose` is called at all. It then fires on every toggle, including the one that opens the menu. |
| `mainButtonRef`? | `RefObject<HTMLDivElement \| null>` | Ignored. The component uses an internal ref of the same name; use `ref` for the element. |
| `manualWidth`? | `string` | Width of the menu, as a CSS length. |
| `onAlertClick`? | `() => void` | Called when the alert badge is clicked, and only while `withAlertClick` is set. |
| `onClick`? | `(e: React.MouseEvent) => void` | Called with the event when the button is clicked, and only while `withMenu` is `false`. |
| `onClose`? | `() => void` | Called on every toggle of the menu, and only while `isOpenButton` is set. |
| `onUploadClick`? | `() => void` | Ignored. Nothing reads this prop; the button's own handler is `onClick`. |
| `opened`? | `boolean` | Whether the menu is open. It is copied into state, so a click changes it back without telling you. |
| `percent`? | `number` | Ignored. Nothing reads this prop; the button draws no progress. |
| `ref`? | `RefObject<MainButtonMobileRef>` | Handle exposing `contains` and `getButtonElement`, for deciding whether a click landed on the button. |
| `sectionWidth`? | `number` | Ignored. Nothing reads this prop. |
| `style`? | `CSSProperties` | Merged into the wrapper's inline style, after the z-index the component sets itself. |
| `title`? | `string` | Ignored. Nothing reads this prop; the groups have no heading. |
| `withAlertClick`? | `boolean` | Whether clicking the alert badge calls `onAlertClick`. |
| `withButton`? | `boolean` | Ignored. Nothing reads this prop. |
| `withMenu`? | `boolean` | Whether the button opens the menu. When `false` it calls `onClick` and the menu never opens. Default: `true`. |
| `withoutButton`? | `boolean` | Whether the lower group takes the plain wrapper background instead of the accent one. |

</APITable>

`actionOptions` takes `ActionOption` and `buttonOptions` takes `ButtonOption`. Both carry
`key`, `label`, an optional `icon` URL, `onClick`, `isSeparator` and nested `items`; an
`ActionOption` also has `action`, which is handed back as `onClick({ action })`, a
`description` drawn under the label, and `openByDefault` for a submenu that starts open.

## Recipes

### Open / close (controlled)

`opened` is copied into state on every change, so it opens and closes the sheet — but the
button toggles that state on its own as well, and the only way to hear about it is `onClose`,
which needs `isOpenButton` and fires on opening too.

```tsx
import { useState } from "react";
import { MainButtonMobile } from "@onlyoffice/apps-ui-kit/components/main-button-mobile";

export function CreateSheetControlled() {
  const [opened, setOpened] = useState(false);

  return (
    <div style={{ position: "relative", height: 400 }}>
      <button type="button" onClick={() => setOpened(true)}>
        Open the sheet
      </button>
      <MainButtonMobile
        opened={opened}
        isOpenButton
        onClose={() => setOpened(false)}
        actionOptions={[{ key: "doc", label: "New document" }]}
      />
    </div>
  );
}
```

### As a plain button

`withMenu={false}` stops the sheet from opening and routes the click to `onClick` — the
floating plus becomes a single action.

```tsx
import { MainButtonMobile } from "@onlyoffice/apps-ui-kit/components/main-button-mobile";

export function UploadFab({ onUpload }: { onUpload: () => void }) {
  return (
    <div style={{ position: "relative", height: 400 }}>
      <MainButtonMobile withMenu={false} onClick={onUpload} />
    </div>
  );
}
```

### Two groups and a submenu

`actionOptions` is the upper group and `buttonOptions` the lower one, which has a background
of its own. An item with `items` becomes a submenu that expands in place rather than opening
to the side.

```tsx
import { MainButtonMobile } from "@onlyoffice/apps-ui-kit/components/main-button-mobile";

export function CreateSheetGrouped({
  onCreate,
}: {
  onCreate: (action?: string) => void;
}) {
  return (
    <div style={{ position: "relative", height: 400 }}>
      <MainButtonMobile
        manualWidth="320px"
        actionOptions={[
          {
            key: "form",
            label: "Form",
            openByDefault: true,
            items: [
              { key: "blank", label: "From blank", action: "form-blank" },
              { key: "file", label: "From a text file", action: "form-file" },
            ],
            onClick: ({ action }) => onCreate(action),
          },
          { key: "sep", label: "", isSeparator: true },
          { key: "folder", label: "New folder", action: "folder" },
        ]}
        buttonOptions={[{ key: "upload", label: "Upload from device" }]}
      />
    </div>
  );
}
```

### The alert badge

`alert` puts a badge on the button while the sheet is closed. Clicking it does nothing unless
`withAlertClick` is set as well.

```tsx
import { MainButtonMobile } from "@onlyoffice/apps-ui-kit/components/main-button-mobile";

export function CreateSheetWithAlert({
  onOpenPanel,
}: {
  onOpenPanel: () => void;
}) {
  return (
    <div style={{ position: "relative", height: 400 }}>
      <MainButtonMobile
        alert
        withAlertClick
        onAlertClick={onOpenPanel}
        actionOptions={[{ key: "doc", label: "New document" }]}
      />
    </div>
  );
}
```

## Behaviour the types don't state

- **The sheet's placement is declared only under the light theme.** `position`, `width`,
  `inset-inline-end`, `bottom` and `z-index` are all read from custom properties that
  `MainButtonMobile.theme.scss` defines on `.light` and never on `.dark`, so under the dark
  theme those declarations are invalid and the sheet falls back into normal flow at automatic
  width. The button itself is unaffected.
- **The button positions itself only as much as [`FloatingButton`](./floating-button.md)
  does**, which is to say it is pinned to the bottom trailing corner of the nearest positioned
  ancestor. The wrapper takes `z-index: 201`, raised to `211` while the sheet is open, and the
  backdrop sits between them at `210`.
- **It reads `window.innerHeight` during the first render**, so importing it into a
  server-rendered tree throws before any effect can run.
- **The sheet's height is measured, not set.** Its content is measured with
  `getBoundingClientRect` after every open, submenu toggle and window resize, and capped at
  `window.innerHeight - 48`. `dropdownStyle` is applied before that height and cannot change
  it.
- **`manualWidth` defaults to `400px`**, capped by the stylesheet at `100vw - 48px`, and
  replaced at the mobile breakpoint by `100vw - 64px`.
- **The browser's Back button closes the sheet.** A `popstate` listener sets the state to
  closed without calling `onClose`.
- **A click anywhere outside closes it**, through a [`Backdrop`](../overlays/backdrop.md) the
  component renders itself. `onClose` is only reached when `isOpenButton` is set.
- **On iOS the component reaches for `document.getElementsByClassName("section-scroll")[0]`**
  and attaches a scroll listener to it, to swap the sheet's background as the page moves. An
  iOS page without an element of that class throws on mount.
- **On a device `react-device-detect` calls mobile**, the sheet's content is wrapped in
  [`Scrollbar`](../layout/scrollbar.md) and every item's hover effect is turned off.
- **`withoutButton` does not hide anything.** It swaps the lower group's background for the
  plain wrapper colour; the button and both groups are drawn either way.
- **Choosing any item closes the sheet**, before its handler runs. An `ActionOption`'s
  handler is called as `onClick({ action })`, not with the event; a `ButtonOption`'s handler
  takes no argument at all.
- **`ref` is an imperative handle, not an element ref**: it exposes `contains(target)` and
  `getButtonElement()`. Its type `MainButtonMobileRef` is not exported from the folder, so it
  can only be typed by inference.

## CSS variables

Set them on any ancestor. They are what the theme defines; the sheet's geometry is in the same
set, which is why overriding it is the workaround for the dark-theme note above.

<APITable>

| Variable                                               | Default         | Effect                                                                                  |
| ------------------------------------------------------ | --------------- | --------------------------------------------------------------------------------------- |
| `--main-button-mobile-button-color`                    | accent blue     | Colour of the round button.                                                             |
| `--main-button-mobile-icon-fill`                       | white / black   | Fill of the plus and minus.                                                             |
| `--main-button-mobile-z-index`                         | `1010`          | Stacking of the button against its open sheet; below `202` the sheet covers the button. |
| `--main-button-mobile-dropdown-position`               | `fixed` (light) | Positioning scheme of the sheet.                                                        |
| `--main-button-mobile-dropdown-width`                  | `400px` (light) | Width of the sheet.                                                                     |
| `--main-button-mobile-dropdown-right`                  | `48px` (light)  | Distance from the trailing edge.                                                        |
| `--main-button-mobile-dropdown-bottom`                 | `48px` (light)  | Distance from the bottom.                                                               |
| `--main-button-mobile-dropdown-z-index`                | `202` (light)   | Stacking of the sheet.                                                                  |
| `--main-button-mobile-dropdown-item-padding`           | `6px 23px`      | Padding of one item.                                                                    |
| `--main-button-mobile-button-options-background-color` | theme blue      | Background of the lower group.                                                          |
| `--main-button-mobile-button-wrapper-background`       | theme grey      | Background of the lower group under `withoutButton`.                                    |
| `--main-button-mobile-badge-size`                      | `12px`          | Size of the alert badge.                                                                |
| `--main-button-mobile-badge-offset`                    | `10px`          | Inset of the badge from the button's top trailing corner.                               |

</APITable>

## Accessibility

- **The button is a [`FloatingButton`](./floating-button.md)**: a `<div>` with a click
  handler, no `role`, no `tabIndex` and no key handler, so the sheet cannot be opened from the
  keyboard.
- Its `aria-label` is the icon's name followed by the word "button" — `"plus button"`, or
  `"minus button"` while the sheet is open — in English whatever the interface language.
- **The sheet is not a dialog.** It is a [`DropDown`](../overlays/drop-down.md), announced as a
  `listbox` with each item an `option` (a separator a `separator`) — not a `menu` — with no
  focus trap and no focus move; Escape does not close it, though the Back button does.
- The alert badge is an SVG with a click handler and no accessible name.
- Nothing marks the button as expanded. There is no `aria-expanded` or `aria-haspopup`, and
  unknown props are not accepted, so neither can be supplied from outside.

## Test ids

<APITable>

| Element          | `data-testid`        |
| ---------------- | -------------------- |
| The wrapper      | `main-button-mobile` |
| The sheet        | `dropdown`           |
| The round button | `floating-button`    |

</APITable>

None of them can be overridden by a prop; the sheet's id is the one
[`DropDown`](../overlays/drop-down.md) uses for every instance, so a page with more than one is
ambiguous.

## Related

- [`MainButton`](./main-button.md) — the desktop form of the same action.
- [`FloatingButton`](./floating-button.md) — the disc this one is built on, showing
  the progress of a background operation.
- [`DropDown`](../overlays/drop-down.md) — the menu without the fixed corner placement.
