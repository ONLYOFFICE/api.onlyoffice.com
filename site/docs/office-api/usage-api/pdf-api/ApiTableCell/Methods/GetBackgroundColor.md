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

Get the background color of a table cell in a PDF.

```javascript editor-pdf
// Read back the background color applied to a table cell in a PDF.

// Set a background color and read it back in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const table = Api.CreateTable(2, 3);
const cell = table.GetRow(0).GetCell(0);
cell.SetBackgroundColor(Api.RGB(255, 111, 61));
const color = cell.GetBackgroundColor();
const paragraph = Api.CreateParagraph();
paragraph.AddText('Background color: ' + (color ? color.GetHex() : 'none'));
cell.GetContent().Push(paragraph);

page.AddObject(table);
```
