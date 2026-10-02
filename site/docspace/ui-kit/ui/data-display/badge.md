---
description: "Small coloured pill for a count or a short marker, announced as a live status region."
custom_edit_url: "https://github.com/ONLYOFFICE/docspace-ui-kit-react/blob/446f115916d79a87d07b9e3dddb1e39a263784ee/components/badge/README.md"
---

import ThemedImage from '@theme/ThemedImage';

import APITable from '@site/src/components/APITable/APITable';

# Badge

Small coloured pill for a count or a short marker, announced as a live status region. It is the
unread counter next to a room, the "Paid" marker on a plan and the version number on a file —
one short string on the accent colour, sized by its content.

<ThemedImage alt="Badge" width={38} sources={{ light: require('./badge--primary-light.png').default, dark: require('./badge--primary-dark.png').default }} />

## Use this when / not when

- Use for a count that changes — unread items, pending invites — where `role="status"` and
  `aria-live="polite"` mean a screen reader hears the new number without the user going to look.
- Use for a short fixed marker: a version, "New", "Paid".
- Not for something the user removes or selects — use [`Tag`](./tag.md) or
  [`SelectedItem`](./selected-item.md), which have a close control and a real button
  underneath.
- Not for a word or two of coloured text with no pill around it — use
  [`Text`](./text.md) with a `color`.

**There is no status palette.** No `success` / `warning` / `error` variant exists: the badge is
the portal's accent colour, the muted grey of `isMutedBadge`, or whatever you pass as
`backgroundColor`. Semantic colours are yours to supply.

## Import

```ts
import { Badge } from "@onlyoffice/apps-ui-kit/components/badge";
```

Also exported from the root barrel `@onlyoffice/apps-ui-kit`.

Needs `ThemeProvider` above it in the tree for the dark theme: the dark background and the
muted grey are declared under the `dark` class the provider puts on `<body>`. Without a provider
the badge still renders, in its light colours.


## Stories

### Default

The badge as it usually appears: a count on the accent colour. Change any prop live in the Controls panel below, and set the label to 0 to see the badge disappear.

<ThemedImage alt="Default" width={38} sources={{ light: require('./badge--default-light.png').default, dark: require('./badge--default-dark.png').default }} />

### Badge Types

The two looks a badge can take:

- **3**, **New**, **99+** — the usual round pill, as wide as its label, for a count or a short word
- **High** — the emphasised preset (`type="high"`), with squarer corners and more padding, for a marker that should stand out

<ThemedImage alt="Badge Types" width={442} sources={{ light: require('./badge--badge-types-light.png').default, dark: require('./badge--badge-types-dark.png').default }} />

### Special Badges

Markers with a meaning of their own:

- **v1.2.3** — a version number (`isVersionBadge`); on tablet-width screens and narrower it fills the width of its container
- **PRO** — a paid-feature marker (`isPaidBadge`): the text stays white and the label is never cut off
- **Muted** — a grey pill for something inactive (`isMutedBadge`)

<ThemedImage alt="Special Badges" width={316} sources={{ light: require('./badge--special-badges-light.png').default, dark: require('./badge--special-badges-dark.png').default }} />

### Hover States

Hover and press each badge to compare:

- **Default** — the pill lightens on hover and darkens while pressed
- **Hovered** — shows the pointer cursor before the pointer arrives (`isHovered`); the colour still changes only under the real pointer
- **No Hover** — keeps the arrow cursor and its colour, for a badge that is only a marker (`noHover`)

<ThemedImage alt="Hover States" width={329} sources={{ light: require('./badge--hover-states-light.png').default, dark: require('./badge--hover-states-dark.png').default }} />

### Custom Styled

For a place where the theme's pill does not fit:

- **Custom** — its own background, text colour, text size and weight, corners and padding
- **Bordered** — a transparent pill with a border around it (`border`)
- **Large** — a wider cap (`maxWidth`) and more padding for a longer label

<ThemedImage alt="Custom Styled" width={342} sources={{ light: require('./badge--custom-styled-light.png').default, dark: require('./badge--custom-styled-dark.png').default }} />

### Interactive Badge

A badge that opens something when clicked: click it and watch the Actions panel (`onClick`). It takes no keyboard focus, so offer the same action somewhere a keyboard user can reach it.

