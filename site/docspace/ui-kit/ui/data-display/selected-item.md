---
description: "Chip with a cross, for a value the user has picked and can take back."
custom_edit_url: "https://github.com/ONLYOFFICE/docspace-ui-kit-react/blob/446f115916d79a87d07b9e3dddb1e39a263784ee/components/selected-item/README.md"
---

import ThemedImage from '@theme/ThemedImage';

import APITable from '@site/src/components/APITable/APITable';

# SelectedItem

Chip with a cross, for a value the user has picked and can take back. It is what a filter
draws under its input for every active condition, and what [`DatePicker`](../form-controls/date-picker.md)
becomes once a date is chosen.

<ThemedImage alt="SelectedItem" width={134} sources={{ light: require('./selected-item--primary-light.png').default, dark: require('./selected-item--primary-dark.png').default }} />

## Use this when / not when

- Use for a choice the user made and can undo — a filter term, a selected author, a chosen
  date — where removing it is a first-class action.
- Not as a label on data the user did not choose; [`Tag`](./tag.md) is the room tag,
  smaller and without the removal semantics.
- Not as a toggle in a group of options — [`TabItem`](../navigation/tab-item.md) is the selectable
  pill, and [`Checkbox`](../form-controls/checkbox.md) the honest form control.
- Not for one-off text with a colour; [`Badge`](./badge.md) is that.

## Import

```ts
import { SelectedItem } from "@onlyoffice/apps-ui-kit/components/selected-item";
```

Also exported from the root barrel `@onlyoffice/apps-ui-kit`.

Needs `ThemeProvider` from `@onlyoffice/apps-ui-kit/providers/theme`; without it the chip has
no background and the disabled colours resolve to nothing.


## Stories

### Default

The chip as a filter shows a picked value: click the cross to see `onClose` in the Actions panel, click the label for `onClick`, and change any other prop live in the Controls panel below.

<ThemedImage alt="Default" width={134} sources={{ light: require('./selected-item--default-light.png').default, dark: require('./selected-item--default-dark.png').default }} />

### Disabled State

For a value the user may see but not take back: the label and the cross grey out and neither handler fires (`isDisabled`).

<ThemedImage alt="Disabled State" width={135} sources={{ light: require('./selected-item--disabled-state-light.png').default, dark: require('./selected-item--disabled-state-dark.png').default }} />

### Block Display

For a list of picked values stacked one per row: the chip fills the width of its container and pushes the cross to the far end (`isInline={false}`).

<ThemedImage alt="Block Display" width={1014} sources={{ light: require('./selected-item--block-display-light.png').default, dark: require('./selected-item--block-display-dark.png').default }} />

### All Variants

How the modes sit together in a filter bar:

- **Inline enabled** and **Another item** — inline chips wrapping in a row
- **Inline disabled** — the same chip with its label and cross greyed out (`isDisabled`)
- **Block display item** — a chip that fills the row (`isInline={false}`)

<ThemedImage alt="All Variants" width={1014} sources={{ light: require('./selected-item--all-variants-light.png').default, dark: require('./selected-item--all-variants-dark.png').default }} />

### With Icon

For a value that is easier to recognise by its kind: a glyph sits before the label (`icon`, here an SVG component; an SVG URL works too).

<ThemedImage alt="With Icon" width={147} sources={{ light: require('./selected-item--with-icon-light.png').default, dark: require('./selected-item--with-icon-dark.png').default }} />

### Active State

For the chip the user is working with right now: the background tints and the label and icon take the accent colour (`isActive`).

<ThemedImage alt="Active State" width={147} sources={{ light: require('./selected-item--active-state-light.png').default, dark: require('./selected-item--active-state-dark.png').default }} />

### Without Cross

For a value the user can pick but not remove from the chip itself: the cross is left out and only a click on the chip is reported (`hideCross`).

<ThemedImage alt="Without Cross" width={101} sources={{ light: require('./selected-item--without-cross-light.png').default, dark: require('./selected-item--without-cross-dark.png').default }} />

### Truncated Label

For values longer than a chip can hold: the label is cut off with an ellipsis; rest the pointer on the chip to read the full text in the tooltip (`title`). The tooltip is the kit's shared one, so the app must mount `RootTooltip` once, as this story does.

<ThemedImage alt="Truncated Label" width={215} sources={{ light: require('./selected-item--truncated-label-light.png').default, dark: require('./selected-item--truncated-label-dark.png').default }} />

### Css Customization

Every overridable variable set on one wrapper -- the variables are listed under CSS variables on this page. The example has three chips: **Custom item** for the colours and sizes (hover it for the hover background), **Disabled** for `--selected-item-disabled-text` (`isDisabled`), and **Active** for the two active variables (`isActive`).

