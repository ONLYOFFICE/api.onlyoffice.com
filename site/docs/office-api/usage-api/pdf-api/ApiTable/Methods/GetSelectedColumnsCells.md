# GetSelectedColumnsCells

Returns all cells from the columns that contain the currently selected cells. This method identifies which columns contain selected cells and then returns all cells in those columns, not just the selected cells themselves.

## Syntax

```javascript
expression.GetSelectedColumnsCells();
```

`expression` - A variable that represents an [ApiTable](../ApiTable.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiTableCell](../../ApiTableCell/ApiTableCell.md)[]

## Example

Get the cells from the selected columns of a table in a PDF.

```javascript editor-pdf
// Retrieve all cells belonging to the currently selected columns in a table in a PDF.

// Select a cell and read back the cells of its column in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const table = Api.CreateTable(3, 4);
table.GetCell(0, 0).Select();
const selectedCells = table.GetSelectedColumnsCells();
const paragraph = Api.CreateParagraph();
paragraph.AddText('Selected column cells count: ' + selectedCells.length);
table.GetCell(0, 0).GetContent().Push(paragraph);

page.AddObject(table);
```
