# Clear

Clears the current form.

Inherited from [ApiFormBase.Clear](../../ApiFormBase/Methods/Clear.md).

## Syntax

```javascript
expression.Clear();
```

`expression` - A variable that represents an [ApiSignatureForm](../ApiSignatureForm.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

Remove all content from a signature field in a document.

```javascript editor-forms
// How do I erase everything entered into a signature field in a document?

// Reset a signature field to its empty state in a document.

let doc = Api.GetDocument();
let signatureForm = Api.CreateSignatureForm({"key": "Signature", "tip": "Please sign here", "placeholder": "Signature"});
let paragraph = doc.GetElement(0);
paragraph.AddElement(signatureForm);
signatureForm.SetImage("https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png");
signatureForm.Clear();
paragraph = Api.CreateParagraph();
paragraph.AddText("The signature form has been cleared.");
doc.Push(paragraph);
```
