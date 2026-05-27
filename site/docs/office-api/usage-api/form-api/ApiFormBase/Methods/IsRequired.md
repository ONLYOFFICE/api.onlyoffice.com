# IsRequired

Checks if the current form is required.

## Syntax

```javascript
expression.IsRequired();
```

`expression` - A variable that represents a [ApiFormBase](../ApiFormBase.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

Determine whether a form field is marked as mandatory in a document.

```javascript editor-forms
// How do I check if a form field must be filled out before the document is submitted in a document?

// Confirm whether a form field is required so the result can be shown to the reader in a document.

let doc = Api.GetDocument();
let textForm = Api.CreateTextForm({"key": "Personal information", "tip": "Enter your first name", "required": true, "placeholder": "First name", "comb": true, "maxCharacters": 10, "cellWidth": 3, "multiLine": false, "autoFit": false});
let paragraph = doc.GetElement(0);
paragraph.AddElement(textForm);
let required = textForm.IsRequired();
paragraph = Api.CreateParagraph();
paragraph.AddText("The first form from this document is required: " + required);
doc.Push(paragraph);
```
