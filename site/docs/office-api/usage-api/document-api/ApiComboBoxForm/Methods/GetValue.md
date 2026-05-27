# GetValue

Returns the current text value of the combo box form.

## Syntax

```javascript
expression.GetValue();
```

`expression` - A variable that represents a [ApiComboBoxForm](../ApiComboBoxForm.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string

## Example

Get the selected value from a combo box form in a document.

```javascript editor-docx
// The GetValue method returns the currently selected or entered text in the combo box.

// Set list values and select one, then read it back and display it in the document.

let doc = Api.GetDocument();
let comboBoxForm = Api.CreateComboBoxForm({"key": "Department", "tip": "Select your department", "required": true, "placeholder": "Department", "editable": false, "list": ["HR", "Engineering", "Marketing"]});
let paragraph = doc.GetElement(0);
paragraph.AddElement(comboBoxForm);
comboBoxForm.SetListValues(["HR", "Engineering", "Marketing"]);
comboBoxForm.SetValue("Engineering");
let value = comboBoxForm.GetValue();
paragraph = Api.CreateParagraph();
paragraph.AddText("Selected department: " + value);
doc.Push(paragraph);
```
