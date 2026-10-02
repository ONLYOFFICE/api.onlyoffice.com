# SetTipText

Sets the tip text to the current form.

Inherited from [ApiFormBase.SetTipText](../../ApiFormBase/Methods/SetTipText.md).

## Syntax

```javascript
expression.SetTipText(sText);
```

`expression` - A variable that represents an [ApiSignatureForm](../ApiSignatureForm.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sText | Required | string |  | Tip text. |

## Returns

boolean

## Example

Set a tooltip hint on a signature field in a document.

```javascript editor-docx
// How do I add a helpful hint that appears when a user hovers over a signature field in a document?

// Provide guidance to signers by attaching a short tooltip message to a signature field in a document.

let doc = Api.GetDocument();
let signatureForm = Api.CreateSignatureForm({"key": "Signature", "placeholder": "Signature"});
let paragraph = doc.GetElement(0);
paragraph.AddElement(signatureForm);
signatureForm.SetTipText("Please sign here");
let tipText = signatureForm.GetTipText();
paragraph = Api.CreateParagraph();
paragraph.AddText("Tip text: " + tipText);
doc.Push(paragraph);
```
