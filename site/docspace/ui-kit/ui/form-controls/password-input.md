---
description: "Password field with a reveal eye, a strength tooltip and a generator."
custom_edit_url: "https://github.com/ONLYOFFICE/docspace-ui-kit-react/blob/446f115916d79a87d07b9e3dddb1e39a263784ee/components/password-input/README.md"
---

import ThemedImage from '@theme/ThemedImage';

import APITable from '@site/src/components/APITable/APITable';

# PasswordInput

Password field with a reveal eye, a strength tooltip and a generator. It is
[`InputBlock`](./input-block.md) with the eye as its icon and a
[`Tooltip`](../overlays/tooltip.md) listing the rules the password has to meet.

<ThemedImage alt="PasswordInput" width={211} sources={{ light: require('./password-input--primary-light.png').default, dark: require('./password-input--primary-dark.png').default }} />

## Use this when / not when

- Use where a password is being **set** — signing up, resetting, changing — and the rules should
  be shown as they are met.
- Use `simpleView` where a password is only being **entered**, as at sign-in: it keeps the field
  and the eye and drops the checking entirely.
- Not for any other secret. An API key or a token gets no value from the strength rules;
  [`InputBlock`](./input-block.md) with an eye of your own is simpler.
- Not to show the rules on their own. Every tooltip string is a prop, and an empty one is an
  empty line.

## Import

```ts
import { PasswordInput } from "@onlyoffice/apps-ui-kit/components/password-input";
```

Also exported from the root barrel `@onlyoffice/apps-ui-kit`.

`PasswordInputProps` is not exported; `PasswordInputHandle`, the type of the `ref`, is.

Needs `ThemeProvider` from `@onlyoffice/apps-ui-kit/providers/theme`. Nothing here is
translated for you — every label in the tooltip is a prop.


## Stories

### Default

The field as a sign-up form uses it: type a character to open the rules tooltip and watch each rule turn green as the value meets it; change any other prop live in the Controls panel below.

<ThemedImage alt="Default" width={211} sources={{ light: require('./password-input--default-light.png').default, dark: require('./password-input--default-dark.png').default }} />

### Simple View

A sign-in form only needs the field and the eye button: the simple view drops the rules tooltip and skips rule checking, so the field accepts any value (`simpleView`).

<ThemedImage alt="Simple View" width={336} sources={{ light: require('./password-input--simple-view-light.png').default, dark: require('./password-input--simple-view-dark.png').default }} />

### States

Three fields a form may need side by side: **Normal**, ready for input; **Disabled**, greyed out with typing blocked and no tooltip (`isDisabled`); **With error**, drawn with a red border to flag a value the form rejected (`hasError`).

<ThemedImage alt="States" width={892} sources={{ light: require('./password-input--states-light.png').default, dark: require('./password-input--states-dark.png').default }} />

### Custom Validation

A policy that asks for less: type into the field and the tooltip lists only a minimum length of 8, capital letters and digits, because special characters are switched off (`passwordSettings`).

<ThemedImage alt="Custom Validation" width={211} sources={{ light: require('./password-input--custom-validation-light.png').default, dark: require('./password-input--custom-validation-dark.png').default }} />

### Sizes

Pick the height that matches the other fields of the form: base, middle and large (`size`).

<ThemedImage alt="Sizes" width={1017} sources={{ light: require('./password-input--sizes-light.png').default, dark: require('./password-input--sizes-dark.png').default }} />

### With Password Generator

Saves the user from inventing a password that meets every rule: type a character to open the tooltip, then click **Generate password** at its bottom; the field fills with a random password that passes all rules and shows its characters (`generatePasswordTitle`, symbols picked from `generatorSpecial`).

<ThemedImage alt="With Password Generator" width={211} sources={{ light: require('./password-input--with-password-generator-light.png').default, dark: require('./password-input--with-password-generator-dark.png').default }} />

### Right To Left

The field in a right-to-left layout: the hidden characters line up from the right edge and the eye button moves to the left end. The wrapper carries `dir="rtl"`; the direction also comes from the theme's `interfaceDirection` (the Direction toolbar).

<ThemedImage alt="Right To Left" width={336} sources={{ light: require('./password-input--right-to-left-light.png').default, dark: require('./password-input--right-to-left-dark.png').default }} />

### Css Customization

The input variables set on one wrapper -- the variables are listed under CSS variables on this page. The example sets every variable but the tooltip width, which a wrapper cannot reach; hover and focus the field to see the border colors.

