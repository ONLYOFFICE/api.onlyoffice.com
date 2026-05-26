# GetGroupValue

Returns the choice name of the currently selected radio button in the group.
Returns an empty string if the current form is not a radio button or nothing is selected.

## Syntax

```javascript
expression.GetGroupValue();
```

`expression` - A variable that represents a [ApiCheckBoxForm](../ApiCheckBoxForm.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string

## Example

Get the choice name of the currently selected radio button in a group.

```javascript editor-docx
// The GetGroupValue method returns the selected choice name, or an empty string if nothing is selected.

// Create two radio buttons, select one, then read the group value and display it.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let radio1 = Api.CreateCheckBoxForm({"tip": "Select your marital status", "required": true, "placeholder": "Status", "radio": true});
radio1.SetRadioGroup("MaritalStatus");
radio1.SetChoiceName("Married");
paragraph.AddElement(radio1);
paragraph.AddText(" Married");
paragraph.AddLineBreak();
let radio2 = Api.CreateCheckBoxForm({"tip": "Select your marital status", "required": true, "placeholder": "Status", "radio": true});
radio2.SetRadioGroup("MaritalStatus");
radio2.SetChoiceName("Single");
paragraph.AddElement(radio2);
paragraph.AddText(" Single");
radio1.SetGroupValue("Married");
let groupValue = radio1.GetGroupValue();
paragraph = Api.CreateParagraph();
paragraph.AddText("Selected radio button: " + groupValue);
doc.Push(paragraph);
```
