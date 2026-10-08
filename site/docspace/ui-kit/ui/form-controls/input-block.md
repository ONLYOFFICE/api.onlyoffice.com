---
description: "Text field with an icon at the end and room for a prefix before it, inside one border."
custom_edit_url: "https://github.com/ONLYOFFICE/docspace-ui-kit-react/blob/9954315f61fd4830b7ea0582c3d58bee0e85d0aa/components/input-block/README.md"
---

import ThemedImage from '@theme/ThemedImage';

import APITable from '@site/src/components/APITable/APITable';

# InputBlock

Text field with an icon at the end and room for a prefix before it, inside one border. It wraps
[`TextInput`](./text-input.md) and [`IconButton`](../interactive-elements/icon-button.md) in a group
that draws the border for them.

<ThemedImage alt="InputBlock" width={1014} sources={{ light: require('./input-block--primary-light.png').default, dark: require('./input-block--primary-dark.png').default }} />

## Use this when / not when

- Use for a field that needs an affordance at its end — a clear cross, a reveal eye, a picker —
  or a fixed prefix in front of it.
- Not for a plain field. [`TextInput`](./text-input.md) is that, and this always renders
  the icon box unless you say `noIcon`.
- Not for search — [`SearchInput`](./search-input.md) is this component with the search
  and clear behaviour already wired, and its `onChange` gives you a string.
- Not for a password — [`PasswordInput`](./password-input.md) adds the reveal toggle and
  the strength rules.

## Import

```ts
import { InputBlock } from "@onlyoffice/apps-ui-kit/components/input-block";
```

Also exported from the root barrel `@onlyoffice/apps-ui-kit`.

Needs `ThemeProvider` from `@onlyoffice/apps-ui-kit/providers/theme` for the border and
background colours.

## Stories

### Default

A text field with a search icon at its end, inside one border. Type in it, and change any other prop live in the Controls panel below.

<ThemedImage alt="Default" width={1014} sources={{ light: require('./input-block--default-light.png').default, dark: require('./input-block--default-dark.png').default }} />

### Sizes

Match the field to the controls around it: **Base size**, **Middle size** and **Large size** differ in text size, padding and the height of the icon box (`size`).

<ThemedImage alt="Sizes" width={1014} sources={{ light: require('./input-block--sizes-light.png').default, dark: require('./input-block--sizes-dark.png').default }} />

### States

How the field reads in each state: **Error state** and **Warning state** recolour the border of the whole group (`hasError`, `hasWarning`); **Disabled** greys the field out and drops the icon (`isDisabled`); **Read-only content** keeps the look and the icon and only stops typing (`isReadOnly`).

<ThemedImage alt="States" width={1014} sources={{ light: require('./input-block--states-light.png').default, dark: require('./input-block--states-dark.png').default }} />

### Password Type

For a secret that must not be read off the screen, the typed characters are masked (`type={InputType.password}`). For a reveal toggle and strength rules, use `PasswordInput` instead.

<ThemedImage alt="Password Type" width={316} sources={{ light: require('./input-block--password-type-light.png').default, dark: require('./input-block--password-type-dark.png').default }} />

### With Icon Click

An icon that does something, such as clearing the field or opening a picker, needs a click handler (`onIconClick`); without it the icon is drawn greyed out and ignores clicks, as in the other stories. Click the search icon to see the action.

<ThemedImage alt="With Icon Click" width={316} sources={{ light: require('./input-block--with-icon-click-light.png').default, dark: require('./input-block--with-icon-click-dark.png').default }} />

### With Prefix

A fixed part of the value that the user does not type sits in front of the input, inside the same border (`children`). **Amount** has a currency sign and no icon at its end (`noIcon`); **Phone number** has a country code and keeps its icon.

<ThemedImage alt="With Prefix" width={676} sources={{ light: require('./input-block--with-prefix-light.png').default, dark: require('./input-block--with-prefix-dark.png').default }} />

### Right To Left

The same field under a right-to-left interface: the icon moves to the left end, the prefix to the right end, and the placeholder sits at the right edge. The direction comes from the theme's `interfaceDirection` (the Direction toolbar); the wrapper also carries `dir="rtl"` for the rules that read the DOM direction.

