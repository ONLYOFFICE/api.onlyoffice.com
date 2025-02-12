# SetPlaceholder

Sets the specified placeholder to the current drawing object.

## Syntax

```javascript
expression.SetPlaceholder(oPlaceholder);
```

`expression` - A variable that represents a [ApiDrawing](../ApiDrawing.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oPlaceholder | Required | [ApiPlaceholder](../../ApiPlaceholder/ApiPlaceholder.md) |  | Placeholder object. |

## Returns

boolean

## Example

This example sets a placeholder for the shape.

```javascript
var oPresentation = Api.GetPresentation();
var oSlide = oPresentation.GetSlideByIndex(0);
oSlide.RemoveAllObjects();
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oShape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, oFill, oStroke);
oShape.SetPosition(608400, 1267200);
oShape.SetSize(300 * 36000, 130 * 36000);
var oPlaceholder = Api.CreatePlaceholder("picture");
oShape.SetPlaceholder(oPlaceholder);
oSlide.AddObject(oShape);
```
