---
description: "Menu anchored to a control, rendered in a portal and positioned against the element you point it at."
custom_edit_url: "https://github.com/ONLYOFFICE/docspace-ui-kit-react/blob/446f115916d79a87d07b9e3dddb1e39a263784ee/components/drop-down/README.md"
---

import ThemedImage from '@theme/ThemedImage';

import APITable from '@site/src/components/APITable/APITable';

# DropDown

Menu anchored to a control, rendered in a portal and positioned against the element you point
it at. Its visibility prop is `open`, and the anchor is `forwardedRef`.

<ThemedImage alt="DropDown" width={187} sources={{ light: require('./drop-down--primary-light.png').default, dark: require('./drop-down--primary-dark.png').default }} />

## Use this when / not when

- Use for a menu you open from a control of your own: an actions menu, a list of options, a
  picker built out of [`DropDownItem`](./drop-down-item.md)s.
- Not for a right-click menu — that is [`ContextMenu`](./context-menu.md), which
  positions itself at the pointer.
- Not for choosing one value from a list: [`ComboBox`](../form-controls/combobox.md) is this component
  plus the button, the selection and the matching.
- Not for a hint: [`Tooltip`](./tooltip.md).
- Not as a dialog. There is no focus trap and no Escape handling; the backdrop is all that
  catches the next click.

## Import

```ts
import { DropDown } from "@onlyoffice/apps-ui-kit/components/drop-down";
```

Also exported from the root barrel `@onlyoffice/apps-ui-kit`.

`DropDownProps` is **not** exported — type a wrapper's props yourself, or import the type from
its file path.

Needs `ThemeProvider` from `@onlyoffice/apps-ui-kit/providers/theme` above it in the tree for
the background, the border and the shadow.


## Stories

### Default

The everyday case: a short menu opened from a button and closed by the next click anywhere else. Press **Open Dropdown**, then change any other prop live in the Controls panel below and open it again.

<ThemedImage alt="Default" width={187} sources={{ light: require('./drop-down--default-light.png').default, dark: require('./drop-down--default-dark.png').default }} />

### With Headers And Separators

Dropdowns can include headers and separators to organize items into logical groups.

<ThemedImage alt="With Headers And Separators" width={152} sources={{ light: require('./drop-down--with-headers-and-separators-light.png').default, dark: require('./drop-down--with-headers-and-separators-dark.png').default }} />

### With Disabled Items

Use `showDisabledItems` to display disabled items. By default, disabled items are hidden.

<ThemedImage alt="With Disabled Items" width={168} sources={{ light: require('./drop-down--with-disabled-items-light.png').default, dark: require('./drop-down--with-disabled-items-dark.png').default }} />

### Scrollable List

For a list longer than the screen can hold: the menu stays 200px tall and scrolls (`maxHeight`). Open it and press the Down and Up arrows to move the highlight, then Enter to pick the highlighted option.

<ThemedImage alt="Scrollable List" width={137} sources={{ light: require('./drop-down--scrollable-list-light.png').default, dark: require('./drop-down--scrollable-list-dark.png').default }} />

### Direction Variants

To open the menu where there is room for it: each button opens its menu to the side and edge its label names (`directionX`, `directionY`). A menu that would run past the side of the window opens towards the other side instead.

<ThemedImage alt="Direction Variants" width={407} sources={{ light: require('./drop-down--direction-variants-light.png').default, dark: require('./drop-down--direction-variants-dark.png').default }} />

### Custom Width

Use `manualWidth` to set a custom width for the dropdown.

<ThemedImage alt="Custom Width" width={184} sources={{ light: require('./drop-down--custom-width-light.png').default, dark: require('./drop-down--custom-width-dark.png').default }} />

### With Separators

To group a short menu without titles: thin lines split the editing commands into three groups (`isSeparator` on a `DropDownItem`).

<ThemedImage alt="With Separators" width={144} sources={{ light: require('./drop-down--with-separators-light.png').default, dark: require('./drop-down--with-separators-dark.png').default }} />

### Right To Left

The menu in a right-to-left interface, open from the start: the button sits at the right, the menu lines up with the button's right edge and extends towards the left, and the labels are aligned to the right. The menu renders into the right-to-left container (`appendTo`), because on its own it goes to the end of the page body, outside any `dir` wrapper.

<ThemedImage alt="Right To Left" width={216} sources={{ light: require('./drop-down--right-to-left-light.png').default, dark: require('./drop-down--right-to-left-dark.png').default }} />

### Css Customization

