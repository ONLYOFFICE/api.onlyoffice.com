---
description: "16px progress ring with a cross in the middle, for cancelling what it is measuring."
custom_edit_url: "https://github.com/ONLYOFFICE/docspace-ui-kit-react/blob/9954315f61fd4830b7ea0582c3d58bee0e85d0aa/components/loading-button/README.md"
---

import ThemedImage from '@theme/ThemedImage';

import APITable from '@site/src/components/APITable/APITable';

# LoadingButton

16px progress ring with a cross in the middle, for cancelling what it is measuring. It is the
marker the portal puts next to a row while that row's file is uploading.

<ThemedImage alt="LoadingButton" width={38} sources={{ light: require('./loading-button--primary-light.png').default, dark: require('./loading-button--primary-dark.png').default }} />

## Use this when / not when

- Use next to one item whose operation is running and can be cancelled: a row in an upload
  list, a file being converted.
- Not for the progress of the whole screen — [`ProgressBar`](../status-components/progress-bar.md) is the
  bar, and [`FloatingButton`](../interactive-elements/floating-button.md) is the corner badge.
- Not for "something is loading" with no number behind it; [`Loader`](../status-components/loader.md) is
  the plain spinner.
- Not as a button with a label: this one is 16px square and has no text of its own.

## Import

```ts
import { LoadingButton } from "@onlyoffice/apps-ui-kit/components/loading-button";
```

Also exported from the root barrel `@onlyoffice/apps-ui-kit`.

Needs `ThemeProvider` from `@onlyoffice/apps-ui-kit/providers/theme`, which supplies the accent
colour the ring is drawn in.

## Stories

### Default

The ring as it first appears, before any progress is known: at the default `percent` of 0 a half ring spins. Change the percentage, drop the cross or pick colours live in the Controls panel below.

<ThemedImage alt="Default" width={38} sources={{ light: require('./loading-button--default-light.png').default, dark: require('./loading-button--default-dark.png').default }} />

### Progress Stages

Five rings labelled with their `percent`, to show how far the arc reaches at each stage: at 0% a half ring spins, the look for an operation whose size is not known yet, and from 25% on the arc grows clockwise until it closes at 100%.

<ThemedImage alt="Progress Stages" width={352} sources={{ light: require('./loading-button--progress-stages-light.png').default, dark: require('./loading-button--progress-stages-dark.png').default }} />

### In Conversion

The same rings with no cross in the middle (`inConversion`), for a marker that shows progress and nothing else: at 0% the ring spins, at 50% it is half filled, at 100% it is closed.

<ThemedImage alt="In Conversion" width={191} sources={{ light: require('./loading-button--in-conversion-light.png').default, dark: require('./loading-button--in-conversion-dark.png').default }} />

### Default Mode

The ring and the cross in the theme's grey instead of the accent colour (`isDefaultMode`), for an item that is waiting rather than running. Hover the ring to see the cross change colour.

<ThemedImage alt="Default Mode" width={36} sources={{ light: require('./loading-button--default-mode-light.png').default, dark: require('./loading-button--default-mode-dark.png').default }} />

### Custom Colors

Colours set per instance, for a ring that has to match its surroundings rather than the theme: the first three change the ring and the cross (`loaderColor`), the last also tints the disc behind the cross (`backgroundColor`).

<ThemedImage alt="Custom Colors" width={272} sources={{ light: require('./loading-button--custom-colors-light.png').default, dark: require('./loading-button--custom-colors-dark.png').default }} />

### Css Customization

Every overridable variable set on one wrapper -- the variables are listed under CSS variables on this page. The first ring shows the accent and the disc colours; the second sets `isDefaultMode` to show the idle colour, and hovering it shows the hover colour.

<ThemedImage alt="Css Customization" width={70} sources={{ light: require('./loading-button--css-customization-light.png').default, dark: require('./loading-button--css-customization-dark.png').default }} />

## Minimal example

The ring has to sit in a positioned box of its own — see "Behaviour the types don't state".

```tsx
import { LoadingButton } from "@onlyoffice/apps-ui-kit/components/loading-button";

export function UploadProgress({
  percent,
  onCancel,
}: {
  percent: number;
  onCancel: () => void;
}) {
  return (
    <div style={{ position: "relative", width: 16, height: 16 }}>
      <LoadingButton percent={percent} onClick={onCancel} />
    </div>
  );
}
```

## Props


<APITable>

| Property | Type | Description |
| --- | --- | --- |
| `backgroundColor`? | `string` | CSS colour of the disc behind the cross. |
| `className`? | `string` | Ignored. Nothing reads this prop; style the ring through the custom properties. |
| `id`? | `string` | Ignored. Nothing reads this prop; the element carries no `id`. |
| `inConversion`? | `boolean` | Whether the cross in the middle is dropped, leaving the ring on its own. Default: `false`. |
| `isDefaultMode`? | `boolean` | Whether the ring is drawn in the idle grey instead of the accent colour, and lightens on hover. |
| `loaderColor`? | `string` | CSS colour of the ring and of the cross. Overrides the accent colour. |
| `onClick`? | `VoidFunction` | Called when anything inside the 16px square is clicked, including the cross. |
| `percent`? | `number` | How much of the ring is filled, 0–100. At `0` the ring spins instead of showing an arc. Default: `0`. |
| `style`? | `CSSProperties` | Ignored. Nothing reads this prop either. |

