---
description: "Bar of label-and-value columns for context the reader does not have to act on."
custom_edit_url: "https://github.com/ONLYOFFICE/docspace-ui-kit-react/blob/446f115916d79a87d07b9e3dddb1e39a263784ee/components/columnar-info-bar/README.md"
---

import ThemedImage from '@theme/ThemedImage';

import APITable from '@site/src/components/APITable/APITable';

# ColumnarInfoBar

Bar of label-and-value columns for context the reader does not have to act on. Profile details
after a social sign-up, the metadata of a webhook delivery: facts laid out in a row, with an
optional caption and an optional close cross.

<ThemedImage alt="ColumnarInfoBar" width={1014} sources={{ light: require('./columnar-info-bar--primary-light.png').default, dark: require('./columnar-info-bar--primary-dark.png').default }} />

## Use this when / not when

- Use for a handful of short read-only facts that belong above the content they describe.
- Not for a message that needs a decision — a bar with a button is
  [`PublicRoomBar`](./public-room-bar.md) or a dialog.
- Not for something transient that appears after an action — use
  [`Snackbar`](./snackbar.md) or `toastr`.
- Not for a block of arbitrary content — [`Card`](../data-display/card.md) takes children; this
  component takes only the pairs.
- **There is no severity.** The default variant paints a warning-orange edge, and nothing
  switches it to an error or success colour: change `--cib-accent` yourself.

## Import

```ts
import { ColumnarInfoBar } from "@onlyoffice/apps-ui-kit/components/columnar-info-bar";
```

Also exported from the root barrel `@onlyoffice/apps-ui-kit`.

Needs `ThemeProvider` above it in the tree. Every colour it paints comes from custom properties
declared only under the `.light` and `.dark` classes the provider puts on `<body>`; without it
`background-color`, `color` and the accent border are all invalid and the bar is transparent
text on the page background.


## Stories

### Default

The warning bar with a heading and four columns and no close button: the starting point for a details strip. Change any prop live in the Controls panel below.

<ThemedImage alt="Default" width={1014} sources={{ light: require('./columnar-info-bar--default-light.png').default, dark: require('./columnar-info-bar--default-dark.png').default }} />

### Profile Details

A close button in the top trailing corner lets the reader dismiss details they have read once (`onAction`); clicking it only calls the handler, so the host takes the bar out of the tree. Its spoken name comes from `closeLabel`.

<ThemedImage alt="Profile Details" width={1014} sources={{ light: require('./columnar-info-bar--profile-details-light.png').default, dark: require('./columnar-info-bar--profile-details-dark.png').default }} />

### Event Details

Without `headerText` and `onAction` the bar is a plain strip of columns that stays on screen, for metadata the surrounding page already names. Narrow the window to see the columns wrap.

<ThemedImage alt="Event Details" width={1014} sources={{ light: require('./columnar-info-bar--event-details-light.png').default, dark: require('./columnar-info-bar--event-details-dark.png').default }} />

### Neutral Variant

A rounded card with a light blue border and a blue heading, for information that is not a warning (`variant="neutral"`); it slides open when it mounts.

<ThemedImage alt="Neutral Variant" width={1006} sources={{ light: require('./columnar-info-bar--neutral-variant-light.png').default, dark: require('./columnar-info-bar--neutral-variant-dark.png').default }} />

### Page Variant

A padded block with the close button beside the heading and the columns in a two-column grid, for a details section inside a page rather than a notice above it (`variant="page"`).

<ThemedImage alt="Page Variant" width={1014} sources={{ light: require('./columnar-info-bar--page-variant-light.png').default, dark: require('./columnar-info-bar--page-variant-dark.png').default }} />

### Css Customization

The variables are listed under CSS variables on this page. All four are set here through the bar's `style` prop, because a wrapper cannot reach them.

<ThemedImage alt="Css Customization" width={1014} sources={{ light: require('./columnar-info-bar--css-customization-light.png').default, dark: require('./columnar-info-bar--css-customization-dark.png').default }} />

## Minimal example

