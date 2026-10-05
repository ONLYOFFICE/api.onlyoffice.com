# GetPlaceholderText

Returns the placeholder text from the current form.

Inherited from [ApiFormBase.GetPlaceholderText](../../ApiFormBase/Methods/GetPlaceholderText.md).

## Syntax

```javascript
expression.GetPlaceholderText();
```

`expression` - A variable that represents an [ApiComboBoxForm](../ApiComboBoxForm.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string

## Example

Read the placeholder text shown inside a combo box form in a document.

```javascript editor-docx
// How do I find out what placeholder text a combo box form displays in a document?

// Confirm the instructional hint text is set correctly by reading it back from the form.

let doc = Api.GetDocument();
let comboBoxForm = Api.CreateComboBoxForm({"key": "Personal information", "tip": "Choose your country", "required": true, "editable": false, "autoFit": false, "items": ["Latvia", "USA", "UK"]});
let paragraph = doc.GetElement(0);
paragraph.AddElement(comboBoxForm);
comboBoxForm.SetPlaceholderText("Country");
let placeholderText = comboBoxForm.GetPlaceholderText();
paragraph = Api.CreateParagraph();
paragraph.AddText("Placeholder text: " + placeholderText);
doc.Push(paragraph);
```
