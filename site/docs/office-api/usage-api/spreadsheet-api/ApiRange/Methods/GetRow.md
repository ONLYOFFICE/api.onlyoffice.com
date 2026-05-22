# GetRow

Returns a row number for the selected cell.

## Syntax

```javascript
expression.GetRow();
```

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

number

## Example

Retrieve the row number of a cell in a spreadsheet.

```javascript editor-xlsx
// How do I find out which row a specific cell belongs to in a spreadsheet?

// Identify the position of a cell within the sheet by reading its row index in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("A9").GetRow();
worksheet.GetRange("A2").SetValue(range.toString());
```
