---
description: "The text of a row, laid out by the position of its children rather than by named slots."
custom_edit_url: "https://github.com/ONLYOFFICE/docspace-ui-kit-react/blob/9954315f61fd4830b7ea0582c3d58bee0e85d0aa/components/rows/row-content/README.md"
---

import ThemedImage from '@theme/ThemedImage';

import APITable from '@site/src/components/APITable/APITable';

# RowContent

The text of a row, laid out by the position of its children rather than by named slots. The
first child is the title, the second the icons beside it, and the rest are flattened into one
line of text under them.

<ThemedImage alt="RowContent" width={1014} sources={{ light: require('./row-content--primary-light.png').default, dark: require('./row-content--primary-dark.png').default }} />

## Use this when / not when

- Use as the child of a [`Row`](./row.md), which is what it is laid out for and what
  reads its `item` prop.
- Not for content with its own layout. Positions are fixed, the third child onwards is hidden,
  and its text is joined into one line with pipes — markup of your own inside a row is often the smaller
  answer.
- Not for columns the user reads across: [`Table`](../table/index.md).

## Import

```ts
import { RowContent } from "@onlyoffice/apps-ui-kit/components/rows/row-content";
```

`components/index.ts` does not list this folder, but it lists `rows`, and `export *`
is transitive — so the name arrives from `@onlyoffice/apps-ui-kit/components/rows` and from
the root barrel `@onlyoffice/apps-ui-kit` as well.

`RowContentProps` is **not** exported — type a wrapper's props yourself, or import the type
from its file path.

Needs `ThemeProvider` from `@onlyoffice/apps-ui-kit/providers/theme` for the text colours of
whatever you put inside.

## Stories

### Default

The content of one file row: the title, a status icon beside it, and the details **Modified today**, **24 KB** and **Version 2** joined into one line under them. Click anywhere in it to see `onClick` in the Actions panel, and change any other prop live in the Controls panel below.

<ThemedImage alt="Default" width={1014} sources={{ light: require('./row-content--default-light.png').default, dark: require('./row-content--default-dark.png').default }} />

### Element At The End

A details line that ends in something to click: **Version 2** stays a link at the end of the line instead of being joined in as plain text (`convertSideInfo` off). It follows the joined text directly, with no bar or space before it, and only the last child is kept this way.

<ThemedImage alt="Element At The End" width={1014} sources={{ light: require('./row-content--element-at-the-end-light.png').default, dark: require('./row-content--element-at-the-end-dark.png').default }} />

### Details Colour

Details that step back from the title: the joined line is drawn in grey (`sideColor`) while the title keeps its own colour.

<ThemedImage alt="Details Colour" width={1014} sources={{ light: require('./row-content--details-colour-light.png').default, dark: require('./row-content--details-colour-dark.png').default }} />

### Title Only

A row that needs only its title and a control of its own: the checkbox takes the place of the title icons, and there is no details line under them (`disableSideInfo`).

<ThemedImage alt="Title Only" width={205} sources={{ light: require('./row-content--title-only-light.png').default, dark: require('./row-content--title-only-dark.png').default }} />

### Right To Left

The content in a right-to-left interface: the title and its icon start at the right edge, and the details are joined in reverse order, so reading from the right the last of them, **24 KB**, comes first.

<ThemedImage alt="Right To Left" width={1014} sources={{ light: require('./row-content--right-to-left-light.png').default, dark: require('./row-content--right-to-left-dark.png').default }} />

## Minimal example

Two children at least: the title, then the slot for icons beside it. A `<span />` is the usual
way to leave the second one empty.

```tsx
import { RowContent } from "@onlyoffice/apps-ui-kit/components/rows/row-content";
import { Text } from "@onlyoffice/apps-ui-kit/components/text";

export function FileName({ name }: { name: string }) {
  return (
    <RowContent>
      <Text fontWeight={600}>{name}</Text>
      <span />
    </RowContent>
  );
}
```

