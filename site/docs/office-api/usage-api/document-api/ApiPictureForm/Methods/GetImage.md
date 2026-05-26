# GetImage

Returns an image in the base64 format from the current picture form.

## Syntax

```javascript
expression.GetImage();
```

`expression` - A variable that represents a [ApiPictureForm](../ApiPictureForm.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[Base64Img](../../Enumeration/Base64Img.md)

## Example

Extract the image stored inside a picture form in a document.

```javascript editor-docx
// How do I read back the image data from a picture form in a document?

// Access the visual content embedded within a picture form in a document.

let doc = Api.GetDocument();
let pictureForm = Api.CreatePictureForm({"key": "Personal information", "tip": "Upload your photo", "required": true, "placeholder": "Photo", "scaleFlag": "tooBig", "lockAspectRatio": true, "respectBorders": false, "shiftX": 50, "shiftY": 50});
let paragraph = doc.GetElement(0);
paragraph.AddElement(pictureForm);
pictureForm.SetImage("https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png", Api.MillimetersToEmus(70), Api.MillimetersToEmus(80));
let base64img = pictureForm.GetImage();
let drawing = Api.CreateImage(base64img, 60 * 36000, 35 * 36000);
paragraph.AddDrawing(drawing);
```
