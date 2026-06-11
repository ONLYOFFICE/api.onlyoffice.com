# Link

A text link component. Extends [IText](./text.md).

**Interface**: ILink.

See the parameters of this component in [storybook](https://storybook.onlyoffice.io/?path=/docs/components-link--docs).

To set the link type, use [LinkType](https://github.com/ONLYOFFICE/docspace-plugin-sdk/blob/master/src/interfaces/components/ILink.ts) (*page, action*).

To set the link target, use [LinkTarget](https://github.com/ONLYOFFICE/docspace-plugin-sdk/blob/master/src/interfaces/components/ILink.ts) (*blank, self, parent, top*).

## Extra parameters

### href

The URL the link points to.

Type: string

Example: `"https://example.com"`

### id

The HTML id attribute of the link.

Type: string

Example: `"my-link"`

### isHovered

Specifies whether the link is in the hovered state.

Type: boolean

Example: `false`

### isTextOverflow

Specifies whether to truncate the link text with an ellipsis when it overflows.

Type: boolean

Example: `true`

### noHover

Specifies whether to disable the hover style.

Type: boolean

Example: `false`

### enableUserSelect

Specifies whether the link text is user-selectable.

Type: boolean

Example: `true`

### type

The link type. Can be *page* (navigates to a URL) or *action* (triggers a callback).

Type: LinkType

Example: `LinkType.page`

### target

The link target. Can be *blank*, *self*, *parent*, or *top*.

Type: LinkTarget

Example: `LinkTarget.blank`

### textDecoration

The CSS text-decoration style. Can be: *none*, *underline*, *line-through*, *overline*, *underline dotted*, *underline dashed*.

Type: string

Example: `"underline"`

### onClick

A function called when the link is clicked.

Type: func

Example: `() => {}`

## Example

``` ts
import {LinkTarget, LinkType, type ILink} from "@onlyoffice/docspace-plugin-sdk"

const link: ILink = {
  text: "Learn more",
  href: "https://example.com",
  type: LinkType.page,
  target: LinkTarget.blank,
  isTextOverflow: true,
}
```
