---
description: "Spinner in one of four animations, for work whose duration is unknown."
custom_edit_url: "https://github.com/ONLYOFFICE/docspace-ui-kit-react/blob/446f115916d79a87d07b9e3dddb1e39a263784ee/components/loader/README.md"
---

import ThemedImage from '@theme/ThemedImage';

import APITable from '@site/src/components/APITable/APITable';

# Loader

Spinner in one of four animations, for work whose duration is unknown. Pick the animation
explicitly — the component has no default worth having.

<ThemedImage alt="Loader" width={1014} sources={{ light: require('./loader--primary-light.png').default, dark: require('./loader--primary-dark.png').default }} />

## Use this when / not when

- Use while waiting for something whose progress cannot be measured: a request, a save, a
  panel that has not loaded yet.
- Not when the shape of what is coming is known — a skeleton reads better and does not move
  the layout when the content arrives. That is [`RectangleSkeleton`](../skeletons/rectangle.md).
- Not when progress can be measured: [`ProgressBar`](./progress-bar.md).
- Not inside a button that is saving — [`Button`](../interactive-elements/button.md) has `isLoading`, which
  places and sizes its own loader.

## Import

```ts
import { Loader, LoaderTypes } from "@onlyoffice/apps-ui-kit/components/loader";
```

Also exported from the root barrel `@onlyoffice/apps-ui-kit`.

Needs `ThemeProvider` from `@onlyoffice/apps-ui-kit/providers/theme` above it in the tree for
the track colours; without it the animation falls back to the pale default stroke.


## Stories

### Default

A line of plain text instead of an animation, for a place where a moving spinner would distract: this is what you get with `type` set to `base` or left out, so pick an animation explicitly when you want one. Change any other prop live in the Controls panel below.

<ThemedImage alt="Default" width={1014} sources={{ light: require('./loader--default-light.png').default, dark: require('./loader--default-dark.png').default }} />

### Oval

Oval spinner animation, commonly used for inline loading states.

<ThemedImage alt="Oval" width={56} sources={{ light: require('./loader--oval-light.png').default, dark: require('./loader--oval-dark.png').default }} />

### Dual Ring

Dual ring animation with two concentric spinning rings.

<ThemedImage alt="Dual Ring" width={56} sources={{ light: require('./loader--dual-ring-light.png').default, dark: require('./loader--dual-ring-dark.png').default }} />

### Rombs

Rombs (diamond) animation, used as the main application loader.

<ThemedImage alt="Rombs" width={141} sources={{ light: require('./loader--rombs-light.png').default, dark: require('./loader--rombs-dark.png').default }} />

### Track

Track animation for compact loading indicators.

<ThemedImage alt="Track" width={46} sources={{ light: require('./loader--track-light.png').default, dark: require('./loader--track-dark.png').default }} />

### All Types

Side-by-side comparison of the text fallback (Base) and the four animations (Oval, DualRing, Rombs and Track), to choose the one that fits the space it waits in.

<ThemedImage alt="All Types" width={671} sources={{ light: require('./loader--all-types-light.png').default, dark: require('./loader--all-types-dark.png').default }} />

### Custom Colors

DualRing loaders with different custom colors applied via the color prop.

<ThemedImage alt="Custom Colors" width={296} sources={{ light: require('./loader--custom-colors-light.png').default, dark: require('./loader--custom-colors-dark.png').default }} />

### Different Sizes

Oval loaders at three different sizes to demonstrate scalability.

<ThemedImage alt="Different Sizes" width={339} sources={{ light: require('./loader--different-sizes-light.png').default, dark: require('./loader--different-sizes-dark.png').default }} />

### On Primary Button

A white track on the accent background of a primary button, where the default accent-coloured track would disappear (`primary`).

<ThemedImage alt="On Primary Button" width={84} sources={{ light: require('./loader--on-primary-button-light.png').default, dark: require('./loader--on-primary-button-dark.png').default }} />

### Disabled State

The track dimmed beside a normal one, for a loader inside a control that is currently unavailable (`isDisabled`, read by the track only).

<ThemedImage alt="Disabled State" width={203} sources={{ light: require('./loader--disabled-state-light.png').default, dark: require('./loader--disabled-state-dark.png').default }} />

### Css Customization

Every overridable variable set on one wrapper -- the variables are listed under CSS variables on this page.

The example shows, from left to right: an oval for `--loader-stroke` and `--loader-size`, which every instance picks up; a track for `--loader-track-base`; a track with `primary` for `--loader-track-primary`; and a track with `isDisabled` for `--loader-opacity-disabled`.

<ThemedImage alt="Css Customization" width={336} sources={{ light: require('./loader--css-customization-light.png').default, dark: require('./loader--css-customization-dark.png').default }} />

## Minimal example

`type` is what makes it spin. Without it you get a line of text.

```tsx
import { Loader, LoaderTypes } from "@onlyoffice/apps-ui-kit/components/loader";

export function PanelLoader() {
  return (
    <div style={{ display: "flex", justifyContent: "center", padding: 24 }}>
      <Loader type={LoaderTypes.oval} size="32px" label="Loading rooms" />
    </div>
  );
}
```

## Props


<APITable>

