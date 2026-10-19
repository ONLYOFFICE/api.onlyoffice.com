# SetRequired

Specifies if the current form should be required.

Inherited from [ApiFormBase.SetRequired](../../ApiFormBase/Methods/SetRequired.md).

## Syntax

```javascript
expression.SetRequired(bRequired);
```

`expression` - A variable that represents an [ApiSignatureForm](../ApiSignatureForm.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| bRequired | Required | boolean |  | Defines if the current form is required (true) or not (false). |

## Returns

boolean

## Example

Mark a signature field as required in a document.

```javascript editor-forms
// How do I control whether a signature field must be completed in a document?

// Verify that a signature field remains mandatory regardless of the required setting in a document.

let doc = Api.GetDocument();
let signatureForm = Api.CreateSignatureForm({"key": "Signature", "tip": "Please sign here", "placeholder": "Signature"});
let paragraph = doc.GetElement(0);
paragraph.AddElement(signatureForm);
signatureForm.SetRequired(false);
let required = signatureForm.IsRequired();
paragraph = Api.CreateParagraph();
paragraph.AddText("The first form from this document is required: " + required);
doc.Push(paragraph);
```
