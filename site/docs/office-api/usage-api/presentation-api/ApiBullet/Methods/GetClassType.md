# GetClassType

Returns a type of the ApiBullet class.

## Syntax

```javascript
expression.GetClassType();
```

`expression` - A variable that represents a [ApiBullet](../ApiBullet.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

"bullet"

## Example

This example gets a type of ApiBullet class and inserts it into the document.

```javascript
var oPresentation = Api.GetPresentation();
var oSlide = oPresentation.GetSlideByIndex(0);
oSlide.RemoveAllObjects();
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oShape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, oFill, oStroke);
oShape.SetPosition(608400, 1267200);
var oDocContent = oShape.GetDocContent();
var oParagraph = oDocContent.GetElement(0);
var oBullet = Api.CreateBullet("-");
oParagraph.SetBullet(oBullet);
oParagraph.AddText(" This is an example of the bulleted paragraph.");
var sClassType = oBullet.GetClassType();
oParagraph = Api.CreateParagraph();
oParagraph.SetJc("left");
oParagraph.AddText("Class Type = " + sClassType);
oDocContent.Push(oParagraph);
oSlide.AddObject(oShape);
```
