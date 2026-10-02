---
description: "Panel that slides in from the side of the viewport, with a header and a scrolling body."
custom_edit_url: "https://github.com/ONLYOFFICE/docspace-ui-kit-react/blob/446f115916d79a87d07b9e3dddb1e39a263784ee/components/aside/README.md"
---

import ThemedImage from '@theme/ThemedImage';

import APITable from '@site/src/components/APITable/APITable';

# Aside

Panel that slides in from the side of the viewport, with a header and a scrolling body. On a
phone it comes up from the bottom instead, as a sheet.

<ThemedImage alt="Aside" width={1024} sources={{ light: require('./aside--primary-light.png').default, dark: require('./aside--primary-dark.png').default }} />

## Use this when / not when

- Use for content beside the page rather than over it: details of a selected row, a filter
  panel, a list of members.
- Not for a confirmation or a short form the user must answer before continuing — that is
  [`ModalDialog`](./modal-dialog.md), which also has an aside display type if you
  want this shape with a dialog's behaviour.
- Not for the dimming layer itself: this component renders none, and
  [`Backdrop`](./backdrop.md) is what you put behind it.

## Import

```ts
import { Aside } from "@onlyoffice/apps-ui-kit/components/aside";
```

Also exported from the root barrel `@onlyoffice/apps-ui-kit`.

Also exported: `AsideHeader` and `AsideHeaderProps`, which the folder re-exports. `AsideProps`
itself is **not** exported — type a wrapper's props yourself, or import the type from its file
path.

Needs `ThemeProvider` from `@onlyoffice/apps-ui-kit/providers/theme` above it in the tree, for
the panel's background and the header's border.


## Stories

### Default

The panel with a title and a short text, opened by the button on the page. Close it with the cross or by clicking the dimmed page — that dimming is a `Backdrop` of the story's own, since `Aside` renders none. Change any other prop live in the Controls panel below.

<ThemedImage alt="Default" width={1024} sources={{ light: require('./aside--default-light.png').default, dark: require('./aside--default-dark.png').default }} />

### Settings

A short settings form with switches and a save button — the kind of form a side panel holds beside the page it configures.

<ThemedImage alt="Settings" width={1024} sources={{ light: require('./aside--settings-light.png').default, dark: require('./aside--settings-dark.png').default }} />

### User Profile

An edit form with an avatar, labelled text fields and two buttons, for changing an item without leaving the page.

<ThemedImage alt="User Profile" width={1024} sources={{ light: require('./aside--user-profile-light.png').default, dark: require('./aside--user-profile-dark.png').default }} />

### File Details

The details of a selected file — its properties and the people it is shared with — the most common content of a side panel next to a list.

<ThemedImage alt="File Details" width={1024} sources={{ light: require('./aside--file-details-light.png').default, dark: require('./aside--file-details-dark.png').default }} />

### With Back Button

A back arrow before the title, for a panel with several levels: the arrow calls `onBackClick`, logged in the Actions panel, while the cross still closes the panel (`isBackButton`).

<ThemedImage alt="With Back Button" width={1024} sources={{ light: require('./aside--with-back-button-light.png').default, dark: require('./aside--with-back-button-dark.png').default }} />

### Without Header

A panel with no header, for content that brings its own title bar. The close cross goes with the header, so the page has to close the panel itself — here a click on the dimmed page does (`withoutHeader`).

<ThemedImage alt="Without Header" width={1024} sources={{ light: require('./aside--without-header-light.png').default, dark: require('./aside--without-header-dark.png').default }} />

### Scaled

The panel across the full width of the window instead of 480px, for content that needs the room (`scale`).

<ThemedImage alt="Scaled" width={1024} sources={{ light: require('./aside--scaled-light.png').default, dark: require('./aside--scaled-dark.png').default }} />

### Right To Left

The same panel under a right-to-left interface: it is attached to the left edge instead of the right and slides in from there, the back arrow points the other way and the close cross sits on the left of the header. The direction comes from the theme's `interfaceDirection` (the Direction toolbar); the wrapper also carries `dir="rtl"` for the rules that read the DOM direction.

<ThemedImage alt="Right To Left" width={1024} sources={{ light: require('./aside--right-to-left-light.png').default, dark: require('./aside--right-to-left-dark.png').default }} />

### Css Customization

The panel and its header restyled through CSS variables on one wrapper -- the variables are listed under CSS variables on this page, and the header's on the AsideHeader page.

The title here is a node rather than a string, so the color and font-size variables reach it. The back arrow is on to show the gap between it and the title; the phone footer offset shows only in a phone-width window. The margin is left alone because the border does not follow it.