<ThemedImage alt="Right To Left" width={316} sources={{ light: require('./input-block--right-to-left-light.png').default, dark: require('./input-block--right-to-left-dark.png').default }} />

### Css Customization

Every overridable variable set on one wrapper -- the variables are listed under CSS variables on this page.

**Amount** carries a prefix, for the prefix padding, and shows every other variable except the large icon padding; **Large size** is there for `--input-block-icon-padding-lg`, which only the large size reads. Hover and focus a field to see the hover and focus border colours.

<ThemedImage alt="Css Customization" width={316} sources={{ light: require('./input-block--css-customization-light.png').default, dark: require('./input-block--css-customization-dark.png').default }} />

## Minimal example

`type`, `value` and `onChange` are the three that matter; `tabIndex` is the one that will catch
you out, because it defaults to -1.

```tsx
import { useState } from "react";
import { InputBlock } from "@onlyoffice/apps-ui-kit/components/input-block";
import {
  InputSize,
  InputType,
} from "@onlyoffice/apps-ui-kit/components/text-input";

export function RoomName() {
  const [name, setName] = useState("");

  return (
    <InputBlock
      type={InputType.text}
      size={InputSize.base}
      value={name}
      placeholder="Room name"
      tabIndex={0}
      scale
      iconNode={<span aria-hidden="true">×</span>}
      onIconClick={() => setName("")}
      onChange={(event) => setName(event.target.value)}
    />
  );
}
```

## Props


<APITable>

| Property | Type | Description |
| --- | --- | --- |
| `children`? | `React.ReactNode` | Rendered before the input, inside the same bordered group — a currency sign, a country code, a fixed prefix. |
| `className`? | `string` | Applied to the group. |
| `dataTestId`? | `string` | `data-testid` of the group. Default: `"input-block"`. |
| `forwardedRef`? | `React.Ref<HTMLInputElement>` | Ref to the `<input>` element itself. |
| `hoverColor`? | `string` | Colour of that icon on hover. |
| `iconButtonClassName`? | `string` | Applied to the box around the icon. Default: `""`. |
| `iconColor`? | `string` | Colour of that icon. |
| `iconName`? | `string` | URL of the icon at the end of the field. Default: `""`. |
| `iconNode`? | `React.ReactNode` | The icon as an element, instead of `iconName`. |
| `iconSize`? | `number` | Size of that icon in pixels. It falls back to `size`. |
| `id`? | `string` | Applied to the `<input>`, not to the group around it. |
| `isIconFill`? | `boolean` | Whether the icon's paths are recoloured to `iconColor`. Leave it off for a multi-coloured icon. Default: `false`. |
| `noIcon`? | `boolean` | Whether the icon box is left out entirely. Without it an empty box is still rendered and still takes its padding. Default: `false`. |
| `onIconClick`? | `(e: React.MouseEvent) => void` | Called when the icon is clicked. Without it the icon is rendered in the disabled style and does not respond — it is what makes the icon a button. |
| `style`? | `React.CSSProperties` | Applied to the group. |
| `tabIndex`? | `number` | Used as HTML `tabindex` property of the `<input>`. Unlike `TextInput`'s, this one defaults to `-1`, so the field is out of the tab order until you pass `0` — and so is every component built on it that passes its own `tabIndex` through, `SearchInput` and `PasswordInput` among them. Default: `-1`. |
| `testId`? | `string` | `data-testid` of the inner `<input>`, passed through to `TextInput`. |

</APITable>

#### Inherited from `TextInputProps`

Declared by [`components/text-input`](./text-input.md) and accepted here too.

<APITable>

