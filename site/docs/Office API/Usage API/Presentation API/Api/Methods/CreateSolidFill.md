# CreateSolidFill

Creates a solid fill to apply to the object using a selected solid color as the object background.

## Syntax

expression.CreateSolidFill(uniColor);

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| uniColor | Required | [ApiUniColor](../../ApiUniColor/ApiUniColor.md) |  | The color used for the element fill. |

## Returns

[ApiFill](../../ApiFill/ApiFill.md)

## Example

This example shows how to create a solid fill.

```javascript
var oPresentation = Api.GetPresentation();
var oSlide = oPresentation.GetSlideByIndex(0);
oSlide.RemoveAllObjects();
var oRGBColor = Api.CreateRGBColor(255, 111, 61);
var oFill = Api.CreateSolidFill(oRGBColor);
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oDrawing = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, oFill, oStroke);
oSlide.AddObject(oDrawing);
oDrawing.SetPosition(608400, 1267200);
```
