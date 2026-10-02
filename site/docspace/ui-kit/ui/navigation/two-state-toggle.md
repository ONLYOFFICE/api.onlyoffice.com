---
description: "Pill that switches the portal between its classic view and the new dashboard."
custom_edit_url: "https://github.com/ONLYOFFICE/docspace-ui-kit-react/blob/446f115916d79a87d07b9e3dddb1e39a263784ee/components/two-state-toggle/README.md"
---

import ThemedImage from '@theme/ThemedImage';

import APITable from '@site/src/components/APITable/APITable';

# TwoStateToggle

Pill that switches the portal between its classic view and the new dashboard. It is
portal-internal: the destination URLs and the storage key are written into the component, so it
does nothing useful outside ONLYOFFICE's own application.

<ThemedImage alt="TwoStateToggle" width={276} sources={{ light: require('./two-state-toggle--primary-light.png').default, dark: require('./two-state-toggle--primary-dark.png').default }} />

## Use this when / not when

- Use only inside the portal, to offer the switch between the classic DocSpace view and the new
  dashboard.
- Not as a general two-way switch. It navigates to `/dashboard` and `/`, writes the
  `useDocSpace` key in `localStorage`, and cannot be pointed anywhere else.
- Not for an on/off setting — [`ToggleButton`](../form-controls/toggle-button.md) is that, and it
  reports through `onChange` instead of navigating.
- Not for a choice between two views inside one page; it reloads or routes away.

## Import

```ts
import { TwoStateToggle } from "@onlyoffice/apps-ui-kit/components/two-state-toggle";
```

Also exported from the root barrel `@onlyoffice/apps-ui-kit`.

Needs `ThemeProvider` from `@onlyoffice/apps-ui-kit/providers/theme`. Every string it prints is
an English default you are expected to replace; nothing here is translated for you.


## Stories

### Default

The toggle in the NEW position, as a first visit finds it. Click it to open the confirmation dialog that guards the way back to the classic view; change any other prop live in the Controls panel below.

<ThemedImage alt="Default" width={276} sources={{ light: require('./two-state-toggle--default-light.png').default, dark: require('./two-state-toggle--default-dark.png').default }} />

### Showing Old State

Toggle in the OLD position. Clicking it switches to NEW immediately (calls `onNavigate("/dashboard")`).

<ThemedImage alt="Showing Old State" width={276} sources={{ light: require('./two-state-toggle--showing-old-state-light.png').default, dark: require('./two-state-toggle--showing-old-state-dark.png').default }} />

### Without Title

Toggle without the text label — only the pill is rendered.

<ThemedImage alt="Without Title" width={168} sources={{ light: require('./two-state-toggle--without-title-light.png').default, dark: require('./two-state-toggle--without-title-dark.png').default }} />

### Custom Labels

All text strings are customizable — useful when the toggle is reused in other contexts. Click the toggle to see the dialog texts.

<ThemedImage alt="Custom Labels" width={229} sources={{ light: require('./two-state-toggle--custom-labels-light.png').default, dark: require('./two-state-toggle--custom-labels-dark.png').default }} />

### Right To Left

The toggle in a right-to-left layout: the title moves to the right of the pill, OLD takes the right half and NEW the left, and the thumb sits on the left over NEW. The wrapper carries `dir="rtl"` for the layout; the thumb's leftward slide comes from the theme's `interfaceDirection` (the Direction toolbar).

<ThemedImage alt="Right To Left" width={216} sources={{ light: require('./two-state-toggle--right-to-left-light.png').default, dark: require('./two-state-toggle--right-to-left-dark.png').default }} />

### Css Customization

All three overridable variables set on one wrapper -- the variables are listed under CSS variables on this page. Press Tab to focus the switch and see the ring take the custom accent.

<ThemedImage alt="Css Customization" width={276} sources={{ light: require('./two-state-toggle--css-customization-light.png').default, dark: require('./two-state-toggle--css-customization-dark.png').default }} />

## Minimal example

Pass your router's navigate, or the switch reloads the whole page.

```tsx
import { TwoStateToggle } from "@onlyoffice/apps-ui-kit/components/two-state-toggle";

export function DesignSwitch({
  navigate,
}: {
  navigate: (url: string) => void;
}) {
  return <TwoStateToggle onNavigate={navigate} />;
}
```

## Props


<APITable>