| Property | Type | Description |
| --- | --- | --- |
| `type` | `InputType` | Supported type of the input fields |
| `value` | `string` | Value of the input |
| `autoComplete`? | `string` | Used as HTML `autocomplete` property. Default: `"off"`. |
| `dir`? | `string` | Text direction. Default: `"auto"`. |
| `fontWeight`? | `number \| string` | Sets the font weight |
| `guide`? | `boolean` | When guide is true, Text Mask always shows both placeholder characters and non-placeholder mask characters |
| `hasError`? | `boolean` | Indicates the input field has an error |
| `hasWarning`? | `boolean` | Indicates the input field has a warning |
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
| `size`? | `InputSize` | Supported size of the input fields |
| `spellCheck`? | `boolean` | Used as HTML `spellcheck` property |
| `withBorder`? | `boolean` | Indicates that component contains border |

</APITable>

Plus 299 more props inherited from `React.AriaAttributes`, `React.DOMAttributes`, `React.HTMLAttributes` and `React.InputHTMLAttributes`, forwarded to the element.

### Enums

<APITable>

| Enum        | Members                                                |
| ----------- | ------------------------------------------------------ |
| `InputSize` | `base`, `middle`, `large`                              |
| `InputType` | `text`, `password`, `email`, `tel`, `search`, `number` |

</APITable>

## Recipes

### Disabled / read-only

`isDisabled` greys the group **and removes the icon entirely**, so a field whose icon carries
meaning changes shape when it is disabled. `isReadOnly` keeps the icon and the field's look, and
only stops the typing.

```tsx
import { InputBlock } from "@onlyoffice/apps-ui-kit/components/input-block";
import {
  InputSize,
  InputType,
} from "@onlyoffice/apps-ui-kit/components/text-input";

export function PortalAddress({ address }: { address: string }) {
  return (
    <InputBlock
      type={InputType.text}
      size={InputSize.base}
      value={address}
      isReadOnly
      tabIndex={0}
      scale
      iconNode={<span aria-hidden="true">⧉</span>}
      onIconClick={() => navigator.clipboard.writeText(address)}
      onChange={() => {}}
    />
  );
}
```

### Error

`hasError` and `hasWarning` recolour the group's border. Neither prints a message; that is
[`FieldContainer`](./field-container.md)'s job, or yours.

```tsx
import { useState } from "react";
import { FieldContainer } from "@onlyoffice/apps-ui-kit/components/field-container";
import { InputBlock } from "@onlyoffice/apps-ui-kit/components/input-block";
import {
  InputSize,
  InputType,
} from "@onlyoffice/apps-ui-kit/components/text-input";

export function PortName() {
  const [port, setPort] = useState("");
  const problem = port && Number.isNaN(Number(port)) ? "Digits only" : "";

  return (
    <FieldContainer
      isVertical
      labelVisible
      labelText="Port"
      hasError={Boolean(problem)}
      errorMessage={problem}
    >
      <InputBlock
        type={InputType.text}
        size={InputSize.base}
        value={port}
        hasError={Boolean(problem)}
        tabIndex={0}
        scale
        noIcon
        onChange={(event) => setPort(event.target.value)}
      />
    </FieldContainer>
  );
}
```

### A prefix in front of the field

`children` are rendered before the input, inside the same border.

```tsx
import { useState } from "react";
import { InputBlock } from "@onlyoffice/apps-ui-kit/components/input-block";
import { Text } from "@onlyoffice/apps-ui-kit/components/text";
import {
  InputSize,
  InputType,
} from "@onlyoffice/apps-ui-kit/components/text-input";

export function Subdomain() {
  const [name, setName] = useState("");

  return (
    <InputBlock
      type={InputType.text}
      size={InputSize.base}
      value={name}
      tabIndex={0}
      scale
      noIcon
      onChange={(event) => setName(event.target.value)}
    >
      <Text style={{ paddingInline: 8 }}>https://</Text>
    </InputBlock>
  );
}
```

## Behaviour the types don't state

- **`tabIndex` defaults to -1**, so the field is out of the tab order unless you pass `0`. This
  is the single thing most likely to go wrong: the input looks right and the keyboard never
  reaches it.
- **The icon box is always rendered.** Without `iconName` or `iconNode` you still get an empty
  box with its padding, and the field is narrower than it looks. Pass `noIcon` for a plain field.
- **An icon without `onIconClick` is drawn in the disabled style.** The inner
  [`IconButton`](../interactive-elements/icon-button.md) is given `isDisabled` whenever no handler is passed,
  so a purely decorative icon comes out greyed.
