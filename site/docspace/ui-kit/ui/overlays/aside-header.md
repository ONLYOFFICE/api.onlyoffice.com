---
description: "Title bar of a side panel or a dialog, with a back arrow, extra icons and the close cross."
custom_edit_url: "https://github.com/ONLYOFFICE/docspace-ui-kit-react/blob/446f115916d79a87d07b9e3dddb1e39a263784ee/components/aside/aside-header/README.md"
---

import ThemedImage from '@theme/ThemedImage';

import APITable from '@site/src/components/APITable/APITable';

# AsideHeader

Title bar of a side panel or a dialog, with a back arrow, extra icons and the close cross. Both
[`Aside`](./aside.md) and [`ModalDialog`](./modal-dialog.md) render one and accept
its props, so this page is where those props are explained.

<ThemedImage alt="AsideHeader" width={468} sources={{ light: require('./aside-header--primary-light.png').default, dark: require('./aside-header--primary-dark.png').default }} />

## Use this when / not when

- Use it directly only when you are building a panel of your own that should look like the
  kit's. Inside [`Aside`](./aside.md) or [`ModalDialog`](./modal-dialog.md) the
  header is already there — pass `header`, `isCloseable` and the rest to the panel itself.
- Not as a page heading: it is a 53px bar with a bottom border and side margins meant for a
  panel. A heading in the page flow is [`Heading`](../data-display/heading.md).
- Not for a toolbar of actions. It fits a back arrow, a title, a few icons and a close cross;
  anything more crowds the title out.

## Import

```ts
import { AsideHeader } from "@onlyoffice/apps-ui-kit/components/aside/aside-header";
```

`components/index.ts` does not list this folder, but it lists `aside`, and `export *`
is transitive — so the name arrives from `@onlyoffice/apps-ui-kit/components/aside` and from
the root barrel `@onlyoffice/apps-ui-kit` as well.

Needs `ThemeProvider` from `@onlyoffice/apps-ui-kit/providers/theme` above it in the tree for
the title colour and the border colour.


## Stories

### Default

A title and the close cross, the header every side panel starts with; clicks on the cross are logged in the Actions panel. Change any other prop live in the Controls panel below.

<ThemedImage alt="Default" width={468} sources={{ light: require('./aside-header--default-light.png').default, dark: require('./aside-header--default-dark.png').default }} />

### With Back Button

A back arrow before the title, for a panel that opens a second level and needs a way back to the first; the arrow calls its own handler, logged in the Actions panel (`isBackButton`).

<ThemedImage alt="With Back Button" width={468} sources={{ light: require('./aside-header--with-back-button-light.png').default, dark: require('./aside-header--with-back-button-dark.png').default }} />

### With Icons

Two icon buttons between the title and the close cross, for actions on what the panel shows without a toolbar of their own; each icon has its own click handler (`headerIcons`).

<ThemedImage alt="With Icons" width={468} sources={{ light: require('./aside-header--with-icons-light.png').default, dark: require('./aside-header--with-icons-dark.png').default }} />

### Loading

A skeleton bar in place of the whole header while the panel waits for its data. The close cross goes too, so a panel that may load for long needs another way out (`isLoading`).

<ThemedImage alt="Loading" width={468} sources={{ light: require('./aside-header--loading-light.png').default, dark: require('./aside-header--loading-dark.png').default }} />

### Without Border

The header with no line under it, for a panel whose first block already draws its own separator (`withoutBorder`).

<ThemedImage alt="Without Border" width={468} sources={{ light: require('./aside-header--without-border-light.png').default, dark: require('./aside-header--without-border-dark.png').default }} />

### Custom Height

A 70px header instead of 53px, for a title bar that has to line up with a taller bar next to the panel (`headerHeight`).

<ThemedImage alt="Custom Height" width={468} sources={{ light: require('./aside-header--custom-height-light.png').default, dark: require('./aside-header--custom-height-dark.png').default }} />

### Back And Close

The back arrow and the close cross around a title too long for the panel: the title is cut off with an ellipsis rather than pushing the close cross out of the header.

<ThemedImage alt="Back And Close" width={468} sources={{ light: require('./aside-header--back-and-close-light.png').default, dark: require('./aside-header--back-and-close-dark.png').default }} />

### With Custom Control

A button between the title and the close cross, for an action that needs a label rather than an icon (`headerComponent`).

<ThemedImage alt="With Custom Control" width={468} sources={{ light: require('./aside-header--with-custom-control-light.png').default, dark: require('./aside-header--with-custom-control-dark.png').default }} />

### Right To Left

The same header under a right-to-left interface: the back arrow moves to the right edge and points right, the title follows it, and the close cross sits on the left. The direction comes from the theme's `interfaceDirection` (the Direction toolbar); the wrapper also carries `dir="rtl"` for the rules that read the DOM direction.

