# GetClassType

Returns a type of the ApiRun class.

## Syntax

```javascript
expression.GetClassType();
```

`expression` - A variable that represents a [ApiRun](../ApiRun.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

"run"

## Example

This example gets a class type and pastes it into the presentation.

```javascript editor-pptx
// How to get a class type of ApiRun.

// Retrieve class type of ApiRun object and insert it to the slide.

var oPresentation = Api.GetPresentation();
var oSlide = oPresentation.GetSlideByIndex(0);
oSlide.RemoveAllObjects();
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oShape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, oFill, oStroke);
oShape.SetPosition(608400, 1267200);
var oDocContent = oShape.GetDocContent();
var oParagraph = oDocContent.GetElement(0);
var oRun = Api.CreateRun();
var sClassType = oRun.GetClassType();
oRun.SetFontSize(30);
oRun.AddText("Class Type = " + sClassType);
oParagraph.AddElement(oRun);
oSlide.AddObject(oShape);
```
