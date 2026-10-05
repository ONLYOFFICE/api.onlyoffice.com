# Copy

Copies the current form (copies with the shape if it exists).

Inherited from [ApiFormBase.Copy](../../ApiFormBase/Methods/Copy.md).

## Syntax

```javascript
expression.Copy();
```

`expression` - A variable that represents an [ApiPictureForm](../ApiPictureForm.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiForm](../../Enumeration/ApiForm.md)

## Example

Duplicate a picture form field and place the copy in a document.

```javascript editor-docx
// How do I make an exact copy of a picture form field in a document?

// Reuse an existing picture form by cloning it and inserting the duplicate into a document.

let doc = Api.GetDocument();
let pictureForm = Api.CreatePictureForm({"key": "Personal information", "tip": "Upload your photo", "required": true, "placeholder": "Photo", "scaleFlag": "tooBig", "lockAspectRatio": true, "respectBorders": false, "shiftX": 50, "shiftY": 50});
pictureForm.SetImage("https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png", Api.MillimetersToEmus(70), Api.MillimetersToEmus(80));
let paragraph = doc.GetElement(0);
paragraph.AddElement(pictureForm);
let copyPictureForm = pictureForm.Copy();
paragraph.AddLineBreak();
paragraph.AddElement(copyPictureForm);
```
