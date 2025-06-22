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

This example creates a copy of a shape and inserts it into the presentation.

```javascript editor-pptx
// How to create the same slide shape.

// Get a slide shape, add it to the slide and create its copy.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
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
