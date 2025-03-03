# CreateTextPr

Creates the empty text properties.

## Syntax

```javascript
expression.CreateTextPr();
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiTextPr](../../ApiTextPr/ApiTextPr.md)

## Example

This example creates the empty text properties.

```javascript editor-xlsx
// How to set custom properties for an empty text.

// Change a new text properties like font size, font style, etc.

var oWorksheet = Api.GetActiveSheet();
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oShape = oWorksheet.AddShape("flowChartOnlineStorage", 80 * 36000, 50 * 36000, oFill, oStroke, 0, 2 * 36000, 0, 3 * 36000);
var oDocContent = oShape.GetContent();
oDocContent.RemoveAllElements();
var oTextPr = Api.CreateTextPr();
oTextPr.SetFontSize(30);
oTextPr.SetBold(true);
var oParagraph = Api.CreateParagraph();
oParagraph.SetJc("left");
oParagraph.AddText("This is a sample text with the font size set to 30 and the font weight set to bold.");
oParagraph.SetTextPr(oTextPr);
oDocContent.Push(oParagraph);
```