</APITable>

## Recipes

### Indeterminate

Leaving `percent` at its default of `0` spins the ring instead of filling it, which is the look
for an operation whose size is not known yet.

```tsx
import { LoadingButton } from "@onlyoffice/apps-ui-kit/components/loading-button";

export function Converting({ onCancel }: { onCancel: () => void }) {
  return (
    <div style={{ position: "relative", width: 16, height: 16 }}>
      <LoadingButton inConversion onClick={onCancel} />
    </div>
  );
}
```

### Idle

`isDefaultMode` draws the ring in grey rather than the accent colour and lightens the cross on
hover — the look for a row that is queued rather than running.

```tsx
import { LoadingButton } from "@onlyoffice/apps-ui-kit/components/loading-button";

export function Queued({ onRemove }: { onRemove: () => void }) {
  return (
    <div style={{ position: "relative", width: 16, height: 16 }}>
      <LoadingButton isDefaultMode onClick={onRemove} />
    </div>
  );
}
```

### Colours of its own

`loaderColor` recolours the ring and the cross, and `backgroundColor` the disc behind the
cross, for a ring that has to match its surroundings rather than the theme.

```tsx
import { LoadingButton } from "@onlyoffice/apps-ui-kit/components/loading-button";

export function Exporting({
  percent,
  onCancel,
}: {
  percent: number;
  onCancel: () => void;
}) {
  return (
    <div style={{ position: "relative", width: 16, height: 16 }}>
      <LoadingButton
        percent={percent}
        loaderColor="var(--export-colour)"
        backgroundColor="var(--export-surface)"
        onClick={onCancel}
      />
    </div>
  );
}
```

## Behaviour the types don't state

- **Every part of the ring is `position: absolute` and the component positions nothing
  itself.** The outer element is a plain 16×16 `<div>` with no `position`, so the mask, the
  fill and the cross are laid out against whatever positioned ancestor happens to be above
  them. Wrap it in a `position: relative` box of 16×16, or it will be drawn somewhere else
  entirely.
- **`id`, `className` and `style` are ignored.** They are declared, never read and not even
  spread onto the element, so there is no way to hook a class onto it — use the custom
  properties below.
- **`percent` is a number from 0 to 100** and is turned into `percent × 1.8deg` of arc on each
  half of the ring, so the fill grows clockwise from a quarter at 25 to a closed circle at 100.
  At `0` the arc rule is replaced by a half ring rotating endlessly, which is why a ring that
  never receives a percentage looks like a spinner.
- **`inConversion` only removes the cross.** It is drawn as an unbroken ring; whether it spins
  still depends on `percent` being `0`.
- **The whole 16px square is clickable**, not just the cross, and `onClick` receives no
  arguments. There is no disabled state: if the operation cannot be cancelled, do not render
  the component.
- **A five-second timer runs on mount** and flips the internal animation flag, then restarts
  itself once. It has no visible effect in the states described above; there is nothing to
  configure and nothing to clean up.
- **The component brings no margin and no label.** It is 16×16 with a 12px disc inside it, and
  the cross is drawn in the ring's own colour on a disc that is white in the light theme and
  black in the dark one.

## CSS variables

Set them on any ancestor.

<APITable>

| Variable                      | Default              | Effect                                     |
| ----------------------------- | -------------------- | ------------------------------------------ |
| `--loading-button-accent`     | `var(--accent-main)` | Colour of the ring and the cross.          |
| `--loading-button-idle`       | theme grey           | The same, under `isDefaultMode`.           |
| `--loading-button-hover-fill` | theme token          | Colour of the cross on hover in that mode. |
| `--loading-button-custom-bg`  | white / black        | Colour of the disc behind the cross.       |

</APITable>

`loaderColor` and `backgroundColor` are written as inline custom properties, so they win over
`--loading-button-accent` and `--loading-button-custom-bg` respectively. `loaderColor` does
nothing under `isDefaultMode`: that mode reads `--loading-button-idle` and
`--loading-button-hover-fill` only.

## Accessibility

- **The component is a `<div>` with a click handler**: no role, no `tabIndex`, no key handler
  and no accessible name. It cannot be reached or activated from the keyboard, and nothing
  announces what it is or what cancelling it would do.
- The progress is conveyed only by the arc. There is no `role="progressbar"` and no
  `aria-valuenow`, so the percentage is invisible to assistive technology.
- Give the cancel action a real control elsewhere in the row, or wrap this one in a
  [`Button`](../interactive-elements/button.md) with a label.

## Test ids

<APITable>

| Element  | `data-testid`              |
| -------- | -------------------------- |
| The ring | `loading-button-container` |

</APITable>

It cannot be overridden by a prop.

## Related

- [`FloatingButton`](../interactive-elements/floating-button.md) — the same idea at the size of a corner badge.
- [`Loader`](../status-components/loader.md) — a spinner with no progress behind it.
- [`ProgressBar`](../status-components/progress-bar.md) — the linear form of the same number.
