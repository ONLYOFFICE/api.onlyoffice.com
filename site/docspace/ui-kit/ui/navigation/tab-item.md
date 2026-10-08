---
description: "Rounded pill that fills in when it is selected."
custom_edit_url: "https://github.com/ONLYOFFICE/docspace-ui-kit-react/blob/9954315f61fd4830b7ea0582c3d58bee0e85d0aa/components/tab-item/README.md"
---

import ThemedImage from '@theme/ThemedImage';

import APITable from '@site/src/components/APITable/APITable';

# TabItem

Rounded pill that fills in when it is selected. It is a single item, not a tab bar: laying
several out and deciding which is active is yours to do.

<ThemedImage alt="TabItem" width={1014} sources={{ light: require('./tab-item--primary-light.png').default, dark: require('./tab-item--primary-dark.png').default }} />

## Use this when / not when

- Use for a short filter or preset the user switches between — the quick-add chips of
  [`QuantityPicker`](../form-controls/quantity-picker.md) are these.
- Not for a tab bar with content behind it: [`Tabs`](./tabs.md) draws the bar, scrolls
  it, and renders the selected tab's body.
- Not for a multiple choice in a form — [`Checkbox`](../form-controls/checkbox.md) is the real control
  and is reachable from the keyboard.
- Not for a plain action; [`Button`](../interactive-elements/button.md) is that.

## Import

```ts
import { TabItem } from "@onlyoffice/apps-ui-kit/components/tab-item";
```

Also exported from the root barrel `@onlyoffice/apps-ui-kit`.

Needs `ThemeProvider` from `@onlyoffice/apps-ui-kit/providers/theme`; the selected fill is the
accent colour it supplies.

## Stories

### Default

An unselected pill: click it to see it fill in, and change any other prop live in the Controls panel below.

<ThemedImage alt="Default" width={1014} sources={{ light: require('./tab-item--default-light.png').default, dark: require('./tab-item--default-dark.png').default }} />

### Active State

The filled look of a selected pill, for a filter that is already applied when the screen opens (`isActive`).

<ThemedImage alt="Active State" width={1014} sources={{ light: require('./tab-item--active-state-light.png').default, dark: require('./tab-item--active-state-dark.png').default }} />

### Disabled State

A dimmed pill that ignores clicks, for an option that does not apply right now (`isDisabled`).

<ThemedImage alt="Disabled State" width={1014} sources={{ light: require('./tab-item--disabled-state-light.png').default, dark: require('./tab-item--disabled-state-dark.png').default }} />

### With React Node Label

Tab with a React node as label, allowing custom content like icons alongside text. The label renders inside a `<p>`, so the node has to be phrasing content -- a `<span>`, not a `<div>`.

<ThemedImage alt="With React Node Label" width={1014} sources={{ light: require('./tab-item--with-react-node-label-light.png').default, dark: require('./tab-item--with-react-node-label-dark.png').default }} />

### Tab Group

Interactive tab group demonstrating single-selection behavior. Clicking a tab selects it and deselects others.

<ThemedImage alt="Tab Group" width={333} sources={{ light: require('./tab-item--tab-group-light.png').default, dark: require('./tab-item--tab-group-dark.png').default }} />

### Multi Select

Three pills that toggle independently, for a filter where several values can apply at once: a click on a selected pill deselects it (`withMultiSelect`).

<ThemedImage alt="Multi Select" width={305} sources={{ light: require('./tab-item--multi-select-light.png').default, dark: require('./tab-item--multi-select-dark.png').default }} />

### Css Customization

Every overridable variable set on one wrapper -- the variables are listed under CSS variables on this page. **Documents** is selected, for the two active variables; **Images** is unselected, for the border; **Videos** is disabled, for the opacity. Radius and padding show on all three.

<ThemedImage alt="Css Customization" width={313} sources={{ light: require('./tab-item--css-customization-light.png').default, dark: require('./tab-item--css-customization-dark.png').default }} />

## Minimal example

The pill tracks its own selected look, so keep your state in step by passing `isActive`.

```tsx
import { useState } from "react";
import { TabItem } from "@onlyoffice/apps-ui-kit/components/tab-item";

const FILTERS = ["All", "Documents", "Spreadsheets"];

export function FileFilters() {
  const [active, setActive] = useState("All");

  return (
    <div style={{ display: "flex", gap: 8 }}>
      {FILTERS.map((filter) => (
        <TabItem
          key={filter}
          label={filter}
          isActive={filter === active}
          onSelect={() => setActive(filter)}
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
| `label` | `React.ReactNode` | Text of the pill. |
| `allowNoSelection`? | `boolean` | Freezes the selected look at whatever it was on mount, so the pill can be driven by something other than its own clicks. |
| `className`? | `string` | Applied to the outermost element. |
| `dataTestId`? | `string` | `data-testid` of the outermost element. |
| `isActive`? | `boolean` | Whether the pill starts selected. The component then keeps that state itself; changing this prop re-syncs it. Default: `false`. |
| `isDisabled`? | `boolean` | Whether the pill is inert. Pointer events are dropped in CSS as well, unless it is also active. |
| `lockLastSelection`? | `boolean` | Whether a click on an already selected pill is dropped entirely — `onSelect` does not fire either. Default: `false`. |
| `onSelect`? | `(event: React.MouseEvent<HTMLDivElement>) => void` | Called with the click event whenever the pill is clicked and not blocked by `isDisabled` or `lockLastSelection`. |
| `withMultiSelect`? | `boolean` | Whether clicking an already selected pill deselects it. Without this a selected pill stays selected. Default: `false`. |

</APITable>

## Recipes

### Disabled / read-only

`isDisabled` fades the pill to half opacity and the CSS drops its pointer events — unless it is
also active, in which case it keeps its fill and the click is stopped in the handler instead.

```tsx
import { TabItem } from "@onlyoffice/apps-ui-kit/components/tab-item";

