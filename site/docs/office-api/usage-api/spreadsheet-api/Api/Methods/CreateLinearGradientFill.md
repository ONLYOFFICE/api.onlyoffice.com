# CreateLinearGradientFill

Creates a linear gradient fill to apply to the object using the selected linear gradient as the object background.

## Syntax

```javascript
expression.CreateLinearGradientFill(gradientStops, angle);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| gradientStops | Required | number[] |  | The array of gradient color stops measured in 1000th of percent. |
| angle | Required | [PositiveFixedAngle](../../Enumeration/PositiveFixedAngle.md) |  | The angle measured in 60000th of a degree that will define the gradient direction. |

## Returns

[ApiFill](../../ApiFill/ApiFill.md)

## Example

Fill a shape with a smooth color transition that flows in a straight direction in a spreadsheet.

```javascript editor-xlsx
// How do I apply a background that blends from one color to another along a straight angle in a spreadsheet?

// Give a shape a gradient background by blending colors across a linear path in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let gs1 = Api.CreateGradientStop(Api.RGB(255, 213, 191), 0);
let gs2 = Api.CreateGradientStop(Api.RGB(255, 111, 61), 100000);
let fill = Api.CreateLinearGradientFill([gs1, gs2], 5400000);
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
worksheet.AddShape("flowChartOnlineStorage", 60 * 36000, 35 * 36000, fill, stroke, 0, 2 * 36000, 1, 3 * 36000);
```
