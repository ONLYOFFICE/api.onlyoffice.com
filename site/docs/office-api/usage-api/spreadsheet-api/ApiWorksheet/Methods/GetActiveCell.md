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

Read the currently selected cell and write a value into it in a spreadsheet.

```javascript editor-xlsx
// How do I find out which cell is active and put content into it in a spreadsheet?

// Target the focused cell and populate it with custom text.

let worksheet = Api.GetActiveSheet();
let activeCell = worksheet.GetActiveCell();
activeCell.SetValue("This sample text was placed in an active cell.");
```
