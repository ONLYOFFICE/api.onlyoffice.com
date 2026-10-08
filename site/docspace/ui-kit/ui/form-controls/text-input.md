---
description: "Controlled single-line text field in three fixed widths, with optional masking, error and warning states."
custom_edit_url: "https://github.com/ONLYOFFICE/docspace-ui-kit-react/blob/9954315f61fd4830b7ea0582c3d58bee0e85d0aa/components/text-input/README.md"
---

import ThemedImage from '@theme/ThemedImage';

import APITable from '@site/src/components/APITable/APITable';

# TextInput

Controlled single-line text field in three fixed widths, with optional masking, error and
warning states. It is always controlled: `type` and `value` are required, and the value you
pass is the value it shows.

<ThemedImage alt="TextInput" width={189} sources={{ light: require('./text-input--primary-light.png').default, dark: require('./text-input--primary-dark.png').default }} />

## Use this when / not when

- Use for a plain text, email, telephone, number or password field inside a form.
- Not on its own when the field needs a label or a validation message — wrap it in
  [`FieldContainer`](./field-container.md).
- Not when the field needs an icon or a button inside the box — that is
  [`InputBlock`](./input-block.md), which wraps this component.
- Not for a search box: [`SearchInput`](./search-input.md) adds the clear button and
  the search affordances, and its `onChange` gives you the string rather than the event.

## Import

```ts
import {
  InputSize,
  InputType,
  TextInput,
} from "@onlyoffice/apps-ui-kit/components/text-input";
```

Also exported from the root barrel `@onlyoffice/apps-ui-kit`.

Needs `ThemeProvider` from `@onlyoffice/apps-ui-kit/providers/theme` above it in the tree;
its background, border and error colours all come from theme custom properties.

## Stories

### Default

An empty field with a placeholder, the shape most forms start from (`placeholder`); change any other prop live in the Controls panel below.

<ThemedImage alt="Default" width={189} sources={{ light: require('./text-input--default-light.png').default, dark: require('./text-input--default-dark.png').default }} />

### Sizes

Pick the width by the room the form gives the field: 173px for a short value, 300px for most text, 550px for a long one (`size`); the middle size is also semibold, the large one uses a 16px font.

<ThemedImage alt="Sizes" width={566} sources={{ light: require('./text-input--sizes-light.png').default, dark: require('./text-input--sizes-dark.png').default }} />

### Types

Match `type` to the value so the browser supplies the right keyboard and value rules: password hides the characters, number rejects letters, email and tel bring up their own touch keyboards.

<ThemedImage alt="Types" width={949} sources={{ light: require('./text-input--types-light.png').default, dark: require('./text-input--types-dark.png').default }} />

### States

Every state the field can be in, side by side: a red border on `hasError`, an orange one on `hasWarning`, a grey box that ignores input on `isDisabled`, a field that blocks typing without changing its look on `isReadOnly`, and the bare text of `withBorder={false}` for inline use.

<ThemedImage alt="States" width={949} sources={{ light: require('./text-input--states-light.png').default, dark: require('./text-input--states-dark.png').default }} />

### With Mask

Use a mask when the value has one fixed shape, such as a date or a phone number: the field inserts the separators as the user types and refuses characters that do not fit (`mask`). The date and phone fields show the whole pattern up front with underscores for the missing digits (`guide`); only the date field keeps the other digits in place when one is deleted (`keepCharPositions`). The third field passes a function instead of an array, so the pattern is chosen from the value as it is typed: a plain digit starts a four-digit extension, a leading `+` switches to the full number; without `guide` the mask grows with the value.

<ThemedImage alt="With Mask" width={696} sources={{ light: require('./text-input--with-mask-light.png').default, dark: require('./text-input--with-mask-dark.png').default }} />

### Scaled Inputs

Let the field fill its column instead of its size's fixed width, for form grids and side panels (`scale`); font size and padding still follow `size`.

<ThemedImage alt="Scaled Inputs" width={1014} sources={{ light: require('./text-input--scaled-inputs-light.png').default, dark: require('./text-input--scaled-inputs-dark.png').default }} />

### Bold Text

Emphasize a value with `isBold` (600) or pass any `fontWeight`; the middle size is already 600, so `isBold` changes nothing there.

<ThemedImage alt="Bold Text" width={696} sources={{ light: require('./text-input--bold-text-light.png').default, dark: require('./text-input--bold-text-dark.png').default }} />

### Auto Focused

Put the caret in the field the moment it appears, for a dialog or a panel whose first action is typing (`isAutoFocussed`); the field is focused when the story loads, so start typing without clicking.

