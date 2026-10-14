---
description: "Body text at the kit's size and weight, rendered through whichever element you name."
custom_edit_url: "https://github.com/ONLYOFFICE/docspace-ui-kit-react/blob/9954315f61fd4830b7ea0582c3d58bee0e85d0aa/components/text/README.md"
---

import ThemedImage from '@theme/ThemedImage';

import APITable from '@site/src/components/APITable/APITable';

# Text

Body text at the kit's size and weight, rendered through whichever element you name. It is the
typography primitive the rest of the kit builds its labels out of: a `<p>` by default, 13px and
400, with the styling knobs as props instead of a class.

<ThemedImage alt="Text" width={1014} sources={{ light: require('./text--primary-light.png').default, dark: require('./text--primary-dark.png').default }} />

## Use this when / not when

- Use when you need a line or a paragraph of text that matches the rest of the kit, or a piece of
  text that must truncate, stay unselectable, or follow the reader's writing direction.
- Use when a component of yours wants the kit's default body size without hard-coding 13px.
- Not for a section title — use [`Heading`](./heading.md), which carries the sizes, the
  weight and the theme's text colour, and renders a real `h1`–`h6`.
- Not for a form field's label — use [`Label`](../form-controls/label.md), which ties itself to the
  control and draws the required asterisk.
- Not for something clickable — use [`Link`](../navigation/link.md). `Text` takes an `onClick`, but it
  renders a `<p>` with no role, no focus and no keyboard handling, so a click handler on it is
  unreachable without a pointer.

**It paints no colour of its own.** Unlike every other text component in the kit, `Text` sets
neither `color` nor `font-family`; both are inherited from whatever contains it. On a page that
never set them you get the browser's defaults, in the light theme and the dark one alike. Pass
`color`, or set `color` on a container.

## Import

```ts
import { Text } from "@onlyoffice/apps-ui-kit/components/text";
```

Also exported from the root barrel `@onlyoffice/apps-ui-kit`.

No provider is required: the component reads only `--text-size` and `--text-weight`, both with
built-in fallbacks, so it renders correctly on its own.

## Stories

### Default

A paragraph at the kit's body size and regular weight, the starting point for any line of text; change any other prop live in the Controls panel below.

<ThemedImage alt="Default" width={1014} sources={{ light: require('./text--default-light.png').default, dark: require('./text--default-dark.png').default }} />

### Font Sizes

Seven lines from 10px to 24px, to pick a size against the 13px body text (`fontSize`).

<ThemedImage alt="Font Sizes" width={1014} sources={{ light: require('./text--font-sizes-light.png').default, dark: require('./text--font-sizes-dark.png').default }} />

### Font Weights

Five lines from light (300) to bold (700), to compare weights at the same size (`fontWeight`); a weight shows only if the font carries it.

<ThemedImage alt="Font Weights" width={1014} sources={{ light: require('./text--font-weights-light.png').default, dark: require('./text--font-weights-dark.png').default }} />

### Text Styles

Emphasis without choosing a weight: **Bold text** sets 700 (`isBold`), **Italic text** slants it (`isItalic`), and the last line combines both.

<ThemedImage alt="Text Styles" width={1014} sources={{ light: require('./text--text-styles-light.png').default, dark: require('./text--text-styles-dark.png').default }} />

### Text Alignment

The four alignments in one column (`textAlign`); the justified paragraph stretches every line but the last to both edges.

<ThemedImage alt="Text Alignment" width={1014} sources={{ light: require('./text--text-alignment-light.png').default, dark: require('./text--text-alignment-dark.png').default }} />

### Inline Text

Three pieces of text on one line, for mixing styles inside a sentence without a wrapper (`isInline`).

<ThemedImage alt="Inline Text" width={354} sources={{ light: require('./text--inline-text-light.png').default, dark: require('./text--inline-text-dark.png').default }} />

### Truncated Text

A sentence longer than its 200px box stays on one line and ends with an ellipsis (`truncate`); without a box of bounded width it would grow instead.

<ThemedImage alt="Truncated Text" width={216} sources={{ light: require('./text--truncated-text-light.png').default, dark: require('./text--truncated-text-dark.png').default }} />

### Heading Elements

Real `h1`-`h6` elements for a document outline, each given its size and weight by hand (`as`, `fontSize`, `fontWeight`); `Heading` carries these sizes already.

