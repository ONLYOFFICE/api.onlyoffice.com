# GetClassType

Returns a type of the ApiSignatureForm class.

## Syntax

```javascript
expression.GetClassType();
```

`expression` - A variable that represents a [ApiSignatureForm](../ApiSignatureForm.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

"signatureForm"

## Example

Read the object category of a signature form in a document.

```javascript editor-docx
// How do I find out what category a form object belongs to in a document?

// Identify the kind of element a signature form represents in a document.

let doc = Api.GetDocument();
let signatureForm = Api.CreateSignatureForm({"key": "Signature", "tip": "Please sign here", "placeholder": "Signature"});
let paragraph = doc.GetElement(0);
paragraph.AddElement(signatureForm);
let classType = signatureForm.GetClassType();
paragraph = Api.CreateParagraph();
paragraph.AddText("Class type: " + classType);
doc.Push(paragraph);
```