| Property | Type | Description |
| --- | --- | --- |
| `className`? | `string` | Applied to the wrapper around the animation, not to the animation. |
| `color`? | `string` | Any CSS colour, applied as the stroke of the animation and the colour of the `base` type's text. |
| `id`? | `string` | Applied to the wrapper. |
| `isDisabled`? | `boolean` | Dims the animation to the disabled opacity. Read by the `track` type only. |
| `label`? | `string` | Accessible name of the animation, set as its `aria-label`. For the `base` type it is not a label at all but the entire rendered content. |
| `primary`? | `boolean` | Uses the primary button's track colour, for a loader drawn on top of a primary button. Read by the `track` type only. |
| `ref`? | `RefObject<SVGSVGElement>` | Reaches the `<svg>` of the `track` type; the other types ignore it. |
| `size`? | `string` | Size of the animation as a CSS length, applied to both axes. The stylesheet falls back to 40px for most types and 20px for `track`. For the `base` type this is the font size of the text instead. |
| `style`? | `CSSProperties` | Applied to the wrapper, and again to the inner span of the `base` type. |
| `type`? | `LoaderTypes` | Which animation to render. There is **no default**, and `base` is not an animation: both it and an absent `type` fall through to a branch that renders `label` as plain text and nothing else. Pass `oval`, `dualRing`, `rombs` or `track` for something that spins. |

</APITable>

### Enums

<APITable>

| Enum          | Members                                      |
| ------------- | -------------------------------------------- |
| `LoaderTypes` | `base`, `oval`, `dualRing`, `rombs`, `track` |

</APITable>

## Recipes

### Disabled

`isDisabled` dims the animation. Only the `track` type reads it, and it is meant for a loader
drawn on a control that is itself disabled.

```tsx
import { Loader, LoaderTypes } from "@onlyoffice/apps-ui-kit/components/loader";

export function DisabledTrack() {
  return <Loader type={LoaderTypes.track} size="20px" isDisabled />;
}
```

### Centred in a panel that has not loaded

```tsx
import type { ReactNode } from "react";
import { Loader, LoaderTypes } from "@onlyoffice/apps-ui-kit/components/loader";

export function PanelBody({
  isLoading,
  children,
}: {
  isLoading: boolean;
  children: ReactNode;
}) {
  if (!isLoading) return <>{children}</>;

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: 160,
      }}
    >
      <Loader type={LoaderTypes.dualRing} size="40px" label="Loading" />
    </div>
  );
}
```

## Behaviour the types don't state

- **`LoaderTypes.base` is not a spinner.** It is the branch the switch falls through to, and it
  renders `label` as plain text with no animation at all. An absent `type` does the same thing,
  so a `<Loader />` on its own renders nothing visible. Always pass `oval`, `dualRing`, `rombs`
  or `track`.
- **`Loader.default` is decoration.** The component carries a static object naming a type, a
  size and a label, and nothing reads it — the props have no defaults. The sizes quoted in the
  table come from the stylesheet's own fallbacks.
- The wrapper is a plain `<div>` with no width, height or centring of its own. Place it
  yourself; the examples above do.
- The four animations differ in shape: `oval` is a ring with one spinning arc, `dualRing` two
  concentric rings turning in opposite directions, `rombs` three diamonds that bounce in turn,
  and `track` a ring of six segments spinning together.
- `color` reaches the `oval` and `dualRing` strokes and the `base` text only. The `track` takes
  its colour from the theme (or `primary`), and the `rombs` diamonds keep their own blue, green
  and red.
- **`rombs` needs a positioned container.** The diamonds are absolutely positioned `<div>`s
  that move between `top: 0` and `top: 120px`, so they sit against the nearest positioned
  ancestor and need about `size` plus 120px of height below it.
- **Give every `track` its own `id`.** The track builds its gradient ids from `id`
  (`spinner-color-<id>-1` and on); two tracks with the same or no `id` share one set of
  gradients, and the second draws in the first one's colour.
- `ref` reaches the `track` type's `<svg>` alone; the other types ignore it.
- `primary` and `isDisabled` are read by the `track` type alone; the other three ignore them.

## CSS variables

<APITable>

| Variable                    | Default                                   | Effect                                                                                                               |
| --------------------------- | ----------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `--loader-stroke`           | the `color` prop                          | Stroke of the `oval` and `dualRing` animations; a `color` passed to the dual ring still wins, being set on its rings |
| `--loader-size`             | `40px` (`20px` for `track`)               | Width and height of the `oval`, `dualRing` and `track` animations when `size` is not set; `rombs` ignores it         |
| `--loader-track-base`       | theme (main button colour; white in dark) | Colour of the `track`                                                                                                |
| `--loader-track-primary`    | `#ffffff`                                 | Colour of the `track` with `primary` set                                                                             |
| `--loader-opacity-disabled` | `0.6`                                     | Opacity of the `track` under `isDisabled`                                                                            |

</APITable>

A `size` prop sets `--loader-size` on the animation itself and so beats a value set on a
wrapper. `--loader-color` cannot be set from outside at all: the stylesheet defines it on the
animation, so pass `color` instead.

## Accessibility

- The wrapper carries `aria-busy="true"`, which tells assistive technology that the region is
  updating. It sets no `role="status"`, so the change is not announced on its own.
- `label` becomes the `aria-label` of the `oval`, `dualRing` and `track` animations. Without
  it the dual ring falls back to its built-in title, "dual ring"; the oval's and the track's
  titles are not direct children of the `<svg>`, so those two are unnamed graphics.
- `rombs` ignores `label` entirely: give its container an accessible name yourself.
- The `base` type is read as its plain text.
- Nothing here manages focus. A loader that replaces a focused control leaves focus on the
  document.

## Test ids

<APITable>

| Element              | `data-testid`      |
| -------------------- | ------------------ |
| The wrapper          | `loader`           |
| `oval` animation     | `oval-loader`      |
| `dualRing` animation | `dual-ring-loader` |
| `rombs` animation    | `rombs-loader`     |
| `track` animation    | `track-loader`     |

</APITable>

None of these can be overridden by a prop.

## Related

- [`RectangleSkeleton`](../skeletons/rectangle.md) — for content whose shape is known.
- [`ProgressBar`](./progress-bar.md) — for work with measurable progress.
- [`Button`](../interactive-elements/button.md) — `isLoading` for a button that is saving.
