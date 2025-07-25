# IsRadioButton

Checks if the current checkbox is a radio button.

## Syntax

```javascript
expression.IsRadioButton();
```

`expression` - A variable that represents a [ApiCheckBoxForm](../ApiCheckBoxForm.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

This example checks if the current checkbox is a radio button.

```javascript editor-docx
// How to know whether the checkbox form is radio button.

// Get a boolean value representing whether a current form is a radio button or not.

let doc = Api.GetDocument();
let checkBoxForm = Api.CreateCheckBoxForm({"key": "Marital status", "tip": "Specify your marital status", "required": true, "placeholder": "Marital status", "radio": true});
let paragraph = doc.GetElement(0);
paragraph.AddElement(checkBoxForm);
paragraph.AddText(" Married");
paragraph.AddLineBreak();
checkBoxForm = Api.CreateCheckBoxForm({"key": "Marital status", "tip": "Specify your marital status", "required": true, "placeholder": "Marital status", "radio": true});
paragraph.AddElement(checkBoxForm);
paragraph.AddText(" Single");
let radioButton = checkBoxForm.IsRadioButton();
paragraph = Api.CreateParagraph();
paragraph.AddText("The second form from this document is a radio button: " + radioButton);
doc.Push(paragraph);
```
