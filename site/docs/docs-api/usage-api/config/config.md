---
sidebar_position: -4
---

# Config

The config base section defines the top-level parameters for initializing the document editor.

## documentType

**type:** `"word" | "cell" | "slide" | "pdf" | "diagram"`

The document type to be opened:

- `word` - document (*.doc, .docm, .docx, .dot, .dotm, .dotx, .epub, .fb2, .fodt, .hml, .htm, .html, .hwp, .hwpx, .md, .mht, .mhtml, .odt, .ott, .pages, .rtf, .stw, .sxw, .txt, .wps, .wpt, .xml*);
- `cell` - spreadsheet (*.csv, .et, .ett, .fods, .numbers, .ods, .ots, .sxc, .xls, .xlsb, .xlsm, .xlsx, .xlt, .xltm, .xltx, .xml*);
- `slide` - presentation (*.dps, .dpt, .fodp, .key, .odg, .odp, .otp, .pot, .potm, .potx, .pps, .ppsm, .ppsx, .ppt, .pptm, .pptx, .sxi*);
- `pdf` - portable document format (*.djvu, .oxps, .pdf, .xps*);
- `diagram` - diagram document (*.vsdm, .vsdx, .vssm, .vssx, .vstm, .vstx*).

:::info
If omitted, the document type is automatically inferred from the [`document.fileType`](document/document.md#filetype) value. If both `documentType` and `document.fileType` are omitted, an error will occur.
:::

:::danger[Deprecated]
`text`, `spreadsheet`, and `presentation` values are deprecated since version 6.1. Please use `word`, `cell`, `slide`, `pdf`, or `diagram` instead.
:::

**Example**: `"cell"`

## height

**type:** `string` | **default:** `"100%"`

The document height in the browser window. Can be set to any CSS-compatible size value, e.g., `100%`, `550px`, `calc(100vh - 48px)`, and others.

**Example**: `"550px"`

## token

**type:** `string`

The encrypted signature added to the **ONLYOFFICE Docs** config in the form of a [token](../../additional-api/signature/browser.md).

**Example**: `"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.e30.LwimMJA3puF3ioGeS-tfczR3370GXBZMIL-bdpu4hOU"`

## type

**type:** `"desktop" | "mobile" | "embedded"` | **default:** `"desktop"`

The platform type used to access the document:

- `desktop` - optimized to access the document from a desktop or laptop computer;
- `mobile` - optimized to access the document from a tablet or a smartphone;
- `embedded` - specifically formed to be easily embedded into a web page.

**Example**: `"mobile"`

## width

**type:** `string` | **default:** `"100%"`

The document width in the browser window. Can be set to any CSS-compatible size value, e.g., `100%`, `800px`, `calc(100% - 240px)`, and others.

**Example**: `"800px"`

## document

**type:** `object`

The [document](document/document.md) section defines the document parameters.

## editorConfig

**type:** `object`

The [editorConfig](editor/editor.md) section defines the editor interface parameters.

## events

**type:** `object`

The [events](events.md) section defines the callback functions for editor events.

## Example

``` ts
const config = {
  documentType: "word",
  type: "mobile",
  height: "550px",
  width: "800px",
  token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.e30.LwimMJA3puF3ioGeS-tfczR3370GXBZMIL-bdpu4hOU",
  document: {
    // ...
  },
  editorConfig: {
    // ...
  },
  events: {
    // ...
  },
};

const docEditor = new DocsAPI.DocEditor("placeholder", config);
```
