---
description: "White card of a fixed width that the portal's sign-in and wizard forms sit on."
custom_edit_url: "https://github.com/ONLYOFFICE/docspace-ui-kit-react/blob/9954315f61fd4830b7ea0582c3d58bee0e85d0aa/components/form-wrapper/README.md"
---

import ThemedImage from '@theme/ThemedImage';

import APITable from '@site/src/components/APITable/APITable';

# FormWrapper

White card of a fixed width that the portal's sign-in and wizard forms sit on. It is a shadowed,
rounded box 320px wide that drops all of its decoration on a phone.

<ThemedImage alt="FormWrapper" width={400} sources={{ light: require('./form-wrapper--primary-light.png').default, dark: require('./form-wrapper--primary-dark.png').default }} />

## Use this when / not when

- Use for a short standalone form on a page of its own — sign in, create a portal, reset a
  password — where the form is the page's only content.
- Not for a form inside an existing page or panel. The card is 320px wide and cannot be widened
  by a prop, and its shadow reads as a second surface on top of one you already have.
- Not as a general-purpose card — [`Card`](../data-display/card.md) is that, without the fixed width.
- Not around a field on its own. [`FieldContainer`](./field-container.md) is what
  arranges a label, a control and an error line.

## Import

```ts
import { FormWrapper } from "@onlyoffice/apps-ui-kit/components/form-wrapper";
```

Also exported from the root barrel `@onlyoffice/apps-ui-kit`.

`FormWrapperProps` is not exported — type a wrapper's props yourself.

Needs `ThemeProvider` from `@onlyoffice/apps-ui-kit/providers/theme`: the background and the
shadow are chosen by the `light` and `dark` classes the provider sets.

## Stories

### Default

The card on its own around a heading and a line of text, to judge its width, padding, corners and shadow before a form goes in. Change the class, id or inline styles live in the Controls panel below.

<ThemedImage alt="Default" width={400} sources={{ light: require('./form-wrapper--default-light.png').default, dark: require('./form-wrapper--default-dark.png').default }} />

### With Login Form

A sign-in form as the card is meant to hold it: an email field, a password field and a primary button. Each field row is given a width of 100% and each control `scale`, so they span the card instead of shrinking to their content.

<ThemedImage alt="With Login Form" width={400} sources={{ light: require('./form-wrapper--with-login-form-light.png').default, dark: require('./form-wrapper--with-login-form-dark.png').default }} />

### With Registration Form

A longer form with four fields, to show that the card keeps its fixed width and only grows taller as fields are added.

<ThemedImage alt="With Registration Form" width={400} sources={{ light: require('./form-wrapper--with-registration-form-light.png').default, dark: require('./form-wrapper--with-registration-form-dark.png').default }} />

### Css Customization

Every overridable variable set on a wrapper around one card -- the variables are listed under CSS variables on this page. Set the minimum and the maximum width together: either one alone is clamped by the other.

<ThemedImage alt="Css Customization" width={496} sources={{ light: require('./form-wrapper--css-customization-light.png').default, dark: require('./form-wrapper--css-customization-dark.png').default }} />

## Minimal example

The card centres its children and sizes itself, so the page only has to place it.

```tsx
import { Button, ButtonSize } from "@onlyoffice/apps-ui-kit/components/button";
import { FieldContainer } from "@onlyoffice/apps-ui-kit/components/field-container";
import { FormWrapper } from "@onlyoffice/apps-ui-kit/components/form-wrapper";
import {
  InputSize,
  InputType,
  TextInput,
} from "@onlyoffice/apps-ui-kit/components/text-input";

export function SignIn({
  email,
  onEmailChange,
  onSubmit,
}: {
  email: string;
  onEmailChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: () => void;
}) {
  return (
    <div style={{ display: "flex", justifyContent: "center", padding: 48 }}>
      <FormWrapper>
        <FieldContainer
          isVertical
          labelVisible
          labelText="Email"
          style={{ width: "100%" }}
        >
          <TextInput
            type={InputType.email}
            size={InputSize.base}
            value={email}
            onChange={onEmailChange}
            scale
          />
        </FieldContainer>
        <Button
          primary
          scale
          size={ButtonSize.normal}
          label="Sign in"
          onClick={onSubmit}
        />
      </FormWrapper>
    </div>
  );
}
```

