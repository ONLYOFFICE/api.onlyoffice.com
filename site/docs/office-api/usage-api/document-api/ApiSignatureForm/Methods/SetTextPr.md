# SetTextPr

Sets the text properties to the current form.

:::note
Used if possible for this type of form.
:::

Inherited from [ApiFormBase.SetTextPr](../../ApiFormBase/Methods/SetTextPr.md).

## Syntax

```javascript
expression.SetTextPr(textPr);
```

`expression` - A variable that represents an [ApiSignatureForm](../ApiSignatureForm.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| textPr | Required | [ApiTextPr](../../ApiTextPr/ApiTextPr.md) |  | The text properties that will be set to the current form. |

## Returns

boolean

## Example

Apply text formatting to a signature field in a document.

```javascript editor-docx
// How do I change the font size and style of text inside a signature field in a document?

// Make the text in a signature field bold and larger to improve its visual prominence in a document.

let doc = Api.GetDocument();
let signatureForm = Api.CreateSignatureForm({"key": "Signature", "tip": "Please sign here", "placeholder": "Signature"});
let paragraph = doc.GetElement(0);
paragraph.AddElement(signatureForm);
let textPr = Api.CreateTextPr();
textPr.SetFontSize(30);
textPr.SetBold(true);
signatureForm.SetTextPr(textPr);
```
