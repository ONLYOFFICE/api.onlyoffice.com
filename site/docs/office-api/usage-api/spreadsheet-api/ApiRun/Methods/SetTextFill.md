# SetTextFill

Sets the text fill to the current text run.

## Syntax

```javascript
expression.SetTextFill(oApiFill);
```

`expression` - A variable that represents a [ApiRun](../ApiRun.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oApiFill | Required | [ApiFill](../../ApiFill/ApiFill.md) |  | The color or pattern used to fill the text color. |

## Returns

[ApiTextPr](../../ApiTextPr/ApiTextPr.md)

## Example

This example sets the text fill to the current text run.

```javascript editor-xlsx
// How to color a text with solid fill.

// Set color a text using solid color fill.

var oWorksheet = Api.GetActiveSheet();
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oShape = oWorksheet.AddShape("flowChartOnlineStorage", 120 * 36000, 70 * 36000, oFill, oStroke, 0, 2 * 36000, 0, 3 * 36000);
var oDocContent = oShape.GetContent();
var oParagraph = oDocContent.GetElement(0);
var oRun = Api.CreateRun();
var oTextPr = oRun.GetTextPr();
oTextPr.SetFontSize(30);
oFill = Api.CreateSolidFill(Api.CreateRGBColor(128, 128, 128));
oRun.SetTextFill(oFill);
oParagraph.SetJc("left");
oRun.AddText("This is a text run with the gray text set using the text properties.");
oParagraph.AddElement(oRun);
```
