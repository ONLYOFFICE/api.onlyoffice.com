# IFrame

[View source on GitHub](https://github.com/ONLYOFFICE/docspace-plugin-sdk/blob/master/src/interfaces/components/IFrame.ts#L64)

A component that is used to embed a third-party website into a modal window or the settings page.

![iframe](/assets/images/docspace/iframe.png#gh-light-mode-only)![iframe](/assets/images/docspace/iframe.dark.png#gh-dark-mode-only)

## Examples

Embedding a PDF viewer in a modal window

```typescript
const pdfViewer: IFrame = {
  src: "https://example.com/pdf-viewer",
  width: "100%",
  height: "80%",
  name: "pdf-viewer-frame",
  sandbox: "allow-scripts allow-same-origin allow-forms",
  id: "pdf-viewer-iframe",
  style: {
    border: "none",
    borderRadius: "8px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)"
  }
}
```

Embedding a settings configuration page

```typescript
const settingsConfig: IFrame = {
  src: "https://example.com/plugin-settings",
  width: "100%",
  height: "100%",
  name: "plugin-settings",
  sandbox: "allow-scripts allow-same-origin allow-forms allow-popups",
  id: "settings-iframe",
  style: {
    border: "1px solid #eceef1",
    backgroundColor: "#ffffff",
    padding: "16px"
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
| `src` | `string` | Defines the base URL to a modal window or the settings page. It is used to generate links |
| `width?` | `string` | Defines the frame width measured in percent |
| `height?` | `string` | Defines the frame height measured in percent |
| `name?` | `string` | Defines the name of the object inserted into the page |
| `sandbox?` | `string` | Defines the frame sandbox |
| `id?` | `string` | Defines the element ID |
| `style?` | \{ \[`key`: `string`\]: `string`; \} | Defines the frame style |
| `className?` | `string` | Defines the CSS class for styling the component. Can be used to override or extend the default component styles. |

```mdx-code-block
</APITable>
```
