# CreateOleObject

Creates an OLE object with the parameters specified.

## Syntax

```javascript
expression.CreateOleObject(sImageSrc, nWidth, nHeight, sData, sAppId);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sImageSrc | Required | string |  | The image source where the image to be inserted should be taken from (currently, only internet URL or Base64 encoded images are supported). |
| nWidth | Required | [EMU](../../Enumeration/EMU.md) |  | The OLE object width in English measure units. |
| nHeight | Required | [EMU](../../Enumeration/EMU.md) |  | The OLE object height in English measure units. |
| sData | Required | string |  | The OLE object string data. |
| sAppId | Required | string |  | The application ID associated with the current OLE object. |

## Returns

[ApiOleObject](../../ApiOleObject/ApiOleObject.md)

## Example

This example creates an Ole object and inserts it into the slide.

```javascript editor-pptx
// How to create an Ole object.

// Add an Ole object to the slide.
 
const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const oleObject = Api.CreateOleObject(
	"https://api.onlyoffice.com/content/img/docbuilder/examples/ole-object-image.png",
	130 * 36000, 90 * 36000,
	"https://youtu.be/SKGz4pmnpgY",
	"asc.{38E022EA-AD92-45FC-B22B-49DF39746DB4}"
);
oleObject.SetSize(200 * 36000, 130 * 36000);
oleObject.SetPosition(70 * 36000, 30 * 36000);
slide.AddObject(oleObject);

```
