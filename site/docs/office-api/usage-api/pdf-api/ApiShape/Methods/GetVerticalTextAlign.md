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

Read the vertical text alignment of a shape in a PDF.

```javascript editor-pdf
// Useful for verifying vertical text placement before adjusting shape layout in a PDF.

// Retrieve the current vertical alignment of a shape's inner content in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartOnlineStorage", 200 * 36000, 65 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);

shape.SetVerticalTextAlign("center");
const verticalAlign = shape.GetVerticalTextAlign();
const docContent = shape.GetContent();
const paragraph = Api.CreateParagraph();
paragraph.SetJc("left");
paragraph.AddText("The shape vertical text alignment is: " + verticalAlign);
docContent.Push(paragraph);
page.AddObject(shape);
```