<ThemedImage alt="Heading Elements" width={1014} sources={{ light: require('./text--heading-elements-light.png').default, dark: require('./text--heading-elements-dark.png').default }} />

### Direction

For text whose language is not known in advance: the first line is set left to right and the second right to left (`dir`); the last two leave the direction to the browser, which reads it from the text itself (`dir="auto"`).

<ThemedImage alt="Direction" width={1014} sources={{ light: require('./text--direction-light.png').default, dark: require('./text--direction-dark.png').default }} />

### No Select Text

For captions that should not be copied by accident: drag across both lines, and only the first one is selected (`noSelect`).

<ThemedImage alt="No Select Text" width={1014} sources={{ light: require('./text--no-select-text-light.png').default, dark: require('./text--no-select-text-dark.png').default }} />

### With Tooltip

For text that needs a word of explanation without taking space on the page: rest the pointer on the line to read the tooltip (`title`). It opens the kit's shared tooltip, which needs `RootTooltip` mounted, as this story does.

<ThemedImage alt="With Tooltip" width={119} sources={{ light: require('./text--with-tooltip-light.png').default, dark: require('./text--with-tooltip-dark.png').default }} />

### Css Customization

Both variables set on one wrapper -- the variables are listed under CSS variables on this page. The line of text inside comes out larger and semibold.

<ThemedImage alt="Css Customization" width={1014} sources={{ light: require('./text--css-customization-light.png').default, dark: require('./text--css-customization-dark.png').default }} />

## Minimal example

```tsx
import { Text } from "@onlyoffice/apps-ui-kit/components/text";

export function FileMeta() {
  return (
    <div>
      <Text isBold>Quarterly report.docx</Text>
      <Text color="#a3a9ae">Modified 12 minutes ago</Text>
    </div>
  );
}
```

## Props


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
| `onClick`? | `(e: React.MouseEvent<Element>) => void` | Called with the event when the element is clicked. |
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

#### Added by the wrapper the folder exports

The `index` module exports a wrapped component, so these are accepted on top of the props above.

<APITable>

| Property | Type | Description |
| --- | --- | --- |
| `onMouseEnter`? | `MouseEventHandler` | Called in addition to the handler that opens the tooltip, after it. |
| `onMouseLeave`? | `MouseEventHandler` | Called in addition to the handler that closes the tooltip, after it. |
| `onMouseMove`? | `MouseEventHandler` | Passed through only while the element has no tooltip. Once one is active the wrapper's own handler replaces it and this is dropped. |
| `tooltipContent`? | `ReactNode` | Tooltip content, used instead of `title` when both are set. Only a string produces a tooltip: the wrapper needs text for the anchor, so any other node leaves the element with no tooltip at all. |

</APITable>

## Recipes

### Truncating in a flex row

`truncate` is one line plus an ellipsis, and it only bites inside a parent whose width is
bounded. In a flex row that means `min-width: 0` on the item as well — without it a flex child
refuses to shrink below its content and the text overflows instead of clipping.

```tsx
import { Text } from "@onlyoffice/apps-ui-kit/components/text";

export function FileRow({ name, size }: { name: string; size: string }) {
  return (
    <div style={{ display: "flex", gap: 8, width: 240 }}>
      <div style={{ minWidth: 0, flex: 1 }}>
        <Text truncate>{name}</Text>
      </div>
      <Text color="#a3a9ae">{size}</Text>
    </div>
  );
}
```

### Text whose direction follows its content

`dir="auto"` does not set the attribute on the element. It wraps the children in an inner span
that carries `dir="auto"`, so the browser picks the direction from the first strong character of
the content — which is what you want for a user-supplied file name in a mixed-script portal.

```tsx
import { Text } from "@onlyoffice/apps-ui-kit/components/text";

export function FileName({ name }: { name: string }) {
  return (
    <Text dir="auto" truncate>
      {name}
    </Text>
  );
}
```

### Rendering as another element

`as` takes the element, and the text keeps its styling. This is how you get semantic markup
without giving up the kit's typography.

```tsx
import { Text } from "@onlyoffice/apps-ui-kit/components/text";

export function Legend() {
  return (
    <ul>
      <Text as="li">Owners can invite members</Text>
      <Text as="li">Members can upload files</Text>
    </ul>
  );
}
```

## Behaviour the types don't state

