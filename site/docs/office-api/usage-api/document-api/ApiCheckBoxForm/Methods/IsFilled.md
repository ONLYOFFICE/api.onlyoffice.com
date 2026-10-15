# IsFilled

Checks if the current form is filled.

Inherited from [ApiFormBase.IsFilled](../../ApiFormBase/Methods/IsFilled.md).

## Syntax

```javascript
expression.IsFilled();
```

`expression` - A variable that represents an [ApiCheckBoxForm](../ApiCheckBoxForm.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

Determine whether a checkbox form has been filled in a document.

```javascript editor-docx
// How do I tell if a checkbox form is filled in a document?

// Compare the filled status of two checkboxes where only one has been selected in a document.

let doc = Api.GetDocument();
let checkBoxForm1 = Api.CreateCheckBoxForm({"key": "Option1", "tip": "Select this option", "required": false, "placeholder": "Option"});
let paragraph = doc.GetElement(0);
paragraph.AddElement(checkBoxForm1);
let checkBoxForm2 = Api.CreateCheckBoxForm({"key": "Option2", "tip": "Select this option", "required": false, "placeholder": "Option"});
paragraph.AddElement(checkBoxForm2);
checkBoxForm2.SetChecked(true);
let filled1 = checkBoxForm1.IsFilled();
let filled2 = checkBoxForm2.IsFilled();
paragraph = Api.CreateParagraph();
paragraph.AddText("The first checkbox form is filled: " + filled1);
doc.Push(paragraph);
paragraph = Api.CreateParagraph();
paragraph.AddText("The second checkbox form is filled: " + filled2);
doc.Push(paragraph);
```
