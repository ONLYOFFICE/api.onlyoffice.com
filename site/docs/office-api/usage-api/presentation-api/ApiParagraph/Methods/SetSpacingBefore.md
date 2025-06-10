# SetSpacingBefore

Sets the spacing before the current paragraph. If the value of the isBeforeAuto parameter is true, then 
any value of the nBefore is ignored. If isBeforeAuto parameter is not specified, then 
it will be interpreted as false.

## Syntax

```javascript
expression.SetSpacingBefore(nBefore, isBeforeAuto);
```

`expression` - A variable that represents a [ApiParagraph](../ApiParagraph.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nBefore | Required | [twips](../../Enumeration/twips.md) |  | The value of the spacing before the current paragraph measured in twentieths of a point (1/1440 of an inch). |
| isBeforeAuto | Optional | boolean | false | The true value disables the spacing before the current paragraph. |

## Returns

This method doesn't return any data.

## Example

This example sets the spacing before the current paragraph.

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
oParagraph.AddText("This is an example of setting a space before a paragraph. ");
oParagraph.AddText("The second paragraph will have an offset of one inch from the top. ");
oParagraph.AddText("This is due to the fact that the second paragraph has this offset enabled.");
oParagraph = Api.CreateParagraph();
oParaPr = oParagraph.GetParaPr();
oParaPr.SetSpacingBefore(1440);
oParagraph.AddText("This is the second paragraph and it is one inch away from the first paragraph.");
oDocContent.Push(oParagraph);
oSlide.AddObject(oShape);
```
