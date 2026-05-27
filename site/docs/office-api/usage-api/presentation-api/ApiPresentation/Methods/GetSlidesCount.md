# GetSlidesCount

Returns a number of slides.

## Syntax

```javascript
expression.GetSlidesCount();
```

`expression` - A variable that represents a [ApiPresentation](../ApiPresentation.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

number

## Example

Retrieve the total number of slides in a presentation.

```javascript editor-pptx
// How do I count all the slides in a presentation?

// Show the slide count displayed in a shape on the current slide.

const presentation = Api.GetPresentation();
const slide1 = presentation.GetSlideByIndex(0);
slide1.RemoveAllObjects();

const slide2 = Api.CreateSlide();
presentation.AddSlide(slide2);

const slidesCount = presentation.GetSlidesCount();

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
shape.SetSize(300 * 36000, 130 * 36000);

const docContent = shape.GetDocContent();
const paragraph = docContent.GetElement(0);
paragraph.SetJc("left");
paragraph.AddText("Number of slides = " + slidesCount);
slide1.AddObject(shape);
```
