# SetJc

Sets the paragraph contents justification.

## Syntax

```javascript
expression.SetJc(sJc);
```

`expression` - A variable that represents a [ApiParagraph](../ApiParagraph.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sJc | Required | "left" \| "right" \| "both" \| "center" |  | The justification type that\nwill be applied to the paragraph contents. |

## Returns

This method doesn't return any data.

## Example

This example sets the paragraph contents justification.

```javascript editor-pptx
var oPresentation = Api.GetPresentation();
var oSlide = oPresentation.GetSlideByIndex(0);
oSlide.RemoveAllObjects();
var oGs1 = Api.CreateGradientStop(Api.CreateRGBColor(255, 213, 191), 0);
var oGs2 = Api.CreateGradientStop(Api.CreateRGBColor(255, 111, 61), 100000);
var oFill = Api.CreateRadialGradientFill([oGs1, oGs2]);
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oShape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, oFill, oStroke);
oShape.SetPosition(608400, 1267200);
var oDocContent = oShape.GetDocContent();
var oParagraph = oDocContent.GetElement(0);
var oParaPr = oParagraph.GetParaPr();
oParaPr.SetJc("center");
oParagraph.AddText("This is a paragraph with the text in it aligned by the center. ");
oParagraph.AddText("The justification is specified in the paragraph style. ");
oParagraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
oParagraph.AddText("These sentences are used to add lines for demonstrative purposes.");
oSlide.AddObject(oShape);
```
