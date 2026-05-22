# GetCurrentSlide

Returns the current slide.

## Syntax

```javascript
expression.GetCurrentSlide();
```

`expression` - A variable that represents a [ApiPresentation](../ApiPresentation.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiSlide](../../ApiSlide/ApiSlide.md)

## Example

Obtain the slide object currently being edited.

```javascript editor-pptx
// Access the active slide as an ApiSlide object.

// Add content to the current slide.

const presentation = Api.GetPresentation();
const slide = presentation.GetCurrentSlide();
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
slide.AddObject(shape);
```
