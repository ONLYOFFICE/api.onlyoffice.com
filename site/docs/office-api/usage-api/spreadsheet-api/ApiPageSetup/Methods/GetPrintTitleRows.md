# GetPrintTitleRows

Returns the rows that are repeated at the top of each printed page, or an empty string if none.

## Syntax

```javascript
expression.GetPrintTitleRows();
```

`expression` - A variable that represents an [ApiPageSetup](../ApiPageSetup.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string

## Example

Read the rows repeated at the top of each printed page in a spreadsheet.

```javascript editor-xlsx
// How do I find out which rows repeat on every printed page in a spreadsheet?

// Check the print title rows before printing in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let pageSetup = worksheet.GetPageSetup();
pageSetup.SetPrintTitleRows("$1:$1");
let rows = pageSetup.GetPrintTitleRows();
worksheet.GetRange("D1").SetValue("Print title rows: " + rows);
```
