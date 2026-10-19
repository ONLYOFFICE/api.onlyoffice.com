# GetInternalId

Returns an internal id of the current table cell.

## Syntax

```javascript
expression.GetInternalId();
```

`expression` - A variable that represents an [ApiTableCell](../ApiTableCell.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string

## Example

Get the internal identifier of the table cell in a presentation.

```javascript editor-pptx
// Useful for getting a unique identifier of a cell.

// Retrieve the internal id and display it in the cell.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const table = Api.CreateTable(2, 3);
const cell = table.GetRow(0).GetCell(0);
const content = cell.GetContent();
const paragraph = Api.CreateParagraph();
paragraph.AddText("Internal id: " + cell.GetInternalId());
content.Push(paragraph);
slide.RemoveAllObjects();
slide.AddObject(table);
```