<ThemedImage alt="Interactive Badge" width={75} sources={{ light: require('./badge--interactive-badge-light.png').default, dark: require('./badge--interactive-badge-dark.png').default }} />

### Css Customization

The variables are listed under CSS variables on this page. The example is one `high` badge, because two of the three variables apply only to that type.

<ThemedImage alt="Css Customization" width={94} sources={{ light: require('./badge--css-customization-light.png').default, dark: require('./badge--css-customization-dark.png').default }} />

## Minimal example

```tsx
import { Badge } from "@onlyoffice/apps-ui-kit/components/badge";

export function UnreadCount({ count }: { count: number }) {
  return <Badge label={count} noHover />;
}
```

## Props

`BadgeProps` is `TextProps` plus the props below. Of what it inherits the component reads
`backgroundColor`, `className`, `color`, `fontSize` and `fontWeight`; `title` is consumed by the
tooltip wrapper the badge is built on, and `style` replaces the badge's own inline style — see
"Behaviour" below. The rest of `TextProps` is spread onto the element unread.


<APITable>

| Property | Type | Description |
| --- | --- | --- |
| `border`? | `string` | CSS `border` shorthand for the outer element. The badge draws none of its own. |
| `borderRadius`? | `string` | Corner radius of both the outer element and the pill inside it. The pill ignores it while `type` is `"high"`. Default: `"11px"`. |
| `dataTestId`? | `string` | Value of `data-testid` on the outer element. Default: `"badge"`. |
| `height`? | `string` | Height of the outer element. Without it the badge is as tall as its text. |
| `isHovered`? | `boolean` | Draws the hover background without a pointer being there, for a badge inside a row that is itself hovered. Default: `false`. |
| `isMutedBadge`? | `boolean` | Paints the badge grey, overriding `backgroundColor`, for something inactive. |
| `isPaidBadge`? | `boolean` | Forces white text, overriding `color`, and removes `maxWidth` so the label is never clipped. |
| `isVersionBadge`? | `boolean` | Lets the badge grow to its content width at tablet widths and below, where it is otherwise held to the pill's width. |
| `label`? | `number \| string` | What the badge says. `0`, `"0"` and an empty string hide the badge entirely — the element stays in the DOM with `display: none`. Default: `0`. |
| `maxWidth`? | `string` | Widest the pill may be. Longer text is clipped without an ellipsis. Not applied at all while `isPaidBadge` is set. Default: `"50px"`. |
| `noHover`? | `boolean` | Drops the pointer cursor and the hover and active background shifts, for a badge that is only a marker. Default: `false`. |
| `onMouseLeave`? | `(e: React.MouseEvent) => void` | Called with the event when the pointer leaves the badge. |
| `onMouseOver`? | `(e: React.MouseEvent) => void` | Called with the event when the pointer enters the badge or moves within it. |
| `padding`? | `string` | Padding of the pill inside the badge. Ignored while `type` is `"high"`. Default: `"0px 5px"`. |
| `ref`? | `React.RefObject<HTMLDivElement \| null> & React.RefObject<HTMLDivElement>` | Attached to the outer element of the badge. |
| `type`? | `"high"` | Switches to the emphasised preset: a 6px radius, roomier padding and 13px text at weight 400. |

</APITable>

#### Inherited from `TextProps`

Declared by [`components/text`](./text.md) and accepted here too.

<APITable>

