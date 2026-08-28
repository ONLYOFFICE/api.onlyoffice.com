# IImage

[View source on GitHub](https://github.com/ONLYOFFICE/docspace-plugin-sdk/blob/master/src/interfaces/components/IImage.ts#L62)

A component that is used to embed an image not from the assets folder into a modal window or the settings page.

![image](/assets/images/docspace/image.png#gh-light-mode-only)![image](/assets/images/docspace/image.dark.png#gh-dark-mode-only)

## Examples

Plugin logo with fixed dimensions and spacing

```typescript
const pluginLogo: IImage = {
  src: "https://example.com/plugin-logo.png",
  alt: "Plugin Logo",
  width: "120px",
  height: "40px",
  name: "plugin-logo",
  id: "settings-logo",
  style: {
    objectFit: "contain",
    marginBottom: "16px"
  }
}
```

Responsive document preview with modern styling

```typescript
const documentPreview: IImage = {
  src: "https://example.com/document-preview.jpg",
  alt: "Document Preview",
  width: "100%",
  height: "auto",
  name: "doc-preview",
  style: {
    borderRadius: "4px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    maxWidth: "800px"
  }
}
```

## Properties

```mdx-code-block
import APITable from '@site/src/components/APITable/APITable';

<APITable>
```

| Property | Type | Description |
| ------ | ------ | ------ |
| `src` | `string` | Defines the full path to the image |
| `alt` | `string` | Defines the image alt attribute |
| `width?` | `string` | Defines the image width |
| `height?` | `string` | Defines the image height |
| `name?` | `string` | Defines the image name |
| `id?` | `string` | Defines the image ID |
| `style?` | \{ \[`key`: `string`\]: `string`; \} | Defines the image style |
| `className?` | `string` | Defines the CSS class for styling the component. Can be used to override or extend the default component styles. |

```mdx-code-block
</APITable>
```