The variables are listed under CSS variables on this page. Press **Dropdown trigger** to open the menu. It renders inline here (`isDefaultMode={false}`), inside the wrapper that sets the variables; in the default portal mode the menu is on the page body, outside any wrapper, so set them through the DropDown's own `style` prop instead.

<ThemedImage alt="Css Customization" width={196} sources={{ light: require('./drop-down--css-customization-light.png').default, dark: require('./drop-down--css-customization-dark.png').default }} />

## Minimal example

`forwardedRef` is what the menu is positioned against; without it, the menu in its default
portal mode has nothing to measure.

```tsx
import { useRef, useState } from "react";
import { Button } from "@onlyoffice/apps-ui-kit/components/button";
import { DropDown } from "@onlyoffice/apps-ui-kit/components/drop-down";
import { DropDownItem } from "@onlyoffice/apps-ui-kit/components/drop-down-item";

export function ActionsMenu({ onRename }: { onRename: () => void }) {
  const [open, setOpen] = useState(false);
  const anchor = useRef<HTMLDivElement>(null);

  return (
    <div ref={anchor} style={{ position: "relative", width: "fit-content" }}>
      <Button label="Actions" onClick={() => setOpen(!open)} />
      <DropDown
        open={open}
        forwardedRef={anchor}
        clickOutsideAction={() => setOpen(false)}
        manualWidth="200px"
      >
        <DropDownItem
          label="Rename"
          onClick={() => {
            setOpen(false);
            onRename();
          }}
        />
      </DropDown>
    </div>
  );
}
```

## Props


<APITable>

| Property | Type | Description |
| --- | --- | --- |
| `appendTo`? | `HTMLElement` | Element the portal renders into, instead of `document.body`. |
| `backDrop`? | `JSX.Element \| null` | The backdrop element itself. It is built from `withBackdrop`; passing your own replaces it. |
| `bottomSpace`? | `number` | (`withDynamicScrollbar` only) Space to leave below the menu, in pixels. |
| `children`? | `ReactNode` | Items of the menu, normally `DropDownItem`s. With `maxHeight` set they are virtualised, so each child's height is read from its `height` prop rather than measured. |
| `className`? | `string` | Applied to the dropdown element. |
| `clickOutsideAction`? | `(e: Event, open: boolean) => void` | Called when a click lands outside the dropdown, and by the backdrop. The second argument is the state being asked for — the negation of `open`, not the current value. |
| `columnCount`? | `number` | Ignored. Nothing reads this prop. |
| `dataTestId`? | `string` | Value of `data-testid` on the dropdown. Default: `"dropdown"`. |
| `directionX`? | `TDirectionX` | Sets the opening direction relative to the parent. Default: `"right"`. |
| `directionY`? | `TDirectionY` | Sets the opening direction relative to the parent. Default: `"bottom"`. |
| `disableOnClickOutside`? | `boolean` | Ignored. Nothing reads this prop. |
| `disableScrollbarPadding`? | `boolean` | Disables scrollbar inline padding to allow hover styles to extend to edge |
| `enableKeyboardEvents`? | `boolean` | Whether the arrow keys move through the items and Enter clicks one. It is read only when `maxHeight` is set, and while it is on every key press in the document has its default action prevented. Default: `true`. |
| `enableOnClickOutside`? | `() => void` | Called once each time the dropdown opens. |
| `eventTypes`? | `string \| string[]` | DOM event names listened for on `window` to detect a click outside. Nothing is listened for when it is absent; the backdrop is the usual mechanism. |
| `fixedDirection`? | `boolean` | Keeps `directionX` and `directionY` exactly as given instead of flipping them to fit the viewport. Default: `false`. |
| `forceCloseClickOutside`? | `boolean` | Stops the outside-click listeners being registered at all. |
| `forwardedRef`? | `RefObject<HTMLElement \| null>` | Ref of the element the menu belongs to. In the default portal mode it is what the menu is measured and positioned against; without it the menu falls back to the corner of the viewport. |
| `id`? | `string` | Ignored. Nothing reads this prop and no `id` reaches the DOM. |
| `isAside`? | `boolean` | Passed to the backdrop, which then keeps an aside panel above itself. |
| `isDefaultMode`? | `boolean` | Whether the menu is rendered in a portal on `document.body`, positioned by measuring `forwardedRef`. Turn it off to render it in place, absolutely positioned inside the nearest positioned ancestor. Default: `true`. |
| `isMobileView`? | `boolean` | Pins the menu to the bottom edge of the screen, full width, in portrait. |
| `isNoFixedHeightOptions`? | `boolean` | Renders the children in a plain scrollbar instead of the virtualised list, for items whose height is not the 32px the list assumes. |
| `manualWidth`? | `string` | Required for specifying the exact width of the component; for example; 100% |
| `manualX`? | `string` | (Non portal only) Required for specifying the exact distance from the parent component |
| `manualY`? | `string` | (Non portal only) Required for specifying the exact distance from the parent component |
| `maxHeight`? | `number` | Height of the list in pixels. It is also the switch that turns on virtualisation, the scrollbar and the arrow keys: without it every child is rendered as given and none of the three happens. |
| `offsetX`? | `number` | (Portal only) Specifies the horizontal offset. Default: `0`. |
| `open`? | `boolean` | Whether the menu is shown. The element stays in the DOM either way — it is `display: none` until this is true. |
| `shouldShowBackdrop`? | `boolean` | Passed to the backdrop: makes it render even when it would stay invisible. Default: `false`. |
| `showDisabledItems`? | `boolean` | Keeps children whose `disabled` prop is true in the list. They are dropped by default, together with a separator that ends up first or last. Default: `false`. |
| `style`? | `CSSProperties` | Merged into the dropdown element's inline style. |
| `topSpace`? | `number` | (`withDynamicScrollbar` only) Space to leave above the menu, in pixels. |
| `useFlexibleHeight`? | `boolean` | Use flexible maxHeight instead of fixed height for scrollbar (allows shrinking when fewer items) |
| `usePortalBackdrop`? | `boolean` | Moves the backdrop inside the portal, above the page at z-index 400 rather than below the menu at 199. Default: `false`. |
| `withBackdrop`? | `boolean` | Whether a `Backdrop` is rendered behind the menu to catch the next click. Default: `true`. |
| `withBackground`? | `boolean` | Passed to the backdrop: gives it the dimming background. |
| `withBlur`? | `boolean` | Ignored. Nothing reads this prop. |
| `withDynamicScrollbar`? | `boolean` | Measures the room around the anchor on every open and caps the menu at what is left, scrolling the rest. It replaces the virtualised list with a plain scrollbar. |
| `withoutBackground`? | `boolean` | Passed to the backdrop: makes it transparent. |
| `zIndex`? | `number` | Stacking order of the menu, written as `--z-index`. The default is 400. |