<ThemedImage alt="Css Customization" width={368} sources={{ light: require('./aside--css-customization-light.png').default, dark: require('./aside--css-customization-dark.png').default }} />

## Minimal example

The panel is `position: fixed` and always rendered, so mount it conditionally — see the first
behaviour note.

```tsx
import { useState } from "react";
import { Aside } from "@onlyoffice/apps-ui-kit/components/aside";
import { Backdrop } from "@onlyoffice/apps-ui-kit/components/backdrop";
import { Button } from "@onlyoffice/apps-ui-kit/components/button";

export function MembersPanel() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button label="Members" onClick={() => setOpen(true)} />
      {open ? (
        <>
          <Backdrop visible zIndex={399} onClick={() => setOpen(false)} />
          <Aside visible header="Members" onClose={() => setOpen(false)}>
            <p style={{ padding: 16 }}>Nobody has joined this room yet.</p>
          </Aside>
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
| `children` | `ReactNode` | Content of the panel, below the header. |
| `visible` | `boolean` | Whether the panel is slid in. It only switches a CSS transform — the panel and its children stay mounted and in the tab order either way, so render the component conditionally to close it properly. |
| `className`? | `string` | Applied to the `<aside>` element. |
| `onClose`? | `() => void` | Called by the header's close cross. Nothing else closes the panel: there is no backdrop, no Escape handling and no click-outside. |
| `scale`? | `boolean` | Makes the panel take the full width of the viewport instead of its 480px. Default: `false`. |
| `withoutBodyScroll`? | `boolean` | Renders the children directly instead of inside the kit's `Scrollbar`. It does **not** lock the page's scroll, despite the name. Default: `false`. |
| `withoutHeader`? | `boolean` | Renders no header at all — which also removes the only control that calls `onClose`. Default: `false`. |
| `zIndex`? | `number` | Stacking order of the panel. It sits above the page but below nothing in particular — a `Backdrop` of your own needs a lower value. Default: `400`. |

</APITable>

#### Inherited from `AsideHeaderProps`

Declared by [`components/aside/aside-header`](./aside-header.md) and accepted here too.

<APITable>

| Property | Type | Description |
| --- | --- | --- |
| `dataTestId`? | `string` | Value of `data-testid` on the header. Default: `"aside-header"`. |
| `header`? | `ReactNode` | Title of the panel. A string is rendered as bold 21px text; any other node is rendered inside a `Heading` that truncates with an ellipsis. Nothing is rendered when it is absent, including no placeholder. |
| `headerComponent`? | `ReactNode` | Arbitrary node rendered after the icons and before the close cross, for a control that is not an icon. |
| `headerHeight`? | `string` | Height of the header as a CSS length, applied through the `--aside-header-custom-height` custom property. Without it the header is 53px. |
| `headerIcons`? | `HeaderIcon[]` | Extra icon buttons between the title and the close cross. Each needs a `key`, an `onClick` and either `iconNode` (JSX, preferred) or `url` — a URL fetched at runtime, not an asset name. |
| `id`? | `string` | Applied to the header element. |
| `isBackButton`? | `boolean` | Whether a back arrow is rendered before the title. It is mirrored in RTL. Default: `false`. |
| `isCloseable`? | `boolean` | Whether the close cross is rendered. It is the only control that calls `onCloseClick`. Default: `true`. |
| `isLoading`? | `boolean` | Replaces the whole header — title, icons and close cross alike — with a skeleton bar. There is no way out of a header that is loading. |
| `onBackClick`? | `() => void` | Called by the back arrow. |
| `onCloseClick`? | `() => void` | Called by the close cross. |
| `style`? | `CSSProperties` | Applied to the header element. |
| `withoutBorder`? | `boolean` | Hides the bottom border, which otherwise spans the full width of the panel regardless of the header's own side margins. |

</APITable>

Plus 53 more props inherited from `React.AriaAttributes`, forwarded to the element.

## Recipes

### Open and close, controlled

```tsx
import { useState } from "react";
import { Aside } from "@onlyoffice/apps-ui-kit/components/aside";
import { Button } from "@onlyoffice/apps-ui-kit/components/button";

