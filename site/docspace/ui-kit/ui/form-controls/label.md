---
description: "Caption for a form field, with an optional required asterisk and an error colour."
custom_edit_url: "https://github.com/ONLYOFFICE/docspace-ui-kit-react/blob/9954315f61fd4830b7ea0582c3d58bee0e85d0aa/components/label/README.md"
---

import ThemedImage from '@theme/ThemedImage';

import APITable from '@site/src/components/APITable/APITable';

# Label

Caption for a form field, with an optional required asterisk and an error colour. It is a
`<label>` element rendered through [`Text`](../data-display/text.md) at weight 600.

<ThemedImage alt="Label" width={82} sources={{ light: require('./label--primary-light.png').default, dark: require('./label--primary-dark.png').default }} />

## Use this when / not when

- Use to caption a field you have laid out yourself, tying the two together with `htmlFor`.
- Not inside [`FieldContainer`](./field-container.md) — it renders its own label from
  `labelText`, and a second one would double the caption.
- Not for a line of text that captions nothing. [`Text`](../data-display/text.md) is that; a `<label>`
  with no field attached is noise for a screen reader.
- Not to show a validation message. `error` only recolours the caption; the message is yours to
  render.

## Import

```ts
import { Label } from "@onlyoffice/apps-ui-kit/components/label";
```

Also exported from the root barrel `@onlyoffice/apps-ui-kit`.

`LabelProps` is not exported — type a wrapper's props yourself.

Needs `ThemeProvider` from `@onlyoffice/apps-ui-kit/providers/theme` for the text colour.

## Stories

### Default

The plain caption for a field, in semibold text; rest the pointer on it to read the tooltip (`title`), and change any other prop live in the Controls panel below.

<ThemedImage alt="Default" width={82} sources={{ light: require('./label--default-light.png').default, dark: require('./label--default-dark.png').default }} />

### Required Labels

For fields a form cannot be sent without: each caption ends with a red asterisk (`isRequired`). The asterisk is hidden from screen readers, so the input needs `required` as well.

<ThemedImage alt="Required Labels" width={1014} sources={{ light: require('./label--required-labels-light.png').default, dark: require('./label--required-labels-dark.png').default }} />

### Error State

For a field that failed validation: the caption turns red (`error`), with or without the asterisk. The error message is not part of the label; render it next to the field.

<ThemedImage alt="Error State" width={1014} sources={{ light: require('./label--error-state-light.png').default, dark: require('./label--error-state-dark.png').default }} />

### Truncated Label

