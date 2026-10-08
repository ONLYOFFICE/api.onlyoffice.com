---
description: "A set of radio buttons built from an array, with the selected value handled for you."
custom_edit_url: "https://github.com/ONLYOFFICE/docspace-ui-kit-react/blob/9954315f61fd4830b7ea0582c3d58bee0e85d0aa/components/radio-button-group/README.md"
---

import ThemedImage from '@theme/ThemedImage';

import APITable from '@site/src/components/APITable/APITable';

# RadioButtonGroup

A set of radio buttons built from an array, with the selected value handled for you. It renders
one [`RadioButton`](./radio-button.md) per option and keeps them in step.

<ThemedImage alt="RadioButtonGroup" width={274} sources={{ light: require('./radio-button-group--primary-light.png').default, dark: require('./radio-button-group--primary-dark.png').default }} />

## Use this when / not when

- Use for a short list of mutually exclusive choices — a role, a plan, a sort order.
- Not for a single option placed by hand; [`RadioButton`](./radio-button.md) is that.
- Not past five or six options — a [`ComboBox`](./combobox.md) costs less room and is
  easier to scan.
- Not for choices that are not exclusive. [`Checkbox`](./checkbox.md) is that.

## Import

```ts
import { RadioButtonGroup } from "@onlyoffice/apps-ui-kit/components/radio-button-group";
```

Also exported from the root barrel `@onlyoffice/apps-ui-kit`.

`RadioButtonGroupProps` is not exported — type a wrapper's props yourself.

Needs `ThemeProvider` from `@onlyoffice/apps-ui-kit/providers/theme` for the buttons' colours.

## Stories

### Default

The group as most forms use it: a row of options with one chosen. Click another option to move the choice and watch the Actions panel for the value `onClick` receives; change any other prop live in the Controls panel below.

<ThemedImage alt="Default" width={274} sources={{ light: require('./radio-button-group--default-light.png').default, dark: require('./radio-button-group--default-dark.png').default }} />

### Vertical Layout

The options stacked in a column only as wide as its longest label (`orientation`). Suits longer lists and labels too long to sit side by side; without `spacing` the buttons sit directly under one another.

<ThemedImage alt="Vertical Layout" width={92} sources={{ light: require('./radio-button-group--vertical-layout-light.png').default, dark: require('./radio-button-group--vertical-layout-dark.png').default }} />

### Disabled States

Shows the two ways to take options out of play:

- **Left** — the whole group greyed out and unclickable at once (`isDisabled`), for a setting that does not apply right now
- **Right** — only "Disabled Option" is greyed out (`disabled` on the option), while the other three stay selectable

<ThemedImage alt="Disabled States" width={673} sources={{ light: require('./radio-button-group--disabled-states-light.png').default, dark: require('./radio-button-group--disabled-states-dark.png').default }} />

### With Text Label

"Please select an option:" is a caption placed inside the group, not a button (an option with `type: "text"`). Use it for a heading or an instruction above the options, or between two runs of them.

<ThemedImage alt="With Text Label" width={155} sources={{ light: require('./radio-button-group--with-text-label-light.png').default, dark: require('./radio-button-group--with-text-label-dark.png').default }} />

### Custom Styling

Larger, bolder labels (`fontSize`, `fontWeight`), 20px between the buttons (`spacing`) and a group 300px wide (`width`), to match the group to the text and layout around it.

<ThemedImage alt="Custom Styling" width={316} sources={{ light: require('./radio-button-group--custom-styling-light.png').default, dark: require('./radio-button-group--custom-styling-dark.png').default }} />

### Css Customization

Both caption spacings set on a wrapper around a vertical group that opens with the caption "Choose an option:" -- the variables are listed under CSS variables on this page.

<ThemedImage alt="Css Customization" width={125} sources={{ light: require('./radio-button-group--css-customization-light.png').default, dark: require('./radio-button-group--css-customization-dark.png').default }} />

## Minimal example

`onClick` receives the input's change event, so the new value is `event.target.value`.