<ThemedImage alt="Css Customization" width={211} sources={{ light: require('./password-input--css-customization-light.png').default, dark: require('./password-input--css-customization-dark.png').default }} />

## Minimal example

The field keeps the password itself; `onChange`'s second argument is the value to store.

```tsx
import { useState } from "react";
import { PasswordInput } from "@onlyoffice/apps-ui-kit/components/password-input";

export function NewPassword() {
  const [password, setPassword] = useState("");
  const [isStrong, setIsStrong] = useState(false);

  return (
    <PasswordInput
      id="new-password"
      inputValue={password}
      isDisableTooltip
      hasError={Boolean(password) && !isStrong}
      onChange={(_event, value) => setPassword(value ?? "")}
      onValidateInput={(passes) => setIsStrong(passes)}
    />
  );
}
```

## Props


<APITable>

| Property | Type | Description |
| --- | --- | --- |
| `clipActionResource`? | `string` | Ignored. It feeds a copy button that is not rendered. |
| `clipCopiedResource`? | `string` | Ignored. It feeds a copy button that is not rendered. Default: `"Copied"`. |
| `emailInputName`? | `string` | Ignored. It only sets an internal flag for a copy button that is not rendered. |
| `generatePasswordTitle`? | `string` | Title of the password generation button |
| `generatorSpecial`? | `string` | Characters the generator may pick symbols from. Default: `"!@#$%^&*"`. |
| `inputName`? | `string` | `name` of the field, and the fallback for the tooltip's anchor id when no `id` is given — so two fields on one page need distinct ids. Default: `"passwordInput"`. |
| `inputType`? | `InputType.password \| InputType.text` | Whether the field starts revealed. The eye toggles it from then on, and `isDisabled` forces it back to hidden. Default: `InputType.password`. |
| `inputValue`? | `string` | Value the field starts with. The component owns the value from then on: changing this later is ignored unless it becomes an empty string, or `isSimulateType` is set. |
| `inputWidth`? | `string` | Width of the field's wrapper, as a CSS length. |
| `isDisableTooltip`? | `boolean` | Allows to hide Tooltip. Default: `false`. |
| `isFullWidth`? | `boolean` | Whether the wrapper is a full-width block rather than shrinking to the field. Default: `false`. |
| `isSimulateType`? | `boolean` | Renders the value as repeated `simulateSymbol` characters in a **text** field, keeping the real value in state. It needs the input's `id` to be `conversion-password`, which is where it reads the caret from. Default: `false`. |
| `onChange`? | `(e: React.ChangeEvent<HTMLInputElement>, value?: string) => void` | Called on every change with the DOM event and the value after sanitising. Read the second argument: under `isSimulateType` the event carries the masking characters, not the password. |
| `onValidateInput`? | `(progressScore: boolean, passwordValidation: TPasswordValidation) => void` | Called after every change with whether every rule passes, and with each rule's own result. It never fires in `simpleView`, which skips checking. |
| `passwordSettings`? | `TPasswordSettings` | The rules the generator and the checker use. Left out, only a minimum length of 8 is required — digits, capitals and symbols are all off. Default: `DEFAULT_PASSWROD_SETTINGS`. |
| `ref`? | `React.RefObject<PasswordInputHandle \| null>` | Handle for generating a password and reading the current value. |
| `sanitizeValue`? | `(value: string) => string` | Runs on every change before the value is stored — stripping spaces, say. |
| `simpleView`? | `boolean` | Strips the component down to the field and the reveal eye: no strength tooltip, no generate link, and no validation at all. Default: `false`. |
| `simulateSymbol`? | `string` | The character drawn for each real one under `isSimulateType`. Default: `"•"`. |
| `tooltipAllowedCharacters`? | `string` | Title for allowed characters tooltip |
| `tooltipPasswordCapital`? | `string` | Prompt for capital letters requirement |
| `tooltipPasswordDigits`? | `string` | Prompt for digits requirement |
| `tooltipPasswordLength`? | `string` | Prompt for minimum length requirement |
| `tooltipPasswordSpecial`? | `string` | Prompt for special characters requirement |
| `tooltipPasswordTitle`? | `string` | Title for password requirements tooltip |

</APITable>

#### Inherited from `CommonProps`

Declared by [`components/input-block`](./input-block.md) and accepted here too.

<APITable>

