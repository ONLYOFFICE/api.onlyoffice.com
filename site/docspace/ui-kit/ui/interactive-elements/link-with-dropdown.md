---
description: "Dashed link that opens a menu under itself."
custom_edit_url: "https://github.com/ONLYOFFICE/docspace-ui-kit-react/blob/9954315f61fd4830b7ea0582c3d58bee0e85d0aa/components/link-with-dropdown/README.md"
---

import ThemedImage from '@theme/ThemedImage';

import APITable from '@site/src/components/APITable/APITable';

# LinkWithDropdown

Dashed link that opens a menu under itself. It is the inline "change this" affordance of the
portal — a value written as text that turns out to be a choice.

<ThemedImage alt="LinkWithDropdown" width={87} sources={{ light: require('./link-with-dropdown--primary-light.png').default, dark: require('./link-with-dropdown--primary-dark.png').default }} />

## Use this when / not when

- Use for a short value inside a sentence or a toolbar that the user can change: a role, a
  period, a sort order.
- Not for a button that opens a menu — [`ContextMenuButton`](./context-menu-button.md)
  is the icon-triggered one, and [`ComboBox`](../form-controls/combobox.md) is the real select.
- Not for a link that navigates; [`Link`](../navigation/link.md) is that, and this one renders an
  `<a>` with no `href`.
- Not for a menu anchored to something you already render — use
  [`DropDown`](../overlays/drop-down.md) directly.

## Import

```ts
import { LinkWithDropdown } from "@onlyoffice/apps-ui-kit/components/link-with-dropdown";
```

Also exported from the root barrel `@onlyoffice/apps-ui-kit`.

Needs `ThemeProvider` from `@onlyoffice/apps-ui-kit/providers/theme`; the link and the menu take
their colours from it.

## Stories

### Default

The link with a three-item menu; click it to open the menu, pick an entry to see its `onClick` in the Actions panel, and change any other prop live in the Controls panel below.

<ThemedImage alt="Default" width={87} sources={{ light: require('./link-with-dropdown--default-light.png').default, dark: require('./link-with-dropdown--default-dark.png').default }} />

### With Expander

Link with an expander arrow icon that indicates the presence of a dropdown menu.

<ThemedImage alt="With Expander" width={140} sources={{ light: require('./link-with-dropdown--with-expander-light.png').default, dark: require('./link-with-dropdown--with-expander-dark.png').default }} />

### Custom Styling

Link with custom font size, weight, and color for styled appearance.

<ThemedImage alt="Custom Styling" width={170} sources={{ light: require('./link-with-dropdown--custom-styling-light.png').default, dark: require('./link-with-dropdown--custom-styling-dark.png').default }} />

### Disabled

Use it while the options do not apply yet: clicking no longer opens the menu and the cursor stays an arrow (`isDisabled`). In the light theme the text keeps the default grey, so the state is not visible until the link is clicked.

<ThemedImage alt="Disabled" width={95} sources={{ light: require('./link-with-dropdown--disabled-light.png').default, dark: require('./link-with-dropdown--disabled-dark.png').default }} />

### Semi Transparent

Link with reduced opacity for a subtle, secondary appearance.

<ThemedImage alt="Semi Transparent" width={148} sources={{ light: require('./link-with-dropdown--semi-transparent-light.png').default, dark: require('./link-with-dropdown--semi-transparent-dark.png').default }} />

### With Custom Width

Link with a manually set dropdown width for controlling the menu size.

<ThemedImage alt="With Custom Width" width={130} sources={{ light: require('./link-with-dropdown--with-custom-width-light.png').default, dark: require('./link-with-dropdown--with-custom-width-dark.png').default }} />

### Text Overflow

Use it where a label can be longer than its place: the text stops at 200px with an ellipsis and the chevron stays beside it (`isTextOverflow`).

<ThemedImage alt="Text Overflow" width={226} sources={{ light: require('./link-with-dropdown--text-overflow-light.png').default, dark: require('./link-with-dropdown--text-overflow-dark.png').default }} />

### Open Menu

The menu shown on first render (`isOpen`): the link keeps its highlighted background and the chevron points up while the menu is open. Clicking outside or picking an entry closes it.

<ThemedImage alt="Open Menu" width={123} sources={{ light: require('./link-with-dropdown--open-menu-light.png').default, dark: require('./link-with-dropdown--open-menu-dark.png').default }} />

### Css Customization

The variables are listed under CSS variables on this page. The first link shows the text, background, radius and padding variables; hover it or open its menu to see the hover pair. The second, with `isDisabled`, is there for `--link-with-dropdown-disabled-color`.

<ThemedImage alt="Css Customization" width={308} sources={{ light: require('./link-with-dropdown--css-customization-light.png').default, dark: require('./link-with-dropdown--css-customization-dark.png').default }} />

