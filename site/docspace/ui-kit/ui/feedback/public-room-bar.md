---
description: "Grey note above a screen's content: an icon, a bold line and a paragraph, with an optional close cross."
custom_edit_url: "https://github.com/ONLYOFFICE/docspace-ui-kit-react/blob/9954315f61fd4830b7ea0582c3d58bee0e85d0aa/components/public-room-bar/README.md"
---

import ThemedImage from '@theme/ThemedImage';

import APITable from '@site/src/components/APITable/APITable';

# PublicRoomBar

Grey note above a screen's content: an icon, a bold line and a paragraph, with an optional close
cross. In the portal it explains that a room is reachable by link; nothing in it is about rooms,
so it serves as the kit's standing informational bar.

<ThemedImage alt="PublicRoomBar" width={1014} sources={{ light: require('./public-room-bar--primary-light.png').default, dark: require('./public-room-bar--primary-dark.png').default }} />

## Use this when / not when

- Use for a standing explanation at the top of a screen — a state the reader should know about
  while they work, not an event.
- Not for facts in columns — [`ColumnarInfoBar`](./columnar-info-bar.md) lays out
  label-and-value pairs.
- Not for something that appears in response to an action — use
  [`Snackbar`](./snackbar.md) or [`toastr`](./toast.md).
- **`barIsVisible` is not a visibility prop.** Nothing here shows or hides the bar; render it
  conditionally yourself. See the table and the note below.
- **There is no severity and no action slot.** One grey box, whatever the message; put a button
  or a link inside `bodyText` if the reader needs one.

## Import

```ts
import PublicRoomBar from "@onlyoffice/apps-ui-kit/components/public-room-bar";
```

