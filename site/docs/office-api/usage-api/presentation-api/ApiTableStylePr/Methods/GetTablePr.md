# GetTablePr

Returns a set of the table properties which will be applied to all the regions within a table which match the conditional formatting type.

## Syntax

```javascript
expression.GetTablePr();
```

`expression` - A variable that represents an [ApiTableStylePr](../ApiTableStylePr.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiTablePr](../../ApiTablePr/ApiTablePr.md)

## Example

Get the table properties from the table style part in a presentation.

```javascript editor-pptx
// Useful for getting table properties from a conditional table style.

// Get the wholeTable style part and set a border using its table properties.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const table = Api.CreateTable(3, 3);
const style = presentation.GetStyle("Medium Style 2 - Accent 1");
const stylepr = style.GetConditionalTableStyle("wholeTable");
const tablePr = stylepr.GetTablePr();
const paragraph = Api.CreateParagraph();
paragraph.AddText("GetTablePr class type: " + tablePr.GetClassType());
table.GetCell(0, 0).GetContent().Push(paragraph);
slide.RemoveAllObjects();
slide.AddObject(table);
```
