# IsFixed

Checks if the current form is fixed size.

Inherited from [ApiFormBase.IsFixed](../../ApiFormBase/Methods/IsFixed.md).

## Syntax

```javascript
expression.IsFixed();
```

`expression` - A variable that represents an [ApiSignatureForm](../ApiSignatureForm.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

Confirm whether a signature field has a locked, unchangeable size in a document.

```javascript editor-forms
// How do I find out if a signature field is set to a fixed size in a document?

// Distinguish between resizable and size-locked signature fields in a document.

let doc = Api.GetDocument();
let signatureForm = Api.CreateSignatureForm({"key": "Signature", "tip": "Please sign here", "placeholder": "Signature"});
let paragraph = doc.GetElement(0);
paragraph.AddElement(signatureForm);
signatureForm.ToFixed(10 * 240, 2 * 240);
let fixed = signatureForm.IsFixed();
paragraph = Api.CreateParagraph();
paragraph.AddText("The first form from this document is fixed: " + fixed);
doc.Push(paragraph);
```
