# GetRole

Returns the role of the current form.

Inherited from [ApiFormBase.GetRole](../../ApiFormBase/Methods/GetRole.md).

## Syntax

```javascript
expression.GetRole();
```

`expression` - A variable that represents an [ApiSignatureForm](../ApiSignatureForm.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string

## Example

Read the role assigned to a signature form in a document.

```javascript editor-docx
// How do I find out what role is set on a signature form in a document?

// Confirm which signer role a signature form is associated with in a document.

let doc = Api.GetDocument();
let signatureForm = Api.CreateSignatureForm({"key": "Signature", "tip": "Please sign here", "placeholder": "Signature"});
let paragraph = doc.GetElement(0);
paragraph.AddElement(signatureForm);
let role = signatureForm.GetRole();
paragraph = Api.CreateParagraph();
paragraph.AddText("Form role: " + role);
doc.Push(paragraph);
```
