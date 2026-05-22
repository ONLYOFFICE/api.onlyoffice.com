# GetSlideIndex

Returns a position of the current slide in the presentation.

## Syntax

```javascript
expression.GetSlideIndex();
```

`expression` - A variable that represents a [ApiSlide](../ApiSlide.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

number

## Example

Get the position of the current slide in the presentation.

```javascript editor-pptx
// Retrieve the slide index using GetSlideIndex method.

// Display the slide index value on the slide.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const index = slide.GetSlideIndex();

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
shape.SetSize(300 * 36000, 130 * 36000);

const docContent = shape.GetDocContent();
const paragraph = docContent.GetElement(0);
paragraph.SetJc("left");
paragraph.AddText("Slide index = " + index);
slide.AddObject(shape);
```
