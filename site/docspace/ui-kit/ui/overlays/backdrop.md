---
description: "Full-screen layer behind an overlay, transparent by default, that catches the click meant to close it."
custom_edit_url: "https://github.com/ONLYOFFICE/docspace-ui-kit-react/blob/9954315f61fd4830b7ea0582c3d58bee0e85d0aa/components/backdrop/README.md"
---

import ThemedImage from '@theme/ThemedImage';

import APITable from '@site/src/components/APITable/APITable';

# Backdrop

Full-screen layer behind an overlay, transparent by default, that catches the click meant to
close it. It dims the page only when you ask, or on a phone.

<ThemedImage alt="Backdrop" width={1024} sources={{ light: require('./backdrop--primary-light.png').default, dark: require('./backdrop--primary-dark.png').default }} />

## Use this when / not when

- Use behind an overlay of your own — an [`Aside`](./aside.md), a panel, a popover —
  that has to close when the user clicks away from it.
- Not behind a [`ModalDialog`](./modal-dialog.md) or a
  [`DropDown`](./drop-down.md): both render one themselves, and a second one is
  suppressed.
- Not as a loading veil over a region. It is `position: fixed` and covers the whole viewport,
  never a part of it.
- Not to block interaction: it stops pointer events under itself but nothing else. Focus still
  moves into the page behind, and there is no Escape handling.

## Import

```ts
import { Backdrop } from "@onlyoffice/apps-ui-kit/components/backdrop";
```

Also exported from the root barrel `@onlyoffice/apps-ui-kit`.

`BackdropProps` is **not** exported — type a wrapper's props yourself, or import the type from
its file path.

Needs `ThemeProvider` from `@onlyoffice/apps-ui-kit/providers/theme` above it in the tree for
the dimming colour, which differs between the light and the dark theme.

## Stories

### Default

The common case: a dimmed layer behind a dialog that closes it on a click (`withBackground`). Press the button to open it, then click anywhere to close it; change any other prop live in the Controls panel below.

<ThemedImage alt="Default" width={1024} sources={{ light: require('./backdrop--default-light.png').default, dark: require('./backdrop--default-dark.png').default }} />

### Without Background

For a menu or dropdown that must close on an outside click without darkening the page: the layer stays transparent and still catches the click (`withoutBackground`).

<ThemedImage alt="Without Background" width={618} sources={{ light: require('./backdrop--without-background-light.png').default, dark: require('./backdrop--without-background-dark.png').default }} />

### Multiple Backdrops

For a side panel opened over another one: each panel's layer renders even though a backdrop is already on screen, and the second darkens the page further (`isAside`). Open the first backdrop, then the second from the button above it; a click closes the top layer first.

<ThemedImage alt="Multiple Backdrops" width={194} sources={{ light: require('./backdrop--multiple-backdrops-light.png').default, dark: require('./backdrop--multiple-backdrops-dark.png').default }} />

### Modal Dialog Backdrop

For a modal dialog on a touch screen: the layer keeps catching taps that close the dialog, but no longer blocks touch scrolling (`isModalDialog`).

<ThemedImage alt="Modal Dialog Backdrop" width={176} sources={{ light: require('./backdrop--modal-dialog-backdrop-light.png').default, dark: require('./backdrop--modal-dialog-backdrop-dark.png').default }} />

### With Custom Z Index

When the covered content has to sit above other high layers of the page, raise the backdrop's stacking order and place the content one step above it — here 500 and 501 instead of the default 203 (`zIndex`).

<ThemedImage alt="With Custom Z Index" width={306} sources={{ light: require('./backdrop--with-custom-z-index-light.png').default, dark: require('./backdrop--with-custom-z-index-dark.png').default }} />

### Css Customization

The dimming colour overridden on a wrapper -- the variables are listed under CSS variables on this page. The stacking order is the `zIndex` prop.

<ThemedImage alt="Css Customization" width={1024} sources={{ light: require('./backdrop--css-customization-light.png').default, dark: require('./backdrop--css-customization-dark.png').default }} />

## Minimal example

`zIndex` has to be below the thing it sits behind — the default is 203.

```tsx
import { useState } from "react";
import { Backdrop } from "@onlyoffice/apps-ui-kit/components/backdrop";
import { Button } from "@onlyoffice/apps-ui-kit/components/button";

export function Popover() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button label="Open" onClick={() => setOpen(true)} />
      {open ? (
        <>
          <Backdrop visible zIndex={199} onClick={() => setOpen(false)} />
          <div
            style={{
              position: "fixed",
              inset: "40% auto auto 40%",
              zIndex: 200,
            }}
          >
            <Button label="Close" onClick={() => setOpen(false)} />
          </div>
        </>
      ) : null}
    </>
  );
}
```

## Props


<APITable>

