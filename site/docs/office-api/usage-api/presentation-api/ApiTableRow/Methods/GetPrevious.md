# GetPrevious

Returns the previous row if exists.

## Syntax

```javascript
expression.GetPrevious();
```

`expression` - A variable that represents an [ApiTableRow](../ApiTableRow.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiTableRow](../../ApiTableRow/ApiTableRow.md) \| null

## Example

Get the previous row in a presentation.

```javascript editor-pptx
// Useful for getting the previous row from a table row.

// Display text in the second and first rows using GetPrevious.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const table = Api.CreateTable(2, 3);
const secondRow = table.GetRow(1);
const para = Api.CreateParagraph();
para.AddText("First row");
const para2 = Api.CreateParagraph();
para2.AddText("Second row");
secondRow.GetCell(0).GetContent().Push(para2);
secondRow.GetPrevious().GetCell(0).GetContent().Push(para);
slide.RemoveAllObjects();
slide.AddObject(table);
```