<ThemedImage alt="Right To Left" width={468} sources={{ light: require('./aside-header--right-to-left-light.png').default, dark: require('./aside-header--right-to-left-dark.png').default }} />

### Css Customization

Two headers restyled through CSS variables -- the variables are listed under CSS variables on this page.

- **Customized Header** — the wrapper's color, border, font size, height and gap; the back arrow is on to show the gap before the title.
- **Centered Title** — the title taken out of the row and centered, with the line removed. These variables are set through the header's own `style`, because in the wrapper they would also move the first header's title away from its back arrow.

<ThemedImage alt="Css Customization" width={466} sources={{ light: require('./aside-header--css-customization-light.png').default, dark: require('./aside-header--css-customization-dark.png').default }} />

## Minimal example

The close cross is rendered unless you turn it off, so `onCloseClick` is what makes the header
useful on its own.

```tsx
import { AsideHeader } from "@onlyoffice/apps-ui-kit/components/aside/aside-header";

export function PanelHeader({ onClose }: { onClose: () => void }) {
  return <AsideHeader header="Members" onCloseClick={onClose} />;
}
```

## Props


<APITable>

| Property | Type | Description |
| --- | --- | --- |
| `className`? | `string` | Applied to the header element. |
| `dataTestId`? | `string` | Value of `data-testid` on the header. Default: `"aside-header"`. |
| `header`? | `ReactNode` | Title of the panel. A string is rendered as bold 21px text; any other node is rendered inside a `Heading` that truncates with an ellipsis. Nothing is rendered when it is absent, including no placeholder. |
| `headerComponent`? | `ReactNode` | Arbitrary node rendered after the icons and before the close cross, for a control that is not an icon. |
| `headerHeight`? | `string` | Height of the header as a CSS length, applied through the `--aside-header-custom-height` custom property. Without it the header is 53px. |
| `headerIcons`? | `HeaderIcon[]` | Extra icon buttons between the title and the close cross. Each needs a `key`, an `onClick` and either `iconNode` (JSX, preferred) or `url` — a URL fetched at runtime, not an asset name. Default: `[]`. |
| `id`? | `string` | Applied to the header element. |
| `isBackButton`? | `boolean` | Whether a back arrow is rendered before the title. It is mirrored in RTL. Default: `false`. |
| `isCloseable`? | `boolean` | Whether the close cross is rendered. It is the only control that calls `onCloseClick`. Default: `true`. |
| `isLoading`? | `boolean` | Replaces the whole header — title, icons and close cross alike — with a skeleton bar. There is no way out of a header that is loading. |
| `onBackClick`? | `() => void` | Called by the back arrow. |
| `onCloseClick`? | `() => void` | Called by the close cross. |
| `style`? | `CSSProperties` | Applied to the header element. |
| `withoutBorder`? | `boolean` | Hides the bottom border, which otherwise spans the full width of the panel regardless of the header's own side margins. Default: `false`. |

</APITable>

## Recipes

### Loading

`isLoading` replaces everything, so a header that is loading cannot be closed. Keep the panel
closable by something of yours while it loads.

```tsx
import { AsideHeader } from "@onlyoffice/apps-ui-kit/components/aside/aside-header";

export function LazyPanelHeader({
  ready,
  onClose,
}: {
  ready: boolean;
  onClose: () => void;
}) {
  return (
    <AsideHeader
      header="Room members"
      isLoading={!ready}
      onCloseClick={onClose}
    />
  );
}
```

### A back arrow and extra icons

```tsx
import { AsideHeader } from "@onlyoffice/apps-ui-kit/components/aside/aside-header";

const INFO_ICON = (
  <svg viewBox="0 0 17 17" width="17" height="17" aria-hidden="true">
    <circle cx="8.5" cy="8.5" r="7" fill="none" stroke="currentColor" />
  </svg>
);

export function DetailsHeader({
  onBack,
  onClose,
  onInfo,
}: {
  onBack: () => void;
  onClose: () => void;
  onInfo: () => void;
}) {
  return (
    <AsideHeader
      header="Document.docx"
      isBackButton
      onBackClick={onBack}
      headerIcons={[{ key: "info", iconNode: INFO_ICON, onClick: onInfo }]}
      onCloseClick={onClose}
    />
  );
}
```

## Behaviour the types don't state

- **A string header and a node header are rendered differently.** A string becomes bold 21px
  `Text`; anything else goes into a `Heading`. Both stay on one line and cut off with an
  ellipsis, but only a node title reads `--aside-header-color` and `--aside-header-font-size` —
  a string title keeps the text colour and 21px whatever you set. Wrap it in a `<span>` to
  restyle it.
