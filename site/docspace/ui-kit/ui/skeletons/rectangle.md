---
description: "Rectangular loading placeholder with a sweeping highlight, sized to the content it stands in for."
custom_edit_url: "https://github.com/ONLYOFFICE/docspace-ui-kit-react/blob/446f115916d79a87d07b9e3dddb1e39a263784ee/components/rectangle/README.md"
---

import ThemedImage from '@theme/ThemedImage';

import APITable from '@site/src/components/APITable/APITable';

# RectangleSkeleton

Rectangular loading placeholder with a sweeping highlight, sized to the content it stands in
for. One element per rectangle: a paragraph of three lines is three of these.

<ThemedImage alt="Rectangle" width={216} sources={{ light: require('./rectangle--primary-light.png').default, dark: require('./rectangle--primary-dark.png').default }} />

## Use this when / not when

- Use when the shape of what is coming is known — a line of text, a button, a card, a table
  cell. The page does not jump when the content replaces it.
- Not when the duration is unknown and the shape is not: [`Loader`](../status-components/loader.md) is the
  spinner for that.
- Not for a round placeholder — that is [`CircleSkeleton`](./circle.md), which takes a
  radius instead of a width and a height.
- Not when the content is not coming at all. An empty list is
  [`EmptyView`](../layout-components/empty-view.md), not a skeleton that never resolves.

## Import

```ts
import { RectangleSkeleton } from "@onlyoffice/apps-ui-kit/components/rectangle";
```

Also exported from the root barrel `@onlyoffice/apps-ui-kit`.

No provider needed: the component draws itself in a fixed black at low opacity and reads
nothing from the theme.


## Stories

### Default

A single placeholder with slightly rounded corners and the sweeping band; change any prop live in the Controls panel below.

<ThemedImage alt="Default" width={216} sources={{ light: require('./rectangle--default-light.png').default, dark: require('./rectangle--default-dark.png').default }} />

### Small Circle

A square with half its width as the corner radius turns into a circle (`borderRadius`), for an avatar placeholder that keeps the SSR-safe ids `CircleSkeleton` lacks.

<ThemedImage alt="Small Circle" width={56} sources={{ light: require('./rectangle--small-circle-light.png').default, dark: require('./rectangle--small-circle-dark.png').default }} />

### Custom Colors

A light grey rectangle with a paler band, for a surface where the default black at low opacity does not read, such as a dark theme (`backgroundColor`, `foregroundColor` and their opacities).

<ThemedImage alt="Custom Colors" width={216} sources={{ light: require('./rectangle--custom-colors-light.png').default, dark: require('./rectangle--custom-colors-dark.png').default }} />

### No Animation

The same rectangle without the sweep, for a page that must not animate, such as one shown to a user who asked for reduced motion (`animate`).

<ThemedImage alt="No Animation" width={216} sources={{ light: require('./rectangle--no-animation-light.png').default, dark: require('./rectangle--no-animation-dark.png').default }} />

### Slow Animation

The band takes two and a half seconds to cross instead of two, a calmer pace for a large area (`speed`).

<ThemedImage alt="Slow Animation" width={216} sources={{ light: require('./rectangle--slow-animation-light.png').default, dark: require('./rectangle--slow-animation-dark.png').default }} />

### Grid

Six placeholders filling a three-column grid, each 100% of its cell's width, as a card grid shows while its items load.

<ThemedImage alt="Grid" width={1014} sources={{ light: require('./rectangle--grid-light.png').default, dark: require('./rectangle--grid-dark.png').default }} />

### Css Customization

There are no CSS variables to list on this page: the component reads none, as "Behaviour the types don't state" explains, so this example styles three pills of different widths with the same five props: `backgroundColor`, `foregroundColor`, their opacities and `borderRadius`.

<ThemedImage alt="Css Customization" width={296} sources={{ light: require('./rectangle--css-customization-light.png').default, dark: require('./rectangle--css-customization-dark.png').default }} />

## Minimal example

`width` and `height` are the SVG's own size, so the skeleton is exactly as large as you say.