export function DetailsPanel({ name }: { name: string }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button label="Details" onClick={() => setOpen(true)} />
      {open ? (
        <Aside
          visible
          header={name}
          isBackButton
          onBackClick={() => setOpen(false)}
          onClose={() => setOpen(false)}
        >
          <p style={{ padding: 16 }}>Details of {name}.</p>
        </Aside>
      ) : null}
    </>
  );
}
```

### Loading

The header's `isLoading` replaces the title with a skeleton, for a panel opened before its
content is known.

```tsx
import { Aside } from "@onlyoffice/apps-ui-kit/components/aside";
import { Loader, LoaderTypes } from "@onlyoffice/apps-ui-kit/components/loader";

export function LazyPanel({ ready }: { ready: boolean }) {
  return (
    <Aside visible header="Room members" isLoading={!ready} onClose={() => {}}>
      {ready ? (
        <p style={{ padding: 16 }}>Three members.</p>
      ) : (
        <div style={{ display: "flex", justifyContent: "center", padding: 24 }}>
          <Loader type={LoaderTypes.oval} size="32px" label="Loading" />
        </div>
      )}
    </Aside>
  );
}
```

## Behaviour the types don't state

- **`visible` only animates.** The panel is `position: fixed` and always in the document; the
  prop switches a `transform` between off-screen and zero. Its children keep running and its
  controls stay in the tab order of the page behind it, so an unmounted panel is the only
  closed panel — render it conditionally, as every example here does.
- **Nothing closes it but the header's cross.** There is no backdrop, no Escape handler and no
  click-outside. `onClose` is wired to the cross alone; add a `Backdrop` with a lower `zIndex`
  for the usual behaviour.
- **`withoutBodyScroll` does not lock the page's scroll.** It decides whether the children are
  wrapped in the kit's `Scrollbar`; the page behind keeps scrolling either way.
- **The panel is a flex column, and the body takes the space the header leaves.** A list long
  enough to scroll reaches its last item without anything on your side. If you pass
  `withoutBodyScroll` and bring a scroller of your own, give it `flex: 1 1 0` and `min-height: 0`
  for the same result — a plain `height: 100%` there resolves against the whole panel and hangs
  its bottom below the edge.
- **`withoutHeader` removes the only way out.** With no header there is no cross, so a panel
  that hides its header has to be closed by something of yours.
- **The props it does not read itself are split, not copied.** `aria-*` attributes go on the
  `<aside>` element; every other one — `header`, `isBackButton`, `onBackClick`, `id`, `style` and
  the rest — goes to the header alone, which is why `id` and `style` land on the header rather
  than on the panel.
- The panel is 480px wide and slides in from the right edge — from the left one under a
  right-to-left interface. On a phone it becomes a full-width bottom sheet that slides up and
  leaves room for the mobile footer.

## CSS variables

<APITable>

| Variable                       | Default                      | Effect                                                                                         |
| ------------------------------ | ---------------------------- | ---------------------------------------------------------------------------------------------- |
| `--aside-width`                | `480px`                      | Width of the panel, and how far the closed panel is moved out of view; `scale` overrides both  |
| `--aside-bg`                   | theme surface                | Background of the panel                                                                        |
| `--aside-transition`           | `transform 0.3s ease-in-out` | The slide animation                                                                            |
| `--aside-mobile-footer-height` | `64px`                       | On a phone, where the panel is a bottom sheet: how much of the window stays uncovered above it |

</APITable>

The header reads its own `--aside-header-*` set — colour, border, height, font size, margin
and gap among them; [`AsideHeader`](./aside-header.md) lists them. Set on a wrapper
around the panel, they reach its header too.

## Accessibility

- Renders a real `<aside>` element, so it is exposed as a complementary landmark. It is not a
  dialog: no `role="dialog"`, no `aria-modal`, and focus is neither moved into it nor trapped.
- Because the markup stays in the document while `visible` is false, everything inside it is
  reachable by keyboard from the page behind. Conditional rendering is what prevents that.
- The header's close cross carries `aria-label="close"`, but it is a `<div>` with no button
  role and no tab stop, so a keyboard cannot reach it — and it is the only control that calls
  `onClose`. A keyboard user needs a way out of yours.
- `AriaAttributes` are part of the props type and land on the `<aside>` element alone, so an
  `aria-label` names the landmark.

## Test ids

<APITable>

| Element    | `data-testid`                                              |
| ---------- | ---------------------------------------------------------- |
| The panel  | `aside`                                                    |
| The header | `aside-header`, overridable with the header's `dataTestId` |

</APITable>

## Related

- [`ModalDialog`](./modal-dialog.md) — a dialog, optionally shaped as an aside.
- [`Backdrop`](./backdrop.md) — the dimming layer this component does not render.
- [`AsideHeader`](./aside-header.md) — the header, and the props this component passes
  through to it.
