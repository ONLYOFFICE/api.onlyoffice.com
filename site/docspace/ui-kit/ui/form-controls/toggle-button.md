---
description: "Switch for one on/off setting, with an optional label beside it."
custom_edit_url: "https://github.com/ONLYOFFICE/docspace-ui-kit-react/blob/446f115916d79a87d07b9e3dddb1e39a263784ee/components/toggle-button/README.md"
---

import ThemedImage from '@theme/ThemedImage';

import APITable from '@site/src/components/APITable/APITable';

# ToggleButton

Switch for one on/off setting, with an optional label beside it. It takes effect the moment it
is clicked, which is what separates it from a checkbox in a form the user submits later.

<ThemedImage alt="ToggleButton" width={113} sources={{ light: require('./toggle-button--primary-light.png').default, dark: require('./toggle-button--primary-dark.png').default }} />

## Use this when / not when

- Use for a setting that applies immediately: a feature switch in a preferences panel, a
  per-row toggle in a list.
- Not for a choice the user confirms by submitting a form, and not when the label is long
  enough to wrap — use [`Checkbox`](./checkbox.md), whose label is in the flow and
  wraps.
- Not for one choice out of several — that is
  [`RadioButtonGroup`](./radio-button-group.md).
- Not to lay a setting out with its own label, description and error text; wrap this in
  [`FieldContainer`](./field-container.md) for that.

## Import

```ts
import { ToggleButton } from "@onlyoffice/apps-ui-kit/components/toggle-button";
```

Also exported from the root barrel `@onlyoffice/apps-ui-kit`.

Needs `ThemeProvider` from `@onlyoffice/apps-ui-kit/providers/theme` above it in the tree.
Without it the switch still renders, in the light palette, and ignores the portal accent
colour.


## Stories

### Default

A single switch with a label, for one setting that takes effect at once; click it to turn it on, and change any other prop live in the Controls panel below.

<ThemedImage alt="Default" width={113} sources={{ light: require('./toggle-button--default-light.png').default, dark: require('./toggle-button--default-dark.png').default }} />

### Checked States

The two positions side by side, so the track colours can be compared; each switch here can be clicked.

- **Unchecked** — grey track, knob at the start
- **Checked** — accent-coloured track, knob at the end (`isChecked`)
- The third switch has no `label` and takes only the width of the track

<ThemedImage alt="Checked States" width={556} sources={{ light: require('./toggle-button--checked-states-light.png').default, dark: require('./toggle-button--checked-states-dark.png').default }} />

### Disabled States

A setting that cannot be changed right now, shown in both positions so the reader still sees its value (`isDisabled`):

- **Disabled off** — faded grey track, greyed label
- **Disabled on** — faded accent track, greyed label; neither responds to a click

<ThemedImage alt="Disabled States" width={375} sources={{ light: require('./toggle-button--disabled-states-light.png').default, dark: require('./toggle-button--disabled-states-dark.png').default }} />

### Loading State

A setting whose change is still being saved: the knob pulses until the work is done (`isLoading`). The switch still takes clicks, so the caller decides whether to ignore them.

- **Loading unchecked** — the knob pulses at the start of the grey track
- **Loading checked** — the knob pulses at the end of the accent track

<ThemedImage alt="Loading State" width={405} sources={{ light: require('./toggle-button--loading-state-light.png').default, dark: require('./toggle-button--loading-state-dark.png').default }} />

### Without Animation

For a list of many switches or a reduced-motion setting: click either switch and the knob jumps to the other end instead of sliding there (`noAnimation`).

<ThemedImage alt="Without Animation" width={406} sources={{ light: require('./toggle-button--without-animation-light.png').default, dark: require('./toggle-button--without-animation-dark.png').default }} />

### Right To Left

The same switches in a right-to-left interface: the label moves to the left of the switch, and the track is mirrored, so the knob of the off switch sits at the right end and the knob of the on switch at the left. The wrapper carries `dir="rtl"` for the label's side; the mirrored track comes from the theme's `interfaceDirection` (the Direction toolbar).

<ThemedImage alt="Right To Left" width={330} sources={{ light: require('./toggle-button--right-to-left-light.png').default, dark: require('./toggle-button--right-to-left-dark.png').default }} />

### Css Customization

