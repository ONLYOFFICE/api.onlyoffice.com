# IBox

[View source on GitHub](https://github.com/ONLYOFFICE/docspace-plugin-sdk/blob/master/src/interfaces/components/IBox.ts#L70)

A container that lays out its contents in one direction.
Box provides general CSS capabilities like flexbox layout, paddings, background color, border, and animation.

![box](/assets/images/docspace/box.png#gh-light-mode-only)![box](/assets/images/docspace/box.dark.png#gh-dark-mode-only)

## Example

Flexible input container with gradient background

```typescript
const newInputProps: IInput = {
  value: "",
  onChange: () => {},
  scale: true,
  placeholder: "",
}

const inputComponent: InputGroup = {
  component: Components.input,
  props: newInputProps,
}

const inputBox: IBox = {
  widthProp: "100px",
  paddingProp: "10px",
  displayProp: "flex",
  flexDirection: "row",
  alignItems: "center",
  borderProp: {
    color: "blue",
    radius: "10px",
    style: "solid",
    width: "2px"
  },
  alignContent: "center",
  alignSelf: "center",
  backgroundProp: "linear-gradient(to right, #ff0000, #00ff00)",
  flexBasis: "50%",
  flexProp: "1",
  flexWrap: "wrap",
  children: inputComponent
}
```

## Properties

```mdx-code-block
import APITable from '@site/src/components/APITable/APITable';

<APITable>
```

| Property | Type | Description |
| ------ | ------ | ------ |
| `widthProp?` | `string` | Defines the width of the element area |
| `paddingProp?` | `string` | Defines the padding area of all four sides of the element. This is a shorthand for "padding-top", "padding-right", "padding-bottom", and "padding-left" |
| `displayProp?` | `string` | Specifies whether the element is treated as a block or inline element and also determines the layout used for its children, such as flow layout, grid or flex |
| `flexDirection?` | `string` | Sets how the flex items are placed in the flex container defining the main axis (column or row) and the direction (normal or reversed) |
| `alignItems?` | `string` | Sets the "alignSelf" value on all direct children as a group. In flexbox, it controls the alignment of items on the cross-axis. In grid layout, it controls the alignment of items on the block axis within their grid area |
| `borderProp?` | `string` \| [`IBorderProp`](#iborderprop) | Defines the element border. It sets the values of border width, border style, and border color |
| `alignContent?` | `string` | Defines the distribution of space between and around content items along the flexbox cross-axis or the grid block axis |
| `alignSelf?` | `string` | Overrides a grid or flex item "alignItems" value. In grid, it aligns the item inside the grid area. In flexbox, it aligns the item on the cross-axis |
| `backgroundProp?` | `string` | Defines all background style properties at once, such as color, image, origin and size, or repeat method |
| `flexBasis?` | `string` | Defines the initial main size of the flex item. It sets the size of the content box unless otherwise set with "box-sizing" |
| `flexProp?` | `string` | Defines how the flex item will grow or shrink to fit the space available in its flex container. It is a shorthand for "flex-grow", "flex-shrink", and "flex-basis" |
| `flexWrap?` | `string` | Defines whether flex items are forced onto one line or can wrap onto multiple lines. If wrapping is allowed, it sets the direction that lines are stacked |
| `gridArea?` | `string` | Defines a shorthand property for "grid-row-start", "grid-column-start", "grid-row-end", and "grid-column-end", specifying the size of the grid item and location within the grid by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the edges of its grid area. |
| `heightProp?` | `string` | Defines the height of the element area |
| `justifyContent?` | `string` | Defines how the browser distributes space between and around content items along the main axis of a flex container, and the inline axis of a grid container |
| `justifyItems?` | `string` | Defines the default "justifySelf" for all items of the box, giving them all a default way of justifying each box along the appropriate axis |
| `justifySelf?` | `string` | Defines the way the box is justified inside its alignment container along the appropriate axis |
| `marginProp?` | `string` | Defines the margin area on all four sides of an element. It is a shorthand for "margin-top", "margin-right", "margin-bottom", and "margin-left" |
| `overflowProp?` | `string` | Specifies what to do when the element content is too big to fit in its block formatting context |
| `textAlign?` | `string` | Defines the horizontal alignment of a block element or table-cell box |
| `className?` | `string` | Defines the CSS class for styling the component. Can be used to override or extend the default component styles. |
| `id?` | `string` | Unique identifier. |
| `children?` | [`Component`](Component.md)[] | The child components to render within this box |

```mdx-code-block
</APITable>
```

***

## IBorderProp

[View source on GitHub](https://github.com/ONLYOFFICE/docspace-plugin-sdk/blob/master/src/interfaces/components/IBox.ts#L219)

Defines the border properties for a box element.

### Example

Border properties with custom styling

```typescript
const borderProps: IBorderProp = {
  color: "blue",
  radius: "10px",
  style: "solid",
  width: "2px"
}
```

### Properties

```mdx-code-block
<APITable>
```

| Property | Type | Description |
| ------ | ------ | ------ |
| `color` | `string` | Defines the border color of the element area |
| `radius` | `string` | Defines the border radius of the element area |
| `style` | `string` | Defines the border style of the element area |
| `width` | `string` | Defines the border width of the element area |

```mdx-code-block
</APITable>
```
