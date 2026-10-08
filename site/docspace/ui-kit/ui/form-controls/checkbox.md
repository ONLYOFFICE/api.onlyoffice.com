---
description: "Checkbox with a label, an indeterminate state and an optional help button."
custom_edit_url: "https://github.com/ONLYOFFICE/docspace-ui-kit-react/blob/9954315f61fd4830b7ea0582c3d58bee0e85d0aa/components/checkbox/README.md"
---

import ThemedImage from '@theme/ThemedImage';

import APITable from '@site/src/components/APITable/APITable';

# Checkbox

Checkbox with a label, an indeterminate state and an optional help button. It is the control
for a choice the user confirms later, by submitting the form around it.

<ThemedImage alt="Checkbox" width={1011} sources={{ light: require('./checkbox--primary-light.png').default, dark: require('./checkbox--primary-dark.png').default }} />

## Use this when / not when

- Use for one or more independent choices in a form: a list of permissions, a "remember me",
  the select-all of a list.
- Not for a setting that takes effect the moment it is clicked — that reads as a switch, and
  is [`ToggleButton`](./toggle-button.md).
- Not for one choice out of several: [`RadioButtonGroup`](./radio-button-group.md).
- Not to give the choice a field label and an error message — wrap it in
  [`FieldContainer`](./field-container.md), which this component's `hasError` expects.

## Import

```ts
import { Checkbox } from "@onlyoffice/apps-ui-kit/components/checkbox";
```

Also exported from the root barrel `@onlyoffice/apps-ui-kit`.

Needs `ThemeProvider` from `@onlyoffice/apps-ui-kit/providers/theme` above it in the tree.
Without it the box renders in the light palette and ignores the dark theme.

## Stories

### Default

A single checkbox with a label, the starting point for any form choice; click it to tick it, and change any other prop live in the Controls panel below.

<ThemedImage alt="Default" width={1011} sources={{ light: require('./checkbox--default-light.png').default, dark: require('./checkbox--default-dark.png').default }} />

### Checked States

The two states a user switches between: **Checked** starts ticked (`isChecked`) and **Unchecked** starts empty; clicking either flips it.

<ThemedImage alt="Checked States" width={504} sources={{ light: require('./checkbox--checked-states-light.png').default, dark: require('./checkbox--checked-states-dark.png').default }} />

### Indeterminate States

For a select-all whose children are only partly selected: **Indeterminate** shows a filled square instead of a tick (`isIndeterminate`), and **Disabled Indeterminate** is the same square greyed out (`isDisabled`).

<ThemedImage alt="Indeterminate States" width={504} sources={{ light: require('./checkbox--indeterminate-states-light.png').default, dark: require('./checkbox--indeterminate-states-dark.png').default }} />

### Disabled States

For a choice the user cannot change right now: each state keeps its mark but the box and the label turn grey and clicks are ignored (`isDisabled`).

<ThemedImage alt="Disabled States" width={757} sources={{ light: require('./checkbox--disabled-states-light.png').default, dark: require('./checkbox--disabled-states-dark.png').default }} />

### Error States

For a required choice the form rejected: the box border and the label turn the error colour, checked or not (`hasError`); the message itself comes from a wrapping `FieldContainer`.

<ThemedImage alt="Error States" width={504} sources={{ light: require('./checkbox--error-states-light.png').default, dark: require('./checkbox--error-states-dark.png').default }} />

### With Truncation

For a label longer than the space it gets: in a 200px container the text stays on one line and ends with an ellipsis (`truncate`) instead of wrapping.

<ThemedImage alt="With Truncation" width={537} sources={{ light: require('./checkbox--with-truncation-light.png').default, dark: require('./checkbox--with-truncation-dark.png').default }} />

### With Title

For a short explanation the label has no room for: rest the pointer on the checkbox to open the tooltip (`title`). The tooltip is the kit's shared one, so the app must mount `RootTooltip` once, as this story does.

<ThemedImage alt="With Title" width={1011} sources={{ light: require('./checkbox--with-title-light.png').default, dark: require('./checkbox--with-title-dark.png').default }} />

### With Help Button

For a choice that needs more explanation than its label: an info icon follows the label (`helpButton`); click it to read the hint, and the checkbox stays as it was. A `HelpButton` with a text hint uses the shared tooltip, so `RootTooltip` is mounted here too.

