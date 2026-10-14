# HasTextContent

Checks whether the drawing has an associated text body.

Inherited from [ApiDrawing.HasTextContent](../../ApiDrawing/Methods/HasTextContent.md).

## Syntax

```javascript
expression.HasTextContent();
```

`expression` - A variable that represents an [ApiTable](../ApiTable.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

Check whether a shape has an associated text body before and after adding text.

```javascript editor-pptx
// Returns true if the shape already contains a text body, false otherwise.

// Create two shapes, use one to display results, and verify HasTextContent changes after GetTextRange sets text.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const shape = Api.CreateShape("rect", 1000000, 500000);
const shapeForDesc = Api.CreateShape("rect", 8000000, 3000000);
slide.RemoveAllObjects();
slide.AddObject(shape);
slide.AddObject(shapeForDesc);
const paragraph = shapeForDesc.GetContent().GetElement(0);
paragraph.AddText('Before add text shape.HasTextContent() === ' + shape.HasTextContent());
shape.GetTextRange().SetText("Sample");
paragraph.AddText('\nAfter add text shape.HasTextContent() === ' + shape.HasTextContent());
```
