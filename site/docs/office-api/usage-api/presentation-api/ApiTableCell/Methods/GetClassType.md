# GetClassType

Returns the type of the ApiTableCell class.

## Syntax

```javascript
expression.GetClassType();
```

`expression` - A variable that represents a [ApiTableCell](../ApiTableCell.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

"tableCell"

## Example

Retrieve the class type of a table cell in a presentation.

```javascript editor-pptx
// How to identify the class type of a table cell?

// Obtain the class type identifier of a table cell object.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);

const table = Api.CreateTable(2, 4);
const row = table.GetRow(0);
const cell = row.GetCell(0);
const content = cell.GetContent();
const paragraph = Api.CreateParagraph();
const classType = cell.GetClassType();
paragraph.AddText("Class type: " + classType);
content.Push(paragraph);

slide.RemoveAllObjects();
slide.AddObject(table);
```
