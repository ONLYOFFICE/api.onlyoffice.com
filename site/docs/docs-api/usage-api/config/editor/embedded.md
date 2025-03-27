# Embedded

The embedded section is for the **embedded** document type only (see the [config](../config.md#type) section to find out how to define the **embedded** document type). It allows to change the settings which define the behavior of the buttons in the embedded mode.

## embedUrl

`Type: string`

Defines the absolute URL to the document serving as a source file for the document embedded into the web page.

**Example**: `https://example.com/embedded?doc=exampledocument1.docx`

## fullscreenUrl

`Type: string`

Defines the absolute URL to the document which will open in full screen mode.

**Example**: `https://example.com/embedded?doc=exampledocument1.docx#fullscreen`

## saveUrl

`Type: string`

Defines the absolute URL that will allow the document to be saved onto the user personal computer.

**Example**: `https://example.com/download?doc=exampledocument1.docx`

## shareUrl

`Type: string`

Defines the absolute URL that will allow other users to share this document.

**Example**: `https://example.com/view?doc=exampledocument1.docx`

## toolbarDocked

`Type: string`

Defines the place for the embedded viewer toolbar, can be either **top** or **bottom**.

**Example**: `"top"`

![Embedded](/assets/images/editor/embedded.png)

## Example

``` ts
const config = {
  editorConfig: {
    embedded: {
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
