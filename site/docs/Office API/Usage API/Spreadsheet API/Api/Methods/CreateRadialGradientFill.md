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
| gradientStops | Required | Array |  | The array of gradient color stops measured in 1000th of percent. |

## Returns

[ApiFill](../../ApiFill/ApiFill.md)

## Example

This example creates a radial gradient fill to apply to the object using the selected radial gradient as the object background.

```javascript
var oWorksheet = Api.GetActiveSheet();
var oGs1 = Api.CreateGradientStop(Api.CreateRGBColor(255, 213, 191), 0);
var oGs2 = Api.CreateGradientStop(Api.CreateRGBColor(255, 111, 61), 100000);
var oFill = Api.CreateRadialGradientFill([oGs1, oGs2]);
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
oWorksheet.AddShape("flowChartOnlineStorage", 60 * 36000, 35 * 36000, oFill, oStroke, 0, 2 * 36000, 1, 3 * 36000);
```
