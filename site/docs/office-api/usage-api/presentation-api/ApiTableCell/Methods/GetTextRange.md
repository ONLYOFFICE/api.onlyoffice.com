# GetTextRange

Returns an ApiTextRange covering the full text content of the table cell.

## Syntax

```javascript
expression.GetTextRange();
```

`expression` - A variable that represents an [ApiTableCell](../ApiTableCell.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiTextRange](../../ApiTextRange/ApiTextRange.md) \| null

## Example

Get the full text range of a table cell to read or modify its content.

```javascript editor-pptx
// Returns an ApiTextRange spanning all text in the cell, or null if the cell has no content.

// Create a table, set text in a cell, then retrieve and bold it via GetTextRange.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();
const table = Api.CreateTable(2, 2);
slide.AddObject(table);
const cell = table.GetCell(0, 0);
cell.SetText("Hello");
const range = cell.GetTextRange();
range.SetBold(true);
```
