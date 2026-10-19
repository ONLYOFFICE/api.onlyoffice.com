# SetRequired

Specifies if the current form should be required.

Inherited from [ApiFormBase.SetRequired](../../ApiFormBase/Methods/SetRequired.md).

## Syntax

```javascript
expression.SetRequired(bRequired);
```

`expression` - A variable that represents an [ApiPictureForm](../ApiPictureForm.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| bRequired | Required | boolean |  | Defines if the current form is required (true) or not (false). |

## Returns

boolean

## Example

Mark a picture field as mandatory before the document can be submitted in a document.

```javascript editor-forms
// How do I make filling in a picture field obligatory in a document?

// Enforce that a picture field must be completed before the form is finished in a document.

let doc = Api.GetDocument();
let pictureForm = Api.CreatePictureForm({"key": "Personal information", "tip": "Upload your photo", "placeholder": "Photo", "scaleFlag": "tooBig", "lockAspectRatio": true, "respectBorders": false, "shiftX": 50, "shiftY": 50});
pictureForm.SetImage("https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png", Api.MillimetersToEmus(70), Api.MillimetersToEmus(80));
let paragraph = doc.GetElement(0);
paragraph.AddElement(pictureForm);
pictureForm.SetRequired(true);
let required = pictureForm.IsRequired();
paragraph = Api.CreateParagraph();
paragraph.AddText("The first form from this document is required: " + required);
doc.Push(paragraph);
```
