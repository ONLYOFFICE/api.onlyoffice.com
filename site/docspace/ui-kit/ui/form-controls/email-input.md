---
description: "Text field that parses what is typed as an email address and colours itself when it does not parse."
custom_edit_url: "https://github.com/ONLYOFFICE/docspace-ui-kit-react/blob/9954315f61fd4830b7ea0582c3d58bee0e85d0aa/components/email-input/README.md"
---

import ThemedImage from '@theme/ThemedImage';

import APITable from '@site/src/components/APITable/APITable';

# EmailInput

Text field that parses what is typed as an email address and colours itself when it does not
parse. It is [`TextInput`](./text-input.md) with the kit's address parser attached.

<ThemedImage alt="EmailInput" width={189} sources={{ light: require('./email-input--primary-light.png').default, dark: require('./email-input--primary-dark.png').default }} />

## Use this when / not when

- Use for a single email address that should be checked as the user types — an invitation, a
  contact, a login.
- Not for a list of addresses. The parser handles one address at a time; split the string
  yourself and validate each.
- Not when you only want the field's look. [`TextInput`](./text-input.md) with
  `type={InputType.email}` costs nothing and leaves validation to you.
- Not to show why an address is wrong. The errors come back as translation keys, not as
  sentences, and nothing here renders them.

## Import

```ts
import { EmailInput } from "@onlyoffice/apps-ui-kit/components/email-input";
```

Also exported from the root barrel `@onlyoffice/apps-ui-kit`.

Needs `ThemeProvider` from `@onlyoffice/apps-ui-kit/providers/theme` for the field's colours.

## Stories

### Default

An empty field that checks the address as you type: an incomplete one turns the border red, a complete one clears it (`hasError` left out). Change any other prop live in the Controls panel below.

<ThemedImage alt="Default" width={189} sources={{ light: require('./email-input--default-light.png').default, dark: require('./email-input--default-dark.png').default }} />

### Sizes

Pick the height that matches the rest of the form: base and middle share 13px text, large grows to 16px (`size`). Type into any of them to see the result of the check under the field.

<ThemedImage alt="Sizes" width={1019} sources={{ light: require('./email-input--sizes-light.png').default, dark: require('./email-input--sizes-dark.png').default }} />

### States

The field in each state a form puts it in: **user@example.com** is valid and plain; **disabled@example.com** is greyed out and cannot be focused (`isDisabled`); **readonly@example.com** can be focused and selected but not edited (`isReadOnly`); **invalid-email** has its red border forced on (`hasError`), which the check would also have done on its own.

<ThemedImage alt="States" width={865} sources={{ light: require('./email-input--states-light.png').default, dark: require('./email-input--states-dark.png').default }} />

### With Custom Validation

Enforce a rule the parser does not know, such as a single allowed domain: the function replaces the parser outright and its `isValid` decides the red border (`customValidate`). Type an address that does not end with @custom-domain.com to see the field turn red and the returned error key appear under it.

<ThemedImage alt="With Custom Validation" width={336} sources={{ light: require('./email-input--with-custom-validation-light.png').default, dark: require('./email-input--with-custom-validation-dark.png').default }} />

### Automatic Error State

Without `hasError` the field decides for itself: **name@example.com** parses and stays plain, **name@example** has no top-level domain and is red from the start. Edit either one to watch the border follow the check.

<ThemedImage alt="Automatic Error State" width={527} sources={{ light: require('./email-input--automatic-error-state-light.png').default, dark: require('./email-input--automatic-error-state-dark.png').default }} />

### Accepted Address Forms

Decide which forms of address count as valid: the same address with a display name is refused by the first field and accepted by the second, which allows names (`emailSettings` with `allowName`). Punycode, IP-address domains, spaces and local domain names are switched the same way.

<ThemedImage alt="Accepted Address Forms" width={676} sources={{ light: require('./email-input--accepted-address-forms-light.png').default, dark: require('./email-input--accepted-address-forms-dark.png').default }} />

### Right To Left

Under a right-to-left interface both fields align to the right edge: the placeholder of the empty field and the address in the second one, which still reads left to right because an address is Latin text (`dir="auto"`). The direction comes from the theme's `interfaceDirection` (the Direction toolbar); the wrapper also carries `dir="rtl"` for the rules that read the DOM direction.

