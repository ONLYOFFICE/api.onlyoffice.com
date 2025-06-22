# GetClassType

Returns a type of the ApiGradientStop class.

## Syntax

```javascript
expression.GetClassType();
```

`expression` - A variable that represents a [ApiGradientStop](../ApiGradientStop.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

"gradientStop"

## Example

This example gets a class type and pastes it into the presentation.

```javascript editor-pptx
// How to get a class type of ApiGradientStop.

// Retrieve class type of ApiGradientStop object and insert it to the slide.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const gs1 = Api.CreateGradientStop(Api.CreateRGBColor(255, 213, 191), 0);
const gs2 = Api.CreateGradientStop(Api.CreateRGBColor(255, 111, 61), 100000);
const fill = Api.CreateRadialGradientFill([gs1, gs2]);
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
shape.SetSize(300 * 36000, 130 * 36000);

const docContent = shape.GetDocContent();
const classType = gs1.GetClassType();
const paragraph = docContent.GetElement(0);
paragraph.SetJc("left");
paragraph.AddText("Class Type = " + classType);
slide.AddObject(shape);

```