## Props


<APITable>

| Property | Type | Description |
| --- | --- | --- |
| `children` | `React.ReactNode` | The form. Every child is centred horizontally by the wrapper's own flex column. |
| `className`? | `string` | Applied to the card. |
| `id`? | `string` | Applied to the card. |
| `style`? | `React.CSSProperties` | Applied to the card. |

</APITable>

## Recipes

### A wider card

Both `min-width` and `max-width` are set, so widening the card means moving the pair. Setting
only the maximum leaves the minimum holding it at 320px.

```tsx
import { FormWrapper } from "@onlyoffice/apps-ui-kit/components/form-wrapper";

export function WideForm({ children }: { children: React.ReactNode }) {
  return (
    <FormWrapper
      style={
        {
          "--form-wrapper-min-width": "480px",
          "--form-wrapper-max-width": "480px",
        } as React.CSSProperties
      }
    >
      {children}
    </FormWrapper>
  );
}
```

## Behaviour the types don't state

- **The width is fixed, and it is not a prop.** `min-width` and `max-width` are both 320px on a
  desktop and both 416px on a tablet, so the card ignores its container. Override
  `--form-wrapper-min-width` and `--form-wrapper-max-width` together — setting one leaves the
  other clamping.
- **On a phone the card stops being a card.** Under the mobile breakpoint the padding, radius,
  shadow and background are all removed — the last two with `!important`, so neither `style` nor
  a class of yours can put them back. The form ends up flush against the page.
- **Children are centred.** The card is a flex column with `align-items: center`, so a child
  without a width of its own shrinks to its content instead of filling the card. Give inputs and
  buttons `scale` to make them span it — and a [`FieldContainer`](./field-container.md)
  row `style={{ width: "100%" }}` as well, since it is a flex box with no width of its own and
  `scale` only fills the row the control sits in.
- **It brings 32px of padding**, which is on top of any margin the children carry —
  [`FieldContainer`](./field-container.md)'s own 16px bottom margin among them.
- `id`, `className` and `style` are spread onto the card, and any other DOM attribute you pass
  goes with them even though the type does not list it.

## CSS variables

<APITable>

| Variable                   | Default            | Effect                            |
| -------------------------- | ------------------ | --------------------------------- |
| `--form-wrapper-bg`        | white / black      | Background of the card            |
| `--form-wrapper-shadow`    | theme popup shadow | Shadow under the card             |
| `--form-wrapper-radius`    | `12px`             | Corner radius                     |
| `--form-wrapper-padding`   | `32px`             | Padding inside the card           |
| `--form-wrapper-max-width` | `320px`            | Largest width; 416px on a tablet  |
| `--form-wrapper-min-width` | `320px`            | Smallest width; 416px on a tablet |

</APITable>

Under the mobile breakpoint the card sets its own padding, radius, shadow and background, so none
of those four variables has an effect on a phone — the background and the shadow with
`!important`, which a `style` or a class of yours cannot beat either. The two width variables work
on a desktop only: a tablet fixes the width at 416px and a phone at 100%. Set the minimum and the
maximum together, since either one alone is clamped by the other.

## Accessibility

- The card is a plain `<div>`: it carries no landmark and no heading. Put your own `<form>`
  inside it, and a heading above the fields, or the page has no structure at all.
- Centring is visual only; the reading order is the order of the children.
- Nothing here is focusable, and the card does not trap focus — it is not a dialog.

## Test ids

<APITable>

| Element  | `data-testid`  |
| -------- | -------------- |
| The card | `form-wrapper` |

</APITable>

It cannot be overridden by a prop.

## Related

- [`FieldContainer`](./field-container.md) — the label and field rows that go inside.
- [`TextInput`](./text-input.md) — pass `scale` so it spans the card.
- [`Button`](../interactive-elements/button.md) — the same.
