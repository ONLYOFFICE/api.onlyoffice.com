---
description: "Round loading placeholder with a sweeping highlight, for an avatar or an icon that has not arrived yet."
custom_edit_url: "https://github.com/ONLYOFFICE/docspace-ui-kit-react/blob/9954315f61fd4830b7ea0582c3d58bee0e85d0aa/components/circle/README.md"
---

import ThemedImage from '@theme/ThemedImage';

import APITable from '@site/src/components/APITable/APITable';

# CircleSkeleton

Round loading placeholder with a sweeping highlight, for an avatar or an icon that has not
arrived yet. Its size comes from `radius`, and the centre has to be moved to match.

<ThemedImage alt="Circle" width={66} sources={{ light: require('./circle--primary-light.png').default, dark: require('./circle--primary-dark.png').default }} />

## Use this when / not when

- Use for a round thing that is loading: an [`Avatar`](../data-display/avatar.md), a room logo, a
  circular icon.
- Not for anything rectangular — [`RectangleSkeleton`](./rectangle.md) is the one that
  takes a width and a height directly.
- Not when the wait has no known shape: [`Loader`](../status-components/loader.md).
- Not in a server-rendered tree. It cannot be given a stable id, so its SVG ids differ between
  server and client; see the behaviour notes.

## Import

```ts
import { CircleSkeleton } from "@onlyoffice/apps-ui-kit/components/circle";
```

Also exported from the root barrel `@onlyoffice/apps-ui-kit`.

No provider needed: the component draws itself in a fixed black at low opacity and reads
nothing from the theme.

## Stories

### Default

A circle of radius 20 centred in a 50 by 50 box — the radius, the centre and the box size are set together, because the component's own defaults cut the circle off. Change any prop live in the Controls panel below.

<ThemedImage alt="Default" width={66} sources={{ light: require('./circle--default-light.png').default, dark: require('./circle--default-dark.png').default }} />

### Small Avatar

Small avatar-sized circle skeleton, suitable for compact user avatars.

<ThemedImage alt="Small Avatar" width={48} sources={{ light: require('./circle--small-avatar-light.png').default, dark: require('./circle--small-avatar-dark.png').default }} />

### Large Avatar

Large avatar-sized circle skeleton, suitable for profile images.

<ThemedImage alt="Large Avatar" width={96} sources={{ light: require('./circle--large-avatar-light.png').default, dark: require('./circle--large-avatar-dark.png').default }} />

### Custom Colors

A light grey circle for a surface where the default black at low opacity is too faint or the wrong tone, such as a dark one (`backgroundColor`, `foregroundColor` and their opacities).

<ThemedImage alt="Custom Colors" width={66} sources={{ light: require('./circle--custom-colors-light.png').default, dark: require('./circle--custom-colors-dark.png').default }} />

### No Animation

A still circle with no sweeping band, for a page that must not animate or a reader who asked for reduced motion (`animate`).

<ThemedImage alt="No Animation" width={66} sources={{ light: require('./circle--no-animation-light.png').default, dark: require('./circle--no-animation-dark.png').default }} />

### Slow Animation

The band takes 2.5 seconds per sweep instead of 2, for a calmer placeholder on a page that waits longer (`speed`).

<ThemedImage alt="Slow Animation" width={66} sources={{ light: require('./circle--slow-animation-light.png').default, dark: require('./circle--slow-animation-dark.png').default }} />

### Avatar Group

Multiple circle skeletons arranged in a row, simulating an avatar group placeholder.

<ThemedImage alt="Avatar Group" width={200} sources={{ light: require('./circle--avatar-group-light.png').default, dark: require('./circle--avatar-group-dark.png').default }} />

### Css Customization

The component reads no CSS custom property -- see the behaviour notes on this page; its colours come from props. All three circles here set the same four props, at three sizes.

<ThemedImage alt="Css Customization" width={224} sources={{ light: require('./circle--css-customization-light.png').default, dark: require('./circle--css-customization-dark.png').default }} />

## Minimal example

The three numbers go together: a circle of radius _r_ has to be centred at _r_, _r_, in an SVG
of _2r_ — otherwise it is cut off by the edge.

```tsx
import { CircleSkeleton } from "@onlyoffice/apps-ui-kit/components/circle";

export function AvatarPlaceholder() {
  return (
    <CircleSkeleton
      x="16"
      y="16"
      radius="16"
      width="32px"
      height="32px"
      title="Loading the avatar"
    />
  );
}
```

## Props


<APITable>

