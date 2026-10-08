---
description: "The portal's white-label logo, fetched from the DocSpace server and swapped for the theme."
custom_edit_url: "https://github.com/ONLYOFFICE/docspace-ui-kit-react/blob/9954315f61fd4830b7ea0582c3d58bee0e85d0aa/components/portal-logo/README.md"
---

import ThemedImage from '@theme/ThemedImage';

import APITable from '@site/src/components/APITable/APITable';

# PortalLogo

:::warning[Portal only]

<ThemedImage alt="PortalLogo" width={402} sources={{ light: require('./portal-logo--primary-light.png').default, dark: require('./portal-logo--primary-dark.png').default }} />

Works only inside an ONLYOFFICE Apps portal: it needs the portal's API client, stores and translations, and is not part of the [public API](../../getting-started/installation-and-setup.md#public-and-portal-internal).

:::

The portal's white-label logo, fetched from the DocSpace server and swapped for the theme. It is
the mark at the top of the login and confirmation pages: one `<img>` pointed at the portal's
`logo.ashx`, with a bundled fallback when that request fails.

## Use this when / not when

- Use on a page served by a DocSpace portal, where `/logo.ashx` resolves and the administrator's
  white-label settings should be honoured.
- Not in your own application — the URL is absolute from the site root and has no prop to change
  it, so outside a portal it 404s and you always get the bundled fallback. Render your own
  `<img>` instead.
- Not for a room's mark — use [`RoomLogo`](./room-logo.md) or
  [`RoomIcon`](./room-icon.md).

**Portal-internal.** The source is `/logo.ashx?logotype=…&dark=…&default=false`, a DocSpace
endpoint. There is no `src` prop, no base-URL prop and no way to point it elsewhere.

## Import

```ts
import { PortalLogo } from "@onlyoffice/apps-ui-kit/components/portal-logo";
```

Also exported from the root barrel `@onlyoffice/apps-ui-kit`.
The component file has a default export, but the folder's `index` re-exports it under a name —
`import PortalLogo from …` does not resolve.

Needs `ThemeProvider` above it in the tree, and it reads the theme in JavaScript: `isBase`
becomes the `dark` query parameter, so the request itself differs between themes. Without a
provider the context falls back to light and the dark logo is never requested.

## Stories

### Default

The logo as a wide screen shows it, at its full size. No portal serves the image here, so a placeholder stands in for it; change any other prop live in the Controls panel below.

<ThemedImage alt="Default" width={402} sources={{ light: require('./portal-logo--default-light.png').default, dark: require('./portal-logo--default-dark.png').default }} />

### Resizable

The same logo, now following the window width: narrow the window to 600px or less and it moves into a bar fixed across the top (`isResizable`). The OnPhone story shows that layout.

<ThemedImage alt="Resizable" width={402} sources={{ light: require('./portal-logo--resizable-light.png').default, dark: require('./portal-logo--resizable-dark.png').default }} />

### With Class Name

Styling the logo from outside: the class lands on the image itself, not on the wrapper around it (`className`).

<ThemedImage alt="With Class Name" width={402} sources={{ light: require('./portal-logo--with-class-name-light.png').default, dark: require('./portal-logo--with-class-name-dark.png').default }} />

### On Phone

On a phone the logo moves into a 48px bar fixed across the top of the window, at a smaller size (`isResizable`). Without `isResizable` nothing is shown at this width.

<ThemedImage alt="On Phone" width={402} sources={{ light: require('./portal-logo--on-phone-light.png').default, dark: require('./portal-logo--on-phone-dark.png').default }} />

### Fallback Logo

What a page shows when the portal's logo cannot be loaded: the bundled logo takes the image's place, at its own size, so the page never has an empty gap or a broken-image icon.

<ThemedImage alt="Fallback Logo" width={146} sources={{ light: require('./portal-logo--fallback-logo-light.png').default, dark: require('./portal-logo--fallback-logo-dark.png').default }} />

### Css Customization

One resizable logo with every variable set on its wrapper -- the variables are listed under CSS variables on this page. On a wide screen it shows the two desktop variables; narrow the window to 600px or less to see the three bar variables, with the desktop width still applied to the logo inside the bar.

<ThemedImage alt="Css Customization" width={336} sources={{ light: require('./portal-logo--css-customization-light.png').default, dark: require('./portal-logo--css-customization-dark.png').default }} />

## Minimal example

```tsx
import { PortalLogo } from "@onlyoffice/apps-ui-kit/components/portal-logo";

export function LoginHeader() {
  return <PortalLogo />;
}
```

