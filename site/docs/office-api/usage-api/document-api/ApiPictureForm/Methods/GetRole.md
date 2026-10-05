# GetRole

Returns the role of the current form.

Inherited from [ApiFormBase.GetRole](../../ApiFormBase/Methods/GetRole.md).

## Syntax

```javascript
expression.GetRole();
```

`expression` - A variable that represents an [ApiPictureForm](../ApiPictureForm.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string

## Example

Retrieve the role assigned to a picture form in a document.

```javascript editor-docx
// How do I find out what role a picture form has in a document?

// Verify which responsibility is associated with a picture form in a document.

let doc = Api.GetDocument();
let pictureForm = Api.CreatePictureForm({"key": "Personal information", "tip": "Upload your photo", "required": true, "placeholder": "Photo", "scaleFlag": "tooBig", "lockAspectRatio": true, "respectBorders": false, "shiftX": 50, "shiftY": 50});
let paragraph = doc.GetElement(0);
paragraph.AddElement(pictureForm);
pictureForm.SetImage("https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png", Api.MillimetersToEmus(70), Api.MillimetersToEmus(80));
let role = pictureForm.GetRole();
paragraph = Api.CreateParagraph();
paragraph.AddText("Form role: " + role);
doc.Push(paragraph);
```