- **`isLoading` hides the close cross.** The skeleton replaces the whole content, back arrow and
  cross included, so the panel has no way out while it is loading.
- **The border is wider than the header.** The header has `margin: 0 16px`, and the bottom
  border is drawn by an `::after` of `calc(100% + 32px)` pulled 16px past each side, so it
  reaches the panel's edges. `withoutBorder` removes it.
- **`headerHeight` is written as a custom property in an effect**, not as a style, and it is
  only ever set — clearing the prop removes the class that reads it, but the property stays on
  the element.
- **The close cross carries a hard-coded English `aria-label` of "close".** It is not
  translated, and nothing else in the header has a name at all.
- The element is a `<div>`, not a `<header>`, and takes no landmark role.
- An icon in `headerIcons` given a `url` hands it to `IconButton`'s `iconName`, which fetches it
  at runtime; `iconNode` renders JSX inline and needs no request.
- While `isLoading`, the skeleton's own `data-testid` of `rectangle-skeleton` wins over the
  `loader` the header asks for, because
  [`RectangleSkeleton`](../skeletons/rectangle.md) writes its test id last.

## CSS variables

Set these on the header or an ancestor; each is read through a bridge variable, so the theme's
own value is the fallback.

<APITable>

| Variable                          | Default         | Effect                                                                                                                      |
| --------------------------------- | --------------- | --------------------------------------------------------------------------------------------------------------------------- |
| `--aside-header-color`            | theme text      | Colour of a node title; a string title ignores it                                                                           |
| `--aside-header-border`           | theme border    | Colour of the bottom border                                                                                                 |
| `--aside-header-height`           | `53px`          | Height of the bar, unless `headerHeight` is given                                                                           |
| `--aside-header-custom-height`    | `53px`          | Height applied when `headerHeight` is given                                                                                 |
| `--aside-header-font-size`        | `21px`          | Size of a node title; a string title stays 21px                                                                             |
| `--aside-header-margin`           | `0 16px`        | Margin around the bar                                                                                                       |
| `--aside-header-gap`              | `6px`           | Gap between the parts                                                                                                       |
| `--aside-header-justify`          | `space-between` | `justify-content` of the row; no visible effect while the close cross is shown, whose automatic margin takes the free space |
| `--aside-header-border-display`   | `""`            | `content` of the pseudo-element that draws the bottom border; `none` removes the line                                       |
| `--aside-header-title-position`   | `static`        | `position` of the title, for centring it                                                                                    |
| `--aside-header-title-inset`      | `auto`          | `inset-inline-start` of the title                                                                                           |
| `--aside-header-title-transform`  | `none`          | `transform` of the title                                                                                                    |
| `--aside-header-title-text-align` | `start`         | `text-align` of the title; visible only on a title wider than its text                                                      |

</APITable>

`--aside-header-custom-height` is the exception to setting a variable on an ancestor: the theme
rules redefine it on the header itself, so only `headerHeight` changes it.

`--aside-header-margin` moves the bar but not its border, which keeps reaching 16px past each
side; any value other than `0 16px` leaves the line short of the panel's edges or overflowing
them.

To centre the title, take it out of the row: `--aside-header-title-position: absolute`,
`--aside-header-title-inset: 50%` and `--aside-header-title-transform: translateX(-50%)`. Set
these on the header's own `style` rather than on a shared ancestor, where they would also pull
a neighbouring header's title away from its back arrow.

## Accessibility

- The header is a plain `<div>`: no `<header>` element, no `role="banner"`, and the title is not
  associated with the panel. A dialog that needs an accessible name has to supply one itself.
- The close cross is an `IconButton`, which renders a `<div>` — it has an `aria-label` but no
  button role, no tab stop and no Enter or Space activation. The header is not operable by
  keyboard.
- The back arrow and the `headerIcons` are `IconButton`s too, and have not even the label: no
  name, no role and no tab stop.
- That `aria-label` is the literal string `"close"`, in English, whatever the locale.
- The title, string or node, is truncated with an ellipsis, so a long one is unreadable rather
  than wrapped; keep titles short.

## Test ids

<APITable>

| Element         | `data-testid`                                 |
| --------------- | --------------------------------------------- |
| The header      | `aside-header`, overridable with `dataTestId` |
| The back arrow  | `aside_header_back_icon_button`               |
| The close cross | `aside_header_close_icon_button`              |
| The icon strip  | `icons-container`                             |

</APITable>

While `isLoading`, the header's only child is the skeleton, which carries `rectangle-skeleton`.

## Related

- [`Aside`](./aside.md) — the panel this header belongs to, which accepts these props.
- [`ModalDialog`](./modal-dialog.md) — the dialog, whose header is this one.
- [`IconButton`](../interactive-elements/icon-button.md) — what the cross, the arrow and `headerIcons` are
  made of.
