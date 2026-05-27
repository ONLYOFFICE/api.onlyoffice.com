# GetRadioGroup

Returns the radio group key if the current checkbox is a radio button.

## Syntax

```javascript
expression.GetRadioGroup();
```

`expression` - A variable that represents a [ApiCheckBoxForm](../ApiCheckBoxForm.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string

## Example

Retrieve the radio group name that links related radio buttons together in a document.

```javascript editor-forms
// How do I find out which radio group a checkbox button belongs to in a document?

// Confirm that multiple radio buttons share the same group so only one can be selected at a time in a document.

let doc = Api.GetDocument();
let checkBoxForm = Api.CreateCheckBoxForm({"tip": "Specify your marital status", "required": true, "placeholder": "Marital status", "radio": true});
checkBoxForm.SetRadioGroup("Marital status");
let paragraph = doc.GetElement(0);
paragraph.AddElement(checkBoxForm);
paragraph.AddText(" Married");
paragraph.AddLineBreak();
checkBoxForm = Api.CreateCheckBoxForm({"tip": "Specify your marital status", "required": true, "placeholder": "Marital status", "radio": true});
checkBoxForm.SetRadioGroup("Marital status");
paragraph.AddElement(checkBoxForm);
paragraph.AddText(" Single");
let radioGroup = checkBoxForm.GetRadioGroup();
paragraph = Api.CreateParagraph();
paragraph.AddText("Radio group name of the radio buttons in this document: " + radioGroup);
doc.Push(paragraph);
```
