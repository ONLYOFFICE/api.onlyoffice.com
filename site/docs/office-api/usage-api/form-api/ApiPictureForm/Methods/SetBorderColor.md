# SetBorderColor

Sets the border color to the current form.

Inherited from [ApiFormBase.SetBorderColor](../../ApiFormBase/Methods/SetBorderColor.md).

## Syntax

```javascript
expression.SetBorderColor(color);
```

`expression` - A variable that represents an [ApiPictureForm](../ApiPictureForm.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| color | Optional | [ApiColor](../../../document-api/ApiColor/ApiColor.md) |  | The border color. |

## Returns

boolean

## Example

Apply a color to the border of a picture form in a document.

```javascript editor-forms
// How do I change the border color of a picture form in a document?

// Style the outline of a picture form with a specific color to improve its appearance in a document.

let doc = Api.GetDocument();
let pictureForm = Api.CreatePictureForm({"key": "Personal information", "tip": "Upload your photo", "required": true, "placeholder": "Photo", "scaleFlag": "tooBig", "lockAspectRatio": true, "respectBorders": false, "shiftX": 50, "shiftY": 50});
pictureForm.SetImage("https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png", Api.MillimetersToEmus(70), Api.MillimetersToEmus(80));
let paragraph = doc.GetElement(0);
paragraph.AddElement(pictureForm);
pictureForm.SetBorderColor(Api.HexColor('#FF6F3D'));
```
