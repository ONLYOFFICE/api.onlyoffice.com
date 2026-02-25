# GetCurSlideIndex

Returns the index for the current slide.

## Syntax

```javascript
expression.GetCurSlideIndex();
```

`expression` - A variable that represents a [ApiPresentation](../ApiPresentation.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

number

## Example

This example shows how to get the index for the current slide.

```javascript editor-pptx playground
// How to find out a position index of a current slide.

// Get current working slide index.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);

const docContent = shape.GetDocContent();
const paragraph = docContent.GetElement(0);
const currentSlideIndex = presentation.GetCurSlideIndex();
paragraph.AddText("Current Slide Index = " + currentSlideIndex);
slide.AddObject(shape);

```
