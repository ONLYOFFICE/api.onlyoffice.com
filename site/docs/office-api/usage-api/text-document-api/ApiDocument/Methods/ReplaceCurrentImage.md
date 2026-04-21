# ReplaceCurrentImage

Replaces the current image with an image specified.

## Syntax

```javascript
expression.ReplaceCurrentImage(sImageUrl, Width, Height);
```

`expression` - A variable that represents a [ApiDocument](../ApiDocument.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sImageUrl | Required | string |  | The image source where the image to be inserted should be taken from (currently, only internet URL or Base64 encoded images are supported). |
| Width | Required | [EMU](../../Enumeration/EMU.md) |  | The image width in English measure units. |
| Height | Required | [EMU](../../Enumeration/EMU.md) |  | The image height in English measure units. |

## Returns

boolean

## Example

Replace the current image with an image specified in a document.

```javascript editor-docx
// How to change the image to another one in a document.

// Add the new image instead of another using the URL in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let drawing = Api.CreateImage(
	'https://static.onlyoffice.com/assets/docs/samples/img/presentation_sky.png',
	60 * 36000, 60 * 36000
);
paragraph.AddDrawing(drawing);
drawing.Select();
doc.ReplaceCurrentImage('https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png');
```
