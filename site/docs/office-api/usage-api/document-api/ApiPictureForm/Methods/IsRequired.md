# IsRequired

Checks if the current form is required.

Inherited from [ApiFormBase.IsRequired](../../ApiFormBase/Methods/IsRequired.md).

## Syntax

```javascript
expression.IsRequired();
```

`expression` - A variable that represents an [ApiPictureForm](../ApiPictureForm.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

Determine whether filling a picture form is mandatory in a document.

```javascript editor-docx
// How do I check if a picture form must be completed before the document is submitted in a document?

// Confirm that a picture form is marked as obligatory so it cannot be left empty in a document.

let doc = Api.GetDocument();
let pictureForm = Api.CreatePictureForm({"key": "Personal information", "tip": "Upload your photo", "required": true, "placeholder": "Photo", "scaleFlag": "tooBig", "lockAspectRatio": true, "respectBorders": false, "shiftX": 50, "shiftY": 50});
let paragraph = doc.GetElement(0);
paragraph.AddElement(pictureForm);
pictureForm.SetImage("https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png", Api.MillimetersToEmus(70), Api.MillimetersToEmus(80));
let required = pictureForm.IsRequired();
paragraph = Api.CreateParagraph();
paragraph.AddText("The first form from this document is required: " + required);
doc.Push(paragraph);
```
