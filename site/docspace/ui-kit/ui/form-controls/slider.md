---
description: "Range input with the kit's own track and handle."
custom_edit_url: "https://github.com/ONLYOFFICE/docspace-ui-kit-react/blob/9954315f61fd4830b7ea0582c3d58bee0e85d0aa/components/slider/README.md"
---

import ThemedImage from '@theme/ThemedImage';

import APITable from '@site/src/components/APITable/APITable';

# Slider

Range input with the kit's own track and handle. It is a styled `<input type="range">` and
nothing more — no ticks, no value bubble, no label.

<ThemedImage alt="Slider" width={1014} sources={{ light: require('./slider--primary-light.png').default, dark: require('./slider--primary-dark.png').default }} />

## Use this when / not when

- Use for a rough setting on a continuous range where the exact number does not matter much:
  a quality, a zoom, an opacity.
- Not when the number matters — a [`TextInput`](./text-input.md) lets someone type it
  exactly.
- Not to show progress. It is an input, and it invites dragging;
  [`ProgressBar`](../status-components/progress-bar.md) is the read-only one.
- Not for a handful of discrete choices; use [`RadioButtonGroup`](./radio-button-group.md).

## Import

```ts
import { Slider } from "@onlyoffice/apps-ui-kit/components/slider";
```

Also exported from the root barrel `@onlyoffice/apps-ui-kit`.

`SliderProps` is not exported — type a wrapper's props yourself.

Needs `ThemeProvider` from `@onlyoffice/apps-ui-kit/providers/theme` for the track and handle
colours.

## Stories

### Default

A 0–100 slider with the track filled up to the handle (`withPouring`), the usual choice for a setting such as volume or zoom; drag the handle or change any other prop live in the Controls panel below.

<ThemedImage alt="Default" width={1014} sources={{ light: require('./slider--default-light.png').default, dark: require('./slider--default-dark.png').default }} />

### Disabled State

For a setting that cannot be changed right now: the handle and the filled part of the track turn paler, the unfilled track stays as it is, and the handle no longer moves by mouse or keyboard (`isDisabled`).

<ThemedImage alt="Disabled State" width={1014} sources={{ light: require('./slider--disabled-state-light.png').default, dark: require('./slider--disabled-state-dark.png').default }} />

### With Custom Steps

Slider with a custom step size of 5, allowing values of 0, 5, and 10 only.

<ThemedImage alt="With Custom Steps" width={1014} sources={{ light: require('./slider--with-custom-steps-light.png').default, dark: require('./slider--with-custom-steps-dark.png').default }} />

### Without Pouring

Slider without the pouring (filled track) effect. The track remains a single color.

<ThemedImage alt="Without Pouring" width={1014} sources={{ light: require('./slider--without-pouring-light.png').default, dark: require('./slider--without-pouring-dark.png').default }} />

### With Custom Size

Slider with larger custom thumb and track dimensions for improved touch targets.

<ThemedImage alt="With Custom Size" width={316} sources={{ light: require('./slider--with-custom-size-light.png').default, dark: require('./slider--with-custom-size-dark.png').default }} />

### Right To Left

In a right-to-left interface the minimum sits at the right edge: the fill starts there and grows to the left as the handle is dragged left.

<ThemedImage alt="Right To Left" width={316} sources={{ light: require('./slider--right-to-left-light.png').default, dark: require('./slider--right-to-left-dark.png').default }} />

### Css Customization

Every overridable variable set on one wrapper -- the variables are listed under CSS variables on this page.

The first slider shows every variable. The second is disabled, to show that the theme does not swap in its own colors there: it mixes the disabled thumb and fill from `--slider-handle-color`, so a custom accent survives as a paler version of itself.

<ThemedImage alt="Css Customization" width={316} sources={{ light: require('./slider--css-customization-light.png').default, dark: require('./slider--css-customization-dark.png').default }} />

## Minimal example

The input is controlled: hold the value yourself and move it from `onChange`.

```tsx
import { useState } from "react";
import { Slider } from "@onlyoffice/apps-ui-kit/components/slider";

export function Quality() {
  const [quality, setQuality] = useState(70);

  return (
    <label>
      Quality: {quality}%
      <Slider
        min={0}
        max={100}
        step={5}
        value={quality}
        withPouring
        onChange={(event) => setQuality(Number(event.target.value))}
      />
    </label>
  );
}
```

## Props


<APITable>

| Property | Type | Description |
| --- | --- | --- |
| `max` | `number` | Highest value of the range. |
| `min` | `number` | Lowest value of the range. |
| `value` | `number` | The current value. This is a controlled input; it does not keep its own. |
| `className`? | `string` | Applied to the input. |
| `dataTestId`? | `string` | `data-testid` of the input. Default: `"slider"`. |
| `id`? | `string` | Applied to the input. |
| `isDisabled`? | `boolean` | Whether the input is disabled, which also greys the handle. Default: `false`. |
| `onChange`? | `(e: React.ChangeEvent<HTMLInputElement>) => void` | Called on every move of the handle, with the range input's change event — `event.target.value` is a string. Required in practice: the input is controlled, so without this the handle cannot move. |
| `runnableTrackHeight`? | `string` | Height of the track the handle runs along, as a CSS length. |
| `step`? | `number` | How far one step of the handle moves. |
| `style`? | `CSSProperties` | Applied to the input. |
| `thumbBorderWidth`? | `string` | Border width of the drag handle, as a CSS length. |
| `thumbHeight`? | `string` | Height of the drag handle, as a CSS length. |
| `thumbWidth`? | `string` | Width of the drag handle, as a CSS length. |
| `withPouring`? | `boolean` | Fills the track to the left of the handle. The fill is computed from `value`, `min` and `max`, and flipped for a right-to-left interface. |

