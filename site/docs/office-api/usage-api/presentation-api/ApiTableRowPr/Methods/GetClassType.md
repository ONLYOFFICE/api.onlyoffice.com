# GetClassType

Returns a type of the ApiTableRowPr class.

## Syntax

```javascript
expression.GetClassType();
```

`expression` - A variable that represents an [ApiTableRowPr](../ApiTableRowPr.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

"tableRowPr"

## Example

Get the class type of the table row properties object in a presentation.

```javascript editor-pptx
// Helps when checking the class type of ApiTableRowPr.

// Apply the row properties to the first row and display their class type in the first cell.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const table = Api.CreateTable(2, 3);
const row = table.GetRow(0);
const rowPr = Api.CreateTableRowPr();
rowPr.SetHeight("atLeast", 1500);
row.SetRowPr(rowPr);
const classType = rowPr.GetClassType();
const paragraph = Api.CreateParagraph();
paragraph.AddText("Class type: " + classType);
row.GetCell(0).GetContent().Push(paragraph);
slide.RemoveAllObjects();
slide.AddObject(table);
```
