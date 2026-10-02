---
description: "One option of a single-choice set, drawn as a labelled circle."
custom_edit_url: "https://github.com/ONLYOFFICE/docspace-ui-kit-react/blob/446f115916d79a87d07b9e3dddb1e39a263784ee/components/radio-button/README.md"
---

import ThemedImage from '@theme/ThemedImage';

import APITable from '@site/src/components/APITable/APITable';

# RadioButton

One option of a single-choice set, drawn as a labelled circle. It is a `<label>` wrapping a
visually hidden `<input type="radio">` and the kit's own circle icon.

<ThemedImage alt="RadioButton" width={162} sources={{ light: require('./radio-button--primary-light.png').default, dark: require('./radio-button--primary-dark.png').default }} />

## Use this when / not when

- Use for a single option you are placing by hand, usually alongside others that share a `name`.
- Prefer [`RadioButtonGroup`](./radio-button-group.md) for a set: it owns the selected
  value, wires every button to one handler and keeps them apart. Reach for this component only
  when the options are not a plain list.
- Not for an on/off setting — [`Checkbox`](./checkbox.md) or
  [`ToggleButton`](./toggle-button.md) is that.
- Not for more than a handful of options; a [`ComboBox`](./combobox.md) is kinder past
  five or six.

## Import

```ts
import { RadioButton } from "@onlyoffice/apps-ui-kit/components/radio-button";
```

Also exported from the root barrel `@onlyoffice/apps-ui-kit`.

`RadioButtonProps` is not exported — type a wrapper's props yourself.

Needs `ThemeProvider` from `@onlyoffice/apps-ui-kit/providers/theme` for the circle and text
colours, which differ between the light and the dark theme.


## Stories

### Default

A single labelled button, the starting point for any single-choice option; click it to fill in the circle, and change any other prop live in the Controls panel below.

<ThemedImage alt="Default" width={162} sources={{ light: require('./radio-button--default-light.png').default, dark: require('./radio-button--default-dark.png').default }} />

### Checked States

The two looks a button can take side by side, so the filled-in choice is easy to tell from the rest: an empty circle and a circle with a dot (`isChecked`).

<ThemedImage alt="Checked States" width={344} sources={{ light: require('./radio-button--checked-states-light.png').default, dark: require('./radio-button--checked-states-dark.png').default }} />

### Disabled States

A disabled button, empty or filled in, shows an option the user can see but not change: the circle and the label turn grey and clicks are ignored (`isDisabled`).

<ThemedImage alt="Disabled States" width={396} sources={{ light: require('./radio-button--disabled-states-light.png').default, dark: require('./radio-button--disabled-states-dark.png').default }} />

### Custom Styling

Larger or smaller label text for a button placed in a heading or a dense list: **Custom styled** at 16px semibold, **Small text** at 11px light (`fontSize`, `fontWeight`).

<ThemedImage alt="Custom Styling" width={341} sources={{ light: require('./radio-button--custom-styling-light.png').default, dark: require('./radio-button--custom-styling-dark.png').default }} />

### With Spacing

A set of buttons needs room between them, because without a gap they touch:

- **Vertical** — a column with 12px below every button but the last (`spacing`, the default `orientation`)
- **Horizontal** — a row with 24px before every button but the first (`spacing`, `orientation="horizontal"`)

The container still lays the buttons out; `orientation` only decides which side the gap goes on. Pick an option in each set with a click or the arrow keys.

<ThemedImage alt="With Spacing" width={453} sources={{ light: require('./radio-button--with-spacing-light.png').default, dark: require('./radio-button--with-spacing-dark.png').default }} />

### Css Customization

The variables are listed under CSS variables on this page. The example is one checked button, so it shows every variable at once: the violet dot and outline, the light violet fill, the dark violet text and the wider gap. Hover it to see the darker outline.

<ThemedImage alt="Css Customization" width={138} sources={{ light: require('./radio-button--css-customization-light.png').default, dark: require('./radio-button--css-customization-dark.png').default }} />

## Minimal example

A set is several buttons sharing one `name`, each told whether it is the chosen one.

```tsx
import { useState } from "react";
import { RadioButton } from "@onlyoffice/apps-ui-kit/components/radio-button";

const ROLES = ["Viewer", "Editor", "Room admin"];

export function RolePicker() {
  const [role, setRole] = useState("Viewer");

  return (
    <div>
      {ROLES.map((option) => (
        <RadioButton
          key={option}
          name="role"
          value={option}
          label={option}
          isChecked={role === option}
          spacing="12px"
          onClick={() => setRole(option)}
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
| `autoFocus`? | `boolean` | Whether the input takes focus on mount. |
| `className`? | `string` | Applied to the label. |
| `classNameInput`? | `string` | Applied to the visually hidden `<input>`. |
| `fontSize`? | `string` | Font size of the text beside the button. |
| `fontWeight`? | `number \| string` | Font weight of that text. |
| `id`? | `string` | Applied to the label, not to the input. |
| `isChecked`? | `boolean` | Whether the button is filled in. It seeds the component's own state and is re-applied whenever it changes, so it works as a controlled value. |
| `isDisabled`? | `boolean` | Whether the input is disabled and the label greyed out. |
| `label`? | `ReactNode` | What is written beside the button. `value` is used when this is left out. |
| `name`? | `string` | `name` of the input. Buttons sharing one behave as a single choice. |
| `onChange`? | `ChangeEventHandler<HTMLInputElement, HTMLInputElement>` | Called on every change of the input. Giving it takes the component's own state handling out of the loop, so `isChecked` becomes the only thing that moves the dot — and `onClick` stops firing. |
| `onClick`? | `(e: React.ChangeEvent<HTMLInputElement> \| React.MouseEvent<HTMLInputElement>) => void` | Called when the button is clicked — but only while `onChange` is not given. Passing `onChange` replaces the internal handler and this never fires. |
| `orientation`? | `RadioButtonOrientation` | Which side the gap is put on. It only moves `spacing`; it does not lay anything out on its own. Default: `"vertical"`. |
| `spacing`? | `string` | Gap to the neighbouring button, as a CSS length: `margin-inline-start` when horizontal, `margin-block-end` when vertical. There is no gap at all without it — the buttons touch. |
| `style`? | `CSSProperties` | Applied to the label. |
| `testId`? | `string` | `data-testid` of the label. Default: `"radio-button"`. |
| `value`? | `number \| readonly string[] \| string` | `value` of the input, and the label when `label` is left out. It is what a group's `onClick` reads back off the event. |

</APITable>

## Recipes

### Disabled / read-only

`isDisabled` disables the input and greys both the circle and the label. There is no read-only state: a radio the
user may see but not change has to be disabled, or rendered as text.

```tsx
import { RadioButton } from "@onlyoffice/apps-ui-kit/components/radio-button";

