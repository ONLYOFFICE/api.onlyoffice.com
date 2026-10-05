# GetTextPr

Returns the text properties from the current form.

:::note
Used if possible for this type of form.
:::

Inherited from [ApiFormBase.GetTextPr](../../ApiFormBase/Methods/GetTextPr.md).

## Syntax

```javascript
expression.GetTextPr();
```

`expression` - A variable that represents an [ApiPictureForm](../ApiPictureForm.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiTextPr](../../../document-api/ApiTextPr/ApiTextPr.md)

## Example

Retrieve the text formatting settings of a picture form in a document.

```javascript editor-forms
// How do I access the text style applied to a picture form in a document?

// Read and then adjust the typography of a picture form in a document.

let doc = Api.GetDocument();
let pictureForm = Api.CreatePictureForm({"key": "Personal information", "tip": "Upload your photo", "required": true, "placeholder": "Photo", "scaleFlag": "tooBig", "lockAspectRatio": true, "respectBorders": false, "shiftX": 50, "shiftY": 50});
let paragraph = doc.GetElement(0);
paragraph.AddElement(pictureForm);
pictureForm.SetImage("https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png", Api.MillimetersToEmus(70), Api.MillimetersToEmus(80));
let textPr = Api.CreateTextPr();
textPr.SetFontSize(30);
textPr.SetBold(true);
pictureForm.SetTextPr(textPr);
let formTextPr = pictureForm.GetTextPr();
formTextPr.SetItalic(true);
pictureForm.SetTextPr(formTextPr);
```