<ThemedImage alt="Right To Left" width={189} sources={{ light: require('./email-input--right-to-left-light.png').default, dark: require('./email-input--right-to-left-dark.png').default }} />

### Css Customization

Every overridable variable set on one wrapper -- the variables are listed under CSS variables on this page. The first field shows them all; hover and focus it to see the two border variables. The second holds an address with its error border forced on (`hasError`), where the theme's error colour replaces the border variables and the rest still apply.

<ThemedImage alt="Css Customization" width={316} sources={{ light: require('./email-input--css-customization-light.png').default, dark: require('./email-input--css-customization-dark.png').default }} />

## Minimal example

Leave `hasError` out and the field decides for itself, from the first character typed.

```tsx
import { useState } from "react";
import { EmailInput } from "@onlyoffice/apps-ui-kit/components/email-input";
import { InputSize } from "@onlyoffice/apps-ui-kit/components/text-input";

export function InviteField() {
  const [email, setEmail] = useState("");

  return (
    <EmailInput
      size={InputSize.base}
      value={email}
      placeholder="name@example.com"
      scale
      onChange={(event) => setEmail(event.target.value)}
    />
  );
}
```

## Props


<APITable>

| Property | Type | Description |
| --- | --- | --- |
| `children`? | `Iterable<ReactI18NextChildren> \| ReactI18NextChildren` |  |
| `customValidate`? | `(value: string) => TValidate` | Replaces the built-in parser outright. Return the same shape; the component uses `isValid` to decide whether to colour the field. |
| `dataTestId`? | `string` | `data-testid` of the field. Default: `"email-input"`. |
| `emailSettings`? | `EmailSettings` | Options for the built-in parser: which forms of address to accept. |
| `handleAnimationStart`? | `(e: React.AnimationEvent<HTMLInputElement>) => void` | Native `animationstart` on the field. It exists to catch the browser's autofill animation, which fires no change event. |
| `onValidateInput`? | `(data: TValidate) => void` | Called after every keystroke with the result of the check, whichever parser ran. |

</APITable>

#### Inherited from `TextInputProps`

Declared by [`components/text-input`](./text-input.md) and accepted here too.

<APITable>

| Property | Type | Description |
| --- | --- | --- |
| `value` | `string` | Value of the input |
| `autoComplete`? | `string` | Used as HTML `autocomplete` property. Default: `"off"`. |
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
| `size`? | `InputSize` | Supported size of the input fields |
| `spellCheck`? | `boolean` | Used as HTML `spellcheck` property |
| `style`? | `CSSProperties` | Inline CSS styles |
| `tabIndex`? | `number` | Used as HTML `tabindex` property. Left out, the field takes its natural place in the tab order; pass `-1` only for a field the keyboard is meant to skip. |
| `withBorder`? | `boolean` | Indicates that component contains border |

</APITable>

Plus 298 more props inherited from `React.AriaAttributes`, `React.DOMAttributes`, `React.HTMLAttributes` and `React.InputHTMLAttributes`, forwarded to the element.

## Recipes

### Error

`hasError` is the override: pass it and the automatic colouring stops entirely, which is what
you want when the error should only appear after the field is left.

```tsx
import { useState } from "react";
import {
  EmailInput,
  type TValidate,
} from "@onlyoffice/apps-ui-kit/components/email-input";
import { FieldContainer } from "@onlyoffice/apps-ui-kit/components/field-container";
import { InputSize } from "@onlyoffice/apps-ui-kit/components/text-input";

export function InviteFieldOnBlur() {
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [wasVisited, setWasVisited] = useState(false);

  const problem = wasVisited && !isValid ? "That is not an email address" : "";

  return (
    <FieldContainer
      isVertical
      labelVisible
      labelText="Email"
      hasError={Boolean(problem)}
      errorMessage={problem}
    >
      <EmailInput
        size={InputSize.base}
        value={email}
        scale
        hasError={Boolean(problem)}
        onValidateInput={(result: TValidate) => setIsValid(result.isValid)}
        onBlur={() => setWasVisited(true)}
        onChange={(event) => setEmail(event.target.value)}
      />
    </FieldContainer>
  );
}
```

### Disabled / read-only

Both come from [`TextInput`](./text-input.md) unchanged: `isDisabled` greys the field
and takes it out of the tab order, `isReadOnly` keeps it reachable but not editable.

