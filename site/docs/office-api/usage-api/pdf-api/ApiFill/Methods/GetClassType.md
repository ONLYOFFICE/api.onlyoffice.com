# GetClassType

Returns a type of the ApiFill class.

## Syntax

```javascript
expression.GetClassType();
```

`expression` - A variable that represents a [ApiFill](../ApiFill.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

"fill"

## Example

Retrieve the class type of a fill in a PDF document.

```javascript editor-pdf
// How to identify the class type of a fill in a PDF document?

// Obtain the class type identifier of a fill object in a PDF document.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const gs1 = Api.CreateGradientStop(Api.RGB(255, 213, 191), 0);
const gs2 = Api.CreateGradientStop(Api.RGB(255, 111, 61), 100000);
const fill = Api.CreateRadialGradientFill([gs1, gs2]);
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
shape.SetSize(300 * 36000, 130 * 36000);

const docContent = shape.GetContent();
const classType = fill.GetClassType();
const paragraph = docContent.GetElement(0);
paragraph.SetJc("left");
paragraph.AddText("Class Type = " + classType);
page.AddObject(shape);
```
