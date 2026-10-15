# GetPrintTitleColumns

Returns the columns that are repeated at the left of each printed page, or an empty string if none.

## Syntax

```javascript
expression.GetPrintTitleColumns();
```

`expression` - A variable that represents an [ApiPageSetup](../ApiPageSetup.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string

## Example

Read the columns repeated at the left of each printed page in a spreadsheet.

```javascript editor-xlsx
// How do I find out which columns repeat on every printed page in a spreadsheet?

// Check the print title columns before printing in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let pageSetup = worksheet.GetPageSetup();
pageSetup.SetPrintTitleColumns("$A:$A");
let cols = pageSetup.GetPrintTitleColumns();
worksheet.GetRange("D1").SetValue("Print title columns: " + cols);
```
