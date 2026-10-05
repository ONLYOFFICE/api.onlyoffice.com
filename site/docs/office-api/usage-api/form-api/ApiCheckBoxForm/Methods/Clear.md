# Clear

Clears the current form.

Inherited from [ApiFormBase.Clear](../../ApiFormBase/Methods/Clear.md).

## Syntax

```javascript
expression.Clear();
```

`expression` - A variable that represents an [ApiCheckBoxForm](../ApiCheckBoxForm.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

Uncheck a checked checkbox form field in a document.

```javascript editor-forms
// How do I reset a checkbox back to its unchecked state in a document?

// Remove a previously selected answer from a radio button group so the form appears blank again in a document.

let doc = Api.GetDocument();
let checkBoxForm = Api.CreateCheckBoxForm({"key": "Marital status", "tip": "Specify your marital status", "required": true, "placeholder": "Marital status", "radio": true});
let paragraph = doc.GetElement(0);
paragraph.AddElement(checkBoxForm);
paragraph.AddText(" Married");
paragraph.AddLineBreak();
checkBoxForm = Api.CreateCheckBoxForm({"key": "Marital status", "tip": "Specify your marital status", "required": true, "placeholder": "Marital status", "radio": true});
paragraph.AddElement(checkBoxForm);
paragraph.AddText(" Single");
checkBoxForm.SetChecked(true);
checkBoxForm.Clear();
paragraph = Api.CreateParagraph();
paragraph.AddText("The second form from this document was cleared.");
doc.Push(paragraph);
```
