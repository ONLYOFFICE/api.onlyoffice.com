# GetVerticalTextAlign

Gets the vertical alignment from the shape content where a paragraph or text runs can be inserted.

## Syntax

```javascript
expression.GetVerticalTextAlign();
```

`expression` - A variable that represents an [ApiShape](../ApiShape.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[VerticalTextAlign](../../Enumeration/VerticalTextAlign.md)

## Example

Read the vertical text alignment of a shape in a document.

```javascript editor-docx
// Useful for verifying vertical text placement before adjusting shape layout in a document.

// Retrieve the current vertical alignment of a shape's inner content in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing = Api.CreateShape("rect", 3212465, 963295, fill, stroke);
paragraph.AddDrawing(drawing);
drawing.SetVerticalTextAlign("center");
let verticalAlign = drawing.GetVerticalTextAlign();
let docContent = drawing.GetContent();
paragraph = Api.CreateParagraph();
paragraph.AddText("The shape vertical text alignment is: " + verticalAlign);
docContent.AddElement(0, paragraph);
```
