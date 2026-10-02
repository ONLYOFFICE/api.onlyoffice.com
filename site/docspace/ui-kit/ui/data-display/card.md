---
description: "Grey panel with an optional header row, for a block of related information."
custom_edit_url: "https://github.com/ONLYOFFICE/docspace-ui-kit-react/blob/446f115916d79a87d07b9e3dddb1e39a263784ee/components/card/README.md"
---

import ThemedImage from '@theme/ThemedImage';

import APITable from '@site/src/components/APITable/APITable';

# Card

Grey panel with an optional header row, for a block of related information. Three slots — a
title, something pushed to the right of it, and the body — on a tinted rounded background, with
no behaviour of its own.

<ThemedImage alt="Card" width={1014} sources={{ light: require('./card--primary-light.png').default, dark: require('./card--primary-dark.png').default }} />

## Use this when / not when

- Use to group a few lines about one thing: a connected service and its status, a summary block
  in a side panel, an informational block inside a settings page.
- Not when the block has to collapse — use
  [`CollapsibleCard`](./collapsible-card.md), which has the header button, the chevron
  and the open state.
- Not for a whole file or room tile in a grid — those are the `tiles` components, which carry
  selection, a context menu and the drag behaviour.
- Not just for a heading over some text — [`Heading`](./heading.md) and
  [`Text`](./text.md) do that without the panel.

**It has no variants and no controls.** No border, no elevation, no hoverable or clickable mode,
no close cross, no loading state. Everything but the background, the radius and the padding is
whatever you put in the slots.

## Import

```ts
import { Card } from "@onlyoffice/apps-ui-kit/components/card";
```

Also exported from the root barrel `@onlyoffice/apps-ui-kit`.

Needs `ThemeProvider` above it in the tree. The background and both text colours are declared
only under the `light` and `dark` classes the provider puts on `<body>`, so without one the
card has **no background at all** — the `var()` has nothing to resolve to — and the title and
body fall back to the inherited colour.


## Stories

### Default

The common case: a heading over a short block of text (`title`, `children`). Change any other prop live in the Controls panel below.

<ThemedImage alt="Default" width={1014} sources={{ light: require('./card--default-light.png').default, dark: require('./card--default-dark.png').default }} />

### With Extra

A short status belongs next to the heading: "Connected" sits on the trailing edge of the header row, on one line however long the title is (`extra`).

<ThemedImage alt="With Extra" width={1014} sources={{ light: require('./card--with-extra-light.png').default, dark: require('./card--with-extra-dark.png').default }} />

### Title Only

A heading alone labels a block that has no details yet; no empty body is left below it (`title` without `children`).

<ThemedImage alt="Title Only" width={1014} sources={{ light: require('./card--title-only-light.png').default, dark: require('./card--title-only-dark.png').default }} />

### Body Only

Text alone, for a note that needs no heading: with neither `title` nor `extra` set, the header row is left out and the text starts at the top of the card.

<ThemedImage alt="Body Only" width={1014} sources={{ light: require('./card--body-only-light.png').default, dark: require('./card--body-only-dark.png').default }} />

### With Icon In Title

An icon before the heading marks what the card is about; the card lays out nothing inside the title, so the icon and the text are wrapped in a flex span of the consumer's own (`title`).

<ThemedImage alt="With Icon In Title" width={1014} sources={{ light: require('./card--with-icon-in-title-light.png').default, dark: require('./card--with-icon-in-title-dark.png').default }} />

### Full Example

Every slot at once, for a block that states something and offers the next step: an icon and a heading (`title`), "Connected" on the trailing edge (`extra`), a paragraph (`children`) and an "Open settings" button below it (`footer`).

<ThemedImage alt="Full Example" width={1014} sources={{ light: require('./card--full-example-light.png').default, dark: require('./card--full-example-dark.png').default }} />

### Css Customization

Every overridable variable set on the card itself -- the variables are listed under CSS variables on this page. They are set through the `style` prop, because a value on a wrapper never reaches the card.

<ThemedImage alt="Css Customization" width={1014} sources={{ light: require('./card--css-customization-light.png').default, dark: require('./card--css-customization-dark.png').default }} />

## Minimal example

```tsx
import { Card } from "@onlyoffice/apps-ui-kit/components/card";

export function StorageCard() {
  return (
    <Card title="Storage" extra={<span>4.2 GB of 20 GB</span>}>
      Files, versions and the recycle bin count towards your quota.
    </Card>
  );
}
```

## Props


<APITable>

| Property | Type | Description |
| --- | --- | --- |
| `children`? | `React.ReactNode` | Body of the card. Nothing is rendered when it is empty. |
| `className`? | `string` | Added after the component's own class, on the outer element. |
| `dataTestId`? | `string` | Value of `data-testid` on the outer element. Default: `"card"`. |
| `extra`? | `React.ReactNode` | Right side of the header row, pushed against the trailing edge — a status, a badge, a link. |
| `footer`? | `React.ReactNode` | Contents of a `<footer>` below the body. It gets no styling of its own beyond the card's 12px gap. |
| `style`? | `React.CSSProperties` | Inline style of the outer element. |
| `title`? | `React.ReactNode` | Left side of the header row. The row is dropped entirely when both this and `extra` are unset. |

