# GetNext

Returns the next cell if exists.

## Syntax

```javascript
expression.GetNext();
```

`expression` - A variable that represents an [ApiTableCell](../ApiTableCell.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiTableCell](../../ApiTableCell/ApiTableCell.md) \| null

## Example

Get the next cell in a row in a presentation.

```javascript editor-pptx
// Useful for getting the cell following the current one.

// Add text to the first cell and bold the next one.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const table = Api.CreateTable(3, 3);
const cell = table.GetRow(0).GetCell(0);
const para = Api.CreateParagraph();
para.AddText("Cell 1");
cell.GetContent().Push(para);
const nextCell = cell.GetNext();
const para2 = Api.CreateParagraph();
const run = Api.CreateRun();
run.AddText("Cell 2");
para2.AddElement(run);
nextCell.GetContent().Push(para2);
slide.RemoveAllObjects();
slide.AddObject(table);
```