<ThemedImage alt="Auto Focused" width={189} sources={{ light: require('./text-input--auto-focused-light.png').default, dark: require('./text-input--auto-focused-dark.png').default }} />

### Right To Left

The same fields under a right-to-left interface: the placeholder sits at the right edge and the caret of an empty field starts on the right; text typed in a right-to-left script runs right to left, Latin text still runs left to right (`dir="auto"`); the tel field keeps its placeholder left-to-right, so a phone number reads the same as in a left-to-right interface. The direction comes from the theme's `interfaceDirection` (the Direction toolbar); the wrapper also carries `dir="rtl"` for the rules that read the DOM direction.

<ThemedImage alt="Right To Left" width={189} sources={{ light: require('./text-input--right-to-left-light.png').default, dark: require('./text-input--right-to-left-dark.png').default }} />

### Css Customization

The first field sets the shared `--text-input-*` tokens on a wrapper -- the variables are listed under CSS variables on this page; hover and focus it to see the two border variables. The second carries `--text-input-placeholder-color` in its own `style`, the only place it works. The third is disabled: the theme takes over its text and border, and only the radius, the font size and `--text-input-disabled-bg` still apply.

<ThemedImage alt="Css Customization" width={189} sources={{ light: require('./text-input--css-customization-light.png').default, dark: require('./text-input--css-customization-dark.png').default }} />

## Minimal example

`type` and `value` are both required, and the field is keyboard-reachable without anything
being said about `tabIndex`.

```tsx
import { useState } from "react";
import {
  InputSize,
  InputType,
  TextInput,
} from "@onlyoffice/apps-ui-kit/components/text-input";

export function NameInput() {
  const [name, setName] = useState("");

  return (
    <TextInput
      scale
      tabIndex={0}
      type={InputType.text}
      size={InputSize.base}
      value={name}
      placeholder="Room name"
      onChange={(e) => setName(e.target.value)}
    />
  );
}
```

## Props


<APITable>

| Property | Type | Description |
| --- | --- | --- |
| `type` | `InputType` | Supported type of the input fields |
| `value` | `string` | Value of the input |
| `autoComplete`? | `string` | Used as HTML `autocomplete` property. Default: `"off"`. |
| `children`? | `Iterable<ReactI18NextChildren> \| ReactI18NextChildren` |  |
| `className`? | `string` | CSS class name |
| `dir`? | `string` | Text direction. Default: `"auto"`. |
| `fontWeight`? | `number \| string` | Sets the font weight |
| `forwardedRef`? | `Ref<HTMLInputElement>` | Forwarded ref. Applied to the plain input only — when `mask` is set the masked input is rendered instead and the ref is dropped. |
| `guide`? | `boolean` | When guide is true, Text Mask always shows both placeholder characters and non-placeholder mask characters |
| `hasError`? | `boolean` | Indicates the input field has an error |
| `hasWarning`? | `boolean` | Indicates the input field has a warning |
| `id`? | `string` | Used as HTML `id` property |
| `inputMode`? | `"decimal" \| "email" \| "none" \| "numeric" \| "search" \| "tel" \| "text" \| "url"` | Input mode for virtual keyboard |
| `isAutoFocussed`? | `boolean` | Focus the input field on initial render |
| `isBold`? | `boolean` | Sets font weight value to 600 |
| `isDisabled`? | `boolean` | Indicates that the field cannot be used |
| `isReadOnly`? | `boolean` | Indicates that the field is displaying read-only content |
| `keepCharPositions`? | `boolean` | Allows to add or delete characters without changing the positions of the existing characters |
| `mask`? | `((value: string) => Mask) \| Mask` | Input text mask |
| `maxLength`? | `number` | Maximum number of characters the field accepts; further typing is silently dropped. Default: `255`. |
| `name`? | `string` | Used as HTML `name` property |
| `onBlur`? | `(e: React.FocusEvent<HTMLInputElement>) => void` | Called when field is blurred |
| `onChange`? | `(e: React.ChangeEvent<HTMLInputElement>) => void` | Called with the new value. Required when input is not read only |
| `onClick`? | `(e: React.MouseEvent<HTMLInputElement>) => void` | Called when clicked |
| `onContextMenu`? | `(e: React.MouseEvent<HTMLInputElement>) => void` | Called when context menu is triggered |
| `onFocus`? | `(e: React.FocusEvent<HTMLInputElement>) => void` | Called when field is focused |
| `onKeyDown`? | `(e: React.KeyboardEvent<HTMLInputElement>) => void` | Called when a key is pressed |
| `placeholder`? | `string` | Placeholder text for the input. The default is a single space, not an empty string, so `:placeholder-shown` matches even when no placeholder was asked for. Default: `" "`. |
| `scale`? | `boolean` | Indicates the input field has scale |
| `size`? | `InputSize` | Supported size of the input fields. Default: `InputSize.base`. |
| `spellCheck`? | `boolean` | Used as HTML `spellcheck` property |
| `style`? | `CSSProperties` | Inline CSS styles |
| `tabIndex`? | `number` | Used as HTML `tabindex` property. Left out, the field takes its natural place in the tab order; pass `-1` only for a field the keyboard is meant to skip. |
| `testId`? | `string` | HTML data-testid attribute |
| `withBorder`? | `boolean` | Indicates that component contains border. Default: `true`. |

