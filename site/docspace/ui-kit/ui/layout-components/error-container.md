---
description: "Full-screen error page: an animated landscape, a heading, an explanation and one action button."
custom_edit_url: "https://github.com/ONLYOFFICE/docspace-ui-kit-react/blob/9954315f61fd4830b7ea0582c3d58bee0e85d0aa/components/error-container/README.md"
---

import ThemedImage from '@theme/ThemedImage';

import APITable from '@site/src/components/APITable/APITable';

# ErrorContainer

Full-screen error page: an animated landscape, a heading, an explanation and one action button.
It is what the portal shows in place of a page it could not give you — a 404, an expired link,
a browser it does not support.

<ThemedImage alt="ErrorContainer" width={996} sources={{ light: require('./error-container--primary-light.png').default, dark: require('./error-container--primary-dark.png').default }} />

## Use this when / not when

- Use as the whole screen, in place of the page that failed.
- Not inside a panel or a card — the component fills the viewport height and cannot be made
  smaller. For a region that has no content, use
  [`EmptyScreenContainer`](./empty-screen-container.md) or
  [`EmptyView`](./empty-view.md).
- Not for a field that failed validation, and not for a request that failed in the background —
  that is a toast or an inline message.
- **The illustration is fixed.** There is no prop for it, it is inlined in the component, and
  its colours are hard-coded: the sky stays pale blue in the dark theme.
- **Pass `hideLogo` outside a DocSpace portal.** By default the page is topped with
  [`PortalLogo`](../data-display/portal-logo.md), which asks a portal endpoint for the white-label mark.

## Import

```ts
import { ErrorContainer } from "@onlyoffice/apps-ui-kit/components/error-container";
```

Also exported from the root barrel `@onlyoffice/apps-ui-kit`.
The component file has a default export, but the folder's `index` re-exports it under a name —
`import ErrorContainer from …` does not resolve.

Needs `ThemeProvider` above it in the tree for the dark theme, where the page background becomes
black and the muted line lightens. The light values are declared unconditionally, so without a
provider the page renders correctly in light and never switches.

## Stories

### Default

The plain error page: the heading says what happened (`headerText`), the line under it says what to do (`bodyText`), and the muted third line carries a detail such as an error code (`customizedBodyText`). Change any other prop live in the Controls panel below.

<ThemedImage alt="Default" width={996} sources={{ light: require('./error-container--default-light.png').default, dark: require('./error-container--default-dark.png').default }} />

### With Primary Button

**Retry** — a filled button under the message, for the one action that gets the user out of the error (`buttonText` with `onClickButton`). Without the handler the button is not rendered at all.

<ThemedImage alt="With Primary Button" width={996} sources={{ light: require('./error-container--with-primary-button-light.png').default, dark: require('./error-container--with-primary-button-dark.png').default }} />

### In Editor Mode

The same page laid over its host instead of pushing it down (`isEditor`), for a screen such as a document editor that mounts the error on top of a layout of its own.

<ThemedImage alt="In Editor Mode" width={1014} sources={{ light: require('./error-container--in-editor-mode-light.png').default, dark: require('./error-container--in-editor-mode-dark.png').default }} />

### With Children

**Please check the following** — a checklist and an error code under the message (`children`), for guidance that does not fit into one line of text.

<ThemedImage alt="With Children" width={996} sources={{ light: require('./error-container--with-children-light.png').default, dark: require('./error-container--with-children-dark.png').default }} />

### With Secondary Button

**Go back** — the same button, outlined (`isPrimaryButton` off), for a page where leaving is the way out rather than an action the user is expected to take.

<ThemedImage alt="With Secondary Button" width={996} sources={{ light: require('./error-container--with-secondary-button-light.png').default, dark: require('./error-container--with-secondary-button-dark.png').default }} />

### Without Logo

The page starts with the illustration, with no logo above it (`hideLogo`), for a host that already shows its own brand or has no portal to take the logo from.

<ThemedImage alt="Without Logo" width={996} sources={{ light: require('./error-container--without-logo-light.png').default, dark: require('./error-container--without-logo-dark.png').default }} />

### Css Customization

Both overridable variables set on one wrapper -- the variables are listed under CSS variables on this page. The example tints the page background and the `customizedBodyText` line.

<ThemedImage alt="Css Customization" width={996} sources={{ light: require('./error-container--css-customization-light.png').default, dark: require('./error-container--css-customization-dark.png').default }} />

## Minimal example

```tsx
import { ErrorContainer } from "@onlyoffice/apps-ui-kit/components/error-container";

export function NotFoundPage() {
  return (
    <ErrorContainer
      hideLogo
      headerText="Page not found"
      bodyText="The page you asked for does not exist, or you no longer have access to it."
    />
  );
}
```

## Props


<APITable>

| Property | Type | Description |
| --- | --- | --- |
| `bodyText`? | `string` | The line under the heading, 14px and no wider than 560px. |
| `buttonText`? | `string` | Label of the action button. The button appears only when `onClickButton` is set as well. |
| `children`? | `ReactNode` | Rendered last, below the button: the place for a support link or a details block. |
| `className`? | `string` | Added after the component's own classes on the outer element. |
| `customizedBodyText`? | `string` | A third line under `bodyText`, 13px and 600-weight, in the muted colour. It takes plain text, not markup. |
| `headerText`? | `string` | The heading, rendered as an `h1` at 23px. |
| `hideLogo`? | `boolean` | Hides the portal logo above the illustration. Set it outside a DocSpace portal, where the logo endpoint does not resolve. Default: `false`. |
| `id`? | `string` | Value of `id` on the outer element. It does not rename the fixed ids the component uses inside itself. |
| `isEditor`? | `boolean` | Takes the container out of the flow — `position: absolute` at full width — for the document editor, which mounts it over a layout of its own. Default: `false`. |
| `isPrimaryButton`? | `boolean` | Whether the action button is the filled accent one rather than the outlined one. Default: `true`. |
| `onClickButton`? | `VoidFunction` | Called when the action button is clicked. The button appears only when `buttonText` is set as well. |
| `style`? | `CSSProperties` | Inline style of the outer element. |

