---
description: "A labelled bar for an operation whose progress you can measure, with a status or error line under it."
custom_edit_url: "https://github.com/ONLYOFFICE/docspace-ui-kit-react/blob/9954315f61fd4830b7ea0582c3d58bee0e85d0aa/components/progress-bar/README.md"
---

import ThemedImage from '@theme/ThemedImage';

import APITable from '@site/src/components/APITable/APITable';

# ProgressBar

A labelled bar for an operation whose progress you can measure, with a status or error line under
it. It is three stacked lines — label, bar, status — and it is always as wide as its container.

<ThemedImage alt="ProgressBar" width={1014} sources={{ light: require('./progress-bar--primary-light.png').default, dark: require('./progress-bar--primary-dark.png').default }} />

## Use this when / not when

- Use when you can say how far along the work is: an upload, a conversion, a bulk action.
- Use `isInfiniteProgress` when you cannot, and the operation still has its own place on the
  screen — but read what it does to the announced value below.
- Not for a page-wide wait with nothing to show — that is
  [`TopLoaderService`](../feedback/top-loading-indicator.md) at the top of the window or
  [`AppLoader`](./app-loader.md) over it.
- Not for dimming a form while it saves — [`LoaderWrapper`](./loader-wrapper.md).
- **It is not a slider.** Nothing here is interactive, and there is no way to click a position.

## Import

```ts
import { ProgressBar } from "@onlyoffice/apps-ui-kit/components/progress-bar";
```

Also exported from the root barrel `@onlyoffice/apps-ui-kit`.

Needs `ThemeProvider` above it in the tree. The track and fill colours are declared only under the
`light` and `dark` classes it puts on `<body>`, and a colour that does not resolve leaves the
element with no background at all — **an invisible bar**, not a default-coloured one. Setting
`--progress-bar-track` and `--progress-bar-fill` yourself is the other way out.

## Stories

### Default

Use it for an operation whose progress you can measure: the label names the operation and the fill shows how far it has got (`percent`, `label`). Change any other prop live in the Controls panel below.

<ThemedImage alt="Default" width={1014} sources={{ light: require('./progress-bar--default-light.png').default, dark: require('./progress-bar--default-dark.png').default }} />

### With Status

Add a status line when the reader needs more than the fill tells them — how many items are done, what is being processed now (`status`).

<ThemedImage alt="With Status" width={1014} sources={{ light: require('./progress-bar--with-status-light.png').default, dark: require('./progress-bar--with-status-dark.png').default }} />

### With Error

When the operation fails, the message takes the place of the status line in the error colour, and the bar stays where it stopped (`error`).

<ThemedImage alt="With Error" width={1014} sources={{ light: require('./progress-bar--with-error-light.png').default, dark: require('./progress-bar--with-error-dark.png').default }} />

### Infinite Progress

Use it when the operation cannot report how far it has got: a short strip slides across the track until the bar is removed (`isInfiniteProgress`).

<ThemedImage alt="Infinite Progress" width={1014} sources={{ light: require('./progress-bar--infinite-progress-light.png').default, dark: require('./progress-bar--infinite-progress-dark.png').default }} />

### Complete

The finished state: the track is filled completely and the status line confirms the result (`percent={100}`).

<ThemedImage alt="Complete" width={1014} sources={{ light: require('./progress-bar--complete-light.png').default, dark: require('./progress-bar--complete-dark.png').default }} />

### Preparation Portal

Use `PreparationPortalProgress` for a full-page wait where the number itself matters: a taller bar with the percentage printed in its middle and a centred caption below (`percent`, `text`). The percentage turns from dark to light once the fill passes 50%; move `percent` in the Controls panel below to see it.

<ThemedImage alt="Preparation Portal" width={1014} sources={{ light: require('./progress-bar--preparation-portal-light.png').default, dark: require('./progress-bar--preparation-portal-dark.png').default }} />

### Right To Left

The bar under a right-to-left interface: the label and status line align to the right, the fill grows from the right edge, and the infinite strip in the second bar slides from right to left. The direction comes from the theme's `interfaceDirection` (the Direction toolbar); the wrapper also carries `dir="rtl"` for the rules that read the DOM direction.

<ThemedImage alt="Right To Left" width={1014} sources={{ light: require('./progress-bar--right-to-left-light.png').default, dark: require('./progress-bar--right-to-left-dark.png').default }} />

### Css Customization

The variables are listed under CSS variables on this page; the example sets every one of them on one wrapper.

The first bar shows the track, fill, size, radius, margin and status colour; the second sets `error` to show `--progress-bar-error-text`, since an error takes the place of the status line.

