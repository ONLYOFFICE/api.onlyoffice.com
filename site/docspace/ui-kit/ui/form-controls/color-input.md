---
description: "Hex field with a swatch that opens a colour picker."
custom_edit_url: "https://github.com/ONLYOFFICE/docspace-ui-kit-react/blob/446f115916d79a87d07b9e3dddb1e39a263784ee/components/color-input/README.md"
---

import ThemedImage from '@theme/ThemedImage';

import APITable from '@site/src/components/APITable/APITable';

# ColorInput

Hex field with a swatch that opens a colour picker. It is the form-field form of
[`ColorPicker`](./color-picker.md), with the drop-down already wired up.

<ThemedImage alt="ColorInput" width={189} sources={{ light: require('./color-input--primary-light.png').default, dark: require('./color-input--primary-dark.png').default }} />

## Use this when / not when

- Use as a form field where someone picks or types a colour — a room cover, a brand accent, a
  tag.
- Not when the colour must be confirmed before it counts. There is no apply step here; every
  keystroke and every drag reports a new value.
- Not for a fixed palette. Build that from [`DropDownItem`](../overlays/drop-down-item.md)s;
  this field offers the whole spectrum.
- Not when you need the picker on its own — [`ColorPicker`](./color-picker.md) is that.

## Import

```ts
import { ColorInput } from "@onlyoffice/apps-ui-kit/components/color-input";
```

Also exported from the root barrel `@onlyoffice/apps-ui-kit`.

`ColorInputProps` is not exported — type a wrapper's props yourself.

Needs `ThemeProvider` from `@onlyoffice/apps-ui-kit/providers/theme`, and `TranslationProvider`
from `@onlyoffice/apps-ui-kit/providers/translation` for the picker's "Custom" title.


## Stories

### Default

The field on its own, starting on the kit's blue. Type a hex code or click the swatch to pick one, and change any other prop live in the Controls panel below.

<ThemedImage alt="Default" width={189} sources={{ light: require('./color-input--default-light.png').default, dark: require('./color-input--default-dark.png').default }} />

### Sizes

Pick the size that matches the other fields in the same form: **base**, **middle** and **large** differ in width, and **large** also in text size and padding, while all three keep the same height (`size`).

<ThemedImage alt="Sizes" width={1019} sources={{ light: require('./color-input--sizes-light.png').default, dark: require('./color-input--sizes-dark.png').default }} />

### States

Show whether the entered color is accepted: the first field is in its normal state, the second has a red border (`hasError`), the third an orange one (`hasWarning`), and the fourth is greyed out and its swatch no longer opens the picker (`isDisabled`).

<ThemedImage alt="States" width={946} sources={{ light: require('./color-input--states-light.png').default, dark: require('./color-input--states-dark.png').default }} />

### Scaled Input

Use it where the field shares a column with full-width inputs: the field stretches across its container and the swatch stays at its end (`scale`).

<ThemedImage alt="Scaled Input" width={1014} sources={{ light: require('./color-input--scaled-input-light.png').default, dark: require('./color-input--scaled-input-dark.png').default }} />

### Css Customization

Every overridable variable but `--dropdown-bg` set on one field -- the variables are listed under CSS variables on this page. Hover and focus it to see the border colors, and click its swatch to open the popup.

<ThemedImage alt="Css Customization" width={194} sources={{ light: require('./color-input--css-customization-light.png').default, dark: require('./color-input--css-customization-dark.png').default }} />

## Minimal example

The field owns the colour; `handleChange` is how you hear about it.

```tsx
import { useState } from "react";
import { ColorInput } from "@onlyoffice/apps-ui-kit/components/color-input";
import { InputSize } from "@onlyoffice/apps-ui-kit/components/text-input";

export function CoverColour() {
  const [colour, setColour] = useState("#4781D1");

  return (
    <div>
      <ColorInput
        defaultColor={colour}
        size={InputSize.base}
        handleChange={setColour}
      />
      <p>Saved value: {colour}</p>
    </div>
  );
}
```

## Props


<APITable>

| Property | Type | Description |
| --- | --- | --- |
| `className`? | `string` | Applied to the outermost element. |
| `dataTestId`? | `string` | `data-testid` of the outermost element. Default: `"color-input"`. |
| `defaultColor`? | `string` | Colour the field starts on, as a hex string. It is read once, on mount — the component owns the value from then on, so this is a starting point and not a controlled value. The kit's blue is used when it is left out. |
| `handleChange`? | `(color: string) => void` | Called with the new hex colour each time the field holds a complete 3- or 6-digit code, and on every move inside the picker. There is no confirm step and no `onApply`. |
| `hasError`? | `boolean` | Whether the field is drawn in its error colours. |
| `hasWarning`? | `boolean` | Whether the field is drawn in its warning colours. |
| `id`? | `string` | Applied to the outermost element. |
| `isDisabled`? | `boolean` | Whether the field is disabled. The swatch stops opening the picker too. |
| `scale`? | `boolean` | Whether the field stretches to fill its container. |
| `size`? | `InputSize` | Width, font size and padding of the field; the height does not change. |

