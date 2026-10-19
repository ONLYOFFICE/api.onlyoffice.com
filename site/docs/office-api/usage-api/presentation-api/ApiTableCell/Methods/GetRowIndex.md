# GetRowIndex

Returns an index of the parent row.

## Syntax

```javascript
expression.GetRowIndex();
```

`expression` - A variable that represents an [ApiTableCell](../ApiTableCell.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

number \| null

## Example

Get the row index of a table cell in a presentation.

```javascript editor-pptx
// Useful for getting the row index of the cell.

// Retrieve the row index and display it in the cell.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const table = Api.CreateTable(2, 3);
const cell = table.GetRow(1).GetCell(0);
const content = cell.GetContent();
const paragraph = Api.CreateParagraph();
paragraph.AddText("Row index: " + cell.GetRowIndex());
content.Push(paragraph);
slide.RemoveAllObjects();
slide.AddObject(table);
```