</APITable>

## Recipes

### Disabled / read-only

There is no read-only state — a range input that may be seen but not moved has to be disabled,
which also greys the handle.

```tsx
import { Slider } from "@onlyoffice/apps-ui-kit/components/slider";

export function LockedQuality({ quality }: { quality: number }) {
  return (
    <Slider
      min={0}
      max={100}
      value={quality}
      withPouring
      isDisabled
      onChange={() => {}}
    />
  );
}
```

## Behaviour the types don't state

- **`onChange` is optional in the type and required in practice.** `value` is passed straight to
  a controlled `<input>`, so leaving the handler out freezes the handle and React warns about a
  form field with a value and no `onChange`.
- **The value arrives as a string.** It is a DOM change event, so `event.target.value` needs
  `Number(...)` before it goes back into state.
- **It is 100% wide and brings its own vertical margin.** The input fills its container, has no
  width prop, and carries `margin: 24px 0` so that the handle has room to overhang the track —
  which adds to a column `gap` rather than collapsing into it.
- **`withPouring` is computed, not native.** The filled part is a background sized from
  `(value - min) / (max - min)`, so a `min` equal to `max` divides by zero and the fill comes out
  as `NaN%` — nothing is drawn.
- **The text direction is read once, on mount.** Whether the fill starts from the left or the
  right is decided by an effect with no dependencies — it pours from the right when `document.dir`,
  the `<html>` element's `dir` or the input's own computed `direction` is right-to-left at that
  moment. Switching the interface to right-to-left after mount leaves the fill on the wrong side
  until the component remounts; the stylesheet's `data-dir` rule cannot correct it, because the
  inline position wins.
- **The size props are custom properties, not attributes.** `thumbWidth`, `thumbHeight`,
  `thumbBorderWidth` and `runnableTrackHeight` are written into the inline `style` as
  `--thumb-*` and `--runnable-track-height`, so they take CSS lengths (`"16px"`), not numbers.
- `style` is spread before those properties, so it cannot override them.
- There is no label, no tick marks and no value readout; all three are yours to add.

## CSS variables

<APITable>

| Variable                    | Default | Effect                                                          |
| --------------------------- | ------- | --------------------------------------------------------------- |
| `--slider-size`             | `8px`   | Height of the track                                             |
| `--slider-handle-size`      | `24px`  | Width and height of the handle                                  |
| `--slider-track-radius`     | `5.6px` | Corner radius of the track; the handle keeps its own            |
| `--slider-handle-color`     | theme   | Fill of the handle, and the colour the focus ring is mixed from |
| `--slider-background-color` | theme   | Background of the unfilled track                                |
| `--slider-pouring-image`    | theme   | Fill of the poured part, used only with `withPouring`           |

</APITable>

`--slider-pouring-image` is a `background-image`, so it takes a `linear-gradient(...)` or another
`<image>`, not a plain colour; and it is used only while the slider is enabled. A disabled slider
does not switch to theme colours: its handle and its poured part are mixed from
`--slider-handle-color`, so a custom accent survives as a paler version of itself.

`--thumb-width`, `--thumb-height`, `--thumb-border-width`, `--runnable-track-height` and
`--size-prop` are written inline by the props and beat all of the above; set the props rather than
these.

## Accessibility

- A native `<input type="range">`, so it is focusable, is moved one `step` with the arrow keys
  and in larger jumps with Page Up and Page Down, goes to `min` and `max` with Home and End, and
  reports its value, minimum and maximum to assistive technology by itself.
- **It has no accessible name.** Wrap it in a `<label>`, or give it an `id` and point a
  `<label htmlFor>` at it, or a screen reader announces only "slider". `aria-label` cannot be
  passed: the props are not spread onto the input.
- The value is announced as a bare number, and `aria-valuetext` cannot be passed either; where
  the number means something else — a percentage, a duration — show it in the label.
- `isDisabled` sets the native `disabled`, which blocks dragging and the keyboard and takes the
  slider out of the tab order.
- Keyboard focus is shown as a 3px halo around the handle, drawn on `:focus-visible` only and
  mixed from the handle's own colour. The browser's outline is turned off, so a browser that does
  not support `:focus-visible` shows nothing.

## Test ids

<APITable>

| Element   | `data-testid`             |
| --------- | ------------------------- |
| The input | `slider`, or `dataTestId` |

</APITable>

## Related

- [`TextInput`](./text-input.md) — for a number that has to be exact.
- [`ProgressBar`](../status-components/progress-bar.md) — to show progress rather than take a value.
- [`RadioButtonGroup`](./radio-button-group.md) — for a few discrete steps instead.
