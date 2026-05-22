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

Insert an image upload field where users can add photos in a document.

```javascript editor-forms
// How do I create an image field for users to upload pictures in a document?

// Enable users to fill in a form by selecting or uploading image files in a document.

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
