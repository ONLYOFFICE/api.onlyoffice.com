# GetClassType

Returns a type of the ApiComment class.

## Syntax

```javascript
expression.GetClassType();
```

`expression` - A variable that represents a [ApiComment](../ApiComment.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

"comment"

## Example

This example gets a type of ApiComment class and inserts it into the presentation.

```javascript editor-pptx
// How to get a class type of ApiComment.

// Retrieve class type of ApiComment object and insert it to the slide.

var oPresentation = Api.GetPresentation();
Api.pluginMethod_AddComment({"UserName": "John Smith", "Text": "Comment 1"});
var arrComments = oPresentation.GetAllComments();
var sType = arrComments[0].GetClassType();
var oSlide1 = oPresentation.GetSlideByIndex(0);
oSlide1.RemoveAllObjects();
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oShape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, oFill, oStroke);
oShape.SetPosition(608400, 1267200);
oShape.SetSize(300 * 36000, 130 * 36000);
var oDocContent = oShape.GetDocContent();
var oParagraph = oDocContent.GetElement(0);
oParagraph.SetJc("left");
oParagraph.AddText("Type: " + sType);
oSlide1.AddObject(oShape);
```
