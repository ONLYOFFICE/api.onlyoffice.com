# GetBorderColor

Returns the border color of the current form.

Inherited from [ApiFormBase.GetBorderColor](../../ApiFormBase/Methods/GetBorderColor.md).

## Syntax

```javascript
expression.GetBorderColor();
```

`expression` - A variable that represents an [ApiSignatureForm](../ApiSignatureForm.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiColor](../../../document-api/ApiColor/ApiColor.md)

## Example

Read the border color of a signature field in a document.

```javascript editor-forms
// How do I find out what color the border of a signature field is in a document?

// Inspect the outline color of a signature field to use or display the value in a document.

let doc = Api.GetDocument();
let signatureForm = Api.CreateSignatureForm({"key": "Signature", "tip": "Please sign here", "placeholder": "Signature"});
let paragraph = doc.GetElement(0);
paragraph.AddElement(signatureForm);
signatureForm.SetBorderColor(Api.RGB(255, 111, 61));
let borderColor = signatureForm.GetBorderColor();
paragraph = Api.CreateParagraph();
paragraph.AddText("Border color (RGB): (" + borderColor.r + ", " + borderColor.g + ", " + borderColor.b + ")");
doc.Push(paragraph);
```