## Minimal example

The link opens and closes itself; `data` is a list of
[`DropDownItem`](../overlays/drop-down-item.md) props.

```tsx
import { LinkWithDropdown } from "@onlyoffice/apps-ui-kit/components/link-with-dropdown";

export function SortLink({ onSort }: { onSort: (by: string) => void }) {
  return (
    <LinkWithDropdown
      withExpander
      data={[
        { key: "name", label: "Name", onClick: () => onSort("name") },
        { key: "date", label: "Last modified", onClick: () => onSort("date") },
        { key: "size", label: "Size", onClick: () => onSort("size") },
      ]}
    >
      Sort by
    </LinkWithDropdown>
  );
}
```

## Props


<APITable>

| Property | Type | Description |
| --- | --- | --- |
| `bottomSpace`? | `number` | (`withDynamicScrollbar` only) Space to leave below the menu, in pixels. |
| `children`? | `ReactNode` | Text of the link. |
| `className`? | `string` | Applied to the outermost element, and to the link inside it. Default: `""`. |
| `color`? | `string` | CSS colour of the text. |
| `data`? | `ContextMenuModel[]` | Entries of the menu. Each is a `DropDownItem`'s props; `key` is required, and `onClick` is called with the event. |
| `directionX`? | `TDirectionX` | Which side of the link the menu is aligned to. Passed straight to `DropDown`, which defaults to `"right"`. |
| `directionY`? | `TDirectionY` | Whether the menu opens above or below the link. Passed straight to `DropDown`, which defaults to `"bottom"`. |
| `dropDownClassName`? | `string` | Applied to the menu. |
| `dropdownType`? | `TDropdownType` | Whether the dashed underline is always drawn or appears on hover. Default: `"alwaysDashed"`. |
| `fixedDirection`? | `boolean` | Whether the menu keeps `directionX` and `directionY` even when it does not fit there. Default: `false`. |
| `fontSize`? | `string` | Font size of the text, as a CSS length. Default: `"13px"`. |
| `fontWeight`? | `number` | Font weight of the text. |
| `hasScroll`? | `boolean` | Whether the menu is wrapped in a scrollbar of its own. It only takes effect on a phone. Default: `false`. |
| `id`? | `string` | Applied to the outermost element. |
| `isAside`? | `boolean` | Passed to the menu's backdrop, which then keeps an aside panel above itself. |
| `isBold`? | `boolean` | Whether the text is bold. Default: `false`. |
| `isDefaultMode`? | `boolean` | Whether the menu is rendered in a portal on `document.body`. Turn it off to render it in place. Default: `true`. |
| `isDisabled`? | `boolean` | Whether the link is inert: it greys out and clicking no longer opens the menu. Default: `false`. |
| `isHovered`? | `boolean` | Ignored. Nothing reads this prop; the hover state comes from CSS. |
| `isOpen`? | `boolean` | Whether the menu starts open. The component then keeps that state itself; changing this prop re-syncs it. Default: `false`. |
| `isSemitransparent`? | `boolean` | Whether the link is drawn at half opacity, the portal's "pending" look. Default: `false`. |
| `isTextOverflow`? | `boolean` | Whether the text is truncated with an ellipsis at 200px instead of wrapping. Default: `false`. |
| `manualWidth`? | `string` | Exact width of the menu, as a CSS length. Without it the menu is as wide as its widest entry. |
| `style`? | `CSSProperties` | Applied to the outermost element as inline style. |
| `title`? | `string` | `title` attribute of the text — the browser's own tooltip for a truncated label. |
| `topSpace`? | `number` | (`withDynamicScrollbar` only) Space to leave above the menu, in pixels. |
| `withDynamicScrollbar`? | `boolean` | Whether the menu measures the room around the link on every open and scrolls inside what is left. |
| `withExpander`? | `boolean` | Whether a chevron is drawn after the text, which turns over while the menu is open. Default: `false`. |
| `withoutBackground`? | `boolean` | Passed to the menu's backdrop: makes it transparent. |

</APITable>

