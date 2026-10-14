# MergeCells

Merges the cells in the current row.

## Syntax

```javascript
expression.MergeCells();
```

`expression` - A variable that represents an [ApiTableRow](../ApiTableRow.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiTableCell](../../ApiTableCell/ApiTableCell.md) \| null

## Example

Merge all cells in a table row in a presentation.

```javascript editor-pptx
// Useful for merging cells of a row into one.

// Merge all cells of the first row.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const table = Api.CreateTable(3, 3);
const row = table.GetRow(0);
const para = Api.CreateParagraph();
para.AddText("Merged row");
row.MergeCells();
row.GetCell(0).GetContent().Push(para);
slide.RemoveAllObjects();
slide.AddObject(table);
```
