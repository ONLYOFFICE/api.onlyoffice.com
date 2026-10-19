# GetTipText

Returns the tip text of the current form.

Inherited from [ApiFormBase.GetTipText](../../ApiFormBase/Methods/GetTipText.md).

## Syntax

```javascript
expression.GetTipText();
```

`expression` - A variable that represents an [ApiComboBoxForm](../ApiComboBoxForm.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string

## Example

Read the tooltip hint text from a combo box form in a document.

```javascript editor-forms
// How do I retrieve the tooltip message shown on a combo box in a document?

// Confirm that the hint text set on a form field matches the expected prompt in a document.

let doc = Api.GetDocument();
let comboBoxForm = Api.CreateComboBoxForm({"key": "Personal information", "tip": "Choose your country", "required": true, "placeholder": "Country", "editable": false, "autoFit": false, "items": ["Latvia", "USA", "UK"]});
let paragraph = doc.GetElement(0);
paragraph.AddElement(comboBoxForm);
let tipText = comboBoxForm.GetTipText();
paragraph = Api.CreateParagraph();
paragraph.AddText("Form tip text: " + tipText);
doc.Push(paragraph);
```
