# GetSpacingBefore

Returns the spacing before value of the current paragraph.

## Syntax

expression.GetSpacingBefore();

`expression` - A variable that represents a [ApiParaPr](../ApiParaPr.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[twips](../../Enumeration/twips.md)

## Example

This example shows how to get the spacing before value of the current paragraph.

```javascript
var oPresentation = Api.GetPresentation();
var oSlide = oPresentation.GetSlideByIndex(0);
oSlide.RemoveAllObjects();
var oGs1 = Api.CreateGradientStop(Api.CreateRGBColor(255, 213, 191), 0);
var oGs2 = Api.CreateGradientStop(Api.CreateRGBColor(255, 111, 61), 100000);
var oFill = Api.CreateRadialGradientFill([oGs1, oGs2]);
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oShape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, oFill, oStroke);
oShape.SetPosition(608400, 1267200);
oSlide.AddObject(oShape);
var oDocContent = oShape.GetDocContent();
var oParagraph = oDocContent.GetElement(0);
oParagraph.AddText("This is an example of setting a space before a paragraph. ");
oParagraph.AddText("The second paragraph will have an offset of one inch from the top. ");
oParagraph.AddText("This is due to the fact that the second paragraph has this offset enabled.");
var oParagraph2 = Api.CreateParagraph();
oParagraph2.AddText("This is the second paragraph and it is one inch away from the first paragraph.");
var oParaPr = oParagraph2.GetParaPr();
oParaPr.SetSpacingBefore(1440);
oDocContent.Push(oParagraph2);
var nSpacingBefore = oParaPr.GetSpacingBefore();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("Spacing before: " + nSpacingBefore);
oDocContent.Push(oParagraph);
```