```tsx
import { ColumnarInfoBar } from "@onlyoffice/apps-ui-kit/components/columnar-info-bar";

export function DeliveryDetails() {
  return (
    <ColumnarInfoBar
      headerText="Delivery"
      columns={[
        { label: "Status", value: "200 OK" },
        { label: "Event", value: "file.created" },
        { label: "Sent", value: "14:32:01" },
      ]}
    />
  );
}
```

## Props

`columns` is an array of `ColumnarInfoBarColumn`, exported from the same subpath:

<APITable>

| Field   | Type        | Description                                                    |
| ------- | ----------- | -------------------------------------------------------------- |
| `label` | `ReactNode` | Caption above the value, at 12px                               |
| `value` | `ReactNode` | The value, in a flex row with an 8px gap for an icon beside it |

</APITable>


<APITable>

| Property | Type | Description |
| --- | --- | --- |
| `columns` | `ColumnarInfoBarColumn[]` | The label and value pairs, in order. An empty array renders the bar with nothing inside it. |
| `closeLabel`? | `string` | Accessible name of the close button (its `aria-label`). Defaults to the English `"Close"`; pass a translated string. Ignored without `onAction`. Default: `"Close"`. |
| `headerText`? | `string` | Bold caption above the columns, rendered as an `<h3>` and omitted entirely when empty. |
| `onAction`? | `() => void` | Called when the close button is clicked. The button exists only while this is set, and the bar does not hide itself — take it out of the tree yourself. |
| `onLoad`? | `() => void` | Called once after mount, and never again: the effect that calls it has an empty dependency list, so a new function on a later render is ignored. |
| `style`? | `React.CSSProperties` | Inline style of the bar. There is no `className` prop, so this is also where the `--cib-*` custom properties go. |
| `variant`? | `"default" \| "neutral" \| "page"` | Which of the three looks to render: the warning bar with an accent edge, the bordered `neutral` card that slides open, or the padded `page` block whose columns are a two-column grid. Default: `"default"`. |

</APITable>

## Recipes

### Dismissing it

`onAction` draws the cross and tells you it was clicked. It does not hide anything — the bar is
on screen for as long as you render it.

```tsx
import { useState } from "react";
import { ColumnarInfoBar } from "@onlyoffice/apps-ui-kit/components/columnar-info-bar";

export function WelcomeDetails({ email }: { email: string }) {
  const [shown, setShown] = useState(true);

  if (!shown) return null;

  return (
    <ColumnarInfoBar
      headerText="Your profile details"
      columns={[
        { label: "Email", value: email },
        { label: "Password", value: "Sent to your inbox" },
      ]}
      onAction={() => setShown(false)}
    />
  );
}
```

### The page variant

`variant="page"` is the block form: rounded, padded, no accent edge, and the columns become a
two-column grid instead of a wrapping row. The header moves up beside the cross.

```tsx
import { ColumnarInfoBar } from "@onlyoffice/apps-ui-kit/components/columnar-info-bar";

export function PlanSummary() {
  return (
    <ColumnarInfoBar
      variant="page"
      headerText="Current plan"
      columns={[
        { label: "Tier", value: "Business" },
        { label: "Seats", value: "25 of 40" },
        { label: "Renews", value: "1 October 2026" },
        { label: "Region", value: "EU West" },
      ]}
    />
  );
}
```

### Recolouring it

There is no `className` prop. The custom properties go through `style`, which is the only
element-level hook the component offers.

```tsx
import type { CSSProperties } from "react";

import { ColumnarInfoBar } from "@onlyoffice/apps-ui-kit/components/columnar-info-bar";

export function ErrorFacts() {
  return (
    <ColumnarInfoBar
      headerText="Import failed"
      columns={[
        { label: "Rows read", value: "1 204" },
        { label: "Rows rejected", value: "37" },
      ]}
      style={
        {
          "--cib-accent": "#f2675a",
          "--cib-header-color": "#f2675a",
        } as CSSProperties
      }
    />
  );
}
```

## Behaviour the types don't state

- **`onLoad` is called once, on mount, and never again.** The effect has an empty dependency
  list, so a different function on a later render is ignored.
