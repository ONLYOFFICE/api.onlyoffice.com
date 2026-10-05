# SetPlaceholderText

Sets the placeholder text to the current form.

:::note
The placeholder text can't be set for checkbox or radio button forms.
:::

Inherited from [ApiFormBase.SetPlaceholderText](../../ApiFormBase/Methods/SetPlaceholderText.md).

## Syntax

```javascript
expression.SetPlaceholderText(sText);
```

`expression` - A variable that represents an [ApiPictureForm](../ApiPictureForm.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sText | Required | string |  | The text that will be set to the current form. |

## Returns

boolean

## Example

Assign placeholder text to a picture field in a document.

```javascript editor-docx
// How do I add a hint label that appears inside an empty picture field in a document?

// Label an unfilled picture field with descriptive placeholder text in a document.

let doc = Api.GetDocument();
let pictureForm = Api.CreatePictureForm({"key": "Personal information", "tip": "Upload your photo", "required": true, "placeholder": "Photo", "scaleFlag": "tooBig", "lockAspectRatio": true, "respectBorders": false});
let paragraph = doc.GetElement(0);
paragraph.AddElement(pictureForm);
pictureForm.SetImage("https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png", Api.MillimetersToEmus(70), Api.MillimetersToEmus(80));
pictureForm.SetPlaceholderText("Picture form");
```
