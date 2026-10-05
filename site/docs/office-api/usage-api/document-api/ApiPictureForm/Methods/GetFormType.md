# GetFormType

Returns a type of the current form.

Inherited from [ApiFormBase.GetFormType](../../ApiFormBase/Methods/GetFormType.md).

## Syntax

```javascript
expression.GetFormType();
```

`expression` - A variable that represents an [ApiPictureForm](../ApiPictureForm.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[FormType](../../Enumeration/FormType.md)

## Example

Retrieve the type assigned to a picture form in a document.

```javascript editor-docx
// How do I find out what type a picture form is in a document?

// Check which category a picture form belongs to in a document.

let doc = Api.GetDocument();
let pictureForm = Api.CreatePictureForm({"key": "Personal information", "tip": "Upload your photo", "required": true, "placeholder": "Photo", "scaleFlag": "tooBig", "lockAspectRatio": true, "respectBorders": false, "shiftX": 50, "shiftY": 50});
let paragraph = doc.GetElement(0);
paragraph.AddElement(pictureForm);
pictureForm.SetImage("https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png", Api.MillimetersToEmus(70), Api.MillimetersToEmus(80));
let formType = pictureForm.GetFormType();
paragraph = Api.CreateParagraph();
paragraph.AddText("Form type: " + formType);
doc.Push(paragraph);
```
