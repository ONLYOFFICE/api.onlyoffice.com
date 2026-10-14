# GetPrintGridlines

Returns whether cell gridlines are printed with the worksheet.

## Syntax

```javascript
expression.GetPrintGridlines();
```

`expression` - A variable that represents an [ApiPageSetup](../ApiPageSetup.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

Check whether cell gridlines are printed with the worksheet in a spreadsheet.

```javascript editor-xlsx
// How do I find out if gridlines will appear on the printout in a spreadsheet?

// Read the print-gridlines setting before printing a worksheet in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let pageSetup = worksheet.GetPageSetup();
pageSetup.SetPrintGridlines(true);
let value = pageSetup.GetPrintGridlines();
worksheet.GetRange("A1").SetValue("Print gridlines: " + value);
```