</APITable>

Plus 299 more props inherited from `React.AriaAttributes`, `React.DOMAttributes`, `React.HTMLAttributes` and `React.InputHTMLAttributes`, forwarded to the element.

### Enums

<APITable>

| Enum        | Members                                                |
| ----------- | ------------------------------------------------------ |
| `InputType` | `text`, `password`, `email`, `tel`, `search`, `number` |
| `InputSize` | `base`, `middle`, `large`                              |

</APITable>

## Recipes

### Disabled and read-only

Two different things: `isDisabled` greys the field and takes it out of the form,
`isReadOnly` keeps it legible and selectable but not editable.

```tsx
import {
  InputSize,
  InputType,
  TextInput,
} from "@onlyoffice/apps-ui-kit/components/text-input";

export function ReadOnlyField({ value }: { value: string }) {
  return (
    <TextInput
      scale
      tabIndex={0}
      isReadOnly
      type={InputType.text}
      size={InputSize.base}
      value={value}
      onChange={() => {}}
    />
  );
}
```

### Error state

`hasError` only paints the field. The message belongs to
[`FieldContainer`](./field-container.md).

```tsx
import { useState } from "react";
import {
  InputSize,
  InputType,
  TextInput,
} from "@onlyoffice/apps-ui-kit/components/text-input";

export function PortField() {
  const [port, setPort] = useState("");
  const hasError = port !== "" && Number.isNaN(Number(port));

  return (
    <TextInput
      scale
      tabIndex={0}
      type={InputType.number}
      size={InputSize.base}
      value={port}
      hasError={hasError}
      onChange={(e) => setPort(e.target.value)}
    />
  );
}
```

### Masked input

A mask switches the implementation to `react-text-mask`. `forwardedRef` stops working here.

```tsx
import { useState } from "react";
import {
  InputSize,
  InputType,
  TextInput,
} from "@onlyoffice/apps-ui-kit/components/text-input";

const phoneMask = [
  "+",
  /\d/,
  " ",
  "(",
  /\d/,
  /\d/,
  /\d/,
  ")",
  " ",
  /\d/,
  /\d/,
  /\d/,
  "-",
  /\d/,
  /\d/,
  /\d/,
  /\d/,
];

export function PhoneField() {
  const [phone, setPhone] = useState("");

  return (
    <TextInput
      tabIndex={0}
      type={InputType.tel}
      size={InputSize.base}
      value={phone}
      mask={phoneMask}
      onChange={(e) => setPhone(e.target.value)}
    />
  );
}
```

## Behaviour the types don't state

- **`tabIndex` is left unset, so the field sits in the natural tab order.** It used to default
  to `-1`, which took every field out of the tab order and made a form unfillable from the
  keyboard unless each one was given `tabIndex={0}` by hand. Those explicit zeroes are now
  redundant, and harmless; pass `-1` only where you mean the keyboard to skip a field.
- **`maxLength` defaults to 255.** Typing past it is dropped silently, which is a real limit
  for descriptions, keys and pasted tokens. Raise it where the field can legitimately be
  longer.
- **`placeholder` defaults to a single space**, not to nothing. `:placeholder-shown` matches
  on every field, so floating-label CSS built on that selector behaves as if a placeholder
  were always present.
- **The widths are fixed, not fluid**: `base` 173px, `middle` 300px, `large` 550px. `scale`
  is what makes the field fill its container; without it a field in a wide form stays 173px
  and looks broken. `size` itself never reaches the DOM — it is stripped before render and
  survives only as `data-size`.
- **The component is memoised with a deep comparison** (`React.memo` with `fast-deep-equal`,
  not the default shallow compare). A prop object that is rebuilt each render with the same
  contents will not re-render it; an object mutated in place will not either.