<ThemedImage alt="Css Customization" width={1014} sources={{ light: require('./progress-bar--css-customization-light.png').default, dark: require('./progress-bar--css-customization-dark.png').default }} />

## Minimal example

```tsx
import { useEffect, useState } from "react";

import { ProgressBar } from "@onlyoffice/apps-ui-kit/components/progress-bar";

export function Upload() {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setPercent((value) => (value >= 100 ? 100 : value + 10)),
      300,
    );
    return () => clearInterval(id);
  }, []);

  return <ProgressBar percent={percent} label="Uploading Report.docx" />;
}
```

## Props


<APITable name="Props">

| Property | Type | Description |
| --- | --- | --- |
| `percent` | `number` | How far along the operation is, 0 to 100. Anything above 100 is clamped; a negative number is not, and reaches `aria-valuenow` as it stands. |
| `className`? | `string` | Added after the component's own class on the bar element, not on the outer container. |
| `error`? | `string` | Line of text under the bar in the error colour. It replaces `status` whenever both are given; nothing else about the bar changes. |
| `isInfiniteProgress`? | `boolean` | Replaces the filled portion with a strip that slides across the track for ever. `percent` is still what `aria-valuenow` reports, so pass the label instead of a number a reader can act on. |
| `label`? | `string` | Line of text above the bar. It is also the bar's `title` and its `aria-label`, so without it the progress bar has no accessible name. |
| `status`? | `string` | Line of text under the bar — "3 of 4 files processed". It is hidden while `error` is set, which takes the same slot. |
| `style`? | `CSSProperties` | Inline style of the outer container — the label, the bar and the status line together. The bar itself is styled through the `--progress-bar-*` custom properties. |

</APITable>

## Recipes

### Error

`error` takes the same line as `status` and wins over it. The bar itself does not change — it stays
where it stopped, in the ordinary fill colour — so say in the text what happened.

```tsx
import { ProgressBar } from "@onlyoffice/apps-ui-kit/components/progress-bar";

export function FailedUpload() {
  return (
    <ProgressBar
      percent={30}
      label="Report.docx"
      status="Uploading"
      error="The connection was lost"
    />
  );
}
```

### A wait with no measurable end

`isInfiniteProgress` replaces the filled portion with a strip that slides across the track for
ever. Give it a label: the bar carries no other clue about what is happening.

```tsx
import { ProgressBar } from "@onlyoffice/apps-ui-kit/components/progress-bar";

export function Converting() {
  return <ProgressBar percent={0} label="Converting" isInfiniteProgress />;
}
```

### A thicker, differently coloured bar

Six custom properties cover the shape and the colours, and they override the theme rather than
supplement it, so a bar styled this way looks the same in both themes.

```tsx
import type { CSSProperties } from "react";

import { ProgressBar } from "@onlyoffice/apps-ui-kit/components/progress-bar";

export function ThickBar() {
  return (
    <div
      style={
        {
          "--progress-bar-size": "8px",
          "--progress-bar-radius": "8px",
          "--progress-bar-track": "#e9d5ff",
          "--progress-bar-fill": "#7c3aed",
        } as CSSProperties
      }
    >
      <ProgressBar percent={65} label="Indexing" />
    </div>
  );
}
```

## Behaviour the types don't state

- **Without a theme provider the bar is invisible.** Both colours resolve through variables that
  exist only under the provider's `light` and `dark` classes, and a failing `var()` throws away the
  whole `background-color` declaration — the track and the fill both fall back to transparent.
- **The fill is a different colour in each theme, and not a matching one**: the kit's blue under
  the light theme, the warning orange under the dark one. Set `--progress-bar-fill` if a progress
  bar should not look like a warning at night.
- **It brings its own spacing.** 10px above the label and 8px below the bar, and the label's line is
  rendered even when there is no `label` — so an unlabelled bar still starts 10px down. The bottom
  margin is `--progress-bar-bottom-margin`; the top one is not adjustable.
- **`percent` is clamped above but not below.** Over 100 becomes 100; a negative number makes the
  width declaration invalid, so the bar reads as empty while `aria-valuenow` reports the negative
  value.
- **`className` and `style` land in different places**: `className` on the bar, `style` on the
  container around all three lines.
- **Extra DOM attributes do not compile.** The props type is closed — no `id`, no `data-*`, no
  event handlers — even though the component spreads a rest object onto the bar.
- **The stylesheet's `--progress-percent` does nothing.** The width of the fill is written as an
  inline style, which beats the rule that reads that property.
