# ToInline

Converts the current form to an inline form.

:::note
A picture form can't be converted to an inline form, as it's always a fixed-size object.
:::

Inherited from [ApiFormBase.ToInline](../../ApiFormBase/Methods/ToInline.md).

## Syntax

```javascript
expression.ToInline();
```

`expression` - A variable that represents an [ApiSignatureForm](../ApiSignatureForm.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

Attempt to switch a signature field to inline layout in a document.

```javascript editor-docx
// How do I check whether a signature field can be converted to an inline element in a document?

// Confirm that a signature field stays fixed even after trying to make it inline in a document.

let doc = Api.GetDocument();
let signatureForm = Api.CreateSignatureForm({"key": "Signature", "tip": "Please sign here", "placeholder": "Signature"});
let paragraph = doc.GetElement(0);
paragraph.AddElement(signatureForm);
doc.Push(paragraph);
signatureForm.ToInline();
let fixed = signatureForm.IsFixed();
paragraph = Api.CreateParagraph();
paragraph.AddText("The signature form is still fixed after calling ToInline: " + fixed);
doc.Push(paragraph);
```
