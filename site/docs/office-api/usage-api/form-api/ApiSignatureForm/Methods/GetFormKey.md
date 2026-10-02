# GetFormKey

Returns the current form key.

Inherited from [ApiFormBase.GetFormKey](../../ApiFormBase/Methods/GetFormKey.md).

## Syntax

```javascript
expression.GetFormKey();
```

`expression` - A variable that represents an [ApiSignatureForm](../ApiSignatureForm.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string

## Example

Read the unique key assigned to a signature form in a document.

```javascript editor-forms
// How do I find out what key is set on a signature form in a document?

// Confirm which identifier label a signature form carries in a document.

let doc = Api.GetDocument();
let signatureForm = Api.CreateSignatureForm({"key": "Signature", "tip": "Please sign here", "placeholder": "Signature"});
let paragraph = doc.GetElement(0);
paragraph.AddElement(signatureForm);
let key = signatureForm.GetFormKey();
paragraph = Api.CreateParagraph();
paragraph.AddText("Form key: " + key);
doc.Push(paragraph);
```