- **It mirrors in a right-to-left interface.** The fill grows from the right edge, and the sliding
  strip of the infinite mode travels right to left. Both follow the theme provider — its `data-dir`
  on `<html>` and the direction it gives `<body>` — so no `dir` attribute is needed.
- The fill transitions over 0.6s, so a bar driven in large steps keeps moving after the number has
  changed.

## Sub-components

### PreparationPortalProgress

A second, unrelated bar: 24px tall with the percentage written inside it, used on the portal's
"preparing your workspace" screen. It is exported from the same folder and shares none of
`ProgressBar`'s props or custom properties.


<APITable name="PreparationPortalProgress">

| Property | Type | Description |
| --- | --- | --- |
| `percent` | `number` | How far along the operation is, 0 to 100. It is not clamped: a larger number overflows the track. |
| `aria-label`? | `string` | Accessible name of the outer element. Not set by default. |
| `aria-valuemax`? | `number` | Upper bound reported to assistive technology. Not set by default. |
| `aria-valuemin`? | `number` | Lower bound reported to assistive technology. Not set by default. |
| `aria-valuenow`? | `number` | Current value reported to assistive technology. Not set by default, and not derived from `percent`. |
| `className`? | `string` | Added to the outer element, replacing nothing — this component has no class of its own there. |
| `data-percent`? | `number` | Written to the outer element as-is; nothing in the component reads it. |
| `data-testid`? | `string` | Replaces the outer element's `data-testid`. |
| `role`? | `string` | Landmark role of the outer element. Nothing is set by default, so pass `"progressbar"` yourself. |
| `text`? | `string` | Centred line of text under the bar. |

</APITable>

- **It announces nothing by default.** The `role` and `aria-*` props exist because the component
  sets none of them; pass them or the bar is a pair of anonymous `<div>`s.
- **`percent` is not clamped here.** Over 100 the filled line simply overflows its track.
- The number inside the bar is absolutely positioned near the middle and flips from dark to light
  once `percent` passes 50, so it stays readable over the fill.
- The bar carries a 16px bottom margin of its own, and the text under it is centred.

## CSS variables

<APITable name="CSS-variables">

| Variable                       | Default                         | Effect                                                                  |
| ------------------------------ | ------------------------------- | ----------------------------------------------------------------------- |
| `--progress-bar-track`         | theme grey                      | Background of the track                                                 |
| `--progress-bar-fill`          | theme blue (orange in the dark) | Colour of the filled portion, and of the sliding strip in infinite mode |
| `--progress-bar-text`          | theme text colour               | Colour of the status line                                               |
| `--progress-bar-error-text`    | theme error colour              | Colour of the error line                                                |
| `--progress-bar-size`          | `4px`                           | Height of the bar                                                       |
| `--progress-bar-radius`        | `3px`                           | Corner radius of bar and fill                                           |
| `--progress-bar-bottom-margin` | `8px`                           | Space between the bar and the text                                      |

</APITable>

`--progress-bar-error-text` shows only while `error` is set, since the error line takes the place
of the status line. `PreparationPortalProgress` reads none of these.

## Accessibility

- The bar is a `role="progressbar"` with `aria-valuemin`, `aria-valuemax` and `aria-valuenow`, and
  its accessible name is the `label` — **without a label it has none**, and a screen reader
  announces a bare percentage.
- **The infinite mode is not marked indeterminate.** `aria-valuenow` keeps reporting whatever
  `percent` is, usually 0, while the strip slides; a screen reader is told the work has not started.
  Either keep `percent` meaningful or hide the bar from assistive technology and announce the state
  in text.
- The status and error lines are ordinary text, not a live region: a change is not announced. Put
  them in an `aria-live="polite"` container of your own when the outcome matters.
- The error state is carried by the colour of one line and by its wording — nothing sets
  `aria-invalid` or a role — so the wording has to be enough on its own.

## Test ids

<APITable name="Test-ids">

| Element                      | `data-testid`                 |
| ---------------------------- | ----------------------------- |
| The bar                      | `progress-bar`                |
| The filled portion           | `progress-bar-percent`        |
| The sliding strip (infinite) | `progress-bar-animation`      |
| `PreparationPortalProgress`  | `preparation-portal-progress` |

</APITable>

Only the last is settable, through that component's `data-testid` prop. The bar also carries
`data-progress`, and `data-status` or `data-error` when either is set.

## Related

- [`LoaderWrapper`](./loader-wrapper.md) — dims the area the operation belongs to.
- [`TopLoaderService`](../feedback/top-loading-indicator.md) — the page-wide bar for a wait with no number.
- [`Loader`](./loader.md) — a spinner when there is nothing to measure.
