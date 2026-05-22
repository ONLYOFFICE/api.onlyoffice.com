# CreatePresetColor

Creates a color selecting it from one of the available color presets.

## Syntax

```javascript
expression.CreatePresetColor(presetColor);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| presetColor | Required | [PresetColor](../../Enumeration/PresetColor.md) |  | A preset selected from the list of the available color preset names. |

## Returns

[ApiPresetColor](../../ApiPresetColor/ApiPresetColor.md)

## Example

Use a preset color in a gradient fill in a PDF.

```javascript editor-pdf
// How do I select a named color for a gradient in a PDF?

// Create a gradient stop with a built-in preset color in a PDF.

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
