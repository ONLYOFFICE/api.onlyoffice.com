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

`expression` - A variable that represents an [ApiTextForm](../ApiTextForm.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiTextPr](../../../document-api/ApiTextPr/ApiTextPr.md)

## Example

Retrieve the text formatting settings applied to a form field in a document.

```javascript editor-forms
// How do I access the character style of text inside a form field in a document?

// Copy the font properties from one form field to reuse them in a document.

let doc = Api.GetDocument();
let textForm = Api.CreateTextForm({"key": "Personal information", "tip": "Enter your first name", "required": true, "placeholder": "First name", "comb": true, "maxCharacters": 10, "cellWidth": 3, "multiLine": false, "autoFit": false});
let paragraph = doc.GetElement(0);
paragraph.AddElement(textForm);
let textPr = Api.CreateTextPr();
textPr.SetFontSize(30);
textPr.SetBold(true);
textForm.SetTextPr(textPr);
let formTextPr = textForm.GetTextPr();
formTextPr.SetItalic(true);
textForm.SetTextPr(formTextPr);
```
