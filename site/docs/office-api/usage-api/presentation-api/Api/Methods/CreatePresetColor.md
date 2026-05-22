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

Use a named color for gradient color stops in a presentation.

```javascript editor-pptx
// How do I apply a preset color in a presentation?

// Create a gradient with a predefined color stop in a presentation.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const gs1 = Api.CreateGradientStop(Api.CreatePresetColor("peachPuff"), 0);
const gs2 = Api.CreateGradientStop(Api.RGB(255, 111, 61), 100000);
const fill = Api.CreateRadialGradientFill([gs1, gs2]);
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const drawing = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, fill, stroke);
drawing.SetPosition(608400, 1267200);
slide.AddObject(drawing);
```
