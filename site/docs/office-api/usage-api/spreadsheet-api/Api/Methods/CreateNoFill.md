# CreateNoFill

Creates no fill and removes the fill from the element.

## Syntax

```javascript
expression.CreateNoFill();
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiFill](../../ApiFill/ApiFill.md)

## Example

This example creates no fill and removes the fill from the element.

```javascript editor-xlsx
// How to remove fill from the element.

// Set no fill color for the element.

var oWorksheet = Api.GetActiveSheet();
var oGs1 = Api.CreateGradientStop(Api.CreateRGBColor(255, 213, 191), 0);
var oGs2 = Api.CreateGradientStop(Api.CreateRGBColor(255, 111, 61), 100000);
var oFill = Api.CreateLinearGradientFill([oGs1, oGs2], 5400000);
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
oWorksheet.AddShape("flowChartOnlineStorage", 60 * 36000, 35 * 36000, oFill, oStroke, 0, 2 * 36000, 1, 3 * 36000);
```