- **`isBold` beats `fontWeight`.** When both are set the weight is 600 and `fontWeight` is
  ignored.
- **The sizes differ in more than width.** `middle` renders its text at weight 600 by default,
  `large` in a 16px font with taller padding; `base` is 13px at weight 400.
- **`dir` defaults to `auto`**, so each value picks its own text direction and mixed-script
  text reads correctly under either interface direction.
- **`forwardedRef` is dropped when `mask` is set** — the ref is attached to the plain
  `<input>` branch only.
- **The browser's own clear button for `type="search"` is hidden** by the stylesheet, in
  both WebKit and Firefox.
- **`hasError` and `hasWarning` hold their colour through hover and focus.** The border
  takes the error (red) or warning (orange) colour at rest, on hover and while focused, so
  the state never flickers back to the normal border. When both are set the warning colour
  wins, because its rules come later in the stylesheet.
- **`withBorder={false}` removes the border outright**, for a field set inline in text or a
  table cell. With it go the hover, focus, error and warning colours, which are all border
  colours, so a borderless field shows no validation state.

## CSS variables

Set these on any ancestor; the stylesheet reads them through a fallback to the theme token.

<APITable>

| Variable                    | Default                 | Effect                                                                          |
| --------------------------- | ----------------------- | ------------------------------------------------------------------------------- |
| `--text-input-bg`           | `--input-bg`            | Background, applied as a large inset box-shadow so autofill does not repaint it |
| `--text-input-color`        | `--input-color`         | Text and caret colour                                                           |
| `--text-input-border-color` | `--input-border-color`  | Border colour at rest                                                           |
| `--text-input-border-hover` | `--input-border-hover`  | Border colour while hovered                                                     |
| `--text-input-border-focus` | `--input-border-focus`  | Border colour while focused                                                     |
| `--text-input-radius`       | `--input-border-radius` | Border radius                                                                   |
| `--text-input-font-size`    | per-size value          | Overrides the font size of all three sizes at once                              |
| `--text-input-disabled-bg`  | `--input-disabled-bg`   | Background while disabled                                                       |

</APITable>

Two states set their colours from the theme directly and ignore these overrides. Under
`hasError` or `hasWarning` the border comes from the theme's error or warning tokens, so
`--text-input-border-color`, `-hover` and `-focus` stop applying. A disabled field takes its
text, caret and border colours from the theme as well; only `--text-input-radius`,
`--text-input-font-size` and `--text-input-disabled-bg` still reach it.

The theme tokens below are declared on the `<input>` element itself, so a value set on an
ancestor never reaches it. Override them through the `style` prop only.

<APITable>

| Variable                                               | Default                     | Effect                                   |
| ------------------------------------------------------ | --------------------------- | ---------------------------------------- |
| `--input-width-base` / `-middle` / `-large`            | `173px` / `300px` / `550px` | Width per `InputSize`                    |
| `--text-input-font-size-base` / `-middle` / `-large`   | `13px` / `13px` / `16px`    | Font size per size                       |
| `--text-input-padding-base` / `-middle` / `-large`     | theme values                | Padding per size                         |
| `--text-input-line-height-base` / `-middle` / `-large` | theme values                | Line height per size                     |
| `--text-input-placeholder-color`                       | theme value                 | Placeholder colour; disabled has its own |

</APITable>

## Accessibility

- **Focusable by default**, in the natural document order. Reach for `tabIndex` only to take a
  field out of that order, never to put it in.
- The component renders no label and does not associate itself with one.
  [`FieldContainer`](./field-container.md) does not associate them either, so give
  the input an `aria-label`, or wrap it in a `<label>` of your own.
- `hasError` and `hasWarning` paint the field through `data-error` and `data-warning`
  attributes only. Neither sets `aria-invalid`, so assistive technology is not told the
  field is wrong; set it yourself.
- `isDisabled` maps to the native `disabled` attribute and `isReadOnly` to `readonly`, so
  both behave as expected for assistive technology.

## Test ids

<APITable>

| Element       | `data-testid` | Override |
| ------------- | ------------- | -------- |
| The `<input>` | `text-input`  | `testId` |

</APITable>

The element also carries `data-size`, and `data-error`, `data-warning`, `data-scale`,
`data-without-border`, `data-keep-char-positions` and `data-guide`, each set to `"true"`
only when the matching prop is on.

## Related

- [`FieldContainer`](./field-container.md) — label, help tooltip and error message
  around this control.
- [`InputBlock`](./input-block.md) — this input with an icon or button inside the
  box.
- [`SearchInput`](./search-input.md) — search field whose `onChange` receives the
  string rather than the event.