</APITable>

## Recipes

### Header with an icon and a status

`title` and `extra` are nodes, so the icon and the layout inside them are yours. `extra` never
shrinks and never wraps; the title takes the rest of the row and wraps onto further lines when
it does not fit.

```tsx
import { Card } from "@onlyoffice/apps-ui-kit/components/card";
import { Text } from "@onlyoffice/apps-ui-kit/components/text";

export function ServiceCard({ connected }: { connected: boolean }) {
  return (
    <Card
      title={
        <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
          Ask AI
        </span>
      }
      extra={
        <Text isBold color={connected ? "#2db482" : "#a3a9ae"}>
          {connected ? "Connected" : "Not connected"}
        </Text>
      }
    >
      Analyse responses from this form and turn them into charts.
    </Card>
  );
}
```

### Card with an action below the body

`footer` is a bare `<footer>` element: it gets the card's 12px gap above it and nothing else, so
the alignment of whatever goes in it is yours.

```tsx
import { Button, ButtonSize } from "@onlyoffice/apps-ui-kit/components/button";
import { Card } from "@onlyoffice/apps-ui-kit/components/card";

export function InviteCard({ onInvite }: { onInvite: () => void }) {
  return (
    <Card
      title="Invite people"
      footer={
        <Button
          size={ButtonSize.small}
          primary
          label="Invite"
          onClick={onInvite}
        />
      }
    >
      Members you invite get access to every room you share with them.
    </Card>
  );
}
```

## Behaviour the types don't state

- **The header row appears whenever `title` or `extra` is anything other than `undefined` or
  `null`,** but each slot is rendered only when its value is truthy. A `title=""` or `title={0}`
  therefore produces an empty header row that still takes the card's 12px gap — pass `undefined`
  to drop it.
- **The card is as wide as its container.** It sets `padding: 12px 16px`, `border-radius: 6px`
  and a 12px column gap, and no width of any kind, so it stretches and the caller decides how
  wide it is.
- **The three slots are laid out, not styled.** The title is 12px at weight 600 and the body 12px
  in the muted text colour, both fixed; `extra` gets no typography at all and inherits. Anything
  else is a component you put inside the slot.
- **The title can shrink and `extra` cannot.** The title is `flex: 1; min-width: 0`, `extra` is
  `flex-shrink: 0; white-space: nowrap` — so a long title wraps onto further lines while `extra`
  keeps its natural width on one line. Nothing truncates the title with an ellipsis; a long
  `extra` narrows the title's column instead of wrapping itself.
- **There is no ref and no element access.** `CardProps` has no `ref`, and unknown props are not
  accepted, so the outer element can only be reached through `className`, `style` and
  `dataTestId`.
- **The green "Connected" style in the Storybook example is not part of the API.** It is a class
  inside the component's own CSS module, which is not exported; bring your own colour.

## CSS variables

The card reads these without a fallback, and its own stylesheet declares them on the card
element itself, under the `light` and `dark` theme classes. **A value set on a wrapper therefore
never reaches the card** — the card's own declaration wins. Set them through the card's `style`
prop, or from a rule that targets the card with more specificity than `.light .card`. Leaving
the provider out leaves them undefined rather than falling back.

<APITable>

| Variable                  | Default                       | Effect                 |
| ------------------------- | ----------------------------- | ---------------------- |
| `--info-block-background` | light grey, dark grey in dark | Background of the card |
| `--card-title-color`      | black, white in dark          | Colour of the title    |
| `--card-body-color`       | grey, lighter grey in dark    | Colour of the body     |

</APITable>

## Accessibility

- The outer element is a plain `<div>` with no role and no ARIA; the header is a `<header>` and
  the footer a `<footer>`, which are landmarks only when they are not inside another section.
- The title is not a heading. When the card titles a region of the page, put a
  [`Heading`](./heading.md) in the `title` slot so the outline keeps the entry.
- Nothing here is focusable and there is no keyboard interaction, so a card whose body holds
  controls is as operable as those controls are.

## Test ids

<APITable>

| Element       | `data-testid`                      |
| ------------- | ---------------------------------- |
| Outer element | `card`, overridden by `dataTestId` |

</APITable>

The header, title, extra, body and footer carry no test ids of their own.

## Related

- [`CollapsibleCard`](./collapsible-card.md) — the same panel with a header that expands and collapses it.
- [`Heading`](./heading.md) — for the title inside the slot, when the card heads a region.
- [`Text`](./text.md) — body copy at the kit's size and weight.
