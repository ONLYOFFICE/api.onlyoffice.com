# GetTopMargin

Returns the top margin of the sheet.

## Syntax

```javascript
expression.GetTopMargin();
```

`expression` - A variable that represents a [ApiWorksheet](../ApiWorksheet.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

number

## Example

Get the top margin of the sheet in a spreadsheet.

```javascript editor-xlsx
// How to get margin of the sheet's top side in a spreadsheet.

// Get the size of the top margin of the sheet in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let topMargin = worksheet.GetTopMargin();
worksheet.GetRange("A1").SetValue("Top margin: " + topMargin + " mm");
```
