# SetRole

Sets the role to the current form.

Inherited from [ApiFormBase.SetRole](../../ApiFormBase/Methods/SetRole.md).

## Syntax

```javascript
expression.SetRole(role);
```

`expression` - A variable that represents an [ApiPictureForm](../ApiPictureForm.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| role | Required | string |  | The role which will be attached to the current form. |

## Returns

boolean

## Example

Assign a named role to a picture field in a document.

```javascript editor-docx
// How do I link a picture field to a specific signer or contributor role in a document?

// Tie a picture field to a particular participant so only they fill it in in a document.

let doc = Api.GetDocument();
let roles = doc.GetFormRoles();
roles.Add("Employee");
let pictureForm = Api.CreatePictureForm({"key": "Personal information", "tip": "Upload your photo", "required": true, "placeholder": "Photo", "scaleFlag": "tooBig", "lockAspectRatio": true, "respectBorders": false, "shiftX": 50, "shiftY": 50});
pictureForm.SetRole("Employee");
let paragraph = doc.GetElement(0);
paragraph.AddElement(pictureForm);
pictureForm.SetImage("https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png", Api.MillimetersToEmus(70), Api.MillimetersToEmus(80));
let role = pictureForm.GetRole();
paragraph = Api.CreateParagraph();
paragraph.AddText("Form role: " + role);
doc.Push(paragraph);
```
