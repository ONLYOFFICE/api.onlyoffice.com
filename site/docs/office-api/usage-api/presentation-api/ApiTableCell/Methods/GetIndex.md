# GetIndex

Returns the current cell index.

## Syntax

```javascript
expression.GetIndex();
```

`expression` - A variable that represents an [ApiTableCell](../ApiTableCell.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

Number

## Example

Get the column index of a table cell in a presentation.

```javascript editor-pptx
// Useful for getting the position index of the cell.

// Retrieve the cell index and display it in the cell.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const table = Api.CreateTable(3, 3);
const cell = table.GetRow(0).GetCell(1);
const content = cell.GetContent();
const paragraph = Api.CreateParagraph();
paragraph.AddText("Cell index: " + cell.GetIndex());
content.Push(paragraph);
slide.RemoveAllObjects();
slide.AddObject(table);
```