```tsx
import { useState } from "react";
import { RadioButtonGroup } from "@onlyoffice/apps-ui-kit/components/radio-button-group";

export function SortOrder() {
  const [order, setOrder] = useState("name");

  return (
    <RadioButtonGroup
      name="order"
      selected={order}
      spacing="16px"
      onClick={(event) => setOrder(event.target.value)}
      options={[
        { value: "name", label: "Name" },
        { value: "date", label: "Last modified" },
        { value: "size", label: "Size" },
      ]}
    />
  );
}
```

## Props


<APITable name="Props">

| Property | Type | Description |
| --- | --- | --- |
| `onClick` | `(e: React.ChangeEvent<HTMLInputElement>) => void` | Called when the choice changes. Despite the name it receives the input's change event, so the new value is `event.target.value` — always a string, even where the option's `value` was a number. |
| `options` | `TRadioButtonOption[]` | The options, in order. An entry with `type: "text"` is a caption, not a button. |
| `className`? | `string` | Applied to the group. |
| `dataTestId`? | `string` | `data-testid` of the group. Default: `"radio-button-group"`. |
| `id`? | `string` | Applied to the group. |
| `orientation`? | `RadioButtonOrientation` | Which way the options run. Horizontal makes the group a flex row; vertical makes it `inline-block`, so it shrinks to its content. Note the default differs from a lone `RadioButton`, which is vertical. Default: `"horizontal"`. |
| `selected`? | `number \| string` | Value of the chosen option, compared as a string. It seeds the group's own state and is re-applied whenever it changes. |
| `style`? | `CSSProperties` | Applied to the group. |
| `width`? | `string` | Width of the group, as a CSS length. |

</APITable>

#### Inherited from `RadioButtonProps`

Declared by [`components/radio-button`](./radio-button.md) and accepted here too.

<APITable name="Inherited-from-RadioButtonProps">

| Property | Type | Description |
| --- | --- | --- |
| `fontSize`? | `string` | Font size of the text beside the button. |
| `fontWeight`? | `number \| string` | Font weight of that text. |
| `isDisabled`? | `boolean` | Whether the input is disabled and the label greyed out. |
| `name`? | `string` | `name` of the input. Buttons sharing one behave as a single choice. |
| `spacing`? | `string` | Gap to the neighbouring button, as a CSS length: `margin-inline-start` when horizontal, `margin-block-end` when vertical. There is no gap at all without it — the buttons touch. |

</APITable>

### `TRadioButtonOption`


<APITable name="TRadioButtonOption">

| Property | Type | Description |
| --- | --- | --- |
| `value` | `number \| string` | Value of this option, and what `onClick` reads off the event. It is also the React key, so two options may not share one. |
| `autoFocus`? | `boolean` | Whether this option's input takes focus on mount. |
| `dataTestId`? | `string` | `data-testid` of this option; it doubles as the button's test id. |
| `disabled`? | `boolean` | Whether this one option is disabled while the rest stay live. |
| `id`? | `string` | Applied to this option's label element. |
| `label`? | `ReactNode` | What is written beside this option. `value` is used when it is left out. |
| `type`? | `"radio" \| "text"` | `"text"` renders a caption inside the group instead of a button — a sub-heading between two runs of options. Anything else renders a button. |

</APITable>

## Recipes

### Disabled / read-only

`isDisabled` on the group disables every option; `disabled` on an option disables that one.
Both end up on the real `<input>`, so a disabled option leaves the tab order.

```tsx
import { useState } from "react";
import { RadioButtonGroup } from "@onlyoffice/apps-ui-kit/components/radio-button-group";

export function PlanPicker({ canUpgrade }: { canUpgrade: boolean }) {
  const [plan, setPlan] = useState("free");

  return (
    <RadioButtonGroup
      name="plan"
      selected={plan}
      spacing="16px"
      onClick={(event) => setPlan(event.target.value)}
      options={[
        { value: "free", label: "Free" },
        { value: "pro", label: "Pro", disabled: !canUpgrade },
      ]}
    />
  );
}
```

