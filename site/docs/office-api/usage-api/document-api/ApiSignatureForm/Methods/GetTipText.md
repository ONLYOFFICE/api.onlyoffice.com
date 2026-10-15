# GetTipText

Returns the tip text of the current form.

Inherited from [ApiFormBase.GetTipText](../../ApiFormBase/Methods/GetTipText.md).

## Syntax

```javascript
expression.GetTipText();
```

`expression` - A variable that represents an [ApiSignatureForm](../ApiSignatureForm.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string

## Example

Retrieve the tooltip hint assigned to a signature field in a document.

```javascript editor-docx
// How do I read the tooltip text that appears when hovering over a signature field in a document?

// Display the guidance message shown to signers when they interact with a signature field in a document.

let doc = Api.GetDocument();
let signatureForm = Api.CreateSignatureForm({"key": "Signature", "tip": "Please sign here", "placeholder": "Signature"});
let paragraph = doc.GetElement(0);
paragraph.AddElement(signatureForm);
let tipText = signatureForm.GetTipText();
paragraph = Api.CreateParagraph();
paragraph.AddText("Form tip text: " + tipText);
doc.Push(paragraph);
```