</APITable>

## Recipes

### With an action

The button appears only when `buttonText` **and** `onClickButton` are both set. It is stretched
to a 320px column, and to the full width below 1024px.

```tsx
import { ErrorContainer } from "@onlyoffice/apps-ui-kit/components/error-container";

export function OfflinePage({ retry }: { retry: () => void }) {
  return (
    <ErrorContainer
      hideLogo
      headerText="No connection"
      bodyText="We could not reach the server. Check your connection and try again."
      buttonText="Try again"
      onClickButton={retry}
    />
  );
}
```

### An extra line and your own content

`customizedBodyText` is a third line, smaller and bolder than `bodyText`. Anything richer goes in
`children`, which render below the button.

```tsx
import { ErrorContainer } from "@onlyoffice/apps-ui-kit/components/error-container";
import { Link } from "@onlyoffice/apps-ui-kit/components/link";

export function ExpiredLinkPage() {
  return (
    <ErrorContainer
      hideLogo
      headerText="This link has expired"
      bodyText="Links are valid for seven days. Ask the person who shared it for a new one."
      customizedBodyText="Error code: LINK_EXPIRED"
    >
      <Link href="/support" isHovered>
        Contact support
      </Link>
    </ErrorContainer>
  );
}
```

## Behaviour the types don't state

- **The component always fills the viewport height.** It is wrapped in the kit's scrollbar at
  `height: 100dvh`, so it is a page, not a block: inside a card or a column it takes the whole
  screen anyway and scrolls within itself.
- **The portal logo is on by default**, and it is fetched from the portal's own
  `logo.ashx` endpoint, absolute from the site root. Outside DocSpace that request fails and the
  bundled fallback mark appears instead. `hideLogo` removes it altogether.
- **It uses fixed element ids.** `container-inner`, `header`, `text`, `customized-text`,
  `button-container`, `button` and thirteen more on the illustration's pieces. Two error
  containers in one document therefore produce duplicate ids, and a `getElementById` of your own
  finds whichever came first. The `id` prop names the outer element only; it does not prefix
  these.
- **`data-testid` is the literal string `ErrorContainer` and cannot be changed.** Any
  `data-testid` you pass is spread onto the element before that attribute is written.
- **The illustration has no dark variant.** Every colour in it is a hard-coded hex value — the
  pale blue sky and the white clouds stay as they are on a black page.
- **The landscape assembles itself on mount.** For the first second the mountains, birds and
  clouds slide into place from off their positions and fade in, and the balloon drops in.
- **Two clouds and the balloon animate forever**, on a 1s alternating loop, and nothing wraps
  them in a `prefers-reduced-motion` query. There is no prop to stop it.
- **The heading is 23px, not the 28px its preset would give.** The component asks `Heading` for
  the portal's `header` type and the stylesheet then overrides the size and line height.
- **`customizedBodyText` is plain text.** Despite the name it is passed to a `Text` as a child,
  so markup in the string is escaped rather than rendered.
- **`--error-container-link` does nothing.** The class that reads the link colour is defined in
  the stylesheet but is never put on any element the component renders, and it reads the internal
  variable rather than the overridable one.
- **Each text line is rendered only when its string is non-empty.** An empty `headerText`,
  `bodyText` or `customizedBodyText` leaves no element and no gap behind.
- **Below 1024px the page tightens:** the top padding drops from 100px to 80px, the margins
  around the illustration shrink, and the button stretches to the full width.
- **The element's own margin is `0 auto 8px 0`** — automatic on the trailing side only, so the
  page is not centred by that rule; the centring comes from the column layout inside it.

## CSS variables

<APITable>

| Variable                 | Default               | Effect                         |
| ------------------------ | --------------------- | ------------------------------ |
| `--error-container-bg`   | white; black in dark  | Background of the page         |
| `--error-container-text` | grey; lighter in dark | Colour of `customizedBodyText` |

</APITable>

The heading, `bodyText` and the button take their colours from `Heading`, `Text` and `Button`;
override those components' own variables to change them.

## Accessibility

- `headerText` is rendered by `Heading` and is an `<h1>` — the one heading on the page, which is
  right for a screen that has replaced a page.
- **The illustration is thirteen inline SVGs with no `aria-hidden` and no titles**, so some
  screen readers announce each of them as an unlabelled graphic before the heading. There is no
  prop that suppresses this; when it matters, hide the whole region with your own wrapper and
  re-announce the message.
- The action is a real `<button>` from `Button`, focusable and labelled by `buttonText`.
- The moving clouds and balloon ignore `prefers-reduced-motion`. If your application honours that
  setting, add a rule of your own through `className` that sets `animation: none` on the
  illustration's ids.
- Nothing here moves focus when the page appears. Send focus to the heading yourself if the
  error replaces the previous screen in place.

## Test ids

<APITable>

| Element       | `data-testid`                  |
| ------------- | ------------------------------ |
| Outer element | `ErrorContainer`, not settable |

</APITable>

The heading, the lines and the button carry the ids of `Heading`, `Text` and `Button`; the
illustration's pieces carry only their element ids.

## Related

- [`EmptyScreenContainer`](./empty-screen-container.md) — for a region with no content rather than a page that failed.
- [`EmptyView`](./empty-view.md) — the current empty state, with actions as rows.
- [`PortalLogo`](../data-display/portal-logo.md) — the mark this page renders unless you pass `hideLogo`.
