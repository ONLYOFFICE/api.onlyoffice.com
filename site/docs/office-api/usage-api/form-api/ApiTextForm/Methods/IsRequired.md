# IsRequired

Checks if the current form is required.

Inherited from [ApiFormBase.IsRequired](../../ApiFormBase/Methods/IsRequired.md).

## Syntax

```javascript
expression.IsRequired();
```

`expression` - A variable that represents an [ApiTextForm](../ApiTextForm.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

Check whether a text field must be filled in before submitting a document.

```javascript editor-forms
// How do I find out if a form field is marked as required in a document?

// Verify that a text field is set as mandatory for the reader to complete in a document.

let doc = Api.GetDocument();
let textForm = Api.CreateTextForm({"key": "Personal information", "tip": "Enter your first name", "required": true, "placeholder": "First name", "comb": true, "maxCharacters": 10, "cellWidth": 3, "multiLine": false, "autoFit": false});
let paragraph = doc.GetElement(0);
paragraph.AddElement(textForm);
let required = textForm.IsRequired();
paragraph = Api.CreateParagraph();
paragraph.AddText("The first form from this document is required: " + required);
doc.Push(paragraph);
```