| Property | Type | Description |
| --- | --- | --- |
| `aria-hidden`? | `Booleanish` | Hides the element from assistive technology, passed unchanged, for decoration that repeats what is already read. |
| `aria-label`? | `string` | Accessible name, passed unchanged, for text whose content is not what should be announced. |
| `aria-live`? | `"assertive" \| "off" \| "polite"` | Live-region politeness, passed unchanged, for a line whose content changes and should be read out. |
| `as`? | `ElementType<any, keyof JSX.IntrinsicElements>` | Element to render, replacing the component's own default — `p` for `Text` itself. Wins over `tag` when both are set. |
| `backgroundColor`? | `string` | Background colour, as an inline style. Any CSS colour. |
| `children`? | `ReactNode` | Text to render. |
| `className`? | `string` | Added after the component's own classes. |
| `color`? | `string` | Text colour, as an inline style. `Text` declares none of its own and inherits without it. |
| `containerMinWidth`? | `string` | Not read here — it reaches the DOM as an unknown attribute. It is read off this element by `RowContent`, which uses it as the minimum width of a side slot. |
| `containerWidth`? | `string` | Not read here — it reaches the DOM as an unknown attribute. It is read off this element by `RowContent` and `TileContent`, which use it as the width of the slot they put the child in. |
| `dir`? | `"auto" \| "ltr" \| "rtl"` | Writing direction. `"ltr"` and `"rtl"` set the `dir` attribute; `"auto"` instead wraps the children in a span that takes the pointer events off them. |
| `display`? | `string` | Ignored. Nothing reads this prop, and it reaches the DOM as an unknown attribute. Use `isInline` or `style`. |
| `fontSize`? | `string` | Font size, as an inline style. Unset, `Text` is 13px through `--text-size`. |
| `fontWeight`? | `number \| string` | Font weight, as an inline style. Ignored while `isBold` is set. Unset, `Text` is 400 through `--text-weight`. |
| `href`? | `string` | Passed to the element unchanged, for `as="a"`. |
| `htmlFor`? | `string` | Passed to the element unchanged, for `as="label"`. |
| `id`? | `string` | `id` of the rendered element. |
| `isBold`? | `boolean` | Sets the weight to 700, overriding `fontWeight`. |
| `isInline`? | `boolean` | Renders the text inline instead of as a block — `inline-block` in `Text`, `inline` in `Heading`. |
| `isItalic`? | `boolean` | Renders the text in italics. |
| `lineHeight`? | `string` | Line height, as an inline style. |
| `noSelect`? | `boolean` | Stops the text being selected, on every browser the kit supports. |
| `onClick`? | `(e: React.MouseEvent<Element>) => void` | Called with the event when the element is clicked. |
| `rel`? | `string` | Passed to the element unchanged, for `as="a"`. |
| `role`? | `AriaRole` | ARIA role of the element, passed unchanged: `status` or `alert` for a line that reports an outcome, `button` alongside `tabIndex` and `onClick`. |
| `style`? | `CSSProperties` | Inline style of the element. `Text` merges it over the style props above, so a `fontSize` here wins over the `fontSize` prop. |
| `tabIndex`? | `number` | Passed to the element unchanged. The component adds no role, so a focusable text element needs one from you. |
| `tag`? | `string` | Element to render, used only while `as` is unset. It is a tag name, not an id. |
| `textAlign`? | `"center" \| "justify" \| "left" \| "right"` | Text alignment, as an inline style. |
| `title`? | `string` | Tooltip text. On a component the kit wraps in its tooltip HOC it is consumed before the element is built and opens the shared tooltip instead, which needs `RootTooltip` mounted; elsewhere it is the native `title` attribute. |
| `truncate`? | `boolean` | Holds the text on one line and ends it with an ellipsis. It needs a parent of bounded width; on its own the element grows instead. |
| `view`? | `string` | Only `"tile"` is recognised, and only together with `dir="auto"`: it clamps the text to two lines. |

</APITable>

## Recipes

### A counter that disappears at zero

The badge hides itself: `label` of `0`, `"0"` or `""` sets `data-hidden="true"`, which is
`display: none`. You do not need to branch on the count.

```tsx
import { Badge } from "@onlyoffice/apps-ui-kit/components/badge";

export function RoomRow({ name, unread }: { name: string; unread: number }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
      <span>{name}</span>
      <Badge label={unread} noHover />
    </div>
  );
}
```

### A clickable badge

`onClick` calls `preventDefault()` before your handler, and the badge is a `<div>`: it takes a
pointer but not the keyboard. When the badge is the only way to reach an action, put it inside
your own button instead of handling the click here.

```tsx
import { Badge } from "@onlyoffice/apps-ui-kit/components/badge";

export function PendingInvites({
  count,
  onOpen,
}: {
  count: number;
  onOpen: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onOpen}
      style={{ background: "none", border: "none", padding: 0 }}
    >
      <Badge label={count} noHover />
    </button>
  );
}
```

### A wide marker

The pill is capped at 50px, so anything longer than about four characters is cut off. Widen it
with `maxWidth`, or let `isPaidBadge` drop the cap entirely.

```tsx
import { Badge } from "@onlyoffice/apps-ui-kit/components/badge";

export function PlanMarker() {
  return (
    <Badge
      label="Business"
      maxWidth="none"
      padding="2px 8px"
      backgroundColor="#4781d1"
      noHover
    />
  );
}
```

