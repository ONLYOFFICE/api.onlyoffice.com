# GetAllOleObjects

Returns an array with all the OLE objects from the slide master.

## Syntax

```javascript
expression.GetAllOleObjects();
```

`expression` - A variable that represents a [ApiMaster](../ApiMaster.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiOleObject[]](../../ApiOleObject/ApiOleObject.md)

## Example

This example show how to get an array with all the OLE objects from the slide master.

```javascript
var oPresentation = Api.GetPresentation();
var oSlide = oPresentation.GetSlideByIndex(0);
var oMaster = oPresentation.GetMaster(0);
var oOleObject = Api.CreateOleObject("https://i.ytimg.com/vi_webp/SKGz4pmnpgY/sddefault.webp", 130 * 36000, 90 * 36000, "https://youtu.be/SKGz4pmnpgY", "asc.{38E022EA-AD92-45FC-B22B-49DF39746DB4}");
oOleObject.SetSize(200 * 36000, 130 * 36000);
oOleObject.SetPosition(70 * 36000, 30 * 36000);
oMaster.AddObject(oOleObject);
var aOleObjects = oMaster.GetAllOleObjects();
var sAppId = aOleObjects[0].GetApplicationId();
var oGs1 = Api.CreateGradientStop(Api.CreateRGBColor(255, 224, 204), 0);
var oGs2 = Api.CreateGradientStop(Api.CreateRGBColor(255, 164, 101), 100000);
var oFill = Api.CreateLinearGradientFill([oGs1, oGs2], 5400000);
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oDrawing = Api.CreateShape("rect", 300 * 36000, 15 * 36000, oFill, oStroke);
oDrawing.SetPosition(20 * 36000, 170 * 36000);
var oDocContent = oDrawing.GetContent();
var oParagraph = oDocContent.GetElement(0);
oParagraph.AddText("The application ID for the current OLE object: " + sAppId);
oMaster.AddObject(oDrawing);
```
