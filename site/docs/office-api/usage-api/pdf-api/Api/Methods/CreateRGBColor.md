# CreateRGBColor

Creates an RGB color setting the appropriate values for the red, green and blue color components.

## Syntax

```javascript
expression.CreateRGBColor(r, g, b);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| r | Required | [byte](../../Enumeration/byte.md) |  | Red color component value. |
| g | Required | [byte](../../Enumeration/byte.md) |  | Green color component value. |
| b | Required | [byte](../../Enumeration/byte.md) |  | Blue color component value. |

## Returns

[ApiRGBColor](../../ApiRGBColor/ApiRGBColor.md)

## Example

This example shows how to create a RGB color for gradient stop.

```javascript editor-pdf
// How to create a RGB color for a gradient stop.

// Add an RGB color as a stop for a gradient.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const rgbColor = Api.RGB(255, 111, 61);
const gs1 = Api.CreateGradientStop(Api.CreatePresetColor("peachPuff"), 0);
const gs2 = Api.CreateGradientStop(rgbColor, 100000);
const fill = Api.CreateRadialGradientFill([gs1, gs2]);
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const drawing = Api.CreateShape("flowChartMagneticTape", 150 * 36000, 65 * 36000, fill, stroke);
drawing.SetPosition(608400, 1267200);
page.AddObject(drawing);

```
