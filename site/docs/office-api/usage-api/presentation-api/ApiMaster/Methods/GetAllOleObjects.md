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

[ApiOleObject](../../ApiOleObject/ApiOleObject.md)[]

## Example

This example show how to get an array with all the OLE objects from the slide master.

```javascript editor-pptx
// How to get all OLE objects from the master of presentation.

// Get all OLE objects from the presentation slide master as an array.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const master = presentation.GetMaster(0);

const oleObject = Api.CreateOleObject(
	"https://i.ytimg.com/vi_webp/SKGz4pmnpgY/sddefault.webp",
	130 * 36000, 90 * 36000,
	"https://youtu.be/SKGz4pmnpgY",
	"asc.{38E022EA-AD92-45FC-B22B-49DF39746DB4}"
);
oleObject.SetSize(200 * 36000, 130 * 36000);
oleObject.SetPosition(70 * 36000, 30 * 36000);
master.AddObject(oleObject);

const allOleObjects = master.GetAllOleObjects();
const appId = allOleObjects[0].GetApplicationId();

const gs1 = Api.CreateGradientStop(Api.CreateRGBColor(255, 224, 204), 0);
const gs2 = Api.CreateGradientStop(Api.CreateRGBColor(255, 164, 101), 100000);
const fill = Api.CreateLinearGradientFill([gs1, gs2], 5400000);
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const drawing = Api.CreateShape("rect", 300 * 36000, 15 * 36000, fill, stroke);
drawing.SetPosition(20 * 36000, 170 * 36000);
const docContent = drawing.GetContent();
const paragraph = docContent.GetElement(0);
paragraph.AddText("The application ID for the current OLE object: " + appId);
master.AddObject(drawing);

```
