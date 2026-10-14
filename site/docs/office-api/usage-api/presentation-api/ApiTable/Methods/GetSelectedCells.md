# GetSelectedCells

Returns the selected cells of the current table.

## Syntax

```javascript
expression.GetSelectedCells();
```

`expression` - A variable that represents an [ApiTable](../ApiTable.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiTableCell](../../ApiTableCell/ApiTableCell.md)[]

## Example

Get the selected cells from the table in a presentation.

```javascript editor-pptx
// Useful for retrieving currently selected cells in a table.

// Create a table and get the list of selected cells (returns empty when no selection).

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const table = Api.CreateTable(3, 3);
table.GetCell(0, 0).Select();
presentation.MoveCursorRight(3, true, false);
const selectedCells = table.GetSelectedCells();
const paragraph = Api.CreateParagraph();
paragraph.AddText("Selected cells count: " + selectedCells.length);
table.GetCell(0, 0).GetContent().Push(paragraph);
slide.RemoveAllObjects();
slide.AddObject(table);
```