- **`isDisabled` removes the icon**, rather than disabling it — the whole box is dropped from
  the markup, so the field changes width when it is disabled.
- **The border belongs to the group, not the input.** `withBorder: false` is forced on the inner
  `TextInput`, which is why `hasError`, `hasWarning` and the focus ring are drawn around
  everything including the prefix and the icon.
- **`maxLength` defaults to 255** and `autoComplete` to `"off"`, both inherited from the same
  decision in `TextInput`.
- **`value` is required and the field is controlled**, so it needs an `onChange` from the first
  render to be typeable at all.
- **It is not `scale`d by default**: the field has `TextInput`'s own base width until you pass
  `scale`, even though the group around it is 100% wide.
- **`size` reaches the icon box too.** Besides the text size and padding of the field, it sets
  the icon box to the field's line height, and at `large` the space after the icon grows from
  `--input-block-icon-padding` to `--input-block-icon-padding-lg`. An unset `size` leaves the
  box at its content's height.
- `type` is passed straight to the inner `<input>`, so `password` masks the text and `email` or
  `tel` bring up the matching keyboard on a phone.
- `id` goes on the inner `<input>` while `className` and `style` go on the group, so a `htmlFor`
  pointing at `id` reaches the real field.
- `children` are wrapped in two nested boxes of their own, both inheriting the group's
  background, so a prefix sits flush inside the border.

## CSS variables

<APITable>

| Variable                         | Default                  | Effect                                                                   |
| -------------------------------- | ------------------------ | ------------------------------------------------------------------------ |
| `--input-block-icon-padding`     | `8px`                    | Space after the icon at `base` and `middle`; one length, not a shorthand |
| `--input-block-icon-padding-lg`  | `12px`                   | The same at the large size; only `large` reads it                        |
| `--input-block-icon-start`       | `1px`                    | Space before the icon; one length                                        |
| `--input-block-children-padding` | `2px 0 2px 2px`          | Padding around the prefix, as a `padding` shorthand                      |
| `--text-input-bg`                | `--input-bg`             | Background of the group and the field                                    |
| `--text-input-color`             | `--input-color`          | Text colour                                                              |
| `--text-input-border-color`      | `--input-border-color`   | Border colour of the group at rest                                       |
| `--text-input-border-hover`      | `--input-border-hover`   | Border colour of the group while hovered                                 |
| `--text-input-border-focus`      | `--input-border-focus`   | Border colour of the group while the field has focus                     |
| `--text-input-radius`            | `--input-border-radius`  | Corner radius of the group                                               |
| `--text-input-font-size`         | `13px` (`16px` at large) | Font size of the field, at every size at once                            |

</APITable>

The `--text-input-*` variables come from the shared input styles, so they mean what they mean
for [`TextInput`](./text-input.md); here the group reads them, because the inner field
draws no border of its own. Set them on the group or any ancestor.

## Accessibility

- **Pass `tabIndex={0}`.** The default of -1 takes a working text field out of the keyboard's
  reach, which is the most severe accessibility defect in this component.
- The icon is an `IconButton` inside a clickable `<div>`; give it a name through your own markup,
  since nothing here labels it.
- The field has no label of its own. Use [`FieldContainer`](./field-container.md), or a
  [`Label`](./label.md) with `htmlFor` pointing at `id`.
- `hasError` only changes a colour. Tie a message to the field with `aria-describedby` and set
  `aria-invalid` yourself.
- A prefix in `children` is read before the field, which is usually right — but it is not part of
  the field's accessible name.

## Test ids

<APITable>

| Element   | `data-testid`                   |
| --------- | ------------------------------- |
| The group | `input-block`, or `dataTestId`  |
| The input | `testId`, passed to `TextInput` |

</APITable>

## Related

- [`TextInput`](./text-input.md) — the field inside, and where its props are documented.
- [`SearchInput`](./search-input.md) — this component with search behaviour attached.
- [`PasswordInput`](./password-input.md) — this component with a reveal toggle.