For a caption longer than the space it gets: in a 150px box the text stays on one line and ends with an ellipsis (`truncate`, with `display: block` so the label takes the box's width). Rest the pointer on it to read the full text in the tooltip (`title`), which needs `RootTooltip` mounted, as this story does.

<ThemedImage alt="Truncated Label" width={184} sources={{ light: require('./label--truncated-label-light.png').default, dark: require('./label--truncated-label-dark.png').default }} />

### Inline Label

For a caption beside its field rather than above it: the label sits on the same line as the input (`isInline`).

<ThemedImage alt="Inline Label" width={252} sources={{ light: require('./label--inline-label-light.png').default, dark: require('./label--inline-label-dark.png').default }} />

### With Children

For a note that belongs to the caption, such as "(optional)": content passed as children follows the text inside the same label (`children`).

<ThemedImage alt="With Children" width={179} sources={{ light: require('./label--with-children-light.png').default, dark: require('./label--with-children-dark.png').default }} />

### Form Example

How the states read together in a form: a required field, a required field in error and an optional one, each label tied to its input by `htmlFor`, so clicking a caption focuses its field.

<ThemedImage alt="Form Example" width={189} sources={{ light: require('./label--form-example-light.png').default, dark: require('./label--form-example-dark.png').default }} />

### Css Customization

Both colours and the font size set on one wrapper -- the variables are listed under CSS variables on this page.

- **Display name** shows the asterisk colour (`--label-required-color`) and the font size.
- **Email address** adds `error` to show the text colour in the error state (`--label-error-color`).

<ThemedImage alt="Css Customization" width={1014} sources={{ light: require('./label--css-customization-light.png').default, dark: require('./label--css-customization-dark.png').default }} />

## Minimal example

`htmlFor` is what makes the caption clickable and announces it with the field; without it this
is a styled paragraph.

```tsx
import { Label } from "@onlyoffice/apps-ui-kit/components/label";
import {
  InputSize,
  InputType,
  TextInput,
} from "@onlyoffice/apps-ui-kit/components/text-input";

export function NameField({
  value,
  onChange,
}: {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div>
      <Label
        text="First name"
        htmlFor="first-name"
        style={{ display: "block" }}
        isRequired
      />
      <TextInput
        id="first-name"
        type={InputType.text}
        size={InputSize.base}
        value={value}
        onChange={onChange}
        required
      />
    </div>
  );
}
```

## Props


<APITable>

| Property | Type | Description |
| --- | --- | --- |
| `children`? | `React.ReactNode` | Rendered after the text and the asterisk, inside the same label. |
| `className`? | `string` | Applied to the label. |
| `display`? | `string` | Written onto the label as an HTML `display` attribute, which changes nothing about its layout. Set `display` through `style` instead. |
| `error`? | `boolean` | Turns the text red and sets `aria-invalid` on the label. The error message is not part of this component. Default: `false`. |
| `htmlFor`? | `string` | `for` attribute, which points at the `id` of the field this labels. |
| `id`? | `string` | Applied to the label. |
| `isInline`? | `boolean` | Makes the label an inline block, so it keeps its own width and padding on the line beside the field. Without it the label is a plain inline element. Default: `false`. |
| `isRequired`? | `boolean` | Appends a red asterisk to the text and sets `aria-required` on the label. It does not mark the field itself — put `required` on your input too. Default: `false`. |
| `style`? | `React.CSSProperties` | Applied to the label. |
| `text`? | `React.ReactNode` | The label's text. |
| `title`? | `string` | Text of the kit's shared tooltip, opened when the pointer rests on the label. It shows only while `RootTooltip` is mounted. |
| `tooltipMaxWidth`? | `string` | Ignored. Nothing reads this prop; the shared tooltip sizes itself. |
| `truncate`? | `boolean` | Cuts text that does not fit on one line with an ellipsis. The label is inline, so it also needs `display: block` (through `style`) and a width to cut against. Default: `false`. |

</APITable>

## Recipes

### Error

`error` recolours the caption and sets `aria-invalid` on it. Pair it with the field's own
`hasError` and a message of your own — the label prints neither.

```tsx
import { Label } from "@onlyoffice/apps-ui-kit/components/label";
import { Text } from "@onlyoffice/apps-ui-kit/components/text";
import {
  InputSize,
  InputType,
  TextInput,
} from "@onlyoffice/apps-ui-kit/components/text-input";

export function EmailField({
  value,
  problem,
  onChange,
}: {
  value: string;
  problem?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div>
      <Label
        text="Email"
        htmlFor="email"
        style={{ display: "block" }}
        error={Boolean(problem)}
      />
      <TextInput
        id="email"
        type={InputType.email}
        size={InputSize.base}
        value={value}
        onChange={onChange}
        hasError={Boolean(problem)}
      />
      {problem ? <Text fontSize="12px">{problem}</Text> : null}
    </div>
  );
}
```

## Behaviour the types don't state

- **It has no margin of its own.** The label sits flush against whatever follows it; the gap is
  yours to add. [`FieldContainer`](./field-container.md) is the component that brings
  spacing.
- **A space is always rendered between the text, the asterisk and the children**, because the
  three are joined with literal spaces in the markup. A child meant to sit tight against the
  text will not.
- **`aria-required` and `aria-invalid` are set on the label, not on the field.** Assistive
  technology reads those states from the input, so set `required` and `aria-invalid` there as
  well; the label's copies are decoration.
- **The asterisk is `aria-hidden`**, so "required" reaches a screen reader only through the
  field's own `required`.
- **`truncate` needs a block and a width.** It sets `text-overflow: ellipsis` on a `<label>`,
  which is inline and as wide as its content, so on its own it changes nothing. Give it
  `style={{ display: "block" }}` and a width, or a parent that constrains one.
- **`display` is not CSS.** It lands on the element as an HTML `display` attribute and leaves the
  layout alone; `style={{ display: "block" }}` is what puts the label on its own line.
- **`isInline` makes an inline block**, not an inline element — the label already is one. The
  block keeps its own width and padding on the line beside the field.
- **`title` opens the kit's shared tooltip**, not the browser's. Once mounted, the label drops
  the native `title` attribute and opens the tooltip rendered by `RootTooltip` when the pointer
  rests on it; with no `RootTooltip` on the page nothing appears at all.
- `error` wins over any `color` the theme would apply, and uses `--label-error-color` with the
  kit's error red as the fallback.
- `tooltipMaxWidth` is dead. Nothing reads it, and the shared tooltip sizes itself.

## CSS variables

<APITable>

| Variable                 | Default                   | Effect                                                   |
| ------------------------ | ------------------------- | -------------------------------------------------------- |
| `--label-error-color`    | kit error red (`#F24724`) | Colour of the text when `error`                          |
| `--label-required-color` | kit error red (`#F24724`) | Colour of the required asterisk                          |
| `--text-size`            | `13px`                    | Font size; read by [`Text`](../data-display/text.md), not here |

</APITable>

Both colours fall back to the light theme's error red in either theme; set them yourself for a
dark one.

## Accessibility

- `htmlFor` is the whole point: without it the element is a `<label>` attached to nothing, and
  clicking it does not focus the field.
- Set `required` on the input as well as `isRequired` here — the asterisk is hidden from
  assistive technology on purpose, and `aria-required` on a label is not announced.
- The same holds for `error`: the field needs its own `aria-invalid`, and the message needs to
  be tied to it with `aria-describedby`.
- `truncate` hides text visually but keeps it in the accessibility tree; `title` gives
  pointer users the full string back in the shared tooltip, and no one else — it is not a
  native `title` a screen reader could read.

## Test ids

<APITable>

| Element      | `data-testid`   |
| ------------ | --------------- |
| The label    | `label`         |
| The asterisk | `required-mark` |

</APITable>

Neither can be overridden by a prop.

## Related

- [`FieldContainer`](./field-container.md) — label, field and error message together.
- [`Text`](../data-display/text.md) — what this renders through.
- [`TextInput`](./text-input.md) — the field this most often captions.
