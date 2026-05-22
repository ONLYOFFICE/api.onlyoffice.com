# SetScaleFlag

Sets the scaling condition to the current picture form.

## Syntax

```javascript
expression.SetScaleFlag(sScaleFlag);
```

`expression` - A variable that represents a [ApiPictureForm](../ApiPictureForm.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sScaleFlag | Required | [ScaleFlag](../../Enumeration/ScaleFlag.md) |  | Picture scaling condition: "always", "never", "tooBig" or "tooSmall". |

## Returns

boolean

## Example

Choose when an image is automatically resized to fit its picture field in a document.

```javascript editor-docx
// How do I control whether an image shrinks or grows to match the size of a picture field in a document?

// Decide the conditions under which an image adjusts its size inside a picture field in a document.

let doc = Api.GetDocument();
let pictureForm = Api.CreatePictureForm({"key": "Personal information", "tip": "Upload your photo", "required": true, "placeholder": "Photo", "lockAspectRatio": true, "respectBorders": false, "shiftX": 50, "shiftY": 50});
let paragraph = doc.GetElement(0);
paragraph.AddElement(pictureForm);
pictureForm.SetImage("https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png", Api.MillimetersToEmus(70), Api.MillimetersToEmus(80));
pictureForm.SetScaleFlag("tooBig");
let scaleFlag = pictureForm.GetScaleFlag();
paragraph = Api.CreateParagraph();
paragraph.AddText("Picture scale flag: " + scaleFlag);
doc.Push(paragraph);
```
