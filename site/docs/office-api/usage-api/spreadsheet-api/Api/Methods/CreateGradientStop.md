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

This example creates a gradient stop used for different types of gradients.

```javascript editor-xlsx
// How to create a gradient background using gradient stop.

// Create a shape with a gradient background using gradient stop.

let worksheet = Api.GetActiveSheet();
let gs1 = Api.CreateGradientStop(Api.RGB(255, 213, 191), 0);
let gs2 = Api.CreateGradientStop(Api.CreateGradientStop(Api.RGB(255, 111, 61), 100000));
let fill = Api.CreateLinearGradientFill([gs1, gs2], 5400000);
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
worksheet.AddShape("flowChartOnlineStorage", 60 * 36000, 35 * 36000, fill, stroke, 0, 2 * 36000, 1, 3 * 36000);
```
