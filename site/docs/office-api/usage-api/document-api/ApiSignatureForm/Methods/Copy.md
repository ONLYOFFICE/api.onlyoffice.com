# Copy

Copies the current form (copies with the shape if it exists).

Inherited from [ApiFormBase.Copy](../../ApiFormBase/Methods/Copy.md).

## Syntax

```javascript
expression.Copy();
```

`expression` - A variable that represents an [ApiSignatureForm](../ApiSignatureForm.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiForm](../../Enumeration/ApiForm.md)

## Example

Duplicate a signature field and place the copy in a document.

```javascript editor-docx
// How do I create an identical copy of a signature field in a document?

// Reuse an existing signature field by making a duplicate of it in a document.

let doc = Api.GetDocument();
let signatureForm = Api.CreateSignatureForm({"key": "Signature", "tip": "Please sign here", "placeholder": "Signature"});
signatureForm.SetImage("https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png");
let paragraph = doc.GetElement(0);
paragraph.AddElement(signatureForm);
let copySignatureForm = signatureForm.Copy();
paragraph.AddLineBreak();
paragraph.AddElement(copySignatureForm);
```
