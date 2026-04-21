# GetPrintGridlines

Returns the page PrintGridlines property which specifies whether the current sheet gridlines must be printed or not.

## Syntax

```javascript
expression.GetPrintGridlines();
```

`expression` - A variable that represents a [ApiWorksheet](../ApiWorksheet.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

Get the page PrintGridlines property which specifies whether the sheet gridlines must be printed or not in a spreadsheet.

```javascript editor-xlsx
// How to find out whether sheet gridlines should be printed or not in a spreadsheet.

// Get a boolean value representing whether to print gridlines or not in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.SetPrintGridlines(true);
worksheet.GetRange("A1").SetValue("Gridlines of cells will be printed on this page: " + worksheet.GetPrintGridlines());
```
