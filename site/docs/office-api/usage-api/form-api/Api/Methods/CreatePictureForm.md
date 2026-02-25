# CreatePictureForm

Creates a picture form with the specified picture form properties.

## Syntax

```javascript
expression.CreatePictureForm(formPr);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| formPr | Required | [PictureFormPr](../../Enumeration/PictureFormPr.md) |  | Picture form properties. |

## Returns

[ApiPictureForm](../../ApiPictureForm/ApiPictureForm.md)

## Example

This example creates a picture form with the common and specific picture form properties.

```javascript editor-pdf playground
// How to create a picture form and add it to the paragraph.

// Add the ApiPictureForm object to the document to upload a photo and set its image by a URL.

let doc = Api.GetDocument();
let pictureForm = Api.CreatePictureForm({
	"key": "Personal information",
	"tip": "Upload your photo",
	"required": true,
	"placeholder": "Photo",
	"scaleFlag": "tooBig",
	"lockAspectRatio": true,
	"respectBorders": false,
	"shiftX": 50,
	"shiftY": 50
});
let paragraph = doc.GetElement(0);
paragraph.AddElement(pictureForm);
pictureForm.SetImage("https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png", Api.MillimetersToEmus(70), Api.MillimetersToEmus(80));

```
