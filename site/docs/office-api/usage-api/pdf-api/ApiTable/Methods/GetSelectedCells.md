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

Get the selected cells from a table in a PDF.

```javascript editor-pdf
// Find out which cells are currently selected in a table in a PDF.

// Select a cell and read back the list of selected cells in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const table = Api.CreateTable(3, 3);
table.GetCell(0, 0).Select();
const selectedCells = table.GetSelectedCells();
const paragraph = Api.CreateParagraph();
paragraph.AddText('Selected cells count: ' + selectedCells.length);
table.GetCell(0, 0).GetContent().Push(paragraph);

page.AddObject(table);
```
