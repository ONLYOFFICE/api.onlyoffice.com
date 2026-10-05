# IsRequired

Checks if the current form is required.

Inherited from [ApiFormBase.IsRequired](../../ApiFormBase/Methods/IsRequired.md).

## Syntax

```javascript
expression.IsRequired();
```

`expression` - A variable that represents an [ApiSignatureForm](../ApiSignatureForm.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

Confirm whether a signature field must be completed before the document can be submitted in a document.

```javascript editor-docx
// How do I check if a signature field is marked as mandatory in a document?

// Identify signature fields that cannot be skipped when filling out a form in a document.

let doc = Api.GetDocument();
let signatureForm = Api.CreateSignatureForm({"key": "Signature", "tip": "Please sign here", "placeholder": "Signature"});
let paragraph = doc.GetElement(0);
paragraph.AddElement(signatureForm);
let required = signatureForm.IsRequired();
paragraph = Api.CreateParagraph();
paragraph.AddText("The first form from this document is required: " + required);
doc.Push(paragraph);
```
