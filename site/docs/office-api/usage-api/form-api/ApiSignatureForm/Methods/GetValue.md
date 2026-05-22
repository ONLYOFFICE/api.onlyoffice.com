# GetValue

Returns the current image of the signature form as a base64 encoded string.

## Syntax

```javascript
expression.GetValue();
```

`expression` - A variable that represents a [ApiSignatureForm](../ApiSignatureForm.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string

## Example

Get the image from a signature form as a base64 encoded string.

```javascript editor-forms
// The GetValue method of ApiSignatureForm returns the signature image data stored in the form.

// Create a signature form, add it to the document, and read its current value.

let doc = Api.GetDocument();
let signatureForm = Api.CreateSignatureForm({"key": "Signature", "tip": "Please sign here", "required": true, "placeholder": "Signature"});
signatureForm.Value = "https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png";
let paragraph = doc.GetElement(0);
paragraph.AddElement(signatureForm);
let value = signatureForm.GetValue();
paragraph = Api.CreateParagraph();
paragraph.AddText("Signature form value: " + value);
doc.Push(paragraph);
```
