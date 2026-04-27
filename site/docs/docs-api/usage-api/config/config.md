---
sidebar_position: -4
---

# Config

The config base section allows you to change the platform type used, document display size (width and height), type of the document opened, and the encrypted signature token.

## documentType

**type:** `string`

Defines the document type to be opened:

- **word** - text document (*.doc, .docm, .docx, .dot, .dotm, .dotx, .epub, .fb2, .fodt, .hml, .htm, .html, .hwp, .hwpx, .md, .mht, .mhtml, .odt, .ott, .pages, .rtf, .stw, .sxw, .txt, .wps, .wpt, .xml*);
- **cell** - spreadsheet (*.csv, .et, .ett, .fods, .numbers, .ods, .ots, .sxc, .xls, .xlsb, .xlsm, .xlsx, .xlt, .xltm, .xltx, .xml*);
- **slide** - presentation (*.dps, .dpt, .fodp, .key, .odg, .odp, .otp, .pot, .potm, .potx, .pps, .ppsm, .ppsx, .ppt, .pptm, .pptx, .sxi*);
- **pdf** - portable document format (*.djvu, .oxps, .pdf, .xps*);
- **diagram** - diagram document (*.vsdm, .vsdx, .vssm, .vssx, .vstm, .vstx*).

:::note
**text**, **spreadsheet** and **presentation** values are deprecated since version 6.1. Please use new values instead.
:::

**Example**: `"cell"`

## height

**type:** `string` | **default:** `"100%"`

Defines the document height in the browser window.

**Example**: `"550px"`

## token

**type:** `string`

Defines the encrypted signature added to the **ONLYOFFICE Docs** config in the form of a [token](../../additional-api/signature/browser.md).

**Example**: `"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.e30.LwimMJA3puF3ioGeS-tfczR3370GXBZMIL-bdpu4hOU"`

## type

**type:** `string` | **default:** `"desktop"`

Defines the platform type used to access the document. Can be:

- **desktop** - optimized to access the document from a desktop or laptop computer;
- **mobile** - optimized to access the document from a tablet or a smartphone;
- **embedded** - specifically formed to be easily embedded into a web page.

**Example**: `"mobile"`

## width

**type:** `string` | **default:** `"100%"`

Defines the document width in the browser window.

**Example**: `"800px"`

## Example

``` ts
const config = {
  documentType: "word",
  type: "mobile",
  height: "550px",
  width: "800px",
  token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.e30.LwimMJA3puF3ioGeS-tfczR3370GXBZMIL-bdpu4hOU",
};

const docEditor = new DocsAPI.DocEditor("placeholder", config);
```