<ThemedImage alt="Css Customization" width={376} sources={{ light: require('./selected-item--css-customization-light.png').default, dark: require('./selected-item--css-customization-dark.png').default }} />

## Minimal example

`onClose` is handed the `propKey` you gave the chip, so one handler serves a whole list.

```tsx
import { useState } from "react";
import { SelectedItem } from "@onlyoffice/apps-ui-kit/components/selected-item";

export function ActiveFilters() {
  const [terms, setTerms] = useState(["Reports", "2026", "PDF"]);

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {terms.map((term) => (
        <SelectedItem
          key={term}
          label={term}
          propKey={term}
          onClose={(key) => setTerms((t) => t.filter((x) => x !== key))}
        />
      ))}
    </div>
  );
}
```

## Props


<APITable>

| Property | Type | Description |
| --- | --- | --- |
| `label` | `ReactNode` | Text of the chip. A falsy label renders nothing at all. |
| `onClose` | `(propKey: string \| number, label: React.ReactNode, group?: string, e?: React.MouseEvent) => void` | Called when the cross is clicked, with `propKey`, `label`, `group` (`""` when it was not set) and the event. |
| `propKey` | `number \| string` | Identifier handed back to `onClose` and `onClick`. It is not used for anything else. |
| `className`? | `string` | Applied to the outermost element. |
| `classNameCloseButton`? | `string` | Applied to the cross button, in addition to the class the component needs there itself. |
| `clickable`? | `boolean` | Ignored. Nothing reads this prop; passing `onClick` is what makes the chip clickable. |
| `dataTestId`? | `string` | `data-testid` of the outermost element. |
| `forwardedRef`? | `RefObject<HTMLDivElement \| null>` | Ref to the outermost element. |
| `group`? | `string` | Second identifier handed back to both handlers, for chips that belong to several filters. |
| `hideCross`? | `boolean` | Whether the cross is left out. `onClose` then has nothing to fire it. |
| `icon`? | `FC<SVGProps<SVGSVGElement>> \| string` | Glyph before the label: an SVG URL, or a component rendered with no props. |
| `id`? | `string` | Applied to the outermost element. |
| `isActive`? | `boolean` | Whether the chip is drawn in its selected colours. |
| `isDisabled`? | `boolean` | Whether the chip is inert. Both handlers stop firing and the label and the cross grey out. Default: `false`. |
| `isInline`? | `boolean` | Whether the chip shrinks to its content. Without it the chip fills the width of its container. Default: `true`. |
| `onClick`? | `(propKey: string \| number, label: React.ReactNode, group?: string, e?: React.MouseEvent<HTMLElement>) => void` | Called when the chip is clicked, with `propKey`, `label`, `group` and the event. A click on the cross reaches it too, after `onClose`. |
| `style`? | `CSSProperties` | Ignored. Nothing reads this prop; style the chip through `className` or the custom properties. |
| `title`? | `string` | Text of the kit's shared tooltip for a truncated label; it shows only once `RootTooltip` is mounted. |

</APITable>

## Recipes

### Disabled / read-only

`isDisabled` greys the label and stops both handlers. The cross is still drawn — use
`hideCross` to take it away for a chip that cannot be removed at all.

```tsx
import { SelectedItem } from "@onlyoffice/apps-ui-kit/components/selected-item";

export function FixedScope({ scope }: { scope: string }) {
  return (
    <SelectedItem
      label={scope}
      propKey="scope"
      title="Set by your administrator"
      isDisabled
      hideCross
      onClose={() => {}}
    />
  );
}
```

### A chip that is also a button

`onClick` fires for a click on the chip, so the same chip can open the filter it stands for
and remove it. A click on the cross reaches `onClick` too, after `onClose` (see below), so the
handler here only toggles state the removal makes irrelevant.

```tsx
import { useState } from "react";
import { SelectedItem } from "@onlyoffice/apps-ui-kit/components/selected-item";

export function AuthorFilter() {
  const [author, setAuthor] = useState<string | null>("Anna Ivanova");
  const [editing, setEditing] = useState(false);

  if (!author) return null;

  return (
    <div>
      <SelectedItem
        label={author}
        propKey="author"
        group="people"
        isActive={editing}
        onClick={() => setEditing((v) => !v)}
        onClose={() => setAuthor(null)}
      />
      {editing ? <p>Pick another author</p> : null}
    </div>
  );
}
```

## Behaviour the types don't state

- **A falsy `label` renders nothing.** The component returns `null` before anything else, so a
  chip whose label has not loaded yet disappears rather than showing an empty box.
