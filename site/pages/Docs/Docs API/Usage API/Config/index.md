Description

The config base section allows to change the platform type used, document display size (width and height) and type of the document opened.

Example

Document Type word

Type desktop

Height 550px

Width 100%

Config.js

![Copy](/content/img/copy-content.svg) When you copy, you get the HTML code for the whole example. HTML copied.

```
```

Parameters

| Name                                                                                                                   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Type   | Example                                                                                |
| ---------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ | -------------------------------------------------------------------------------------- |
| documentType                                                                                                           | Defines the document type to be opened:- **word** - text document (*.doc, .docm, .docx, .dot, .dotm, .dotx, .epub, .fb2, .fodt, .htm, .html, .mht, .mhtml, .odt, .ott, .rtf, .stw, .sxw, .txt, .wps, .wpt, .xml*),
- **cell** - spreadsheet (*.csv, .et, .ett, .fods, .ods, .ots, .sxc, .xls, .xlsb, .xlsm, .xlsx, .xlt, .xltm, .xltx, .xml*),
- **slide** - presentation (*.dps, .dpt, .fodp, .odp, .otp, .pot, .potm, .potx, .pps, .ppsm, .ppsx, .ppt, .pptm, .pptx, .sxi*),
- **pdf** - portable document format (*.djvu, .docxf, .oform, .oxps, .pdf, .xps*). | string | "cell"                                                                                 |
| **text**, **spreadsheet** and **presentation** values are deprecated since version 6.1. Please use new values instead. |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |        |                                                                                        |
| height                                                                                                                 | Defines the document height (**100%** by default) in the browser window.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | string | "100%"                                                                                 |
| token                                                                                                                  | Defines the encrypted signature added to the **ONLYOFFICE Docs** config in the form of a [token](/editors/signature/browser#config).                                                                                                                                                                                                                                                                                                                                                                                                                              | string | "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.e30.LwimMJA3puF3ioGeS-tfczR3370GXBZMIL-bdpu4hOU" |
| type                                                                                                                   | Defines the platform type used to access the document. Can be: *optimized to access the document from a desktop or laptop computer* - **desktop**, *optimized to access the document from a tablet or a smartphone* - **mobile**, *specifically formed to be easily embedded into a web page* - **embedded**. The default value is **"desktop"**.                                                                                                                                                                                                                 | string | "desktop"                                                                              |
| width                                                                                                                  | Defines the document width (**100%** by default) in the browser window.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | string | "100%"                                                                                 |