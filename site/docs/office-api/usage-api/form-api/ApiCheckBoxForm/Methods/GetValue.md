# GetValue

Returns the current state of the checkbox form as a boolean value.

## Syntax

```javascript
expression.GetValue();
```

`expression` - A variable that represents a [ApiCheckBoxForm](../ApiCheckBoxForm.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

Get the checked state of a checkbox form as a boolean value.

```javascript editor-forms
// The GetValue method returns true if the checkbox is checked and false otherwise.

// Check the checkbox form and then read its value to display the state.

let doc = Api.GetDocument();
let checkBoxForm = Api.CreateCheckBoxForm({"key": "Agreement", "tip": "I agree to the terms", "required": true, "placeholder": "Agreement"});
let paragraph = doc.GetElement(0);
paragraph.AddElement(checkBoxForm);
paragraph.AddText(" I agree to the terms");
checkBoxForm.SetValue(true);
let value = checkBoxForm.GetValue();
paragraph = Api.CreateParagraph();
paragraph.AddText("Checkbox value: " + value);
doc.Push(paragraph);
```
