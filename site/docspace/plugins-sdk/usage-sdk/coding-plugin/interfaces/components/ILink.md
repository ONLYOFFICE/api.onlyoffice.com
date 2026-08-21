# ILink

[View source on GitHub](https://github.com/ONLYOFFICE/docspace-plugin-sdk/blob/master/src/interfaces/components/ILink.ts#L45)

Defines the link component properties.

![link](/assets/images/docspace/link.png#gh-light-mode-only)![link](/assets/images/docspace/link.dark.png#gh-dark-mode-only)

## Example

```typescript
import { ILink, LinkType, LinkTarget } from "@onlyoffice/docspace-plugin-sdk";

const link: ILink = {
  href: "https://example.com",
  text: "Visit Example",
  type: LinkType.page,
  target: LinkTarget.blank,
  isBold: false,
  color: "accent",
  fontSize: "14px",
  onClick: () => {
    console.log("Link clicked");
  }
};
```

## Extends

- [`IText`](IText.md)

## Properties

```mdx-code-block
import APITable from '@site/src/components/APITable/APITable';

<APITable>
```

| Property | Type | Description | Inherited from |
| ------ | ------ | ------ | ------ |
| `href?` | `string` | URL for the link | - |
| `id?` | `string` | Link identifier | - |
| `isHovered?` | `boolean` | Sets hovered state and link effects | - |
| `isTextOverflow?` | `boolean` | Activates text-overflow with ellipsis | - |
| `noHover?` | `boolean` | Disables hover effect | - |
| `enableUserSelect?` | `boolean` | Enables user selection | - |
| `type?` | [`LinkType`](#linktype) | Link type (page or action) | - |
| `target?` | [`LinkTarget`](#linktarget) | Target attribute for link | - |
| `textDecoration?` | \| `"none"` \| `"underline"` \| `"line-through"` \| `"overline"` \| `"underline dotted"` \| `"underline dashed"` | Text decoration style | - |
| `onClick?` | () => [`TReturnMessage`](../utils.md#treturnmessage) | Click handler (for action type links) | - |
| `text` | `string` | Defines the text | [`IText`](IText.md).[`text`](IText.md#text) |
| `title?` | `string` | Defines the text title | [`IText`](IText.md).[`title`](IText.md#title?) |
| `fontSize?` | `string` | Defines the text font size | [`IText`](IText.md).[`fontSize`](IText.md#fontSize?) |
| `fontWeight?` | `string` \| `number` | Defines the text font weight | [`IText`](IText.md).[`fontWeight`](IText.md#fontWeight?) |
| `truncate?` | `boolean` | Specifies whether the word wrapping is set | [`IText`](IText.md).[`truncate`](IText.md#truncate?) |
| `isBold?` | `boolean` | Specifies whether the text font weight is set to bold | [`IText`](IText.md).[`isBold`](IText.md#isBold?) |
| `isItalic?` | `boolean` | Specifies whether the text style is set to italic | [`IText`](IText.md).[`isItalic`](IText.md#isItalic?) |
| `isInline?` | `boolean` | Specifies whether the "display: inline-block" property is set | [`IText`](IText.md).[`isInline`](IText.md#isInline?) |
| `textAlign?` | `string` | Specifies whether the "text-align" property is set | [`IText`](IText.md).[`textAlign`](IText.md#textAlign?) |
| `noSelect?` | `boolean` | Specifies whether the text selection is disabled | [`IText`](IText.md).[`noSelect`](IText.md#noSelect?) |
| `display?` | `string` | Specifies whether the "display" property is set | [`IText`](IText.md).[`display`](IText.md#display?) |
| `lineHeight?` | `string` | Defines the text line height | [`IText`](IText.md).[`lineHeight`](IText.md#lineHeight?) |
| `color?` | `string` | Defines the text color | [`IText`](IText.md).[`color`](IText.md#color?) |
| `className?` | `string` | Defines the CSS class for styling the component. Can be used to override or extend the default component styles. | [`IText`](IText.md).[`className`](IText.md#className?) |

```mdx-code-block
</APITable>
```

## LinkType

[View source on GitHub](https://github.com/ONLYOFFICE/docspace-plugin-sdk/blob/master/src/interfaces/components/ILink.ts#L86)

Defines the link type.

### Enumeration Members

#### page

```ts
page: "page";
```

Regular page link

#### action

```ts
action: "action";
```

Action link (clickable but not navigating)

***

## LinkTarget

[View source on GitHub](https://github.com/ONLYOFFICE/docspace-plugin-sdk/blob/master/src/interfaces/components/ILink.ts#L96)

Defines the link target attribute.

### Enumeration Members

#### blank

```ts
blank: "_blank";
```

Opens in a new tab

#### self

```ts
self: "_self";
```

Opens in the same frame

#### parent

```ts
parent: "_parent";
```

Opens in the parent frame

#### top

```ts
top: "_top";
```

Opens in the full body of the window

