# GetAllOleObjects

Returns an array with all the OLE objects from the current presentation.

## Syntax

```javascript
expression.GetAllOleObjects();
```

`expression` - A variable that represents a [ApiPresentation](../ApiPresentation.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiOleObject](../../ApiOleObject/ApiOleObject.md)[]

## Example

This example shows how to get all the OLE objects from the current presentation.

```javascript editor-pptx
const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();
const slideMaster = presentation.GetMaster(0);
slideMaster.RemoveObject(0, slideMaster.GetAllDrawings().length);

const oleObject1 = Api.CreateOleObject(
	'https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png',
	150 * 36000, 150 * 36000,
	'https://youtu.be/SKGz4pmnpgY',
	'asc.{38E022EA-AD92-45FC-B22B-49DF39746DB4}'
);
slide.AddObject(oleObject1);
const oleObject2 = oleObject1.Copy();
oleObject2.SetPosition(0, 48 * 36000);
slideMaster.AddObject(oleObject2);

const labelFill = Api.CreateSolidFill(Api.RGB(255, 230, 150));
const labelStroke = Api.CreateStroke(0, Api.CreateNoFill());
const label = Api.CreateShape('rect', 60 * 36000, 20 * 36000, labelFill, labelStroke);
label.SetPosition(0, 96 * 36000);
slide.AddObject(label);

const oleObjects = presentation.GetAllOleObjects();
const docContent = label.GetDocContent();
const paragraph = docContent.GetElement(0);
paragraph.AddText('OLE Objects: ' + oleObjects.length);

```
