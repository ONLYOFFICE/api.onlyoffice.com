# SetImage

Sets an image to the current picture form.

## Syntax

```javascript
expression.SetImage(sImageSrc, nWidth, nHeight);
```

`expression` - A variable that represents a [ApiPictureForm](../ApiPictureForm.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sImageSrc | Required | string |  | The image source where the image to be inserted should be taken from (currently, only internet URL or base64 encoded images are supported). |
| nWidth | Required | [EMU](../../Enumeration/EMU.md) |  | The image width in English measure units. |
| nHeight | Required | [EMU](../../Enumeration/EMU.md) |  | The image height in English measure units. |

## Returns

boolean

## Example

This example sets an image to the current picture form.

```javascript editor-pdf playground
// How to set image of the picture form.

// Set the url of the image to the picture form.

let doc = Api.GetDocument();
let pictureForm = Api.CreatePictureForm({"tip": "Upload your photo", "required": true, "placeholder": "Photo", "scaleFlag": "tooBig", "lockAspectRatio": true, "respectBorders": false, "shiftX": 50, "shiftY": 50});
pictureForm.SetImage("https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png", Api.MillimetersToEmus(70), Api.MillimetersToEmus(80));
let paragraph = doc.GetElement(0);
paragraph.AddElement(pictureForm);
```
