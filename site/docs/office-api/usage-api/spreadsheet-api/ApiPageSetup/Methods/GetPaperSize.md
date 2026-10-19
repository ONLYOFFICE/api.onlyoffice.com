# GetPaperSize

Returns the paper size used when the worksheet is printed.

## Syntax

```javascript
expression.GetPaperSize();
```

`expression` - A variable that represents an [ApiPageSetup](../ApiPageSetup.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[PaperSize](../../Enumeration/PaperSize.md)

## Example

Read the paper size used when printing a worksheet in a spreadsheet.

```javascript editor-xlsx
// How do I find out the print paper size of a worksheet in a spreadsheet?

// Check the current paper format before printing a worksheet in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let pageSetup = worksheet.GetPageSetup();
pageSetup.SetPaperSize("xlPaperA4");
let paperSize = pageSetup.GetPaperSize();
worksheet.GetRange("A1").SetValue("Paper size: " + paperSize);
```
