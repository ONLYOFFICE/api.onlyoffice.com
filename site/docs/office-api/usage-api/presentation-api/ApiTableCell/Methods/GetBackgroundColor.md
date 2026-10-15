# GetBackgroundColor

Returns the background color of the current table cell.

## Syntax

```javascript
expression.GetBackgroundColor();
```

`expression` - A variable that represents an [ApiTableCell](../ApiTableCell.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiColor](../../ApiColor/ApiColor.md) \| null

## Example

Get the background color of a table cell in a presentation.

```javascript editor-pptx
// Needed when reading the background color of a cell.

// Set a background color and read it back.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const table = Api.CreateTable(2, 3);
const cell = table.GetRow(0).GetCell(0);
cell.SetBackgroundColor(Api.RGB(255, 111, 61));
const color = cell.GetBackgroundColor();
const paragraph = Api.CreateParagraph();
paragraph.AddText("Background color: " + (color ? color.GetHex() : "none"));
cell.GetContent().Push(paragraph);
slide.RemoveAllObjects();
slide.AddObject(table);
```
