# GetPrintArea

Returns the range to be printed (the print area) as a string, or an empty string when the whole sheet is printed.

## Syntax

```javascript
expression.GetPrintArea();
```

`expression` - A variable that represents an [ApiPageSetup](../ApiPageSetup.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string

## Example

Read the print area (the range that gets printed) of a worksheet in a spreadsheet.

```javascript editor-xlsx
// How do I find out which range is set as the print area in a spreadsheet?

// Check the current print area (empty means the whole sheet) before printing in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let pageSetup = worksheet.GetPageSetup();
pageSetup.SetPrintArea("A1:D20");
let printArea = pageSetup.GetPrintArea();
worksheet.GetRange("F1").SetValue("Print area: " + printArea);
```
