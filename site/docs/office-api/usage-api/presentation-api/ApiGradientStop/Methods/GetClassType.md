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

Get the type of a gradient stop object in a presentation.

```javascript editor-pptx
// How do I identify what type a gradient stop is in a presentation?

// Retrieve the class name for a gradient stop object in a presentation.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const gs1 = Api.CreateGradientStop(Api.RGB(255, 213, 191), 0);
const gs2 = Api.CreateGradientStop(Api.RGB(255, 111, 61), 100000);
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
