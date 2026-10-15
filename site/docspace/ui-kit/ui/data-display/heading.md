---
description: "Section title rendered as a real heading element, sized by a preset rather than by its level."
custom_edit_url: "https://github.com/ONLYOFFICE/docspace-ui-kit-react/blob/9954315f61fd4830b7ea0582c3d58bee0e85d0aa/components/heading/README.md"
---

import ThemedImage from '@theme/ThemedImage';

import APITable from '@site/src/components/APITable/APITable';

# Heading

Section title rendered as a real heading element, sized by a preset rather than by its level. The
two are deliberately separate: `level` picks the `h1`–`h6` tag that a screen reader builds the
page outline from, `size` is how large the title looks, and a `h3` can be the biggest thing on
the page.

<ThemedImage alt="Heading" width={1014} sources={{ light: require('./heading--primary-light.png').default, dark: require('./heading--primary-dark.png').default }} />

## Use this when / not when

- Use for the title of a page, a panel, a dialog body or a settings block — anything that belongs
  in the document outline.
- Not for body text or a caption — use [`Text`](./text.md), which is 13px, 400 and takes
  its element from `as`.
- Not for the caption of a form control — use [`Label`](../form-controls/label.md), which associates
  itself with the control and draws the required marker.
- Not for a title that navigates — wrap [`Link`](../navigation/link.md) inside it, or use `Link` on
  its own; `Heading` has no interactive behaviour at all.

**It brings no spacing.** `margin: 0`, unlike the browser's own `h1`–`h6`. Two headings in a row
sit flush against each other until the container supplies a `gap` or a margin.

## Import

```ts
import {
  Heading,
  HeadingLevel,
  HeadingSize,
} from "@onlyoffice/apps-ui-kit/components/heading";
```

Also exported from the root barrel `@onlyoffice/apps-ui-kit`.

Needs `ThemeProvider` above it in the tree. Without one the heading always draws in the light
theme's black — the white it uses on a dark background comes from the `dark` class the provider
puts on `<body>` — and its font family falls back to whatever the page inherits, because the
provider is what sets `--font-family`.

## Stories

### Default

A large `h1`, the title of a page or panel; change the level, size, type or any other prop live in the Controls panel below.

<ThemedImage alt="Default" width={1014} sources={{ light: require('./heading--default-light.png').default, dark: require('./heading--default-dark.png').default }} />

### Levels

Six headings, `h1` through `h6`, all at the same medium size: the level decides the element a screen reader builds the page outline from, not how large the text looks (`level`).

<ThemedImage alt="Levels" width={1014} sources={{ light: require('./heading--levels-light.png').default, dark: require('./heading--levels-dark.png').default }} />

### Sizes

Five `h1` headings from 15px to 27px: pick the size for the visual weight the layout needs, whatever level the heading has (`size`).

<ThemedImage alt="Sizes" width={1014} sources={{ light: require('./heading--sizes-light.png').default, dark: require('./heading--sizes-dark.png').default }} />

### Types

**Default Type** has no `type` and follows `size`; **Header Type** is 28px at weight 600, **Menu Type** 23px bold and **Content Type** 18px bold, all three on a 50px line height, for titles that must line up with a 50px row (`type`).

<ThemedImage alt="Types" width={1014} sources={{ light: require('./heading--types-light.png').default, dark: require('./heading--types-dark.png').default }} />

### Truncated Heading

A long title in a 250px column stays on one line and ends with an ellipsis, for headers that must not wrap; without a bounded parent the heading grows instead (`truncate`).

<ThemedImage alt="Truncated Heading" width={266} sources={{ light: require('./heading--truncated-heading-light.png').default, dark: require('./heading--truncated-heading-dark.png').default }} />

### Custom Styled

One-off looks without a stylesheet: **Blue Heading** sets the colour through the `color` prop, **Italic Heading** and **Underlined Heading** pass other CSS through `style`.

<ThemedImage alt="Custom Styled" width={1014} sources={{ light: require('./heading--custom-styled-light.png').default, dark: require('./heading--custom-styled-dark.png').default }} />

### Css Customization

Every overridable variable set on one wrapper -- the variables are listed under CSS variables on this page. **Custom Heading** (`type="content"`) shows the colour, `--heading-size-content` and `--heading-lh`; **Plain Heading** has no `type` and is there for `--heading-weight`; **Menu Heading** and **Header Heading** show `--heading-size-menu` and `--heading-size-header`.

