# HasTextContent

Checks whether the drawing has an associated text body.

Inherited from [ApiDrawing.HasTextContent](../../ApiDrawing/Methods/HasTextContent.md).

## Syntax

```javascript
expression.HasTextContent();
```

`expression` - A variable that represents an [ApiGroup](../ApiGroup.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

Check whether a shape has an associated text body before and after adding text in a document.

```javascript editor-docx
// Returns true if the shape already contains a text body, false otherwise.

// Add a shape, check HasTextContent, add text to the shape and check it again.

const doc = Api.GetDocument();
const paragraph = doc.GetElement(0);
const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const drawing = Api.CreateShape("rect", 3212465, 963295, fill, stroke);
paragraph.AddDrawing(drawing);
const hasTextContentBefore = drawing.HasTextContent();
drawing.GetContent().GetElement(0).AddText("Sample");
const resultParagraph = Api.CreateParagraph();
resultParagraph.AddText("Before adding text: HasTextContent() === " + hasTextContentBefore);
resultParagraph.AddLineBreak();
resultParagraph.AddText("After adding text: HasTextContent() === " + drawing.HasTextContent());
doc.Push(resultParagraph);
```
