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

`expression` - A variable that represents an [ApiDateForm](../ApiDateForm.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiTextPr](../../ApiTextPr/ApiTextPr.md)

## Example

Retrieve the text formatting properties of a date form in a document.

```javascript editor-docx
// How do I get the text properties applied to a date form in a document?

// Modify the retrieved properties to further adjust the form's appearance, such as adding italic style.

let doc = Api.GetDocument();
let dateForm = Api.CreateDateForm({"key": "Nowadays", "tip": "Enter current date", "required": true, "placeholder": "Your date here", "format": "mm.dd.yyyy", "lang": "en-US"});
let paragraph = doc.GetElement(0);
paragraph.AddElement(dateForm);
let textPr = Api.CreateTextPr();
textPr.SetFontSize(30);
textPr.SetBold(true);
dateForm.SetTextPr(textPr);
let formTextPr = dateForm.GetTextPr();
formTextPr.SetItalic(true);
dateForm.SetTextPr(formTextPr);
```
