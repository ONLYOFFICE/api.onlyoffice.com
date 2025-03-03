# GetAllDrawings

Returns an array with all the drawing objects from the slide.

## Syntax

```javascript
expression.GetAllDrawings();
```

`expression` - A variable that represents a [ApiSlide](../ApiSlide.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[Drawing[]](../../Enumeration/Drawing.md)

## Example

This example show how to get an array with all the drawing objects from the slide.

```javascript editor-pptx
var oPresentation = Api.GetPresentation();
var oSlide = oPresentation.GetSlideByIndex(0);
oSlide.RemoveAllObjects();
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oDrawing = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, oFill, oStroke);
oDrawing.SetPosition(608400, 1267200);
oDrawing.SetSize(300 * 36000, 130 * 36000);
oSlide.AddObject(oDrawing);
var aDrawings = oSlide.GetAllDrawings();
var oPlaceholder = Api.CreatePlaceholder("chart");
aDrawings[0].SetPlaceholder(oPlaceholder);
```