</APITable>

## Recipes

### Disabled / read-only

`isDisabled` disables the text field and stops the swatch opening the picker. There is no
read-only state.

```tsx
import { ColorInput } from "@onlyoffice/apps-ui-kit/components/color-input";
import { InputSize } from "@onlyoffice/apps-ui-kit/components/text-input";

export function LockedColour({ colour }: { colour: string }) {
  return <ColorInput defaultColor={colour} size={InputSize.base} isDisabled />;
}
```

### Error

`hasError` and `hasWarning` recolour the field. Neither prints a message.

```tsx
import { useState } from "react";
import { ColorInput } from "@onlyoffice/apps-ui-kit/components/color-input";
import { Text } from "@onlyoffice/apps-ui-kit/components/text";
import { InputSize } from "@onlyoffice/apps-ui-kit/components/text-input";

const TOO_LIGHT = /^#(?:[E-Fe-f][0-9A-Fa-f]){3}$/;

export function AccentColour() {
  const [colour, setColour] = useState("#4781D1");
  const problem = TOO_LIGHT.test(colour)
    ? "Too light to read against white"
    : "";

  return (
    <div>
      <ColorInput
        defaultColor="#4781D1"
        size={InputSize.base}
        hasError={Boolean(problem)}
        handleChange={setColour}
      />
      {problem ? <Text fontSize="12px">{problem}</Text> : null}
    </div>
  );
}
```

## Behaviour the types don't state

- **`defaultColor` is read once.** The component seeds its own state on mount and never looks at
  the prop again, so it cannot be driven from outside. Remount it with a `key` if the colour has
  to follow something else.
- **There is no apply step.** `handleChange` fires on every keystroke in the hex field and on
  every pointer move in the picker, so the value you store is whatever the user last touched.
  Debounce it before saving.
- **The picker opens from the swatch, not the field.** Clicking the text only puts the caret in
  it; the square at the end is the control.
- **The picker is positioned 48px below the field** with `manualY`, so a field of a different
  height leaves a gap or an overlap.
- **The drop-down has a backdrop**, which closes the picker on an outside click — and covers the
  page while it is open. The picker's own close button closes it too.
- **The field accepts hex only.** It is `react-colorful`'s own input; named colours and `rgb()`
  are rejected as you type, and the value always comes back prefixed with `#`. Any character
  that is not a hex digit is dropped as it is typed, and the field holds six digits at most.
- **A partial code is not reported.** `handleChange` waits until the field holds a complete 3- or
  6-digit code; leave the field with anything shorter and it puts back the last valid colour.
- The value is upper-cased for display but reported to `handleChange` exactly as typed.
- `hasError` and `hasWarning` are written as data attributes on the field, so they colour the
  border and nothing else.

## CSS variables

<APITable>

| Variable                      | Default   | Effect                                                                                 |
| ----------------------------- | --------- | -------------------------------------------------------------------------------------- |
| `--color-input-height`        | `32px`    | Height of the hex field                                                                |
| `--color-input-padding`       | `6px 8px` | Padding of the hex field; only while `size` is left out, since every size sets its own |
| `--color-input-swatch-size`   | `20px`    | Width and height of the swatch                                                         |
| `--color-input-swatch-radius` | `2px`     | Corner radius of the swatch                                                            |
| `--block-color`               | the value | Fill of the swatch; written by the component                                           |

</APITable>

The field's border, background and sizes come from the shared input styles, so they follow
[`TextInput`](./text-input.md): `--text-input-color`, `--text-input-border-color`,
`--text-input-border-hover`, `--text-input-border-focus` and `--text-input-radius` set on a
wrapper reach it. The popup is a [`DropDown`](../overlays/drop-down.md) and reads
`--dropdown-border-style`, `--dropdown-shadow` and `--dropdown-radius` (default `6px`);
`--dropdown-bg` shows only in the 8px strips above and below the picker, whose own panel stays
white (black in the dark theme).

## Accessibility

- **The swatch is a bare `<span>` with an `onClick`.** It is not focusable, has no role and no
  name, so the picker cannot be opened from the keyboard at all.
- Once open, the picker itself is pointer-only — see
  [`ColorPicker`](./color-picker.md). The hex field is the only keyboard path to a
  colour, and it is reachable.
- The field has no label. Pair it with [`Label`](./label.md) or
  [`FieldContainer`](./field-container.md); `id` lands on the wrapper, not the input, so
  `htmlFor` will not reach it.
- `hasError` changes a colour only; announce the problem yourself.

## Test ids

<APITable>

| Element     | `data-testid`                  |
| ----------- | ------------------------------ |
| The wrapper | `color-input`, or `dataTestId` |

</APITable>

The picker inside carries its own ids — see [`ColorPicker`](./color-picker.md).

## Related

- [`ColorPicker`](./color-picker.md) — the picker this opens.
- [`TextInput`](./text-input.md) — where the field's look comes from.
- [`DropDown`](../overlays/drop-down.md) — what the picker is shown in.
