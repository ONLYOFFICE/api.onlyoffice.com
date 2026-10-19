# SetTipText

Sets the tip text to the current form.

Inherited from [ApiFormBase.SetTipText](../../ApiFormBase/Methods/SetTipText.md).

## Syntax

```javascript
expression.SetTipText(sText);
```

`expression` - A variable that represents an [ApiPictureForm](../ApiPictureForm.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sText | Required | string |  | Tip text. |

## Returns

boolean

## Example

Add a tooltip that appears when a user hovers over a picture field in a document.

```javascript editor-forms
// How do I provide a helpful hint that shows up when someone points at a picture field in a document?

// Guide users by attaching a short instructional message to a picture field in a document.

let doc = Api.GetDocument();
let pictureForm = Api.CreatePictureForm({"key": "Personal information", "required": true, "placeholder": "Photo", "scaleFlag": "tooBig", "lockAspectRatio": true, "respectBorders": false, "shiftX": 50, "shiftY": 50});
pictureForm.SetImage("https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png", Api.MillimetersToEmus(70), Api.MillimetersToEmus(80));
let paragraph = doc.GetElement(0);
paragraph.AddElement(pictureForm);
pictureForm.SetTipText("Upload your photo");
let tipText = pictureForm.GetTipText();
paragraph = Api.CreateParagraph();
paragraph.AddText("Tip text: " + tipText);
doc.Push(paragraph);
```
