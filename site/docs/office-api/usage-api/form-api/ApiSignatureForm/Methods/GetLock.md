# GetLock

Returns the lock state of the current form.

Inherited from [ApiFormBase.GetLock](../../ApiFormBase/Methods/GetLock.md).

## Syntax

```javascript
expression.GetLock();
```

`expression` - A variable that represents an [ApiSignatureForm](../ApiSignatureForm.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

Check whether a signature form is locked in a document.

```javascript editor-forms
// How do I find out if a signature form is currently locked in a document?

// Verify the editing restriction applied to a signature form in a document.

let doc = Api.GetDocument();
let signatureForm = Api.CreateSignatureForm({"key": "Signature", "tip": "Please sign here", "placeholder": "Signature"});
let paragraph = doc.GetElement(0);
paragraph.AddElement(signatureForm);
signatureForm.SetLock(true);
let lock = signatureForm.GetLock();
paragraph = Api.CreateParagraph();
paragraph.AddText("The form is locked: " + lock);
doc.Push(paragraph);
```
