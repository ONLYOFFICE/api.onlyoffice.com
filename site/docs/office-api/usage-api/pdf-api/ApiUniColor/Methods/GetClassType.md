# GetClassType

Returns a type of the ApiUniColor class.

## Syntax

```javascript
expression.GetClassType();
```

`expression` - A variable that represents a [ApiUniColor](../ApiUniColor.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

"uniColor"

## Example

Find out what kind of color object you're working with in a PDF.

```javascript editor-pdf
// How do I identify the type of color being used in a PDF?

// Determine what color system defines a color in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const presetColor = Api.CreatePresetColor("lightYellow");
const gs1 = Api.CreateGradientStop(presetColor, 0);
const gs2 = Api.CreateGradientStop(Api.RGB(255, 111, 61), 100000);
const fill = Api.CreateRadialGradientFill([gs1, gs2]);
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
shape.SetSize(300 * 36000, 130 * 36000);

const docContent = shape.GetContent();
const classType = presetColor.GetClassType();
const paragraph = docContent.GetElement(0);
paragraph.SetJc("left");
paragraph.AddText("Class Type = " + classType);
page.AddObject(shape);
```
