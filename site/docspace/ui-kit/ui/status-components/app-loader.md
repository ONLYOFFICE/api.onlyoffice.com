---
description: "The blank first screen: a fixed sheet over the whole viewport with the kit's rombs animation on it."
custom_edit_url: "https://github.com/ONLYOFFICE/docspace-ui-kit-react/blob/9954315f61fd4830b7ea0582c3d58bee0e85d0aa/components/app-loader/README.md"
---

import ThemedImage from '@theme/ThemedImage';

import APITable from '@site/src/components/APITable/APITable';

# AppLoader

The blank first screen: a fixed sheet over the whole viewport with the kit's rombs animation on it.
It takes no props at all — render it while the application boots and stop rendering it when it is
ready.

<ThemedImage alt="AppLoader" width={1024} sources={{ light: require('./app-loader--primary-light.png').default, dark: require('./app-loader--primary-dark.png').default }} />

## Use this when / not when

- Use for the very first paint, before there is a layout to put a smaller loader into.
- **It covers the viewport, wherever it is rendered.** The sheet is `position: fixed` at
  `z-index: 5000`, so putting it inside a panel does not confine it to that panel.
- Not for a section or a panel that is refreshing — wrap that in
  [`LoaderWrapper`](./loader-wrapper.md) or show a [`Loader`](./loader.md) in place.
- Not for a navigation that is only slow — the thin bar at the top of the page is
  [`TopLoaderService`](../feedback/top-loading-indicator.md).
- **It is opaque.** The page behind it is hidden, not dimmed; there is no backdrop and nothing
  shows through.

## Import

```ts
import AppLoader from "@onlyoffice/apps-ui-kit/components/app-loader";
```

It is a **default** export, so the name is yours to choose. The root barrel carries it by name
as well — `components/index.ts` re-exports it as `export { default as AppLoader }` — but prefer the
subpath: the barrel does not build without four optional peers, see
[Which import form](../../getting-started/installation-and-setup.md#which-import-form).

No provider is required — the sheet is white and the animation dark by default. The dark theme's
dark grey sheet comes from the `dark` class the kit's theme provider puts on `<body>`, so without a
provider it stays light whatever else the page does.

## Stories

### Default

The boot screen as an application shows it before its first layout exists. The sheet is fixed to the viewport, so it covers the whole window wherever it is rendered.

<ThemedImage alt="Default" width={1024} sources={{ light: require('./app-loader--default-light.png').default, dark: require('./app-loader--default-dark.png').default }} />

### Css Customization

Both variables set on one wrapper -- the variables are listed under CSS variables on this page. The sheet takes a light blue background and drops its stacking order to 100.

<ThemedImage alt="Css Customization" width={1024} sources={{ light: require('./app-loader--css-customization-light.png').default, dark: require('./app-loader--css-customization-dark.png').default }} />

## Minimal example

```tsx
import { useEffect, useState } from "react";

import AppLoader from "@onlyoffice/apps-ui-kit/components/app-loader";
import { Text } from "@onlyoffice/apps-ui-kit/components/text";

export function App() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const id = setTimeout(() => setReady(true), 1200);
    return () => clearTimeout(id);
  }, []);

  if (!ready) return <AppLoader />;

  return <Text>Ready</Text>;
}
```

## Recipes

### Keeping it above, or below, your own layers

The sheet's stacking order is a custom property. Lower it when something of yours — a debug bar, a
cookie notice — has to stay visible over the boot screen.

```tsx
import type { CSSProperties } from "react";

import AppLoader from "@onlyoffice/apps-ui-kit/components/app-loader";

export function BootScreen() {
  return (
    <div style={{ "--app-loader-z-index": "100" } as CSSProperties}>
      <AppLoader />
    </div>
  );
}
```

### Your own background

`--app-loader-bg` wins over both theme colours, so a branded splash needs one declaration and no
class.

```tsx
import type { CSSProperties } from "react";

import AppLoader from "@onlyoffice/apps-ui-kit/components/app-loader";

export function BrandedBoot() {
  return (
    <div style={{ "--app-loader-bg": "#0f4071" } as CSSProperties}>
      <AppLoader />
    </div>
  );
}
```

## Behaviour the types don't state

- **It has no props.** There is no size, no colour, no label and no delay; everything adjustable is
  a custom property, and the two below are all of them.
- **`width: 100vw` is wider than the page when a scrollbar is showing**, so on a scrolled document
  the sheet can add a horizontal scrollbar of its own. `100%` would not; this is what the component
  ships.
- **The animation is not centred by the flex box.** The sheet centres its child, but the child is
  itself `position: fixed` at `top: 35%` and `inset-inline-start: calc(50% - 20px)` — a third of
  the way down the viewport, and half a spinner left of the middle. The centring rules never apply.
- **It traps nothing.** Focus, scrolling and keyboard shortcuts on the page underneath all still
  work; the sheet only paints over them.
- **It is not a portal.** It renders where you put it, so an ancestor with a `transform`, a
  `filter` or `contain` makes the fixed positioning resolve against that ancestor instead of the
  viewport and the sheet stops covering the page.
- The animation is the kit's `rombs` type at 40px, hard-coded. Nothing switches it off for
  `prefers-reduced-motion`.

## CSS variables

<APITable>

| Variable               | Default                                      | Effect                      |
| ---------------------- | -------------------------------------------- | --------------------------- |
| `--app-loader-bg`      | `#ffffff`, or `#333333` under the dark theme | Background of the sheet     |
| `--app-loader-z-index` | `5000`                                       | Stacking order of the sheet |

</APITable>

## Accessibility

- **Nothing is announced.** The sheet has no role, no label and no live region, so a screen reader
  is told only that the page has changed. The only hint is the inner `Loader`'s own
  `aria-busy="true"`, which marks the animation as content still loading but names nothing. Put a
  `role="status"` region or a visually hidden "Loading" message of your own next to it if the wait
  is long.
- Because focus is not moved or trapped, a keyboard user can tab into the page that is hidden
  behind the sheet and interact with controls they cannot see.
- The animation runs for as long as the component is mounted, whatever the viewer's motion
  preference.

## Test ids

<APITable>

| Element   | `data-testid` |
| --------- | ------------- |
| The sheet | `app-loader`  |

</APITable>

It is not settable.

## Related

- [`Loader`](./loader.md) — the animation itself, in any size and type.
- [`LoaderWrapper`](./loader-wrapper.md) — for a part of the screen rather than all of it.
- [`TopLoaderService`](../feedback/top-loading-indicator.md) — the thin bar for a slow navigation.
