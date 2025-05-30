# SetUnderline

Specifies that the contents of the run are displayed along with a line appearing directly below the character
(less than all the spacing above and below the characters on the line).

## Syntax

```javascript
expression.SetUnderline(isUnderline);
```

`expression` - A variable that represents a [ApiTextPr](../ApiTextPr.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isUnderline | Required | boolean |  | Specifies that the contents of the current run are displayed underlined. |

## Returns

[ApiTextPr](../../ApiTextPr/ApiTextPr.md)

## Example

This example specifies that the contents of the run are displayed along with a line appearing directly below the character (less than all the spacing above and below the characters on the line).

```javascript editor-pptx
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
var oTextPr = oRun.GetTextPr();
oTextPr.SetFontSize(50);
oTextPr.SetUnderline(true);
oParagraph.SetJc("left");
oRun.AddText("This is an underlined text inside the shape.");
oParagraph.AddElement(oRun);
oSlide.AddObject(oShape);
```