Every overridable variable set on one wrapper -- the variables are listed under CSS variables on this page.

- **Off** is there for `--toggle-button-off-color`; hover it to see `--toggle-button-off-hover-color`
- **On** is there for `--toggle-button-checked-color`
- Both labels sit 16px from their switch (`--toggle-button-spacing`)

<ThemedImage alt="Css Customization" width={331} sources={{ light: require('./toggle-button--css-customization-light.png').default, dark: require('./toggle-button--css-customization-dark.png').default }} />

## Minimal example

The wrapper with an explicit height is not decoration — see the first behaviour note.

```tsx
import { useState } from "react";
import { ToggleButton } from "@onlyoffice/apps-ui-kit/components/toggle-button";

export function NotificationSetting() {
  const [enabled, setEnabled] = useState(false);

  return (
    <div style={{ height: 16 }}>
      <ToggleButton
        label="Email notifications"
        isChecked={enabled}
        onChange={(e) => setEnabled(e.target.checked)}
      />
    </div>
  );
}
```

## Props


<APITable>

| Property | Type | Description |
| --- | --- | --- |
| `className`? | `string` | Applied to the outer element **and** to the inner `<label>`. |
| `dataTestId`? | `string` | Value of `data-testid` on the outer element. Default: `"toggle-button"`. |
| `dataTooltipId`? | `string` | Value of `data-tooltip-id` on the outer element, which is how a `Tooltip` elsewhere in the tree anchors itself to this control. |
| `id`? | `string` | Applied to the outer element **and** to the inner `<label>`, so it appears twice in the document. |
| `isChecked`? | `boolean` | Whether the switch is on. The control is fully controlled: this is the `checked` of a real checkbox input, so pass `onChange` with it or React warns and the switch never moves. |
| `isDisabled`? | `boolean` | Disables the underlying input and stops pointer events on the whole control, and dims the switch and the label. |
| `isLoading`? | `boolean` | Pulses the knob to show work in progress. It does **not** disable the control — a click during it still reaches `onChange`. |
| `label`? | `string` | Text rendered beside the switch, in a `Text` span. Omit it and the component is the 28×16 switch alone. |
| `name`? | `string` | Name of the hidden checkbox input, for a form that reads the control by name rather than by state. |
| `noAnimation`? | `boolean` | Runs the state transitions with a duration of zero instead of animating them. The animation is otherwise always on. Default: `false`. |
| `onChange`? | `ChangeEventHandler<HTMLInputElement, Element>` | Called with the checkbox's change event; the new state is `event.target.checked`. Required in practice, since `isChecked` makes the input controlled. |
| `style`? | `CSSProperties` | Applied to the outer element **and** to the inner `<label>`, so a margin or a padding set here takes effect at both levels. |

</APITable>

#### Inherited from `TextProps`

Declared by [`components/text`](../data-display/text.md) and accepted here too.

<APITable>

| Property | Type | Description |
| --- | --- | --- |
| `fontSize`? | `string` | Font size, as an inline style. Unset, `Text` is 13px through `--text-size`. |
| `fontWeight`? | `number \| string` | Font weight, as an inline style. Ignored while `isBold` is set. Unset, `Text` is 400 through `--text-weight`. |

</APITable>

## Recipes

### Loading

`isLoading` pulses the knob while a request is in flight. It does not stop the user clicking
again, so hold the control disabled yourself if a second click would be wrong.

```tsx
import { useState } from "react";
import { ToggleButton } from "@onlyoffice/apps-ui-kit/components/toggle-button";

export function SyncSetting({
  save,
}: {
  save: (on: boolean) => Promise<void>;
}) {
  const [enabled, setEnabled] = useState(false);
  const [saving, setSaving] = useState(false);

  const change = async (next: boolean) => {
    setSaving(true);
    try {
      await save(next);
      setEnabled(next);
    } finally {
      setSaving(false);
    }
  };

  return (
    <div style={{ height: 16 }}>
      <ToggleButton
        label="Sync with desktop"
        isChecked={enabled}
        isLoading={saving}
        isDisabled={saving}
        onChange={(e) => {
          void change(e.target.checked);
        }}
      />
    </div>
  );
}
```

### Disabled

