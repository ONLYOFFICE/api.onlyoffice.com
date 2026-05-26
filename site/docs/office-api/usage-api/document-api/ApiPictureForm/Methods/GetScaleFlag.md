# GetScaleFlag

Returns the current scaling condition of the picture form.

## Syntax

```javascript
expression.GetScaleFlag();
```

`expression` - A variable that represents a [ApiPictureForm](../ApiPictureForm.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ScaleFlag](../../Enumeration/ScaleFlag.md)

## Example

Read the scaling rule applied to a picture form in a document.

```javascript editor-docx
// How do I check how a picture is scaled inside a form in a document?

// Determine whether a picture shrinks, grows, or stays fixed within a form in a document.

let doc = Api.GetDocument();
let pictureForm = Api.CreatePictureForm({"key": "Personal information", "tip": "Upload your photo", "required": true, "placeholder": "Photo", "scaleFlag": "tooBig", "lockAspectRatio": true, "respectBorders": false, "shiftX": 50, "shiftY": 50});
let paragraph = doc.GetElement(0);
paragraph.AddElement(pictureForm);
pictureForm.SetImage("https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png", Api.MillimetersToEmus(70), Api.MillimetersToEmus(80));
let scaleFlag = pictureForm.GetScaleFlag();
paragraph = Api.CreateParagraph();
paragraph.AddText("Picture scale flag: " + scaleFlag);
doc.Push(paragraph);
```
