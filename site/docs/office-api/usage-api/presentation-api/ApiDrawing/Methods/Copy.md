# Copy

Creates a copy of the specified drawing object.

## Syntax

```javascript
expression.Copy();
```

`expression` - A variable that represents a [ApiDrawing](../ApiDrawing.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiDrawing](../../ApiDrawing/ApiDrawing.md)

## Example

Duplicate a shape and place the copy on another slide in a presentation.

```javascript editor-pptx
// How do I make a copy of a shape in a presentation?

// Create an exact duplicate of a shape and add it to a new slide in a presentation.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
shape.SetSize(300 * 36000, 130 * 36000);
slide.AddObject(shape);

const copyShape = shape.Copy();
const newSlide = Api.CreateSlide();
presentation.AddSlide(newSlide);
newSlide.AddObject(copyShape);
```