It is a **default** export, so the name is yours to choose. The root barrel carries it by name
as well — `components/index.ts` re-exports it as `export { default as PublicRoomBar }` — but prefer the
subpath: the barrel does not build without four optional peers, see
[Which import form](../../getting-started/installation-and-setup.md#which-import-form).

Needs `ThemeProvider` above it in the tree. The background and the two text colours are declared
only under the `.light` and `.dark` classes the provider puts on `<body>`; without it the bar
has no background at all and both lines fall back to the container's black, which is unreadable
on a dark page.

## Stories

### Default

The bar as most screens use it: the default icon, a header and a body line, with no close cross. Change any prop live in the Controls panel below.

<ThemedImage alt="Default" width={1014} sources={{ light: require('./public-room-bar--default-light.png').default, dark: require('./public-room-bar--default-dark.png').default }} />

### With Custom Icon

Replace the default glyph when another icon says more about the state the bar explains — here a planet, passed as an SVG URL (`iconName`).

<ThemedImage alt="With Custom Icon" width={1014} sources={{ light: require('./public-room-bar--with-custom-icon-light.png').default, dark: require('./public-room-bar--with-custom-icon-dark.png').default }} />

### Without Close Button

Persistent bar without a close button. Cannot be dismissed by the user.

<ThemedImage alt="Without Close Button" width={1014} sources={{ light: require('./public-room-bar--without-close-button-light.png').default, dark: require('./public-room-bar--without-close-button-dark.png').default }} />

### With Custom Components

Pass nodes instead of strings when a line needs markup of its own — a coloured header and an italic body here, each wrapped in a div instead of a paragraph (`headerText`, `bodyText`). The bar also sits without its top margin (`barIsVisible`).

<ThemedImage alt="With Custom Components" width={1014} sources={{ light: require('./public-room-bar--with-custom-components-light.png').default, dark: require('./public-room-bar--with-custom-components-dark.png').default }} />

### With Close Button

Let the reader dismiss a note they have read: a close cross appears on the right (`onClose`). Clicking it only reports the click in the Actions panel; the bar stays until the host stops rendering it.

<ThemedImage alt="With Close Button" width={1014} sources={{ light: require('./public-room-bar--with-close-button-light.png').default, dark: require('./public-room-bar--with-close-button-dark.png').default }} />

### Without Header

For a note that needs no title: the icon and the bold header are gone and only the smaller body line is left (`hideHeader`).

<ThemedImage alt="Without Header" width={1014} sources={{ light: require('./public-room-bar--without-header-light.png').default, dark: require('./public-room-bar--without-header-dark.png').default }} />

### Css Customization

The colour, spacing and corner variables set on one wrapper -- the variables are listed under CSS variables on this page.

<ThemedImage alt="Css Customization" width={1014} sources={{ light: require('./public-room-bar--css-customization-light.png').default, dark: require('./public-room-bar--css-customization-dark.png').default }} />

## Minimal example

```tsx
import PublicRoomBar from "@onlyoffice/apps-ui-kit/components/public-room-bar";

export function SharedNotice() {
  return (
    <PublicRoomBar
      headerText="Anyone with the link"
      bodyText="People who have this link can open the room without signing in."
    />
  );
}
```

## Props


<APITable>

| Property | Type | Description |
| --- | --- | --- |
| `bodyText` | `React.ReactNode` | The line under the header, at 12px. A string renders in the kit's `Text`; anything else is wrapped in a `div` instead of `Text`'s usual `p`. |
| `headerText` | `React.ReactNode` | Bold first line, beside the icon. A string renders in the kit's `Text`; anything else is wrapped in a `div` instead of `Text`'s usual `p`. `hideHeader` removes it. |
| `barIsVisible`? | `boolean` | Removes the bar's own 20px top margin, for a bar that already sits under something. It shows and hides nothing, whatever the name suggests. |
| `className`? | `string` | Added after the component's own classes on the outer element. |
| `dataTestId`? | `string` | Value of `data-testid` on the outer element. Default: `"public_room_bar"`. |
| `hideHeader`? | `boolean` | Drops the whole first row, icon and header text together, leaving the body on its own. |
| `iconName`? | `React.ReactElement<unknown, string \| React.JSXElementConstructor<any>> \| string` | Icon beside the header, the kit's 16px people glyph when unset. A string is fetched as an SVG through `react-svg`; an element is rendered as given. Only `path` fills are recoloured. Default: `defaultIcon`. |
| `onClose`? | `() => void` | Called when the close button is clicked. The button exists only while this is set, and the bar does not hide itself. |
| `ref`? | `React.RefObject<HTMLDivElement \| null>` | Attached to the outer element. |
| `style`? | `React.CSSProperties` | Inline style of the outer element, and where the `--public-room-bar-*` custom properties go. |

</APITable>

## Recipes

### Dismissing it

`onClose` draws the cross and reports the click. The bar stays until you stop rendering it.

```tsx
import { useState } from "react";

import PublicRoomBar from "@onlyoffice/apps-ui-kit/components/public-room-bar";

export function DismissibleNotice() {
  const [shown, setShown] = useState(true);

  if (!shown) return null;

  return (
    <PublicRoomBar
      headerText="Anyone with the link"
      bodyText="People who have this link can open the room without signing in."
      onClose={() => setShown(false)}
    />
  );
}
```

### Your own icon

A string is treated as a URL and fetched at render; an element is rendered as it is. The element
form is the one to use with a bundler, and it is the only form that works offline.

```tsx
import PublicRoomBar from "@onlyoffice/apps-ui-kit/components/public-room-bar";

export function LockedNotice() {
  return (
    <PublicRoomBar
      headerText="Read-only"
      bodyText="This room is archived. Restore it to make changes."
      iconName={
        <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
          <path d="M4 7V5a4 4 0 1 1 8 0v2h1v7H3V7h1Zm2 0h4V5a2 2 0 1 0-4 0v2Z" />
        </svg>
      }
    />
  );
}
```

### Body only

`hideHeader` removes the whole first row — the icon goes with it — leaving one paragraph in the
grey box.

```tsx
import PublicRoomBar from "@onlyoffice/apps-ui-kit/components/public-room-bar";

export function QuotaNote() {
  return (
    <PublicRoomBar
      hideHeader
      headerText=""
      bodyText="Storage is at 92% of the plan's limit."
      barIsVisible
    />
  );
}
```

## Behaviour the types don't state

- **`barIsVisible` shows and hides nothing.** All it does is drop the bar's own 20px top margin,
  for a bar that already sits directly under something. The name is the portal's, not a
  description. Take the bar out of the tree to hide it.
- **`onClose` does not close the bar** — it only renders the cross and reports the click.
- **The close control is a `<div>`, not a button.** It comes from `IconButton`, which sets no
  role, no `tabindex` and no key handler, so the cross cannot be reached or operated by
  keyboard. The component's own test asserts that no `role="button"` exists when `onClose` is
  omitted; that passes whether or not the cross is rendered.
- **A non-string `headerText` or `bodyText` is wrapped in a `div`** instead of the `p` a string
  gets, so passing your own block element does not produce invalid nesting. `headerText` is
  still required when `hideHeader` is set — pass an empty string.
- **Only `path` fills are recoloured.** The icon's colour is applied as
  `.headerIcon path { fill: … }`, so artwork drawn with `rect`, `circle` or a `stroke` keeps
  whatever colour it was authored with.
- **The icon slot collapses when it renders nothing**, through an `:empty` rule — an empty
  fragment removes the gap rather than leaving a hole.
- **A string `iconName` is fetched over the network** by `react-svg` when the bar renders. With
  a bundler that means the `?url` form of the import; a plain SVG import gives you a component,
  which belongs in the element form instead.
- **`--public-room-bar-text` is the fallback colour, not the text colour.** The header and the
  body each set their own colour over it, so it only becomes visible where those are unset —
  which is exactly the case when no theme provider is mounted.
- **The bar brings a 10px bottom margin** of its own, on top of any `gap` around it.
- **Unknown props are not forwarded.** The type has no index signature and only `style` reaches
  the element besides the named props, so an `aria-*` or `id` attribute has to go on a wrapper
  of yours.

## CSS variables

<APITable>

| Variable                          | Default                       | Effect                            |
| --------------------------------- | ----------------------------- | --------------------------------- |
| `--public-room-bar-bg`            | light grey; dark grey in dark | Background of the bar             |
| `--public-room-bar-header-color`  | black; white in dark          | Colour of `headerText`            |
| `--public-room-bar-body-color`    | grey text                     | Colour of `bodyText`              |
| `--public-room-bar-close-icon`    | grey                          | None; see the note below          |
| `--public-room-bar-header-icon`   | light grey                    | Fill of the header icon's paths   |
| `--public-room-bar-text`          | black                         | Colour the two lines fall back to |
| `--public-room-bar-text-size`     | `12px`                        | Base font size of the bar         |
| `--public-room-bar-padding`       | `12px 16px`                   | Padding of the bar                |
| `--public-room-bar-radius`        | `6px`                         | Corner radius                     |
| `--public-room-bar-bottom-margin` | `10px`                        | Bottom margin                     |
| `--public-room-bar-top-margin`    | `20px`                        | Top margin, unless `barIsVisible` |
| `--public-room-bar-header-gap`    | `8px`                         | Gap between icon and header       |
| `--public-room-bar-header-weight` | `600`                         | Weight of the header row          |

</APITable>

`--public-room-bar-close-icon` is read, but by a `path` rule that `IconButton`'s own fill rule
outranks, and `IconButton` also sets `--icon-button-color` on itself. The close cross therefore
keeps the icon button's grey whatever a wrapper or `style` sets.

## Accessibility

- The bar is a plain `<div>` with no role and no live region: a reader using a screen reader
  meets it only when they reach that point in the page. Wrap it in a live region yourself if it
  appears in response to something they did.
- **The close cross is not operable by keyboard** and has no accessible name — it is a `<div>`
  with a click handler. When dismissing matters, add your own button beside the bar instead of
  relying on it.
- `headerText` is rendered as a paragraph, not a heading, so it does not appear in the document
  outline.
- The header icon is decorative but has no `aria-hidden`; pass your own element with
  `aria-hidden="true"` on it, as the recipe above does.

## Test ids

<APITable>

| Element       | `data-testid`                                     |
| ------------- | ------------------------------------------------- |
| Outer element | `public_room_bar`, overridden by `dataTestId`     |
| Close cross   | `icon-button`, from `IconButton` and not settable |

</APITable>

The two text elements carry `Text`'s own `text` id.

## Related

- [`ColumnarInfoBar`](./columnar-info-bar.md) — the same idea for label-and-value pairs.
- [`Snackbar`](./snackbar.md) — for a message that follows an action.
- [`Toast`](./toast.md) — for a transient message anywhere on the page.
