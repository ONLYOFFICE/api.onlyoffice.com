# GetColumnWidth

Returns the column width value.

## Syntax

```javascript
expression.GetColumnWidth();
```

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

number

## Example

Read the width of a column and display the value on the sheet in a spreadsheet.

```javascript editor-xlsx
// How do I find out the current width of a column in a spreadsheet?

// Measure a column's width and record that measurement in a nearby cell.

let worksheet = Api.GetActiveSheet();
let width = worksheet.GetRange("A1").GetColumnWidth();
worksheet.GetRange("A1").SetValue("Width: ");
worksheet.GetRange("B1").SetValue(width);
```