| Property | Type | Description |
| --- | --- | --- |
| `visible` | `boolean` | Whether the layer is rendered at all. It is not a CSS switch: a backdrop that is not visible renders nothing. Default: `false`. |
| `className`? | `string \| string[]` | Custom CSS class name(s) to apply to the backdrop Can be a single string or an array of strings |
| `id`? | `string` | HTML id attribute for the backdrop element |
| `isAside`? | `boolean` | Marks the backdrop as belonging to a side panel: it then dims the page, and it is allowed to render even when two backdrops are already on screen. Default: `false`. |
| `isModalDialog`? | `boolean` | Lets touch scrolling through the backdrop go on as usual. Without it a touch move over the layer has its default action prevented. Default: `false`. |
| `onClick`? | `(e: React.MouseEvent) => void` | Called on a click, and on a touch move or touch end, which pass a touch event cast to a mouse event. |
| `shouldShowBackdrop`? | `boolean` | Renders the layer even when another backdrop is already on screen, which would otherwise suppress it. Default: `false`. |
| `style`? | `React.CSSProperties` | Custom inline styles to apply to the backdrop. `zIndex` is merged in first. |
| `withBackground`? | `boolean` | Dims the page. Without it the layer is transparent and only catches clicks — except on a viewport of 600px or less, where it dims anyway. Default: `false`. |
| `withoutBackground`? | `boolean` | Forces the backdrop to render without a background Takes precedence over withBackground. Default: `false`. |
| `zIndex`? | `number` | Stacking order of the layer. The component it covers needs a higher one. Default: `203`. |

</APITable>

## Recipes

### Open and close, controlled

`visible` is the whole of it: `false` renders nothing, so the layer needs no conditional
rendering of its own.

```tsx
import { useState } from "react";
import { Aside } from "@onlyoffice/apps-ui-kit/components/aside";
import { Backdrop } from "@onlyoffice/apps-ui-kit/components/backdrop";
import { Button } from "@onlyoffice/apps-ui-kit/components/button";

export function MembersPanel() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <>
      <Button label="Members" onClick={() => setOpen(true)} />
      <Backdrop visible={open} isAside zIndex={399} onClick={close} />
      {open ? (
        <Aside visible header="Members" onClose={close}>
          <p style={{ padding: 16 }}>Nobody has joined this room yet.</p>
        </Aside>
      ) : null}
    </>
  );
}
```

## Behaviour the types don't state

- **A second backdrop renders nothing.** On every change the component counts the elements
  carrying the `backdrop-active` class already in the document and bails out if there is one —
  unless `shouldShowBackdrop` is set, which ignores the count, or `isAside`, which renders the
  layer whatever the count. This is how a dialog opened from a panel avoids stacking two veils, and it
  is also why your own backdrop may silently fail to appear behind someone else's overlay.
- **It is transparent unless you ask for the dimming.** `withBackground` turns it on, `isAside`
  turns it on, and a viewport of 600px or less turns it on whether you asked or not;
  `withoutBackground` wins over all three.
- **The viewport is measured during render and never again.** There is no resize listener, so a
  window resized across 600px keeps whatever the backdrop decided when it opened.
- **Touch moves over it are cancelled** unless `isModalDialog` is set, which is what stops the
  page behind a panel scrolling under the user's finger. `onClick` receives those touch moves,
  and every touch end, too, cast to a mouse event — so a touch that merely passes over the layer
  closes what it covers.
- It is `position: fixed` at `100vw × 100vh`, so it ignores the scroll position and any
  transformed ancestor.
- `className` accepts an array as well as a string, unlike the rest of the kit.

## CSS variables

<APITable>

| Variable        | Default                                                 | Effect                                                                                                |
| --------------- | ------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `--backdrop-bg` | `rgba(6, 22, 38, 0.2)`; `rgba(27, 27, 27, 0.6)` in dark | Colour of the dimming, shown only when the layer dims: `withBackground`, `isAside` or a narrow screen |

</APITable>

The stacking order is the `zIndex` prop, not a variable. The stylesheet does read
`--backdrop-z-index`, but the component always writes `zIndex` (203 by default) inline, which
wins, so setting the variable has no effect; a `zIndex` in `style` overrides the prop.

## Accessibility

- The layer is an empty `<div>` with no role and no name, which is right: it is not an object
  the user interacts with deliberately.
- It does not trap focus, does not mark the page behind as inert and does not handle Escape.
  An overlay that must be modal has to do those itself — or be a
  [`ModalDialog`](./modal-dialog.md).
- Clicking it is a mouse-only way out, so give the overlay a close button as well.

## Test ids

<APITable>

| Element   | `data-testid` |
| --------- | ------------- |
| The layer | `backdrop`    |

</APITable>

It cannot be overridden by a prop.

## Related

- [`ModalDialog`](./modal-dialog.md) — renders its own, so you do not add one.
- [`Aside`](./aside.md) — renders none, so you do.
- [`DropDown`](./drop-down.md) — renders one unless `withBackdrop` is false.