<ThemedImage alt="With Help Button" width={1011} sources={{ light: require('./checkbox--with-help-button-light.png').default, dark: require('./checkbox--with-help-button-dark.png').default }} />

### Css Customization

The variables are listed under CSS variables on this page. The example is one checked box on a wrapper that sets every overridable one, so it shows them all at once: the wider gap, the taller row, the light fill, the blue border and the blue tick.

<ThemedImage alt="Css Customization" width={1011} sources={{ light: require('./checkbox--css-customization-light.png').default, dark: require('./checkbox--css-customization-dark.png').default }} />

## Minimal example

```tsx
import { useState } from "react";
import { Checkbox } from "@onlyoffice/apps-ui-kit/components/checkbox";

export function TermsCheckbox() {
  const [accepted, setAccepted] = useState(false);

  return (
    <Checkbox
      label="I accept the terms"
      isChecked={accepted}
      tabIndex={0}
      onChange={(e) => setAccepted(e.target.checked)}
    />
  );
}
```

## Props


<APITable>

| Property | Type | Description |
| --- | --- | --- |
| `className`? | `string` | Applied to the `<label>` that wraps the whole control. |
| `dataTestId`? | `string` | Value of `data-testid` on the `<label>`. Default: `"checkbox"`. |
| `hasError`? | `boolean` | Draws the box and the label in the error colour. It renders no message — pair it with `FieldContainer` for that. Default: `false`. |
| `helpButton`? | `React.ReactNode` | Node rendered after the label, usually a `HelpButton`. Clicking it does not toggle the checkbox. |
| `id`? | `string` | Applied to the `<label>` that wraps the whole control. |
| `isChecked`? | `boolean` | The state the checkbox starts in, and the one it is reset to whenever this prop changes. It is **not** a controlled value: a click flips the component's own state whether or not the parent agrees. Default: `false`. |
| `isDisabled`? | `boolean` | Disables the input, dims the box and the label, and stops the control responding to a click. |
| `isIndeterminate`? | `boolean` | Draws a dash instead of a tick and sets the input's DOM `indeterminate` property, for a parent whose children are partly selected. Default: `false`. |
| `label`? | `string` | Text beside the box. It sits in the flow beside the icon, so a long one wraps unless `truncate` is set. |
| `name`? | `string` | Name of the underlying checkbox input. |
| `onChange`? | `React.ChangeEventHandler<HTMLInputElement, Element>` | Called with the input's change event; the new state is `event.target.checked`. The event does not bubble further — the component stops its propagation. |
| `style`? | `React.CSSProperties` | Applied to the `<label>` that wraps the whole control. |
| `tabIndex`? | `number` | Applied to the checkbox's **icon**, which is the focusable element — the input beneath it is always `-1`. Pass `-1` for a checkbox the keyboard is meant to skip. Default: `0`. |
| `value`? | `number \| readonly string[] \| string` | Value of the underlying checkbox input, for a form read by name. |

</APITable>

#### Inherited from `TextProps`

Declared by [`components/text`](../data-display/text.md) and accepted here too.

<APITable>

| Property | Type | Description |
| --- | --- | --- |
| `title`? | `string` | Tooltip text. On a component the kit wraps in its tooltip HOC it is consumed before the element is built and opens the shared tooltip instead, which needs `RootTooltip` mounted; elsewhere it is the native `title` attribute. |
| `truncate`? | `boolean` | Holds the text on one line and ends it with an ellipsis. It needs a parent of bounded width; on its own the element grows instead. |

</APITable>

## Recipes

### Disabled

```tsx
import { Checkbox } from "@onlyoffice/apps-ui-kit/components/checkbox";

export function ManagedSetting({ enabled }: { enabled: boolean }) {
  return (
    <Checkbox
      label="Managed by your administrator"
      isChecked={enabled}
      isDisabled
      onChange={() => {}}
    />
  );
}
```

### Select all, with an indeterminate state

