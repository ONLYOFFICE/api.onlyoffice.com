# GetClassType

Returns a type of the ApiTableStylePr class.

## Syntax

```javascript
expression.GetClassType();
```

`expression` - A variable that represents an [ApiTableStylePr](../ApiTableStylePr.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

"tableStylePr"

## Example

Get the class type of the ApiTableStylePr object in a presentation.

```javascript editor-pptx
// Helps when checking the class type of a table style part.

// Get the table style part from the presentation and display its class type.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const table = Api.CreateTable(3, 3);
const style = presentation.GetStyle("Medium Style 2 - Accent 1");
const stylepr = style.GetConditionalTableStyle("wholeTable");
const paragraph = Api.CreateParagraph();
paragraph.AddText("Class type: " + stylepr.GetClassType());
table.GetCell(0, 0).GetContent().Push(paragraph);
slide.RemoveAllObjects();
slide.AddObject(table);
```