```tsx
import { RectangleSkeleton } from "@onlyoffice/apps-ui-kit/components/rectangle";

export function TitlePlaceholder() {
  return (
    <RectangleSkeleton width="180px" height="22px" title="Loading the title" />
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
| `borderRadius`? | `string` | Corner radius of the rectangle, in user units. Default: `"3"`. |
| `className`? | `string` | Applied to the `<svg>` element. |
| `foregroundColor`? | `string` | Colour of the band that sweeps across the skeleton. Default: `"#000"`. |
| `foregroundOpacity`? | `number` | Opacity of `foregroundColor`. Default: `0.15`. |
| `height`? | `string` | Height of the `<svg>` element and of the rectangle inside it. Default: `"32px"`. |
| `speed`? | `number` | Duration of one sweep, in seconds. Default: `2`. |
| `style`? | `CSSProperties` | Applied to the `<svg>` element. |
| `title`? | `string` | Accessible name of the skeleton, rendered as the SVG's `<title>`. It is empty by default, which leaves the `role="img"` element unnamed. Default: `""`. |
| `uniqueKey`? | `string` | Optional stable id used as `uniqueKey` for the underlying react-content-loader. When omitted, a `useId()` value is used so SSR and client render the same SVG ids and no hydration mismatch is reported. |
| `width`? | `string` | Width of the `<svg>` element and of the rectangle inside it. Any SVG length, so a percentage of the parent works. Default: `"100%"`. |
| `x`? | `string` | Left edge of the rectangle inside the SVG, in user units. Default: `"0"`. |
| `y`? | `string` | Top edge of the rectangle inside the SVG, in user units. Default: `"0"`. |

</APITable>

## Recipes

### A block of text

Each line is its own element; the varying widths are what make it read as text.

```tsx
import { RectangleSkeleton } from "@onlyoffice/apps-ui-kit/components/rectangle";

export function ParagraphPlaceholder() {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", gap: 8 }}
      aria-busy="true"
    >
      <RectangleSkeleton width="100%" height="16px" title="Loading" />
      <RectangleSkeleton width="80%" height="16px" />
      <RectangleSkeleton width="55%" height="16px" />
    </div>
  );
}
```

### A row of a list, with its avatar

```tsx
import { CircleSkeleton } from "@onlyoffice/apps-ui-kit/components/circle";
import { RectangleSkeleton } from "@onlyoffice/apps-ui-kit/components/rectangle";

export function MemberRowPlaceholder() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
      <div style={{ width: 32, height: 32 }}>
        <CircleSkeleton x="16" y="16" radius="16" width="32px" height="32px" />
      </div>
      <RectangleSkeleton width="140px" height="16px" />
    </div>
  );
}
```

### Still, on a page that must not animate

```tsx
import { RectangleSkeleton } from "@onlyoffice/apps-ui-kit/components/rectangle";

export function StillPlaceholder() {
  return <RectangleSkeleton width="100%" height="32px" animate={false} />;
}
```

## Behaviour the types don't state

- **It has no accessible name by default.** The underlying SVG carries `role="img"` and an
  `aria-labelledby` that points at the `<title>` — and `title` defaults to `""`, so no title is
  rendered and the id resolves to nothing. Give the skeleton that stands for a whole region a
  `title`, or mark the region `aria-busy` as the recipes do.
- **The colours are fixed, not themed.** `backgroundColor` and `foregroundColor` both default to
  black at 10% and 15% opacity. On a dark surface that is nearly invisible. The component reads no
  theme variable of its own, but the props are written as the gradient stops' `stop-color`
  attribute, and a `var()` there resolves against the page like any other: declare a pair under
  `.light` and `.dark` and pass `backgroundColor="var(--my-skeleton)"`, and the skeleton follows
  the theme as it switches. Choosing a hex in JavaScript from a dark-mode flag works too, but it
  is a second copy of the theme to keep in step.
- **`width` and `height` size both the element and the rectangle inside it.** The SVG has no
  `viewBox`, so `x`, `y` and `borderRadius` are in the element's own pixels. A skeleton with
  `height="100%"` needs a parent with a height, or it collapses. A percentage `borderRadius` is
  taken of the element's width, so `"50%"` on a square draws a circle.
- The animation is one linear gradient sweeping across the shape for `speed` seconds, forever,
  until `animate={false}` stops it; unmount the skeleton when the content arrives.
- `uniqueKey` exists because the library picks a random id per render otherwise, which makes
  server and client markup differ. The component passes a `useId()` value when you leave it out,
  so the default is already SSR-safe — `CircleSkeleton` has no such prop and is not.
- `data-testid` is written after the spread, so it cannot be overridden; anything else you pass
  lands on the `<svg>`.

## Accessibility

- `role="img"` comes from the library. Without a `title` it is an unnamed image, which a screen
  reader announces as nothing at all.
- A skeleton is not a live region. Mark the container `aria-busy="true"` while it is showing,
  and move focus or announce the result yourself when the content arrives.
- `animate={false}` is the honest answer to a user who asked for reduced motion; the component
  does not check `prefers-reduced-motion` on its own.

## Test ids

<APITable>

| Element | `data-testid`        |
| ------- | -------------------- |
| The SVG | `rectangle-skeleton` |

</APITable>

It cannot be overridden by a prop, so several skeletons on a page share it — query them with
`getAllByTestId`.

## Related

- [`CircleSkeleton`](./circle.md) — the round placeholder, for avatars and icons.
- [`Loader`](../status-components/loader.md) — a spinner, for work whose shape is unknown.
- [`EmptyView`](../layout-components/empty-view.md) — for when the content never arrives because there is
  none.
