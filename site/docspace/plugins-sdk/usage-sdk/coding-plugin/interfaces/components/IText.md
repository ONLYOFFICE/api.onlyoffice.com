# IText

[View source on GitHub](https://github.com/ONLYOFFICE/docspace-plugin-sdk/blob/master/src/interfaces/components/IText.ts#L72)

Plain text.

![text](/assets/images/docspace/text.png#gh-light-mode-only)![text](/assets/images/docspace/text.dark.png#gh-dark-mode-only)

## Examples

Bold centered heading with custom typography

```typescript
const heading: IText = {
  text: "Document Management",
  fontSize: "24px",
  fontWeight: 600,
  lineHeight: "32px",
  color: "#333333",
  isBold: true,
  noSelect: true,
  textAlign: "center"
}
```

Truncated description with hover tooltip

```typescript
const description: IText = {
  text: "This is a long description that will be truncated if it exceeds the container width...",
  fontSize: "14px",
  lineHeight: "20px",
  color: "#666666",
  truncate: true,
  title: "Full description shown on hover"
}
```

Inline processing status with custom styling

```typescript
const status: IText = {
  text: "Processing",
  fontSize: "12px",
  isInline: true,
  isItalic: true,
  color: "#0066cc",
  display: "inline-flex",
  fontWeight: 500
}
```

## Extended by

- [`ILink`](ILink.md)

## Properties

```mdx-code-block
import APITable from '@site/src/components/APITable/APITable';

<APITable>
```

| Property | Type | Description |
| ------ | ------ | ------ |
| `text` | `string` | Defines the text |
| `title?` | `string` | Defines the text title |
| `fontSize?` | `string` | Defines the text font size |
| `fontWeight?` | `string` \| `number` | Defines the text font weight |
| `truncate?` | `boolean` | Specifies whether the word wrapping is set |
| `isBold?` | `boolean` | Specifies whether the text font weight is set to bold |
| `isItalic?` | `boolean` | Specifies whether the text style is set to italic |
| `isInline?` | `boolean` | Specifies whether the "display: inline-block" property is set |
| `textAlign?` | `string` | Specifies whether the "text-align" property is set |
| `noSelect?` | `boolean` | Specifies whether the text selection is disabled |
| `display?` | `string` | Specifies whether the "display" property is set |
| `lineHeight?` | `string` | Defines the text line height |
| `color?` | `string` | Defines the text color |
| `className?` | `string` | Defines the CSS class for styling the component. Can be used to override or extend the default component styles. |

```mdx-code-block
</APITable>
```
