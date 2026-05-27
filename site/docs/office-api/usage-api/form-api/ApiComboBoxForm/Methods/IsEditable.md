# IsEditable

Checks if the combo box text can be edited. If it is not editable, then this form is a drop-down list.

## Syntax

```javascript
expression.IsEditable();
```

`expression` - A variable that represents a [ApiComboBoxForm](../ApiComboBoxForm.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

Determine whether users can type custom text into a combo box form in a document.

```javascript editor-forms
// How do I check if a combo box form allows free-text input in a document?

// Show whether a combo box restricts selection to preset options or permits manual entry in a document.

let doc = Api.GetDocument();
let comboBoxForm = Api.CreateComboBoxForm({"key": "Personal information", "tip": "Choose your country", "required": true, "placeholder": "Country", "editable": false, "autoFit": false, "items": ["Latvia", "USA", "UK"]});
let paragraph = doc.GetElement(0);
paragraph.AddElement(comboBoxForm);
let editable = comboBoxForm.IsEditable();
paragraph = Api.CreateParagraph();
paragraph.AddText("The first combo box from this document is editable: " + editable);
doc.Push(paragraph);
```