```tsx
import { useState } from "react";
import { Checkbox } from "@onlyoffice/apps-ui-kit/components/checkbox";

const ROOMS = ["Design", "Development", "Marketing"];

export function RoomPicker() {
  const [selected, setSelected] = useState<string[]>([]);

  const toggle = (room: string, on: boolean) =>
    setSelected((current) =>
      on ? [...current, room] : current.filter((item) => item !== room),
    );

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      <Checkbox
        label="All rooms"
        tabIndex={0}
        isChecked={selected.length === ROOMS.length}
        isIndeterminate={selected.length > 0 && selected.length < ROOMS.length}
        onChange={(e) => setSelected(e.target.checked ? [...ROOMS] : [])}
      />
      {ROOMS.map((room) => (
        <Checkbox
          key={room}
          label={room}
          tabIndex={0}
          isChecked={selected.includes(room)}
          onChange={(e) => toggle(room, e.target.checked)}
        />
      ))}
    </div>
  );
}
```

## Behaviour the types don't state

- **It is not a controlled component.** It keeps its own `checked` state, seeded from
  `isChecked` and re-seeded whenever that prop changes. A click flips the box immediately, and
  if your handler rejects the change the box stays flipped until `isChecked` moves to a new
  value — passing the same value back does not reset it, because the component only reacts to a
  change.
- **The focusable element is the icon, not the input.** The `<input>` beneath is hard-coded to
  `tabIndex={-1}`, and `tabIndex` goes on the SVG instead. It defaults to `0`, so the control is
  reachable without anything being passed; it used to default to `-1`, which took every checkbox
  out of the tab order.
- **The change event does not bubble.** The component calls `stopPropagation()`, so a form
  listening for `change` at its root never sees it; read the state through `onChange`.
- The label is in the flow beside the box and wraps by default. `truncate` clips it to one
  line with an ellipsis instead.
- `helpButton` renders after the label, and a click on it is swallowed — the checkbox does not
  toggle.
- `title` is read by the `<label>` that wraps the whole control, so the shared tooltip opens
  when the pointer rests anywhere on the box or the label — and only once `RootTooltip` is
  mounted.
- Anything else you pass is spread onto the input element, not onto the label the other props
  reach.

## CSS variables

<APITable>

| Variable                  | Default     | Effect                                                                                                               |
| ------------------------- | ----------- | -------------------------------------------------------------------------------------------------------------------- |
| `--checkbox-gap`          | `12px`      | Space between the box and the label                                                                                  |
| `--checkbox-lh`           | `16px`      | Line height of the control; the label text keeps its own 16px line, so a larger value only makes the row taller      |
| `--checkbox-fill-color`   | theme-based | Fill of the box while it is checked; an indeterminate box uses it too, for its outer box and its inner square's edge |
| `--checkbox-border-color` | theme-based | Border of the box; hover, focus, error and disabled draw their own border colour over it                             |
| `--checkbox-arrow-color`  | theme-based | Colour of the tick in a checked box                                                                                  |

</APITable>

The other colour variables (`--checkbox-fill-color-default`, `--checkbox-error-color` and the
rest) are **not** consumer settings: the stylesheet assigns them on the component's own
element, so a value set on an ancestor is overridden. Theme them through the theme provider
instead. A disabled box ignores all three colour settings above and draws its own disabled
colours.

## Accessibility

- The control is a real `<input type="checkbox">` wrapped in a `<label>`, so a click on the
  label toggles it and a screen reader announces a checkbox with its state and its label.
- The input is hidden from the tab order (`tabIndex={-1}`, always). Keyboard focus lands on the
  icon instead (`tabIndex`, `0` by default), and the focused box draws its border in the focus
  colour. Space and Enter on the focused icon do **not** toggle it — only a click does.
- `isDisabled` sets the native `disabled` on the input, which is announced as unavailable.
- `isIndeterminate` sets the input's DOM `indeterminate` property, so the mixed state is
  announced, not merely drawn.
- Without `label` the control has no accessible name and no prop supplies one.

## Test ids

<APITable>

| Element               | `data-testid`                             |
| --------------------- | ----------------------------------------- |
| The `<label>` wrapper | `checkbox`, overridable with `dataTestId` |
| The help button slot  | `checkbox-help-button`                    |

</APITable>

## Related

- [`ToggleButton`](./toggle-button.md) — for a setting that applies immediately.
- [`RadioButtonGroup`](./radio-button-group.md) — for one choice out of several.
- [`FieldContainer`](./field-container.md) — for the field label and the error message
  this component's `hasError` only colours.
