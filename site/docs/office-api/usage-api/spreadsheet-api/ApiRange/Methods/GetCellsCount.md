# GetCellsCount

Returns a number of cells in the current range.

## Syntax

```javascript
expression.GetCellsCount();
```

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

number

## Example

This example shows how to get a count of cells in the specified range.

```javascript editor-xlsx
// How to get a count of cells in the range.

// Get a count of cells in the range and display it in another cell.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("A1:D10");
range.SetValue("I was selected");
worksheet.GetRange("A11").SetValue("Cells count in the selected range should be 40: " + range.GetCellsCount());

```
