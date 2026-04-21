# GetActiveCell

Returns an object that represents an active cell.

## Syntax

```javascript
expression.GetActiveCell();
```

`expression` - A variable that represents a [ApiWorksheet](../ApiWorksheet.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiRange](../../ApiRange/ApiRange.md)

## Example

Get an object that represents an active cell in a spreadsheet.

```javascript editor-xlsx
// How to get selected active cell.

// Get an active cell and insert data to it.

let worksheet = Api.GetActiveSheet();
let activeCell = worksheet.GetActiveCell();
activeCell.SetValue("This sample text was placed in an active cell.");
```