| Property | Type | Description |
| --- | --- | --- |
| `ariaLabel`? | `string` | Accessible name of the switch button. The English default is not translated for you. Default: `"Switch DocSpace design"`. |
| `className`? | `string` | Applied to the wrapper around the title and the pill. |
| `confirmBody`? | `string` | First paragraph of that dialog. Default: `"You are about to leave the new Dashboard and return to the classic DocSpace view."`. |
| `confirmCancel`? | `string` | Label of its cancel button. Default: `"Cancel"`. |
| `confirmHint`? | `string` | Second paragraph of that dialog. An empty string removes it. Default: `"You can return to the new Dashboard at any time by navigating to /dashboard."`. |
| `confirmOk`? | `string` | Label of that dialog's primary button. Default: `"Switch"`. |
| `confirmTitle`? | `string` | Heading of the dialog shown when leaving the new view. Default: `"Switch to Old Design"`. |
| `labelNew`? | `string` | Label on the right half, the new dashboard. Default: `"NEW"`. |
| `labelOld`? | `string` | Label on the left half of the pill, the classic view. Default: `"OLD"`. |
| `onNavigate`? | `(url: string) => void` | Called with the URL to go to — `/dashboard` or `/`, both hard-coded. Pass your router's navigate here; without it the component assigns `window.location.href` and the page reloads. |
| `title`? | `string` | Text to the left of the pill. An empty string removes it. Default: `"DocSpace design"`. |

</APITable>

## Recipes

### Translated

Every label is a prop with an English default, including the five strings of the confirmation
dialog.

```tsx
import { TwoStateToggle } from "@onlyoffice/apps-ui-kit/components/two-state-toggle";

export function TranslatedSwitch({
  t,
  navigate,
}: {
  t: (key: string) => string;
  navigate: (url: string) => void;
}) {
  return (
    <TwoStateToggle
      title={t("DesignTitle")}
      labelOld={t("DesignOld")}
      labelNew={t("DesignNew")}
      confirmTitle={t("SwitchTitle")}
      confirmBody={t("SwitchBody")}
      confirmHint={t("SwitchHint")}
      confirmOk={t("Switch")}
      confirmCancel={t("Cancel")}
      onNavigate={navigate}
    />
  );
}
```

## Behaviour the types don't state

- **The destinations are hard-coded.** Switching to the new view goes to `/dashboard`, switching
  back goes to `/`. Neither is a prop.
- **The state lives in `localStorage` under `useDocSpace`**, written as `"new"` or `"old"`, and
  it is read once during the first render. Anything absent or not `"old"` counts as the new view.
- **A storage failure is swallowed, not reported.** Both the read and the write are wrapped, so
  disabled site data, a private mode or a sandboxed frame no longer throws — but a failed read
  silently reports the new view and a failed write is dropped, leaving the toggle correct on
  screen and forgotten on the next load. The read still happens during the first render, so a
  server-rendered page and its hydration can disagree about which half is selected.
- **The two directions are not symmetrical.** Leaving the new view opens a confirmation
  [`ModalDialog`](../overlays/modal-dialog.md); returning to it happens immediately, with no
  dialog. Confirming writes `"old"` and navigates to `/`; cancelling or closing the
  dialog changes nothing.
- **Without `onNavigate` the page reloads**, because the component assigns
  `window.location.href`. Pass your router's navigate to keep the application alive.
- **There is no controlled mode.** No prop sets which side is active, and nothing reports a
  change other than the navigation itself.
- `title` and `confirmHint` are each removed by passing an empty string.
- **Right-to-left** puts the OLD half on the right and slides the thumb leftwards to NEW. The
  halves follow the `dir` around the pill, but the leftward slide comes from the `rtl` class
  that `ThemeProvider` puts on the document for an RTL `interfaceDirection`; with `dir="rtl"`
  alone the thumb slides the wrong way, out of the pill.

## CSS variables

<APITable>

| Variable                      | Default | Effect                                                      |
| ----------------------------- | ------- | ----------------------------------------------------------- |
| `--color-scheme-main-accent`  | theme   | Pill background, the label on the thumb, and the focus ring |
| `--button-root-border-radius` | `6px`   | Corner radius of the pill; the thumb's is 2px smaller       |
| `--text-color`                | theme   | Colour of the title                                         |

</APITable>

The thumb and the label beside it are white and read no variable.

## Accessibility

- The pill is a real `<button>` with `role="switch"` and `aria-checked`, so it is focusable with
  Tab and toggled by Enter or Space as a click would. It is announced as on while the new view is
  active and off in the classic view. Keyboard focus draws a ring around the pill in the accent
  colour.
- **Its name is `ariaLabel`**, the English "Switch DocSpace design" by default, which is not
  translated for you. `title`, `labelOld` and `labelNew` do not change it.
- The OLD and NEW labels are `aria-hidden`, which is right — but it means the only thing
  announced is `ariaLabel` plus the checked state, so translate `ariaLabel` along with the
  visible labels.
- The confirmation dialog is [`ModalDialog`](../overlays/modal-dialog.md) and inherits its focus
  behaviour.

## Test ids

The component sets no `data-testid` of its own. Query it by its `role="switch"`, or pass a
`className` and use that.

## Related

- [`ToggleButton`](../form-controls/toggle-button.md) — the general on/off switch.
- [`ModalDialog`](../overlays/modal-dialog.md) — the confirmation it opens.
- [`Button`](../interactive-elements/button.md) — the two buttons in that dialog.