export function LockedChoice({ chosen }: { chosen: string }) {
  return (
    <RadioButton
      name="plan"
      value={chosen}
      label={`${chosen} (set by your administrator)`}
      isChecked
      isDisabled
    />
  );
}
```

### Fully controlled, with `onChange`

`onChange` replaces the component's internal toggle, which is what you want when the value
lives in your state — but it also switches `onClick` off, so move the handler across.

```tsx
import { useState } from "react";
import { RadioButton } from "@onlyoffice/apps-ui-kit/components/radio-button";

export function ControlledChoice() {
  const [plan, setPlan] = useState("monthly");

  return (
    <div>
      {["monthly", "yearly"].map((option) => (
        <RadioButton
          key={option}
          name="plan"
          value={option}
          label={option}
          isChecked={plan === option}
          spacing="8px"
          onChange={(event) => setPlan(event.target.value)}
        />
      ))}
    </div>
  );
}
```

## Behaviour the types don't state

- **`onChange` and `onClick` are alternatives, not companions.** The component installs its own
  change handler — which flips an internal `isChecked` and then calls `onClick` — only while
  `onChange` is absent. Pass `onChange` and `onClick` is never called at all.
- **It keeps its own checked state.** `isChecked` seeds it and re-applies on every change of the
  prop, so a click moves the dot even if your state never changes. With `onChange` the internal
  toggle is gone and only the prop moves it.
- **Without `spacing` the buttons touch.** The gap is a custom property set from the prop, and
  the rule that uses it is only switched on when the prop is truthy. There is no default gap,
  whatever older documentation said.
- **`spacing` skips an edge.** Horizontally it is not applied to the first button, vertically not
  to the last, so the row or column is not padded at its ends.
- **`orientation` lays nothing out.** It only decides which side `spacing` is applied to; the
  buttons follow whatever your container does. Its default here is `vertical`, while
  [`RadioButtonGroup`](./radio-button-group.md) defaults to `horizontal`.
- **`id` lands on the label, not on the input**, so it cannot be the target of an external
  `<label for>` — the input is already nested inside this one.
- **The input is hidden but focusable** (`opacity: 0.0001`, `z-index: -1`), and nothing draws a
  focus ring. A keyboard user moving through the set gets no visible cue.
- `label` falls back to `value`, so a button with neither shows nothing beside the circle.

## CSS variables

<APITable>

| Variable                            | Default    | Effect                                |
| ----------------------------------- | ---------- | ------------------------------------- |
| `--radio-button-gap`                | `8px`      | Space between the circle and the text |
| `--radio-button-background`         | theme bg   | Fill behind the circle                |
| `--radio-button-label-color`        | theme text | Colour of the text                    |
| `--radio-button-dot-color`          | theme text | The filled dot when checked           |
| `--radio-button-circle-color`       | theme grey | The circle's outline                  |
| `--radio-button-circle-hover-color` | theme grey | That outline on hover                 |

</APITable>

A disabled button ignores all of them except `--radio-button-gap`: it draws its own grey fill,
outline, dot and text, and its outline does not change on hover.

`--radio-button-spacing` is written by the `spacing` prop; set the prop rather than the variable.

## Accessibility

- The markup is right — a real `<input type="radio">` inside its `<label>` — so a screen reader
  announces a radio button with its checked state, named by the text beside the circle, and the
  set is reachable with Tab, traversable with the arrow keys and selected with Space as long as
  the buttons share a `name`.
- **There is no focus ring.** The input is hidden with opacity, and no `:focus-visible` style
  replaces the browser's own outline, so keyboard users cannot see where they are. Add one in
  your application until the kit does.
- Nothing groups the set: add a `<fieldset>` and `<legend>`, or a container with `role="radiogroup"`
  and a label, or the options are announced with no question attached.
- `isDisabled` disables the input properly, so it drops out of the tab order.

## Test ids

<APITable>

| Element   | `data-testid`               |
| --------- | --------------------------- |
| The label | `radio-button`, or `testId` |

</APITable>

## Related

- [`RadioButtonGroup`](./radio-button-group.md) — the set, with the selection handled.
- [`Checkbox`](./checkbox.md) — for choices that are not exclusive.
- [`ToggleButton`](./toggle-button.md) — for a single on/off setting.