```tsx
import { ToggleButton } from "@onlyoffice/apps-ui-kit/components/toggle-button";

export function ReadOnlySetting({ enabled }: { enabled: boolean }) {
  return (
    <div style={{ height: 16 }}>
      <ToggleButton
        label="Managed by your administrator"
        isChecked={enabled}
        isDisabled
        onChange={() => {}}
      />
    </div>
  );
}
```

## Behaviour the types don't state

- **It occupies no space.** The outer element is `display: inline-block` with no size of its
  own, and everything inside it — the switch and the label — sits in a `position: absolute`
  box. It paints where it would have been, so it looks right on its own and overlaps whatever
  follows it in a column. Give it a wrapper with an explicit height, at least the switch's
  16px, or more if a label pushes the line taller.
- **`id`, `className` and `style` are applied twice**, to the outer element and again to the
  inner `<label>`. An `id` therefore appears twice in the document, which is invalid, and a
  `style` with a margin or a padding is applied at both levels.
- **`isLoading` does not disable anything.** It only animates the knob; the input stays live
  and a click during it still calls `onChange`.
- The switch is a fixed 28×16 SVG. The gap between it and the label is `--toggle-button-spacing`
  (8px), and the two sit in a two-column grid, so a long label neither wraps nor pushes the
  switch.
- In RTL the SVG is mirrored with `transform: scaleX(-1)`, which is applied by the `.rtl` class
  the theme provider sets, not by a prop. The off knob then sits on the right, and the label
  comes before the switch.
- The animation comes from `framer-motion`, a runtime dependency of this package rather than a
  peer, so it arrives with the kit whether or not anything else uses it. `noAnimation` moves the
  knob to its new end instantly instead of sliding it; the loading pulse keeps its own duration
  and still animates. It does not remove the library.

## CSS variables

Set these on an ancestor. Everything else the stylesheet defines is private to it — including
the `--toggle-button-fill-*` names an older version of this README listed, which the stylesheet
assigns to itself and does not read from the outside.

<APITable>

| Variable                          | Default                      | Effect                                              |
| --------------------------------- | ---------------------------- | --------------------------------------------------- |
| `--toggle-button-checked-color`   | `--color-scheme-main-accent` | Track colour when the switch is on, disabled or not |
| `--toggle-button-off-color`       | `#d0d5da`                    | Track colour when it is off                         |
| `--toggle-button-off-hover-color` | `#a3a9ae`                    | Track colour when off and hovered                   |
| `--toggle-button-spacing`         | `8px`                        | Gap between the switch and the label                |

</APITable>

The two off colours apply in the light theme only: the dark theme sets its own track colours on
the control itself, so an ancestor's `--toggle-button-off-color` and
`--toggle-button-off-hover-color` are ignored there.

## Accessibility

- The control is a real `<input type="checkbox">`, visually hidden but focusable and in the tab
  order, inside a `<label>` — so a click anywhere on the label toggles it and a screen reader
  announces a checkbox with its state.
- **There is no way to give it an accessible name other than `label`.** The component accepts
  no `aria-*` props, and the one it sets itself, `aria-checked`, is on a plain `<div>` with no
  role, where it means nothing. A switch without `label` is announced as an unnamed checkbox.
- The hidden input carries no focus styling of its own and is the element that receives focus,
  so keyboard focus is effectively invisible. Tab reaches the input and Space toggles it. Supply a `:focus-within` outline on your wrapper
  if the form is meant to be usable from the keyboard.
- `isDisabled` disables the input and sets `pointer-events: none` on the control, so it is
  skipped by the tab order as well as by the mouse.

## Test ids

<APITable>

| Element               | `data-testid`                                  |
| --------------------- | ---------------------------------------------- |
| Outer element         | `toggle-button`, overridable with `dataTestId` |
| The `<label>` wrapper | `toggle-button-container`                      |
| The checkbox input    | `toggle-button-input`                          |
| The switch SVG        | `toggle-button-icon`                           |
| The label text        | `toggle-button-label`                          |

</APITable>

## Related

- [`Checkbox`](./checkbox.md) — for a choice submitted with a form, or a label that
  has to wrap.
- [`RadioButtonGroup`](./radio-button-group.md) — for one choice out of several.
- [`FieldContainer`](./field-container.md) — to give the setting a label, a help
  tooltip and an error message.
