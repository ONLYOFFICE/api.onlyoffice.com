# GetFormType

Returns a type of the current form.

Inherited from [ApiFormBase.GetFormType](../../ApiFormBase/Methods/GetFormType.md).

## Syntax

```javascript
expression.GetFormType();
```

`expression` - A variable that represents an [ApiSignatureForm](../ApiSignatureForm.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[FormType](../../Enumeration/FormType.md)

## Example

Read the form type of a signature field in a document.

```javascript editor-forms
// How do I find out what type a signature form is set to in a document?

// Confirm the category label assigned to a signature form in a document.

let doc = Api.GetDocument();
let signatureForm = Api.CreateSignatureForm({"key": "Signature", "tip": "Please sign here", "placeholder": "Signature"});
let paragraph = doc.GetElement(0);
paragraph.AddElement(signatureForm);
let formType = signatureForm.GetFormType();
paragraph = Api.CreateParagraph();
paragraph.AddText("Form type: " + formType);
doc.Push(paragraph);
```
