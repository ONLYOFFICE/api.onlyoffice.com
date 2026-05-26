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
| color | Required | [ApiColor](../../ApiColor/ApiColor.md) |  | The color used for the gradient stop. |
| pos | Required | [PositivePercentage](../../Enumeration/PositivePercentage.md) |  | The position of the gradient stop measured in 1000th of percent. |

## Returns

[ApiGradientStop](../../ApiGradientStop/ApiGradientStop.md)

## Example

Create a gradient stop used for different types of gradients in a PDF document.

```javascript editor-pdf
// Add a gradient stop for gradient in a PDF document.

// Create a stop for a gradient in a PDF document.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const gs1 = Api.CreateGradientStop(Api.RGB(255, 213, 191), 0);
const gs2 = Api.CreateGradientStop(Api.RGB(255, 111, 61), 100000);
const fill = Api.CreateRadialGradientFill([gs1, gs2]);
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const drawing = Api.CreateShape("flowChartMagneticTape", 150 * 36000, 65 * 36000, fill, stroke);
drawing.SetPosition(608400, 1267200);
page.AddObject(drawing);
```
