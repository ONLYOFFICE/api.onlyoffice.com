# GetClassType

Returns a type of the ApiPresetColor class.

## Syntax

expression.GetClassType();

`expression` - A variable that represents a [ApiPresetColor](../ApiPresetColor.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

"presetColor"

## Example

This example gets a class type and pastes it into the presentation.

```javascript
var oPresentation = Api.GetPresentation();
var oSlide = oPresentation.GetSlideByIndex(0);
oSlide.RemoveAllObjects();
var oPresetColor = Api.CreatePresetColor("peachPuff");
var oGs1 = Api.CreateGradientStop(oPresetColor, 0);
var oGs2 = Api.CreateGradientStop(Api.CreateRGBColor(255, 111, 61), 100000);
var oFill = Api.CreateRadialGradientFill([oGs1, oGs2]);
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oShape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, oFill, oStroke);
oShape.SetPosition(608400, 1267200);
oShape.SetSize(300 * 36000, 130 * 36000);
var oDocContent = oShape.GetDocContent();
var sClassType = oPresetColor.GetClassType();
var oParagraph = oDocContent.GetElement(0);
oParagraph.SetJc("left");
oParagraph.AddText("Class Type = " + sClassType);
oSlide.AddObject(oShape);
```
