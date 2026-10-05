# GetPlaceholderText

Returns the placeholder text from the current form.

Inherited from [ApiFormBase.GetPlaceholderText](../../ApiFormBase/Methods/GetPlaceholderText.md).

## Syntax

```javascript
expression.GetPlaceholderText();
```

`expression` - A variable that represents an [ApiSignatureForm](../ApiSignatureForm.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string

## Example

Read the placeholder text of a signature form in a document.

```javascript editor-forms
// How do I find out what placeholder text a signature form displays in a document?

// Confirm the hint label shown inside an empty signature form in a document.

let doc = Api.GetDocument();
let signatureForm = Api.CreateSignatureForm({"key": "Signature", "tip": "Please sign here"});
let paragraph = doc.GetElement(0);
paragraph.AddElement(signatureForm);
signatureForm.SetPlaceholderText("Signature");
let placeholderText = signatureForm.GetPlaceholderText();
paragraph = Api.CreateParagraph();
paragraph.AddText("Placeholder text: " + placeholderText);
doc.Push(paragraph);
```
