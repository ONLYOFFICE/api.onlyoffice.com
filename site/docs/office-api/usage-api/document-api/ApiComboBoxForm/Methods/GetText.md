# GetText

Returns the text from the current form.

Inherited from [ApiFormBase.GetText](../../ApiFormBase/Methods/GetText.md).

## Syntax

```javascript
expression.GetText();
```

`expression` - A variable that represents an [ApiComboBoxForm](../ApiComboBoxForm.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string

## Example

Read the current text value of a combo box form in a document.

```javascript editor-docx
// How do I get the text currently shown in a combo box form in a document?

// Check what value a user has selected or entered by reading the combo box text.

let doc = Api.GetDocument();
let comboBoxForm = Api.CreateComboBoxForm({"key": "Personal information", "tip": "Choose your country", "required": true, "placeholder": "Country", "editable": false, "autoFit": false, "items": ["Latvia", "USA", "UK"]});
let paragraph = doc.GetElement(0);
paragraph.AddElement(comboBoxForm);
let text = comboBoxForm.GetText();
paragraph = Api.CreateParagraph();
paragraph.AddText("Form text: " + text);
doc.Push(paragraph);
```