</APITable>

## Recipes

### Open and close, controlled

`clickOutsideAction` is the close handler: the backdrop calls it, and so does any event type
you list in `eventTypes`. Its second argument is the state being asked for.

```tsx
import { useRef, useState } from "react";
import { DropDown } from "@onlyoffice/apps-ui-kit/components/drop-down";
import { DropDownItem } from "@onlyoffice/apps-ui-kit/components/drop-down-item";
import { IconButton } from "@onlyoffice/apps-ui-kit/components/icon-button";

export function RowMenu({ onDelete }: { onDelete: () => void }) {
  const [open, setOpen] = useState(false);
  const anchor = useRef<HTMLDivElement>(null);

  return (
    <div ref={anchor} style={{ position: "relative" }}>
      <IconButton
        size={16}
        title="More"
        onClick={() => setOpen(true)}
        iconNode={
          <svg viewBox="0 0 16 16" aria-hidden="true">
            <circle cx="3" cy="8" r="1.5" />
            <circle cx="8" cy="8" r="1.5" />
            <circle cx="13" cy="8" r="1.5" />
          </svg>
        }
      />
      <DropDown
        open={open}
        forwardedRef={anchor}
        directionX="left"
        clickOutsideAction={(_event, next) => setOpen(next)}
      >
        <DropDownItem label="Delete" onClick={onDelete} />
      </DropDown>
    </div>
  );
}
```

### A long list that scrolls

`maxHeight` is what turns on the scrollbar — and with it the virtualised list, which reads each
item's height from its `height` prop rather than measuring it.

```tsx
import { useRef, useState } from "react";
import { DropDown } from "@onlyoffice/apps-ui-kit/components/drop-down";
import { DropDownItem } from "@onlyoffice/apps-ui-kit/components/drop-down-item";

export function TimezoneMenu({ zones }: { zones: string[] }) {
  const [open, setOpen] = useState(false);
  const anchor = useRef<HTMLDivElement>(null);

  return (
    <div ref={anchor} style={{ position: "relative" }}>
      <button type="button" onClick={() => setOpen(!open)}>
        Time zone
      </button>
      <DropDown
        open={open}
        forwardedRef={anchor}
        maxHeight={320}
        manualWidth="280px"
        clickOutsideAction={() => setOpen(false)}
      >
        {zones.map((zone) => (
          <DropDownItem
            key={zone}
            label={zone}
            onClick={() => setOpen(false)}
          />
        ))}
      </DropDown>
    </div>
  );
}
```