- **The element is a `<p>` unless you say otherwise.** `as` wins over `tag` when both are set, and
  a `<p>` cannot legally contain a `<div>` — a block child inside the default element is closed
  by the browser's parser and ends up as a sibling. Pass `as="div"` or `as="span"` when the
  children are not phrasing content.
- **`style` is merged last**, over `fontSize`, `fontWeight`, `color`, `textAlign`, `lineHeight` and
  `backgroundColor`. A `style={{ fontSize: "16px" }}` beats `fontSize="13px"`, not the other way
  round.
- **`isBold` overrides `fontWeight`** rather than combining with it: the inline weight becomes 700
  and the `bold` class sets the same, so `isBold fontWeight={500}` renders at 700.
- **`display` is dead.** It is declared, nothing reads it, and it reaches the DOM as an unknown
  attribute. It does not set the CSS property its name suggests — `isInline` and `style` are the
  ways to do that.
- **`containerWidth` and `containerMinWidth` do nothing here, and are not dead.** This component
  ignores both and passes them to the DOM, but [`RowContent`](../rows/row-content.md) and
  [`TileContent`](../tiles/tile-content.md) read them back off the child element they are
  given and use them as the width of the slot they put it in. That is the only reason to set
  them: inside one of those two wrappers, and nowhere else.
- **`title` is a tooltip, not a `title` attribute.** The folder exports `withTooltip(TextUi)`, and
  the wrapper consumes `title` before the element is built. It opens the kit's system tooltip on
  hover after 700ms — which means nothing appears at all until `<RootTooltip />` from
  [`Tooltip`](../overlays/tooltip.md) is mounted once near the root of the app. The component's own
  test asserts a `title` attribute; that only holds because the wrapper passes `title` straight
  through while `NODE_ENV === "test"`, and it is not what a browser renders.
- **`TextUi` is the same component without that wrapper**, exported for the cases where you want
  a real `title` attribute or no hover handlers at all.
- **`truncate` clips, it does not wrap to a line count.** The only multi-line clamp in the
  component is `view="tile"`, it is two lines, and it applies only together with `dir="auto"`,
  because it is a class on the span that direction mode introduces.
- **The auto-direction span takes the pointer events off the text** (`pointer-events: none`), so
  with `dir="auto"` the children cannot receive a hover or a click of their own — the handler has
  to sit on the `Text` element or above it.
- **`noSelect` covers the whole element**, including any children you pass, and it is
  `user-select: none` in every engine the kit supports, not a class you can undo from outside.

## CSS variables

Both are read with a fallback, so setting either on any ancestor changes every `Text` below it.

<APITable>

| Variable        | Default | Effect                                                        |
| --------------- | ------- | ------------------------------------------------------------- |
| `--text-size`   | `13px`  | Font size, unless the `fontSize` prop or `style` overrides it |
| `--text-weight` | `400`   | Font weight, unless `fontWeight`, `style` or `isBold` does    |

</APITable>

There is no variable for the colour: `Text` does not declare one and inherits instead.

## Accessibility

- The element is a `<p>` with no role and no ARIA of its own. `as` is how you give it structural
  meaning — `as="li"` inside a list, `as="label"` with `htmlFor`, `as="span"` inside a sentence —
  and `role`, `aria-label`, `aria-live` and `aria-hidden` are passed to it unchanged, so a line
  that reports an outcome is `role="status"` or `role="alert"` without a wrapper element.
- An `onClick` does not make it operable: there is no `tabIndex`, no `role="button"` and no key
  handler. Pass `tabIndex` and `role="button"` yourself, or use [`Link`](../navigation/link.md) or a
  button.
- `title` produces the kit's own tooltip rather than the native one, and the kit's tooltip is not
  announced by a screen reader. Text that must be read aloud belongs in the content or in an
  `aria-label` on the element.
- `dir="auto"` is the accessible way to render names in an unknown script; `dir="rtl"` forces the
  direction whatever the content is.

## Test ids

<APITable>

| Element     | `data-testid`                      |
| ----------- | ---------------------------------- |
| The element | `text`, overridden by `dataTestId` |

</APITable>

## Related

- [`Heading`](./heading.md) — section titles: real heading levels, preset sizes and the theme's text colour.
- [`Link`](../navigation/link.md) — text that navigates or acts, with focus and keyboard behaviour.
- [`Label`](../form-controls/label.md) — the caption of a form control, with the required marker.
