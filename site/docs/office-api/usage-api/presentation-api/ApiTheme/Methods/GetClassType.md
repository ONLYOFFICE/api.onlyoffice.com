# GetClassType

Returns the type of the ApiTheme class.

## Syntax

```javascript
expression.GetClassType();
```

`expression` - A variable that represents a [ApiTheme](../ApiTheme.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

"theme"

## Example

This example gets a class type and pastes it into the presentation.

```javascript editor-pptx
var oPresentation = Api.GetPresentation();
var oSlide = oPresentation.GetSlideByIndex(0);
var oMaster = oPresentation.GetMaster(0);
var oTheme = oMaster.GetTheme();
var sType = oTheme.GetClassType();
oSlide.RemoveAllObjects();
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oShape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, oFill, oStroke);
oShape.SetPosition(608400, 1267200);
oShape.SetSize(300 * 36000, 130 * 36000);
var oDocContent = oShape.GetDocContent();
var oParagraph = oDocContent.GetElement(0);
oParagraph.SetJc("left");
oParagraph.AddText("Class type = " + sType);
oSlide.AddObject(oShape);
```