- **`onAction` does not close the bar.** It renders the cross and reports the click; removing
  the bar is yours to do.
- **The columns are a wrapping row.** Each label sits above its value, and a column that no
  longer fits moves to the next line; below 600px the default and `neutral` variants give every
  column the full width, so the pairs stack one under another.
- **`variant="neutral"` is a card, not a bar**: no accent edge, 8px corners, a 2px light-blue
  border and a blue heading, in both themes.
- **`variant="neutral"` caps its own height at 150px, permanently.** It opens with a 0.4s
  animation from `max-height: 0` to `max-height: 150px`, declared `both`, so the end frame keeps
  applying after the animation finishes. Content taller than that spills out of the bar and over
  whatever follows it. The same variant also adds `margin: 4px` and sets its width to
  `calc(100% - 8px)`.
- **`variant="page"` stays two columns at every width.** The grid is a fixed
  `repeat(2, 1fr)`; only the default and `neutral` variants give each column the full width
  below 600px.
- **There is no `className` prop.** `style` is the only way to reach the element, which is why
  the custom properties are documented as inline values.
- **The cross is painted with `fill: var(--gray)`, and nothing in the kit defines `--gray`.**
  The declaration is invalid, so the icon keeps whatever the asset itself carries. Set the
  colour on the bar through `--cib-color` and the icon inherits nothing from it either.
- **The close button's hit area differs by variant**: 44×44 in the default and `neutral` forms
  (a 12px icon inside 16px of padding), and exactly 12×12 in `page`, where the padding is
  removed and the 16px icon overflows its own button box.
- **The header is an `<h3>`**, whatever the bar's place on the page. It is in the document
  outline at that level and `getByRole("heading")` finds it, so a bar used as an aside inside a
  section can leave a gap in the heading order. An empty `headerText` renders no element at all.
- **`headerText` is a string only**, while `label` and `value` take any node.

## CSS variables

Set them through `style` on the component.

<APITable>

| Variable             | Default                            | Effect                                                                                            |
| -------------------- | ---------------------------------- | ------------------------------------------------------------------------------------------------- |
| `--cib-bg`           | a pale warning cream; grey in dark | Background of the bar                                                                             |
| `--cib-color`        | black; white in dark               | Text colour, and the label at 60% opacity; in `page` the label keeps its own grey at full opacity |
| `--cib-accent`       | the warning orange                 | The 4px leading edge; `transparent` in the other two variants                                     |
| `--cib-header-color` | `--cib-accent`                     | Colour of `headerText`; `neutral` and `page` set their own                                        |

</APITable>

The bar's own stylesheet declares `--cib-bg`, `--cib-color` and `--cib-accent` on the bar
element under both the light and the dark theme — and `neutral` and `page` add
`--cib-header-color` — so a value set on an ancestor never reaches it. Only
`--cib-header-color` in the default variant can be inherited; everything else goes through
`style`.

## Accessibility

- The bar is a plain `<div>` with no role, and so are the columns — a screen reader reads each
  label and value as consecutive text with nothing tying the pair together. Put the association
  in the wording (`"Status: 200 OK"`) when it matters.
- The close button is a real `<button>`, reached with Tab and pressed with Enter or Space, whose
  `aria-label` is `closeLabel`. It defaults to the English `"Close"`, so pass a translated
  string in a localised interface; without `onAction` there is no button and the prop is
  ignored.
- `headerText` renders as an `<h3>`. Check that level against the page around it — the component
  does not adapt it, so a bar placed under an `<h1>` skips `<h2>`.
- Nothing here traps focus or moves it, and the bar does not announce itself when it appears —
  wrap it in a live region if it arrives in response to something the user did.

## Test ids

The component sets none, on any element. Select it by its text, by `role="button"` for the
cross, or add a `data-testid` to a wrapper of your own.

## Related

- [`PublicRoomBar`](./public-room-bar.md) — the same shape for one sentence of prose with an icon.
- [`Snackbar`](./snackbar.md) — for a message that appears in response to an action.
- [`Card`](../data-display/card.md) — when the content is arbitrary rather than label-and-value pairs.