## Props


<APITable>

| Property | Type | Description |
| --- | --- | --- |
| `children` | `ReactElement<{ containerWidth?: string; children?: React.ReactElement; }, string \| JSXElementConstructor<any>>[]` | The row's parts, addressed by position: the first is the title, the second the icons beside it, and everything after that is a side element that is **not displayed** — only its text is, joined into the one line under the title. It has to be an array. |
| `className`? | `string` | Applied to the row's content element. |
| `convertSideInfo`? | `boolean` | Whether the last side element is flattened into the joined line like the others. Turn it off to render it as the element it is. Default: `true`. |
| `disableSideInfo`? | `boolean` | Drops the line of joined side text under the title. Default: `false`. |
| `id`? | `string` | Applied to the row's content element. |
| `onClick`? | `() => void` | Called on a click anywhere in the content. |
| `sectionWidth`? | `number` | Read as a flag, not as a width: any non-zero value switches the content to its section layout. |
| `sideColor`? | `string` | Any CSS colour for the line of side text. |
| `style`? | `CSSProperties` | Applied to the content element, and again to the title's wrapper. |

</APITable>

## Recipes

### A title with details under it

Children from the third onwards are not displayed; their text is what makes up the line under
the title, joined with a pipe between each.

```tsx
import { RowContent } from "@onlyoffice/apps-ui-kit/components/rows/row-content";
import { Text } from "@onlyoffice/apps-ui-kit/components/text";

export function FileDetails({
  name,
  author,
  size,
}: {
  name: string;
  author: string;
  size: string;
}) {
  return (
    <RowContent sideColor="#a3a9ae">
      <Text fontWeight={600} truncate>
        {name}
      </Text>
      <span />
      <Text>{author}</Text>
      <Text>{size}</Text>
    </RowContent>
  );
}
```

## Behaviour the types don't state

- **Children are addressed by index.** `[0]` is the title, `[1]` the icons next to it, and
  `[2…]` are side elements. `children` is indexed and mapped directly, so a single child — not
  an array — throws.
- **The side elements are never displayed.** Their wrapper is `display: none` at every width;
  what the user sees is the line built from their _children_, under the title, unless
  `disableSideInfo` is set.
- **That line is built by joining with a string**, so each side element's child has to be text.
  An element there is turned into `[object Object]`; `convertSideInfo={false}` keeps the last
  side element as an element instead of flattening it.
- **The first child's `containerWidth` prop sets the title's width**, defaulting to 140px, and a
  side element's `containerWidth` and `containerMinWidth` size a wrapper nobody sees. They are
  read off the child's props, which means passing them to a [`Text`](../data-display/text.md) that
  does not declare them.
- The title stays on one line and is cut off with an ellipsis when it does not fit, and so is
  the joined line under it; neither wraps.
- In a right-to-left interface the joined line is reversed, and the element
  `convertSideInfo={false}` keeps comes before it instead of after.
- `style` lands on the content element and again on the title's wrapper.
- `sectionWidth` is read as a flag rather than a width: any non-zero number switches the
  layout.

## Accessibility

- The content is a stack of `<div>`s with no roles; the title is whatever element you pass, so
  put the semantics in there.
- The information in the side elements exists only as that joined line, which reads as one
  string — separate facts are not separated for a screen reader.
- `onClick` is on the content element, which is not focusable; the row around it is the thing to
  make operable, and it is not either.

## Test ids

<APITable>

| Element                  | `data-testid`            |
| ------------------------ | ------------------------ |
| The content              | `row-content`            |
| The title and its icons  | `main-container-wrapper` |
| Each hidden side element | `side-container`         |
| The joined line of text  | `tablet-side-info`       |

</APITable>

None of them can be overridden by a prop.

## Related

- [`Row`](./row.md) — the parent, which reads `item` off this element's props.
- [`Rows`](./index.md) — the three parts together.
- [`Text`](../data-display/text.md) — what the children usually are.
