# CreateGradientStop

Creates a gradient stop used for different types of gradients.

## Syntax

```javascript
expression.CreateGradientStop(color, pos);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| color | Required | ApiColor |  | The color used for the gradient stop. |
| pos | Required | [PositivePercentage](../../Enumeration/PositivePercentage.md) |  | The position of the gradient stop measured in 1000th of percent. |

## Returns

[ApiGradientStop](../../ApiGradientStop/ApiGradientStop.md)

## Example

This example shows how to create a gradient stop used for different types of gradients.

```javascript editor-pptx
// How to add a gradient stop for gradient.

// Create a stop for a gradient.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const gs1 = Api.CreateGradientStop(Api.RGB(255, 213, 191), 0);
const gs2 = Api.CreateGradientStop(Api.RGB(255, 111, 61), 100000);
const fill = Api.CreateRadialGradientFill([gs1, gs2]);
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const drawing = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, fill, stroke);
drawing.SetPosition(608400, 1267200);
slide.AddObject(drawing);

```
