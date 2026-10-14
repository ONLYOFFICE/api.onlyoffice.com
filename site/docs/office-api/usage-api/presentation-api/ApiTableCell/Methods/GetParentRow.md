# GetParentRow

Returns a parent row of the current cell.

## Syntax

```javascript
expression.GetParentRow();
```

`expression` - A variable that represents an [ApiTableCell](../ApiTableCell.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiTableRow](../../ApiTableRow/ApiTableRow.md) \| null

## Example

Get the parent row of a table cell in a presentation.

```javascript editor-pptx
// Useful for getting the row that contains the cell.

// Get the parent row and set its height.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const table = Api.CreateTable(2, 3);
const cell = table.GetRow(0).GetCell(0);
const para = Api.CreateParagraph();
para.AddText("Cell 1");
cell.GetContent().Push(para);
const parentRow = cell.GetParentRow();
parentRow.SetHeight(50 * 36000);
slide.RemoveAllObjects();
slide.AddObject(table);
```