### Options in labelled runs

An option with `type: "text"` is not a button but a caption, so one array can carry several
labelled runs of choices.

```tsx
import { useState } from "react";
import { RadioButtonGroup } from "@onlyoffice/apps-ui-kit/components/radio-button-group";

export function AccessPicker() {
  const [access, setAccess] = useState("viewer");

  return (
    <RadioButtonGroup
      name="access"
      orientation="vertical"
      spacing="8px"
      selected={access}
      onClick={(event) => setAccess(event.target.value)}
      options={[
        { value: "people-heading", type: "text", label: "People" },
        { value: "viewer", label: "Viewer" },
        { value: "editor", label: "Editor" },
        { value: "links-heading", type: "text", label: "Links" },
        { value: "public", label: "Anyone with the link" },
      ]}
    />
  );
}
```

## Behaviour the types don't state

- **`onClick` is a change handler.** It is wired to the input's `onChange`, so it is given a
  `ChangeEvent` and the new value is `event.target.value` — a string, even for an option whose
  `value` was a number. It is also the one required callback.
- **The comparison is stringified.** `selected` is matched against each option with template
  strings, so `1` and `"1"` both select the option whose value is `1`.
- **The group keeps its own selection.** `selected` seeds it and re-applies on change, so the
  dot moves on click whether or not your state does.
- **Without `spacing` the options touch.** The gap comes from each button's own `spacing` prop,
  which the group passes straight through, and there is no default.
- **`orientation` defaults to `horizontal` here** and to `vertical` on a lone
  [`RadioButton`](./radio-button.md). Horizontal makes the group a flex row; vertical
  makes it `inline-block`, so a vertical group shrinks to its content rather than filling its
  parent.
- **`width` is applied twice** — as the `--radio-button-group-width` custom property and as an
  inline `width` — and `style` is spread after, so a `width` in `style` wins over the prop.
- **An option's `value` is its React key.** Two options sharing a value collide, and a caption
  row uses a fixed key of its own, so two `type: "text"` entries collide with each other.
- **Nothing groups the set semantically.** The wrapper is a plain `<div>`; add a `<fieldset>`
  with a `<legend>`, or `role="radiogroup"` with a label, yourself.
- An option's `dataTestId` falls back to its `id` for the button's test id, while the caption row
  uses `radio-button-group_text`.

## CSS variables

<APITable name="CSS-variables">

| Variable                              | Default | Effect                               |
| ------------------------------------- | ------- | ------------------------------------ |
| `--radio-button-group-subtext-top`    | `16px`  | Space above a `type: "text"` caption |
| `--radio-button-group-subtext-bottom` | `8px`   | Space below it                       |

</APITable>

`--radio-button-group-width` is written by the `width` prop. The buttons' own variables are
listed on [`RadioButton`](./radio-button.md).

## Accessibility

- The buttons share a `name`, so the browser treats them as one radio group: Tab reaches the
  set and the arrow keys move within it.
- **There is no focus ring**, because the inputs are hidden with opacity and nothing replaces
  the browser outline. See [`RadioButton`](./radio-button.md).
- The group has no accessible name. Wrap it in a `<fieldset>` with a `<legend>`, or give the
  container `role="radiogroup"` and `aria-labelledby`.
- A `type: "text"` caption is a plain paragraph, not a legend, so it does not name the options
  that follow it for a screen reader.

## Test ids

<APITable name="Test-ids">

| Element       | `data-testid`                                           |
| ------------- | ------------------------------------------------------- |
| The group     | `radio-button-group`, or `dataTestId`                   |
| A caption row | `radio-button-group_text`, or the option's `dataTestId` |
| An option     | the option's `dataTestId`, else its `id`                |

</APITable>

## Related

- [`RadioButton`](./radio-button.md) — one option, placed by hand.
- [`Checkbox`](./checkbox.md) — for choices that are not exclusive.
- [`ComboBox`](./combobox.md) — for a longer list of the same choices.
