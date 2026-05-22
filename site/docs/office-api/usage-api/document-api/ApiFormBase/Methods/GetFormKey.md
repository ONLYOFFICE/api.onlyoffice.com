# GetFormKey

Returns the current form key.

## Syntax

```javascript
expression.GetFormKey();
```

`expression` - A variable that represents a [ApiFormBase](../ApiFormBase.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string

## Example

Retrieve the key assigned to a form field in a document.

```javascript editor-docx
// How do I get the key of a form field in a document?

// Confirm the grouping key of a combo box by reading it back and displaying it.

let doc = Api.GetDocument();
let comboBoxForm = Api.CreateComboBoxForm({"key": "Personal information", "tip": "Choose your country", "required": true, "placeholder": "Country", "editable": false, "autoFit": false, "items": ["Latvia", "USA", "UK"]});
let paragraph = doc.GetElement(0);
paragraph.AddElement(comboBoxForm);
let key = comboBoxForm.GetFormKey();
paragraph = Api.CreateParagraph();
paragraph.AddText("Form key: " + key);
doc.Push(paragraph);
```