- **`onClose` and `onClick` are not given the DOM event first.** Both start with `propKey` and
  `label`; the event is the fourth argument and `onClose` receives `""` for `group` when you
  did not set one.
- **A click on the cross fires `onClose` and then `onClick`.** The chip skips `onClick` only
  when the clicked element itself carries `selected-tag-removed`, the class the component puts
  on the cross's own box — but that box is filled by the cross's SVG, so a real click lands on
  the `<path>` and bubbles up to the chip. `classNameCloseButton` is added beside that class,
  never instead of it. Where a click on the chip must not follow a removal, have `onClick`
  ignore a key `onClose` has just removed.
- **The chip brings its own spacing**: `margin-inline-end: 4px` and `margin-bottom: 4px`. In a
  flex row with a `gap` those add up; set `--selected-item-margin-inline` and
  `--selected-item-margin-bottom` to `0` if the gap should be the only spacing.
- **`isInline` defaults to true and is what keeps the chip narrow.** Passing `isInline={false}`
  makes it `width: 100%`, which is the block form used in a side panel.
- **The label is capped at 23 characters** (`max-width: 23ch`) and truncated with an ellipsis.
  Pass `title` so the full text is available on hover.
- **`title` opens the kit's shared tooltip, not the browser's.** Once mounted, the chip renders
  no `title` attribute; it is marked as a tooltip anchor, and the text shows only where the
  app has mounted [`RootTooltip`](../overlays/tooltip.md) once. Without it nothing appears on
  hover. Under `NODE_ENV=test` a native `title` attribute is rendered instead.
- **`icon` accepts either a URL or a component.** A string is fetched and inlined by `react-svg`;
  a component is rendered with no props at all, so an icon that needs a size has to carry it
  itself.
- `style` and `clickable` are declared and never read. Use `className` and the custom
  properties, and pass `onClick` to make the chip clickable.
- The exported `SelectedItemPure` is the same component without `React.memo`.

## CSS variables

Set them on any ancestor.

<APITable>

| Variable                        | Default     | Effect                                                                  |
| ------------------------------- | ----------- | ----------------------------------------------------------------------- |
| `--selected-item-bg`            | theme token | Background of the chip.                                                 |
| `--selected-item-bg-hover`      | theme token | Background while hovered; not applied while `isDisabled` or `isActive`. |
| `--selected-item-active-bg`     | theme token | Background while `isActive`.                                            |
| `--selected-item-active-text`   | theme token | Label and icon colour while `isActive`.                                 |
| `--selected-item-disabled-text` | theme token | Label colour while `isDisabled`.                                        |
| `--selected-item-radius`        | `3px`       | Corner radius.                                                          |
| `--selected-item-padding`       | `6px 8px`   | Inner padding.                                                          |
| `--selected-item-height`        | `32px`      | Height of the chip.                                                     |
| `--selected-item-margin-inline` | `4px`       | Trailing margin.                                                        |
| `--selected-item-margin-bottom` | `4px`       | Bottom margin.                                                          |
| `--selected-item-label-margin`  | `10px`      | Gap between the label and the cross.                                    |

</APITable>

## Accessibility

- **The chip is a `<div>` with a click handler.** It has no role, no `tabIndex` and no key
  handler, so `onClick` is unreachable from the keyboard.
- **The cross is an [`IconButton`](../interactive-elements/icon-button.md), which is also a `<div>`** with no
  role, no name and no `tabIndex`. **A keyboard-only user cannot remove a chip**, and a screen
  reader is told nothing about what the cross does. Where removal has to be reachable, render
  your own [`Button`](../interactive-elements/button.md) beside the chip and pass `hideCross`.
- `title` feeds the shared pointer tooltip and leaves no `title` attribute on the chip, so it is
  not a label either.
- `isDisabled` is a colour and a guard in the handlers. No `aria-disabled` is set on the chip,
  so assistive technology is not told it is inert; only the cross carries `aria-disabled`,
  `true` while `isDisabled` and `false` otherwise.

## Test ids

<APITable>

| Element   | `data-testid`                    |
| --------- | -------------------------------- |
| The chip  | `selected-item`, or `dataTestId` |
| The cross | `icon-button`                    |

</APITable>

The cross's id comes from [`IconButton`](../interactive-elements/icon-button.md) and cannot be set from here;
query it by the `selected-tag-removed` class instead when there are several chips.

## Related

- [`Tag`](./tag.md) — the room tag, for labels the user did not pick.
- [`DatePicker`](../form-controls/date-picker.md) — draws its chosen date as one of these.
- [`IconButton`](../interactive-elements/icon-button.md) — the cross.
