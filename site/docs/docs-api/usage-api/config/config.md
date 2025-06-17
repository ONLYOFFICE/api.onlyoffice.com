---
sidebar_position: -4
---

# Config

The config base section allows to change the platform type used, document display size (width and height) and type of the document opened.

## documentType

`Type: string`

Defines the document type to be opened:

- **word** - text document (*.doc, .docm, .docx, .dot, .dotm, .dotx, .epub, .fb2, .fodt, .htm, .html, .hwp, .hwpx, .mht, .mhtml, .odt, .ott, .pages, .rtf, .stw, .sxw, .txt, .wps, .wpt, .xml*);
- **cell** - spreadsheet (*.csv, .et, .ett, .fods, .numbers, .ods, .ots, .sxc, .xls, .xlsb, .xlsm, .xlsx, .xlt, .xltm, .xltx, .xml*);
- **slide** - presentation (*.dps, .dpt, .fodp, .key, .odp, .otp, .pot, .potm, .potx, .pps, .ppsm, .ppsx, .ppt, .pptm, .pptx, .sxi*);
- **pdf** - portable document format (*.djvu, .oxps, .pdf, .xps*);
- **diagram** - diagram document (*.vsdm, .vsdx, .vssm, .vssx, .vstm, .vstx*).

:::note
**text**, **spreadsheet** and **presentation** values are deprecated since version 6.1. Please use new values instead.
:::

**Example**: `"cell"`

## height

`Type: string`

Defines the document height (**100%** by default) in the browser window.

**Example**: `"100%"`

## token

`Type: string`

Defines the encrypted signature added to the **ONLYOFFICE Docs** config in the form of a [token](../../additional-api/signature/browser.md).

**Example**: `"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.e30.LwimMJA3puF3ioGeS-tfczR3370GXBZMIL-bdpu4hOU"`

## type

`Type: string`

Defines the platform type used to access the document. Can be:

- **desktop** - optimized to access the document from a desktop or laptop computer;
- **mobile** - optimized to access the document from a tablet or a smartphone;
- **embedded** - specifically formed to be easily embedded into a web page.

The default value is **desktop**.

**Example**: `"desktop"`

## width

`Type: string`

Defines the document width (**100%** by default) in the browser window.

**Example**: `"100%"`

## Example

``` ts
const config = {
  documentType: "word",
  type: "desktop",
  height: "550px",
  width: "100%",
  token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.e30.LwimMJA3puF3ioGeS-tfczR3370GXBZMIL-bdpu4hOU",
};

const docEditor = new DocsAPI.DocEditor("placeholder", config);
```