## Behaviour the types don't state

- **The badge hides itself when the label is falsy or `"0"`.** `<Badge />` alone renders an empty
  hidden element, because `label` defaults to `0`. Anything else, `"false"` and `" "` included,
  is shown.
- **The label is clipped at 50px by default, without an ellipsis.** `maxWidth` caps the pill and
  the outer element clips the overflow, while the text itself is `white-space: nowrap`, so a long
  label simply ends mid-character. `isPaidBadge` is the one preset that removes the cap.
- **`style` replaces the badge's own inline style rather than extending it.** The component
  writes `height`, `border`, `borderRadius` and the background custom property into the element's
  `style`, and a `style` of yours arrives later in the spread and overwrites the whole object —
  including the background colour. Use `className`, or pass `backgroundColor`, `height` and
  `border` as props.
- **The pointer cursor is on by default**, hover or not, and so is a background shift on hover and
  on active: the pill turns 15% transparent under the pointer and takes 10% black while pressed,
  muted grey included. A badge that is not clickable wants `noHover`.
- **`type="high"` overrides the spacing props.** Its padding and radius are `!important` on the
  pill, so `padding` and `borderRadius` stop applying there; the outer element keeps the radius
  you passed. Its 13px / 400 text is a plain rule, so `fontSize` and `fontWeight` still win.
- **The presets override the colour props too.** `isMutedBadge` paints the grey over
  `backgroundColor`, and `isPaidBadge` forces white text over `color`.
- **`isVersionBadge` only does something at tablet widths and below**, where it lets the badge
  take its content width; above that it changes nothing.
- **A `title` becomes the kit's tooltip**, not a native one: the badge is built on
  `TooltipContainer`, which consumes `title` and opens the shared tooltip on hover — and that
  needs `<RootTooltip />` from [`Tooltip`](../overlays/tooltip.md) mounted once near the root of
  the app, or nothing appears.
- **An ancestor with the class `ai-agents` repaints the badge** grey and cancels its hover. That
  is the DocSpace portal's own hook and there is no prop for it.

## CSS variables

<APITable>

| Variable                 | Default                        | Effect                                                       |
| ------------------------ | ------------------------------ | ------------------------------------------------------------ |
| `--badge-bg`             | the accent colour, else orange | Background of the pill; wins over the `backgroundColor` prop |
| `--badge-radius`         | `6px`                          | Corner radius of the pill while `type="high"`                |
| `--badge-high-padding`   | `3px 10px`                     | Padding of the pill while `type="high"`                      |
| `--badge-high-font-size` | `13px`                         | Font size of the label while `type="high"`                   |
| `--accent-main`          | orange, per theme              | The default background, shared with the rest of the kit      |

</APITable>

`isMutedBadge` wins over `--badge-bg`: a muted badge stays grey whatever the variable says.

## Accessibility

- The badge is a `<div>` with `role="status"`, `aria-live="polite"` and `aria-atomic="true"`, so a
  screen reader reads the whole badge out again whenever the label changes. That is what you want
  for a counter and wrong for a static marker in a long list — pass `role` and `aria-live`
  yourself to override them.
- Its accessible name is built as `` `${label} ${type ?? ""}` ``, which leaves a trailing space
  and says nothing about what is being counted. A badge that has to stand on its own needs an
  `aria-label` of yours; it reaches the element through the spread.
- The pill and the label are `aria-hidden`, so the name above is all that is announced.
- `onClick` does not make the badge operable: there is no role, no `tabIndex` and no key handler.
  Put it inside a real button.

## Test ids

<APITable>

| Element       | `data-testid`                       |
| ------------- | ----------------------------------- |
| Outer element | `badge`, overridden by `dataTestId` |
| The pill      | `badge-inner`                       |
| The label     | `badge-text`                        |

</APITable>

The outer element also carries `data-hidden`, `data-type`, `data-paid`, `data-muted`,
`data-version-badge`, `data-no-hover` and `data-is-hovered`, which is what to assert on rather
than the computed style.

## Related

- [`Tag`](./tag.md) — a chip the user can click or remove.
- [`SelectedItem`](./selected-item.md) — a chosen value with a close cross.
- [`Text`](./text.md) — coloured text with no pill around it.
