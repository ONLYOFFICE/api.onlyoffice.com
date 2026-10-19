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

`expression` - A variable that represents an [ApiSignatureForm](../ApiSignatureForm.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiTextPr](../../../document-api/ApiTextPr/ApiTextPr.md)

## Example

Read the text formatting settings of a signature form in a document.

```javascript editor-forms
// How do I retrieve the text styling applied to a signature form in a document?

// Copy the text appearance from one signature form to reuse it in a document.

let doc = Api.GetDocument();
let signatureForm = Api.CreateSignatureForm({"key": "Signature", "tip": "Please sign here", "placeholder": "Signature"});
let paragraph = doc.GetElement(0);
paragraph.AddElement(signatureForm);
let textPr = Api.CreateTextPr();
textPr.SetFontSize(30);
textPr.SetBold(true);
signatureForm.SetTextPr(textPr);
let formTextPr = signatureForm.GetTextPr();
formTextPr.SetItalic(true);
signatureForm.SetTextPr(formTextPr);
```