| Property | Type | Description |
| --- | --- | --- |
| `className`? | `string` | Applied to the group. |
| `dataTestId`? | `string` | `data-testid` of the group. Default: `"input-block"`. |
| `forwardedRef`? | `React.Ref<HTMLInputElement>` | Ref to the `<input>` element itself. |
| `hoverColor`? | `string` | Colour of that icon on hover. |
| `iconColor`? | `string` | Colour of that icon. |
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
| `onBlur`? | `(e: React.FocusEvent<HTMLInputElement>) => void` | Called when field is blurred |
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

Plus 298 more props inherited from `React.AriaAttributes`, `React.DOMAttributes`, `React.HTMLAttributes` and `React.InputHTMLAttributes`, forwarded to the element.

### Enums

<APITable>

| Enum        | Members                                                |
| ----------- | ------------------------------------------------------ |
| `InputSize` | `base`, `middle`, `large`                              |
| `InputType` | `text`, `password`, `email`, `tel`, `search`, `number` |

</APITable>

## Recipes

### The rules tooltip, with a generator

Every string in the tooltip is a prop; `generatePasswordTitle` is what adds the generate link,
and without it there is no way to reach the generator except through the `ref`.

```tsx
import { useState } from "react";
import { PasswordInput } from "@onlyoffice/apps-ui-kit/components/password-input";

const SETTINGS = {
  minLength: 8,
  upperCase: true,
  digits: true,
  specSymbols: true,
};

export function SignUpPassword() {
  const [password, setPassword] = useState("");
  const [isStrong, setIsStrong] = useState(false);

  return (
    <PasswordInput
      id="sign-up-password"
      inputValue={password}
      passwordSettings={SETTINGS}
      hasError={Boolean(password) && !isStrong}
      tooltipPasswordTitle="Password must contain:"
      tooltipPasswordLength="at least 8 characters"
      tooltipPasswordDigits="a digit"
      tooltipPasswordCapital="a capital letter"
      tooltipPasswordSpecial="a symbol (!@#$%^&*)"
      generatePasswordTitle="Generate password"
      onChange={(_event, value) => setPassword(value ?? "")}
      onValidateInput={(passes) => setIsStrong(passes)}
    />
  );
}
```

### Entering an existing password

`simpleView` is the sign-in shape: field, eye, nothing else. No tooltip, no generator, and
`onValidateInput` is never called.

```tsx
import { useState } from "react";
import { PasswordInput } from "@onlyoffice/apps-ui-kit/components/password-input";

export function SignInPassword() {
  const [password, setPassword] = useState("");

  return (
    <PasswordInput
      id="sign-in-password"
      simpleView
      autoComplete="current-password"
      inputValue={password}
      placeholder="Password"
      onChange={(_event, value) => setPassword(value ?? "")}
    />
  );
}
```

### Disabled / read-only

`isDisabled` greys the field, removes the eye — [`InputBlock`](./input-block.md) drops
its icon when disabled — and forces the value back to hidden if it was revealed.

```tsx
import { PasswordInput } from "@onlyoffice/apps-ui-kit/components/password-input";

export function LockedPassword({ password }: { password: string }) {
  return (
    <PasswordInput id="locked-password" inputValue={password} isDisabled />
  );
}
```

### Generating from outside

The `ref` gives you the generator and the current value, which is how a "generate" button
outside the field works.

```tsx
import { useRef, useState } from "react";
import { Button, ButtonSize } from "@onlyoffice/apps-ui-kit/components/button";
import {
  PasswordInput,
  type PasswordInputHandle,
} from "@onlyoffice/apps-ui-kit/components/password-input";

export function PasswordWithButton() {
  const handle = useRef<PasswordInputHandle | null>(null);
  const [password, setPassword] = useState("");

  return (
    <div>
      <PasswordInput
        id="generated-password"
        ref={handle}
        inputValue={password}
        isDisableTooltip
        onChange={(_event, value) => setPassword(value ?? "")}
      />
      <Button
        size={ButtonSize.small}
        label="Generate"
        onClick={(event) => handle.current?.onGeneratePassword(event)}
      />
    </div>
  );
}
```

## Behaviour the types don't state

- **`inputValue` is a seed, not a controlled value.** The component holds the password in its own
  state; setting `inputValue` to something new is ignored, except when it becomes `""` — which
  does clear the field — or when `isSimulateType` is on. Read the value back from `onChange`'s
  second argument or from the `ref`.
- **The tooltip opens by itself, and needs `hasError` to close.** It opens whenever the value is
  shorter than `minLength`, or `hasError` or `hasWarning` is set; it closes only when the length
  is met _and_ `hasError` is defined and false. Leave `hasError` out altogether and the tooltip
  never closes on its own.
