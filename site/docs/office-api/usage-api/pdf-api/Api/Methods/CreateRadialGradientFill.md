# CreateRadialGradientFill

Creates a radial gradient fill to apply to the object using the selected radial gradient as the object background.

## Syntax

```javascript
expression.CreateRadialGradientFill(gradientStops);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| gradientStops | Required | number[] |  | The array of gradient color stops measured in 1000th of percent. |

## Returns

[ApiFill](../../ApiFill/ApiFill.md)

## Example

Apply a radial gradient fill to a shape in a PDF.

```javascript editor-pdf
// How do I create a gradient that radiates from a center point in a PDF?

// Fill a shape with a gradient that transitions outward from the center in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const gs1 = Api.CreateGradientStop(Api.CreatePresetColor("peachPuff"), 0);
const gs2 = Api.CreateGradientStop(Api.RGB(255, 111, 61), 100000);
const fill = Api.CreateRadialGradientFill([gs1, gs2]);
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const drawing = Api.CreateShape("flowChartMagneticTape", 150 * 36000, 65 * 36000, fill, stroke);
drawing.SetPosition(608400, 1267200);
page.AddObject(drawing);
```