```tsx
import { EmailInput } from "@onlyoffice/apps-ui-kit/components/email-input";
import { InputSize } from "@onlyoffice/apps-ui-kit/components/text-input";

export function AccountEmail({ email }: { email: string }) {
  return (
    <EmailInput
      size={InputSize.base}
      value={email}
      isReadOnly
      scale
      onChange={() => {}}
    />
  );
}
```

## Behaviour the types don't state

- **The field is `type="text"`, not `type="email"`.** `type` is removed from the props on
  purpose and forced to text, so the browser does no validation of its own and a phone shows
  the ordinary keyboard. `autoComplete` defaults to `"email"`, which is the only hint the
  browser gets.
- **`hasError` is an override, not a starting value.** Left out, the field colours itself from
  the parser as soon as anything has been typed — so a half-typed address is red. Passed at
  all, even as `false`, the automatic colouring is switched off completely.
- **Validation runs on every keystroke**, and also whenever `value` changes from outside, so
  `onValidateInput` fires more often than a user would expect a message to change. Gate the
  message on blur, not on the callback.
- **`errors` are translation keys**, produced by the parser — `EmailIsIncorrect` and the like.
  They are not sentences, and this component renders none of them.
- **`customValidate` replaces the parser entirely**, `emailSettings` and all; return the same
  `{ value, isValid, errors }` shape.
- **`emailSettings` must be an `EmailSettings` instance.** The parser throws a `TypeError` on
  a plain object, so build one with `EmailSettings.parse({ allowName: true })` from
  `@onlyoffice/apps-ui-kit/utils/email`. Left out, the parser refuses punycode, IP-address
  domains, display names, spaces and local domain names, and applies the strict local-part
  rules; each of those is one `allow…` flag.
- **`isAutoFocussed` is ignored on an iOS phone.** The component forces it off there, because
  the on-screen keyboard opening on load hides the rest of the form.
- **`testId` is not a prop here** — it is removed from `TextInput`'s props and replaced by
  `dataTestId`, which defaults to `email-input`.
- The value is held in the component's own state and re-synced whenever `value` changes, so it
  behaves as a controlled field as long as you keep passing `value`.

## CSS variables

The field is a [`TextInput`](./text-input.md), so its variables apply here; set them on
any ancestor. `--email-input-align` is this component's own.

<APITable>

| Variable                    | Default                 | Effect                                                                                                               |
| --------------------------- | ----------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `--email-input-align`       | `left`                  | Alignment of the value and the placeholder. Ignored under a right-to-left interface (`.rtl`), where both align right |
| `--text-input-bg`           | `--input-bg`            | Background                                                                                                           |
| `--text-input-color`        | `--input-color`         | Text and caret colour                                                                                                |
| `--text-input-border-color` | `--input-border-color`  | Border colour at rest                                                                                                |
| `--text-input-border-hover` | `--input-border-hover`  | Border colour while hovered                                                                                          |
| `--text-input-border-focus` | `--input-border-focus`  | Border colour while focused                                                                                          |
| `--text-input-radius`       | `--input-border-radius` | Border radius                                                                                                        |
| `--text-input-font-size`    | `13px` / `16px`         | Font size of every size at once; unset, `base` and `middle` are 13px and `large` 16px                                |

</APITable>

While the field is in its error state the theme's error colour replaces all three border
variables; the background, text colour, radius, font size and alignment still apply.

## Accessibility

- The field has no label of its own — use [`FieldContainer`](./field-container.md) or
  [`Label`](./label.md) with `htmlFor`, or pass `aria-label`.
- **Nothing is announced when the address is wrong.** The only signal is the border colour, and
  the field carries no `aria-invalid`, so set it yourself alongside a message tied with
  `aria-describedby`.
- Because the input is `type="text"`, assistive technology is not told the field wants an email
  address. `autoComplete="email"` is the only machine-readable hint.
- Colouring the field before the address is finished is noise for everyone; gating the error on
  blur, as in the recipe above, is kinder.

## Test ids

<APITable>

| Element   | `data-testid`                  |
| --------- | ------------------------------ |
| The field | `email-input`, or `dataTestId` |

</APITable>

## Related

- [`TextInput`](./text-input.md) — the field underneath, and where the rest of the props
  are documented.
- [`FieldContainer`](./field-container.md) — the label and error message around it.
- [`InputBlock`](./input-block.md) — for a field that needs an icon at its end.
