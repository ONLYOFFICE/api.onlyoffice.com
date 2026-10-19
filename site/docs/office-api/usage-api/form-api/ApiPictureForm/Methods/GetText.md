# GetText

Returns the text from the current form.

Inherited from [ApiFormBase.GetText](../../ApiFormBase/Methods/GetText.md).

## Syntax

```javascript
expression.GetText();
```

`expression` - A variable that represents an [ApiPictureForm](../ApiPictureForm.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string

## Example

Extract the text content held by a picture form in a document.

```javascript editor-forms
// How do I read the text stored inside a picture form in a document?

// Retrieve the string value associated with a picture form in a document.

let doc = Api.GetDocument();
let pictureForm = Api.CreatePictureForm({"key": "Personal information", "tip": "Upload your photo", "required": true, "placeholder": "Photo", "scaleFlag": "tooBig", "lockAspectRatio": true, "respectBorders": false, "shiftX": 50, "shiftY": 50});
let paragraph = doc.GetElement(0);
paragraph.AddElement(pictureForm);
pictureForm.SetImage("https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png", Api.MillimetersToEmus(70), Api.MillimetersToEmus(80));
let text = pictureForm.GetText();
paragraph.AddText("Form text: " + text);
doc.Push(paragraph);
```
