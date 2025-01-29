# GetSpacingLineValue

Returns the paragraph line spacing value.

## Syntax

expression.GetSpacingLineValue();

`expression` - A variable that represents a [ApiParagraph](../ApiParagraph.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[twips](../../Enumeration/twips.md) | [line240](../../Enumeration/line240.md) | undefined

## Example

This example shows how to get the paragraph line spacing value.

```javascript
var oWorksheet = Api.GetActiveSheet();
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oShape = oWorksheet.AddShape("flowChartOnlineStorage", 120 * 36000, 70 * 36000, oFill, oStroke, 0, 2 * 36000, 0, 3 * 36000);
var oDocContent = oShape.GetContent();
var oParagraph = oDocContent.GetElement(0);
var oParaPr = oParagraph.GetParaPr();
oParaPr.SetSpacingLine(3 * 240, "auto");
oParagraph.AddText("Paragraph 1. Spacing: 3 times of a common paragraph line spacing.");
oParagraph.AddLineBreak();
oParagraph.AddText("These sentences are used to add lines for demonstrative purposes.");
var nSpacingLineValue = oParaPr.GetSpacingLineValue();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("Spacing line value : " + nSpacingLineValue);
oDocContent.Push(oParagraph);
```