<ThemedImage alt="Css Customization" width={1014} sources={{ light: require('./heading--css-customization-light.png').default, dark: require('./heading--css-customization-dark.png').default }} />

## Minimal example

```tsx
import {
  Heading,
  HeadingLevel,
  HeadingSize,
} from "@onlyoffice/apps-ui-kit/components/heading";

export function PanelTitle() {
  return (
    <Heading level={HeadingLevel.h2} size={HeadingSize.small}>
      Sharing settings
    </Heading>
  );
}
```

## Props

`HeadingProps` is `TextProps` plus the three below, but the component reads only part of what it
inherits: `as`, `children`, `className`, `color`, `fontSize`, `fontWeight`, `id`, `isInline`,
`lineHeight`, `style`, `title` and `truncate`. The rest of `TextProps` — `isBold`, `isItalic`,
`noSelect`, `textAlign`, `backgroundColor`, `dir`, `view`, `tag`, `dataTestId` and the two
`container*` props — is spread onto the element unread, where React passes it through as an
unknown attribute and warns in the console.


<APITable>

| Property | Type | Description |
| --- | --- | --- |
| `level`? | `HeadingLevel` | Which heading element is rendered, `h1` through `h6`. It is the semantics only: the size comes from `size`, so a `h3` can be the largest thing on the page. Default: `HeadingLevel.h1`. |
| `size`? | `HeadingSize` | One of the five preset sizes, 15px to 27px. Ignored while `type` is set, which brings a size of its own. Default: `HeadingSize.medium`. |
| `type`? | `HeadingType` | Portal-sized preset that replaces `size`: `content` 18px, `menu` 23px, `header` 28px, each with a 50px line height. |

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
| `children`? | `((string \| number \| bigint \| boolean \| ReactElement<unknown, string \| JSXElementConstructor<any>> \| Iterable<ReactNode>…` | Text to render. |
| `className`? | `string` | Added after the component's own classes. |
| `color`? | `string` | Text colour, as an inline style. `Text` declares none of its own and inherits without it. |
| `containerMinWidth`? | `string` | Not read here — it reaches the DOM as an unknown attribute. It is read off this element by `RowContent`, which uses it as the minimum width of a side slot. |
| `containerWidth`? | `string` | Not read here — it reaches the DOM as an unknown attribute. It is read off this element by `RowContent` and `TileContent`, which use it as the width of the slot they put the child in. |
| `dataTestId`? | `string` | Value of `data-testid` on the element. Default: `"text"`. |
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
| `onClick`? | `((e: React.MouseEvent<Element>) => void) & MouseEventHandler<HTMLHeadingElement>` | Called with the event when the element is clicked. |
| `ref`? | `RefObject<HTMLDivElement \| null>` | Attached to the rendered element, whatever `as` made it. Typed for a div whatever that element actually is. |
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

Plus 278 more props inherited from `React.AriaAttributes`, `React.DOMAttributes` and `React.HTMLAttributes`, forwarded to the element.

### Enums

<APITable>

| Enum           | Members                                        |
| -------------- | ---------------------------------------------- |
| `HeadingLevel` | `h1`, `h2`, `h3`, `h4`, `h5`, `h6`             |
| `HeadingSize`  | `xsmall`, `small`, `medium`, `large`, `xlarge` |

</APITable>

## Recipes

### A title that truncates

`truncate` is inherited from `Text` and behaves the same: one line, an ellipsis, and it needs a
parent of bounded width to have anything to clip against.

```tsx
import {
  Heading,
  HeadingLevel,
} from "@onlyoffice/apps-ui-kit/components/heading";

export function RoomTitle({ name }: { name: string }) {
  return (
    <div style={{ width: 220 }}>
      <Heading level={HeadingLevel.h3} truncate title={name}>
        {name}
      </Heading>
    </div>
  );
}
```

### A title with the kit's tooltip

`Heading` is not wrapped in the tooltip HOC, so its `title` is a plain HTML attribute and the
browser draws the tooltip. `HeadingWithTooltip` is the same component wrapped, which turns
`title` into the kit's own tooltip — and that one needs `<RootTooltip />` mounted once near the
root of the app, or nothing appears.

