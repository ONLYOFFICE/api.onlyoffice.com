# Embedded

The embedded section defines the embedded mode parameters.

:::note
This section is for the `embedded` document type only. See the [config](../config.md#type) section to find out how to define the `embedded` document type.
:::

## autostart

**type:** `"document" | "player"` | **default:** `"player"`

The start mode for the embedded viewer. In `player` mode, the slideshow starts automatically.

**Example**: `"document"`

## embedUrl

**type:** `string`

The absolute URL to the source file for the embedded document.

**Example**: `"https://example.com/embedded?doc=exampledocument1.docx"`

## fullscreenUrl

**type:** `string`

The absolute URL of the document to open in full screen mode.

**Example**: `"https://example.com/embedded?doc=exampledocument1.docx#fullscreen"`

## saveUrl

**type:** `string`

The absolute URL for saving the document to the user's local computer.

**Example**: `"https://example.com/download?doc=exampledocument1.docx"`

## shareUrl

**type:** `string`

The absolute URL for sharing the document with other users.

**Example**: `"https://example.com/view?doc=exampledocument1.docx"`

## toolbarDocked

**type:** `"top" | "bottom"` | **default:** `"top"`

The position of the embedded viewer toolbar.

**Example**: `"bottom"`

![Embedded](/assets/images/editor/embedded.png)

## Example

```ts
const config = {
  // ...
  editorConfig: {
    // ...
    embedded: {
      autostart: "document",
      embedUrl: "https://example.com/embedded?doc=exampledocument1.docx",
      fullscreenUrl: "https://example.com/embedded?doc=exampledocument1.docx#fullscreen",
      saveUrl: "https://example.com/download?doc=exampledocument1.docx",
      shareUrl: "https://example.com/view?doc=exampledocument1.docx",
      toolbarDocked: "top",
    },
  },
};

const docEditor = new DocsAPI.DocEditor("placeholder", config);
```
