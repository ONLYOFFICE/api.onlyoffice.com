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

Get a row number for the selected cell in a spreadsheet.

```javascript editor-xlsx
// How to get a cell column index.

// Get a range and display its column number in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("A9").GetRow();
worksheet.GetRange("A2").SetValue(range.toString());
```