| Property | Type | Description |
| --- | --- | --- |
| `animate`? | `boolean` | Whether the band sweeps at all. Turn it off for a static placeholder. Default: `true`. |
| `backgroundColor`? | `string` | Colour of the skeleton at rest. Fixed black, not a theme colour. Default: `"#000"`. |
| `backgroundOpacity`? | `number` | Opacity of `backgroundColor`. Default: `0.1`. |
| `className`? | `string` | Applied to the `<svg>` element. |
| `foregroundColor`? | `string` | Colour of the band that sweeps across the skeleton. Default: `"#000"`. |
| `foregroundOpacity`? | `number` | Opacity of `foregroundColor`. Default: `0.15`. |
| `height`? | `string` | Height of the `<svg>` element. The circle's own size comes from `radius`. Default: `"100%"`. |
| `radius`? | `string` | Radius of the circle, in user units. Default: `"12"`. |
| `speed`? | `number` | Duration of one sweep, in seconds. Default: `2`. |
| `style`? | `React.CSSProperties` | Applied to the `<svg>` element. |
| `title`? | `string` | Accessible name of the skeleton, rendered as the SVG's `<title>`. It is empty by default, which leaves the `role="img"` element unnamed. Default: `""`. |
| `width`? | `string` | Width of the `<svg>` element. The circle's own size comes from `radius`. Default: `"100%"`. |
| `x`? | `string` | Centre of the circle on the horizontal axis, in user units — the SVG's `cx`. It is not an offset: a value below `radius` cuts the circle off at the left edge, which the defaults do. Default: `"3"`. |
| `y`? | `string` | Centre of the circle on the vertical axis, in user units — the SVG's `cy`. Default: `"12"`. |

</APITable>

## Recipes

### Still, on a page that must not animate

```tsx
import { CircleSkeleton } from "@onlyoffice/apps-ui-kit/components/circle";

export function StillAvatarPlaceholder() {
  return (
    <CircleSkeleton
      x="20"
      y="20"
      radius="20"
      width="40px"
      height="40px"
      animate={false}
    />
  );
}
```

### A list of people that has not loaded

```tsx
import { CircleSkeleton } from "@onlyoffice/apps-ui-kit/components/circle";
import { RectangleSkeleton } from "@onlyoffice/apps-ui-kit/components/rectangle";

export function MemberListPlaceholder({ rows }: { rows: number }) {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", gap: 12 }}
      aria-busy="true"
    >
      {Array.from({ length: rows }, (_, index) => (
        <div
          key={index}
          style={{ display: "flex", alignItems: "center", gap: 12 }}
        >
          <CircleSkeleton
            x="16"
            y="16"
            radius="16"
            width="32px"
            height="32px"
          />
          <RectangleSkeleton width="160px" height="16px" />
        </div>
      ))}
    </div>
  );
}
```

## Behaviour the types don't state

- **The defaults draw a clipped circle.** `x="3"`, `y="12"`, `radius="12"` put the centre three
  units from the left edge of a circle twelve units wide, so its left third falls outside the
  element and is cut off. `<CircleSkeleton />` on its own is not a circle; always pass the three
  values together.
- **`width` and `height` size the element, `radius` sizes the circle.** They are separate, and
  `height` defaults to `"100%"`, which collapses to nothing in a parent without a height. Give
  the element the diameter you want, as every example here does.
- **It has no accessible name by default.** The SVG carries `role="img"` and an
  `aria-labelledby` pointing at a `<title>` that is not rendered, because `title` defaults to
  `""`. Pass a `title` or mark the container `aria-busy`.
- **The colours are fixed, not themed.** Black at 10% and 15% opacity, whatever the theme, so on
  a dark surface it nearly disappears. `backgroundColor` and `foregroundColor` are the way in: they
  are written as the gradient stops' `stop-color` attribute, and a `var()` there resolves against
  the page, so a pair declared under `.light` and `.dark` and passed as
  `backgroundColor="var(--my-skeleton)"` follows the theme as it switches.
- **It is not safe to server-render.** The underlying library builds its gradient and clip-path
  ids from a random value unless it is given a `uniqueKey`, and this component neither accepts
  one nor supplies a stable one — so SSR and the client produce different markup.
  [`RectangleSkeleton`](./rectangle.md) does supply one.
- `data-testid` is written after the spread, so it cannot be overridden; anything else you pass
  lands on the `<svg>`.

## Accessibility

- `role="img"` comes from the library. Without a `title` it is an unnamed image and a screen
  reader announces nothing.
- Mark the region `aria-busy="true"` while the placeholders are showing; the component does not
  do it for you.
- `animate={false}` is the answer for reduced motion — nothing here checks
  `prefers-reduced-motion`.

## Test ids

<APITable>

| Element | `data-testid`     |
| ------- | ----------------- |
| The SVG | `circle-skeleton` |

</APITable>

It cannot be overridden by a prop, so several skeletons on a page share it — query them with
`getAllByTestId`.

## Related

- [`RectangleSkeleton`](./rectangle.md) — the rectangular placeholder, and the one to
  pair this with in a row.
- [`Avatar`](../data-display/avatar.md) — what this usually stands in for.
- [`Loader`](../status-components/loader.md) — a spinner, for work whose shape is unknown.