## Behaviour the types don't state

- **It renders into `document.body` by default** and positions itself by measuring the element
  behind `forwardedRef` on open, on resize and on scroll. Without that ref it cannot find the
  anchor and lands wherever the stylesheet leaves it; `appendTo` moves the portal, and
  `isDefaultMode={false}` renders it in place instead, absolutely positioned against the nearest
  positioned ancestor.
- **`maxHeight` changes how the children are rendered, not just how tall the menu is.** Without
  it every child is rendered as given, with no scrollbar and no keyboard navigation. With it the
  list is virtualised by `react-window`, which takes each child's height from its `height` prop
  (32px, or 36 on a tablet, and 12 for an item marked `isSeparator`) — a child that is actually
  taller overlaps its neighbour. `isNoFixedHeightOptions` swaps the virtual list for a plain
  scrollbar and measures nothing.
- **While an open menu has keyboard navigation on, every key press in the document has its
  default prevented.** The handler is attached to `window` and calls `preventDefault()` before
  it looks at the key, so a text field elsewhere on the page stops accepting characters. Pass
  `enableKeyboardEvents={false}` for a menu that opens next to an input.
- **Disabled children are removed from the list by default.** `showDisabledItems` keeps them; a
  separator that would end up first or last is dropped either way. Keyboard navigation still
  counts the original children, so the highlight and the removed items disagree.
- **`directionX` and `directionY` are preferences.** The component measures the room around the
  anchor and flips the menu to whichever side fits, ending up at the viewport edge when neither
  does. `fixedDirection` turns that off. In a right-to-left interface the alignment mirrors:
  the menu lines up with the anchor's right edge instead of its left.
- **Nothing closes the menu by itself.** `open` is yours, and `clickOutsideAction` is called by
  the backdrop and by the DOM events you list in `eventTypes` — there is no Escape handling and
  no default event list. On a mobile device the component registers a single event type spelled
  `"click, touchend"`, which no browser ever fires.
- The element is always in the DOM and `display: none` until `open`. Its width comes from
  `manualWidth`, not from the anchor.
- The stylesheet's own `max-height` rule is attached to a class the component never sets, so the
  height you get is the one computed from the items and the scrollbar of the list.
- `id`, `columnCount`, `withBlur` and `disableOnClickOutside` are declared and never read.

## CSS variables

<APITable>

| Variable                   | Default                    | Effect                          |
| -------------------------- | -------------------------- | ------------------------------- |
| `--dropdown-bg`            | theme surface              | Background of the menu          |
| `--dropdown-border-style`  | none in light, 1px in dark | Border, as a `border` shorthand |
| `--dropdown-shadow`        | `0 8px 16px` theme shadow  | Shadow                          |
| `--dropdown-radius`        | `6px`                      | Corner radius                   |
| `--dropdown-inner-padding` | `8px 0`                    | Padding around the items        |
| `--dropdown-text-size`     | `13px`                     | Font size of the items          |
| `--dropdown-text-weight`   | `600`                      | Font weight of the items        |

</APITable>

`--dropdown-text-size` and `--dropdown-text-weight` are set on the menu, and a `DropDownItem`
sets its own font size and weight, so they reach only children that do not.

In the default portal mode the menu is rendered on `document.body`, outside any wrapper of
yours, so a variable set on a wrapper never reaches it: set it through the DropDown's own
`style` prop, or render in place with `isDefaultMode={false}`.

`--z-index`, `--max-height`, `--manual-width`, `--manual-x` and `--manual-y` are written by the
component from the matching props.

## Accessibility

- The menu is a `<div role="listbox">`. A `DropDownItem` inside it is a `role="option"`, or a
  `role="separator"` when marked `isSeparator`; children of your own get no role.
- Nothing links the anchor to the menu: no `aria-expanded`, no `aria-controls`, no
  `aria-activedescendant` on the anchor. Add them on your own control.
- Focus is neither moved into the menu nor trapped, and Escape does not close it. The arrow keys
  work only with `maxHeight`, and they move a highlight rather than focus, wrapping from the
  last item to the first and back.
- Enter activates the highlighted child by calling its `onClick` directly, which does nothing
  for a child that has none.

## Test ids

<APITable>

| Element  | `data-testid`                             |
| -------- | ----------------------------------------- |
| The menu | `dropdown`, overridable with `dataTestId` |

</APITable>

## Related

- [`DropDownItem`](./drop-down-item.md) — what goes inside, and where `height` comes
  from.
- [`ContextMenu`](./context-menu.md) — the menu that opens at the pointer.
- [`Backdrop`](./backdrop.md) — the layer this renders for you unless you say otherwise.