export function LockedFilter() {
  return <TabItem label="Trash" isDisabled onSelect={() => {}} />;
}
```

### Several at once

`withMultiSelect` is what lets a selected pill be clicked off again; without it a pill that is
selected stays selected however often it is clicked.

```tsx
import { useState } from "react";
import { TabItem } from "@onlyoffice/apps-ui-kit/components/tab-item";

const TYPES = ["Docs", "Sheets", "Slides"];

export function TypeFilters() {
  const [chosen, setChosen] = useState<string[]>([]);

  const toggle = (type: string) =>
    setChosen((current) =>
      current.includes(type)
        ? current.filter((x) => x !== type)
        : [...current, type],
    );

  return (
    <div style={{ display: "flex", gap: 8 }}>
      {TYPES.map((type) => (
        <TabItem
          key={type}
          label={type}
          withMultiSelect
          isActive={chosen.includes(type)}
          onSelect={() => toggle(type)}
        />
      ))}
    </div>
  );
}
```

## Behaviour the types don't state

- **The pill owns its selected look and `isActive` only seeds it.** An effect re-applies the
  prop whenever it changes, so a controlled group works — but between the click and your state
  update the pill has already changed colour on its own.
- **A selected pill does not deselect.** Clicking it calls `onSelect` and leaves the fill in
  place unless `withMultiSelect` is set.
- **`lockLastSelection` swallows the click entirely.** On an already selected pill nothing
  happens at all — `onSelect` does not fire either — which is how a group keeps at least one
  item chosen.
- **`allowNoSelection` freezes the look at whatever it was on mount.** Despite the name it does
  not enable deselection: it turns off every internal update, including the effect that copies
  `isActive` in, so the pill's colour stops following the prop. Use it only for a pill whose
  appearance you drive entirely with `className`.
- **Pressing an enabled pill shows the selected look** — the accent fill and label colour are
  applied under `:active` too, so an unselected pill flashes selected while the pointer is
  down, and a disabled one does not.
- **A disabled pill that is also active stays fully opaque and keeps its fill**, because the
  fade rule is skipped for the active state; only the click guard still applies.
- **The pill has no width of its own** beyond `padding: 4px 16px` and `max-width: 100%`, so a
  long label stretches it until it is capped by the parent, then truncates with an ellipsis.
- The label is rendered through [`Text`](../data-display/text.md) at 13px/600, with selection
  disabled — passing a React node as `label` puts it inside that `<p>`.

## CSS variables

Set them on any ancestor.

<APITable>

| Variable                      | Default       | Effect                                           |
| ----------------------------- | ------------- | ------------------------------------------------ |
| `--tab-item-active-bg`        | accent colour | Background and border while selected or pressed. |
| `--tab-item-active-text`      | theme token   | Label colour while selected or pressed.          |
| `--tab-item-border`           | theme token   | Whole `border` shorthand while idle.             |
| `--tab-item-radius`           | `16px`        | Corner radius.                                   |
| `--tab-item-padding`          | `4px 16px`    | Inner padding.                                   |
| `--tab-item-disabled-opacity` | `0.5`         | Opacity while disabled and not active.           |

</APITable>

## Accessibility

- **The pill is a `<div>` with a click handler**: no role, no `tabIndex`, no key handler. It
  cannot be reached or activated from the keyboard.
- `aria-selected` is set on that same `<div>`, which has no role to carry it — the attribute is
  ignored, and assistive technology is told nothing about the selected state.
- There is no group semantics: a row of pills is a row of `<div>`s, not a `tablist` or a
  `radiogroup`, so nothing announces how many options there are or which is chosen.
- Where a choice has to be operable by everyone, use [`Checkbox`](../form-controls/checkbox.md) or a
  row of [`Button`](../interactive-elements/button.md)s and style them.

## Test ids

<APITable>

| Element   | `data-testid`               |
| --------- | --------------------------- |
| The pill  | `tab-item`, or `dataTestId` |
| Its label | `tab-item-text`             |

</APITable>

## Related

- [`Tabs`](./tabs.md) — the real tab bar, with content and keyboard support.
- [`Checkbox`](../form-controls/checkbox.md) — the accessible control for the same choice.
- [`QuantityPicker`](../form-controls/quantity-picker.md) — builds its quick-add chips from these.
