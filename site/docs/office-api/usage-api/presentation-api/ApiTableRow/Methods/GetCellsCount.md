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

This example gets a number of cells in the row.

```javascript editor-pptx
// How to return a number of cells from the row.

// Create a table, count its cells and display the number in the slide.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);

const table = Api.CreateTable(2, 4);
const row = table.GetRow(0);
const cellsCount = row.GetCellsCount();
const cell = row.GetCell(0);
const content = cell.GetContent();
const paragraph = Api.CreateParagraph();
paragraph.AddText("The number of cells in the row: " + cellsCount);
content.Push(paragraph);

slide.RemoveAllObjects();
slide.AddObject(table);

```