The entries of `data` are `ContextMenuModel`s — see
[`ContextMenu`](../overlays/context-menu.md#props) for the shape. Only `key` and `label` are
required.

## Recipes

### Open / close (controlled)

`isOpen` is copied into the component's own state whenever it changes, and the component keeps
toggling that state on its own. Hold the value yourself if you need to open the menu from
elsewhere — and expect the two to drift once the user closes it by clicking outside.

```tsx
import { useState } from "react";
import { LinkWithDropdown } from "@onlyoffice/apps-ui-kit/components/link-with-dropdown";

export function RoleLink({ role }: { role: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button type="button" onClick={() => setOpen((v) => !v)}>
        Toggle from outside
      </button>
      <LinkWithDropdown
        isOpen={open}
        withExpander
        data={[
          { key: "viewer", label: "Viewer" },
          { key: "editor", label: "Editor" },
        ]}
      >
        {role}
      </LinkWithDropdown>
    </div>
  );
}
```

### Disabled / read-only

`isDisabled` greys the text and stops the click, so the menu can no longer be opened; the
cursor stays an arrow instead of turning into a pointer.

```tsx
import { LinkWithDropdown } from "@onlyoffice/apps-ui-kit/components/link-with-dropdown";

export function FixedRole({ role }: { role: string }) {
  return (
    <LinkWithDropdown isDisabled data={[]}>
      {role}
    </LinkWithDropdown>
  );
}
```

## Behaviour the types don't state

- **An entry's `onClick` is found by matching its `key` against a DOM attribute**, so the key
  has to be a **string**: a numeric `key` is read back as text, the lookup misses, and the menu
  closes without calling anything.
- **The menu closes on any entry click**, before the entry's own handler runs.
- **`isOpen` is a seed, not a source of truth.** It is applied through an effect on change, so
  re-passing the same `true` after the user closed the menu does not reopen it.
- **`window.orientation` is read while the component is being created**, so it throws when
  rendered on a server. Render it on the client only.
- **`hasScroll` only does anything on a phone.** Elsewhere it is ignored; on a phone the menu is
  given a fixed height — 250px upright, 100px in landscape — and its own scrollbar.
- **Unknown props are spread onto both the `<a>` and the menu.** Anything the component does not
  destructure reaches two elements, and reaches the DOM, where React reports it in the console.
- **The trigger is an `<a>` with no `href`**, wrapped in two `<span>`s, and the outer one is
  what carries `id`, `style` and the click target. `className` is applied to the outer span, to
  the `<a>` and to the expander wrapper — all three.
- **`isTextOverflow` caps the text at 200px** (`--link-dropdown-max-width`) and truncates it;
  without it the text is never shortened.
- **The link brings its own padding** of `4px 8px` and is `display: inline-block`, so it sits
  slightly wider than the text it replaces.
- `isHovered` is declared and never read; the hover state comes from CSS.

## CSS variables

Set them on any ancestor.

<APITable>

| Variable                              | Default     | Effect                             |
| ------------------------------------- | ----------- | ---------------------------------- |
| `--link-with-dropdown-color`          | theme token | Text colour.                       |
| `--link-with-dropdown-bg`             | transparent | Background of the link.            |
| `--link-with-dropdown-hover-color`    | theme token | Text colour while hovered or open. |
| `--link-with-dropdown-hover-bg`       | theme token | Background while hovered or open.  |
| `--link-with-dropdown-disabled-color` | theme token | Text colour while disabled.        |
| `--link-with-dropdown-padding`        | `4px 8px`   | Padding around the link.           |
| `--link-with-dropdown-radius`         | `3px`       | Corner radius.                     |

</APITable>

`--link-with-dropdown-color` also paints the chevron that `withExpander` draws, and the chevron
keeps it on hover and while the menu is open, when the text switches to
`--link-with-dropdown-hover-color`. The background, radius and padding belong to the link's
outer box, so `--link-with-dropdown-bg` shows only while the link is closed and not hovered.

`color` overrides the first of these as an inline style, so it wins over any of them.

## Accessibility

- The trigger carries `role="button"`, `aria-haspopup`, `aria-expanded` and `aria-disabled`,
  which is more than most of this kit — but it has **no `tabIndex` and no key handler**, so it
  cannot be focused or opened from the keyboard.
- The menu is a [`DropDown`](../overlays/drop-down.md) and inherits its behaviour, including the
  outside-click close and the lack of focus trapping.
- `title` is a plain `title` attribute: a mouse tooltip, not an accessible name.
- Where the choice matters, [`ComboBox`](../form-controls/combobox.md) is the component with real
  select semantics.

## Test ids

The component sets **`data-test-id="link-dropdown"`**, with dashes — not `data-testid` — so
Testing Library's `getByTestId` does not find it. Query it as
`[data-test-id="link-dropdown"]`, or pass an `id`.

<APITable>

| Element      | Attribute                                 |
| ------------ | ----------------------------------------- |
| The link     | `data-test-id="link-dropdown"`            |
| A menu entry | `data-testid="link_with_drop_down_<key>"` |

</APITable>

## Related

- [`DropDown`](../overlays/drop-down.md) — the menu this opens.
- [`DropDownItem`](../overlays/drop-down-item.md) — what each entry of `data` becomes.
- [`Link`](../navigation/link.md) — the plain link, without a menu.
