# GetText

Returns the text from the current form.

Inherited from [ApiFormBase.GetText](../../ApiFormBase/Methods/GetText.md).

## Syntax

```javascript
expression.GetText();
```

`expression` - A variable that represents an [ApiSignatureForm](../ApiSignatureForm.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string

## Example

Read the text content of a signature form in a document.

```javascript editor-forms
// How do I get the plain text held inside a signature form in a document?

// Extract what is written inside a signature form to display it in a document.

let doc = Api.GetDocument();
let signatureForm = Api.CreateSignatureForm({"key": "Signature", "tip": "Please sign here", "placeholder": "Signature"});
let paragraph = doc.GetElement(0);
paragraph.AddElement(signatureForm);
let text = signatureForm.GetText();
paragraph = Api.CreateParagraph();
paragraph.AddText("Form text: " + text);
doc.Push(paragraph);
```
