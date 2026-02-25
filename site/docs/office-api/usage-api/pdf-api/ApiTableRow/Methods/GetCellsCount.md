# GetCellsCount

Returns a number of cells in the current row.

## Syntax

```javascript
expression.GetCellsCount();
```

`expression` - A variable that represents a [ApiTableRow](../ApiTableRow.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

number

## Example

How to return a number of cells from the row.

```javascript editor-pdf
// Create a table, count its cells and display the number in the page.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const table = Api.CreateTable(2, 4);
const row = table.GetRow(0);
const cellsCount = row.GetCellsCount();
const cell = row.GetCell(0);
const content = cell.GetContent();
const paragraph = Api.CreateParagraph();
paragraph.AddText("The number of cells in the row: " + cellsCount);
content.Push(paragraph);

page.AddObject(table);
```