## Props


<APITable>

| Property | Type | Description |
| --- | --- | --- |
| `className`? | `string` | Added to the `<img>`, next to the component's own `logo-wrapper` class. It never reaches the wrapper around it. |
| `isResizable`? | `boolean` | Watches the window width and swaps to the small logo in a fixed bar below 600px. Without it the logo is simply hidden at those widths. Default: `false`. |

</APITable>

## Recipes

### The logo that survives small screens

Without `isResizable` the logo is hidden at 600px and narrower. With it, the wrapper becomes a fixed bar
across the top of the viewport, 48px tall, with the small logo centred in it — which means it
overlays your layout rather than sitting in it, and the page needs 48px of its own padding.

```tsx
import { PortalLogo } from "@onlyoffice/apps-ui-kit/components/portal-logo";

export function ConfirmPage({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ paddingTop: 48 }}>
      <PortalLogo isResizable />
      {children}
    </div>
  );
}
```

### Sizing it

The desktop image is forced to 386×44 by the component's own rule, and `className` lands on the
`<img>`, so your own width and height need to win on specificity — or go through the two custom
properties below, which is what they are there for.

```tsx
import { PortalLogo } from "@onlyoffice/apps-ui-kit/components/portal-logo";

// In your stylesheet:
//   .login-page { --portal-logo-desktop-img-width: 240px;
//                 --portal-logo-desktop-img-height: 28px; }

export function SmallerLogo() {
  return (
    <div className="login-page">
      <PortalLogo />
    </div>
  );
}
```

## Behaviour the types don't state

- **At 600px and narrower a logo without `isResizable` is `display: none`.** Not smaller —
  gone. This is the single most surprising thing about the component.
- **The width is read once, at first render.** The resize listener is attached only while
  `isResizable` is set, so without it the component's idea of the viewport never changes after
  mount. During server rendering the width starts at `0`, which counts as mobile.
- **A failed request replaces everything.** The `onError` handler swaps the whole component for a
  bundled small logo — the wrapper and its layout classes included, so the fixed mobile bar
  disappears with it. `className` still reaches that fallback.
- **Two separate ideas of "mobile" are in play**: the measured window width decides the layout,
  while `react-device-detect`'s user-agent check decides the `not-mobile` class that carries the
  desktop 386×44 sizing. A narrow window on a desktop browser gets the desktop size rule and the
  mobile layout at the same time.
- **`className` goes on the image, never on the wrapper**, so a rule that needs to position or
  space the logo has to target the wrapper through a parent of yours.
- **The image's `alt` is the fixed English string `"portal logo"`**, untranslated and not
  settable.
- **There is no `data-testid` anywhere.** Tests have to go through `getByRole("img")` or the
  `logo-wrapper` class.

## CSS variables

<APITable>

| Variable                           | Default           | Effect                                     |
| ---------------------------------- | ----------------- | ------------------------------------------ |
| `--portal-logo-desktop-img-width`  | `386px`           | Width of the image on desktop              |
| `--portal-logo-desktop-img-height` | `44px`            | Height of the image on desktop             |
| `--portal-logo-mobile-img-height`  | `24px`            | Height of the small logo in the mobile bar |
| `--portal-logo-mobile-height`      | `48px`            | Height of that fixed mobile bar            |
| `--portal-logo-mobile-bg`          | the header's grey | Background of that bar                     |

</APITable>

The three mobile variables apply only to the fixed bar, so only with `isResizable` at 600px and
narrower. The two desktop ones hang on the `not-mobile` class, which follows the user-agent check
rather than the width: a phone browser never reads them, while a narrow desktop window does. In
that case the bar's `--portal-logo-mobile-img-height` wins over the desktop height, but
`--portal-logo-desktop-img-width` still sizes the logo inside the bar.

## Accessibility

- The logo is an `<img>` with `alt="portal logo"`. That string is not translated, and on a login
  page where the logo is the only statement of which portal you are on, it is also not very
  informative — there is no prop to improve it.
- Nothing here is focusable or interactive; the logo is not a link.
- In the resizable mobile layout the bar is `position: fixed` at the top of the viewport, so it
  sits above the page content and can cover a focused element unless the page reserves space.

## Test ids

The component sets none. Select it by `role="img"`, or by the `logo-wrapper` class it puts on
the image.

## Related

- [`RoomLogo`](./room-logo.md) — the glyph for a kind of room.
- [`MCPIcon`](./mcp-icon.md) — a square mark for a third-party server, with a letter fallback.
- [`RoomIcon`](./room-icon.md) — a particular room's own logo.