```tsx
import { HeadingWithTooltip } from "@onlyoffice/apps-ui-kit/components/heading";
import { RootTooltip } from "@onlyoffice/apps-ui-kit/components/tooltip";

export function TruncatedTitle({ name }: { name: string }) {
  return (
    <>
      <RootTooltip />
      <div style={{ width: 200 }}>
        <HeadingWithTooltip truncate title={name}>
          {name}
        </HeadingWithTooltip>
      </div>
    </>
  );
}
```

## Behaviour the types don't state

- **`type` wins over `size`.** The three `type` presets come later in the stylesheet at the same
  specificity as the five size classes, so `size={HeadingSize.xsmall} type="header"` renders at
  28px. `type` also fixes the line height at 50px, which the sizes do not touch.
- **`type` sets its own weight.** `content` and `menu` are `bold` (700); `header` stays at 600,
  from a private variable rather than `--heading-weight`. `fontWeight` still wins over all three,
  because it is an inline style.
- **The five sizes are 15px, 19px, 21px, 23px and 27px** for `xsmall` through `xlarge`, and 600
  weight throughout. They are declared on the element itself rather than read with a fallback, so
  they cannot be retuned from a container — only `fontSize` on the component, or the `type`
  presets, which do read consumer variables.
- **The inline style props win over `style`,** the opposite of [`Text`](./text.md):
  `style` is spread first and `color`, `fontSize`, `fontWeight` and `lineHeight` are written over
  it. A `style={{ color: "red" }}` is silently replaced by `color`, and passing `color=""` counts
  as unset.
- **Alignment is an attribute, not a prop.** `textAlign` is inherited from `TextProps` and never
  read; the stylesheet aligns on `data-align="left" | "right" | "center"`, which you pass as a
  plain attribute.
- **`dataTestId` does nothing here.** The `data-testid` is the literal `heading`, and the only way
  to change it is the `data-testid` attribute itself, which lands through the spread.
- **Every heading carries a class named `undefined`.** The component asks for a `not-selectable`
  class the stylesheet does not define, so the lookup yields `undefined` and `classNames` renders
  it as a literal class name. Nothing styles it, which also means headings are selectable despite
  the intent — but the class is in the DOM, so do not write a CSS rule or a test that keys on the
  element's full `class` string.
- **`as` replaces the element but not the styling**, and it also removes the heading semantics:
  `as="div"` renders a div that looks like a heading, so the outline a screen reader builds loses
  the entry. `level` is then only the source of a tag name nobody uses.
- **`Heading` is memoised** (`React.memo`), so a new inline `style` object or a new `children`
  fragment on every parent render defeats it; nothing else in the component depends on that.

## CSS variables

Only the `type` presets and the colour and weight are exposed; the five `size` steps are private.
The inline style props win over every variable here: `color` over `--heading-text-color`,
`fontWeight` over `--heading-weight`, `fontSize` and `lineHeight` over the `type` sizes and line
height.

<APITable>

| Variable                 | Default              | Effect                                                             |
| ------------------------ | -------------------- | ------------------------------------------------------------------ |
| `--heading-weight`       | `600`                | Font weight of a heading without `type`; every `type` sets its own |
| `--heading-text-color`   | black, white in dark | Text colour                                                        |
| `--heading-size-header`  | `28px`               | Font size of `type="header"`                                       |
| `--heading-size-menu`    | `23px`               | Font size of `type="menu"`                                         |
| `--heading-size-content` | `18px`               | Font size of `type="content"`                                      |
| `--heading-lh`           | `50px`               | Line height of all three `type` presets                            |

</APITable>

## Accessibility

- Renders `h1`–`h6` from `level`, which is what a screen reader uses to build the page outline.
  Pick it from the document structure, not from how large the title should look — that is `size`.
- `as` overrides the element and so removes those semantics; a heading rendered `as="div"`
  disappears from the outline.
- The component sets no ARIA of its own. `aria-*` attributes are accepted and reach the element.
- Nothing here is focusable or operable, and there is no keyboard behaviour to describe.
- `title` is a native tooltip on `Heading`, so it is announced; on `HeadingWithTooltip` it becomes
  the kit's tooltip, which is not.

## Test ids

<APITable>

| Element     | `data-testid`                                           |
| ----------- | ------------------------------------------------------- |
| The heading | `heading`, overridden only by a `data-testid` attribute |

</APITable>

## Related

- [`Text`](./text.md) — body text and captions; the type `HeadingProps` extends.
- [`Label`](../form-controls/label.md) — the caption of a form control, tied to the control itself.
- [`Link`](../navigation/link.md) — a title that has to navigate or act.