- **Two fields on one page need distinct `id`s.** The tooltip is anchored by a selector built
  from `id` or, failing that, `inputName` — which defaults to `passwordInput` for everyone. Two
  fields without ids share one anchor and the tooltip attaches to the wrong field.
- **`simpleView` disables validation, not just the tooltip.** The change handler stores the value
  and returns before checking, so `onValidateInput` never fires and the strength state stays at
  its initial value.
- **The default rules check length only.** `passwordSettings` defaults to `minLength: 8` with
  `upperCase`, `digits` and `specSymbols` all `false`, so a weak password passes unless you pass
  your own settings.
- **`isSimulateType` renders a text input.** The value shown is `simulateSymbol` repeated, the
  real password lives in state, and the caret is restored by looking up
  `document.getElementById("conversion-password")` — a literal id. Give the field exactly that
  `id` or the caret jumps to the end on every keystroke.
- **Nothing in the tooltip is translated.** `tooltipPasswordTitle` and its siblings are printed
  as given; an omitted one renders an empty line, and the rules list still reserves its space.
- **The generate link appears only with `generatePasswordTitle`.** Without it the generator is
  reachable only through the `ref`.
- **Generating reveals the password.** The generated value is written into the field and the
  type switches to `text`, so the user sees what was made; the eye hides it again.
- **`isDisabled` also un-reveals**: an effect forces the type back to `password`, so a revealed
  field hides itself when it is disabled.
- **`scale` defaults to `true` here**, unlike [`InputBlock`](./input-block.md), and
  `autoComplete` to `"new-password"`; pass `"current-password"` at sign-in.
- `size` falls back to `InputSize.middle`, not `base`.
- `emailInputName`, `clipActionResource` and `clipCopiedResource` are dead: they feed a copy
  button that is not rendered.
- A click anywhere outside closes the tooltip, through a `mousedown` listener on the document.

## CSS variables

The field's colours come from the shared input styles, so they follow
[`TextInput`](./text-input.md): set its `--text-input-bg`, `--text-input-color`,
`--text-input-border-color`, `--text-input-border-hover`, `--text-input-border-focus` and
`--text-input-radius` on any ancestor of the field. The tooltip follows
[`Tooltip`](../overlays/tooltip.md). The rules in the tooltip are coloured green or red from the
kit's status colours, which are not overridable.

<APITable>

| Variable                         | Default | Effect                                           |
| -------------------------------- | ------- | ------------------------------------------------ |
| `--password-input-tooltip-width` | `294px` | Width of the rules tooltip on tablet and desktop |

</APITable>

The rules tooltip is rendered in a portal at the end of `<body>`, so a value set on a wrapper
around the field never reaches it: set `--password-input-tooltip-width` on `:root` or `body`. On
mobile the width is a fixed `320px` and the variable is not read.

## Accessibility

- The eye is [`InputBlock`](./input-block.md)'s icon button, and it carries no label, so
  a screen reader announces an unnamed control that changes nothing it can perceive.
- **The strength tooltip is not tied to the field.** It is opened imperatively and has no
  `aria-describedby`, so the rules and whether they are met are invisible to assistive
  technology — and colour is the only signal that a rule now passes.
- The field has no label of its own. Use [`FieldContainer`](./field-container.md) or
  [`Label`](./label.md) with `htmlFor` pointing at `id`.
- **It is not in the tab order unless you pass `tabIndex`.** The prop goes straight to
  [`InputBlock`](./input-block.md), whose own default is `-1`. Pass `tabIndex={0}`.
- **`isSimulateType` puts the password into a `type="text"` field.** Password managers, the
  browser's own reveal control and assistive technology all treat it as ordinary text; avoid it
  where a real password field will do.
- `tabIndex` comes from [`InputBlock`](./input-block.md), which defaults it to -1 — pass
  `tabIndex={0}` or the field is not reachable by keyboard.

## Test ids

<APITable>

| Element            | `data-testid`                                            |
| ------------------ | -------------------------------------------------------- |
| The wrapper        | `password-input`, or `testId`                            |
| The tooltip anchor | `tooltipContent`                                         |
| The eye            | `password_input_eye_icon`, `password_input_eye_off_icon` |
| The generate link  | `generate_password_link`                                 |

</APITable>

## Related

- [`InputBlock`](./input-block.md) — the field and icon underneath.
- [`TextInput`](./text-input.md) — where most of the inherited props are documented.
- [`Tooltip`](../overlays/tooltip.md) — what the rules are shown in.
