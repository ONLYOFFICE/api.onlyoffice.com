# IsFilled

Checks if the current form is filled.

Inherited from [ApiFormBase.IsFilled](../../ApiFormBase/Methods/IsFilled.md).

## Syntax

```javascript
expression.IsFilled();
```

`expression` - A variable that represents an [ApiComboBoxForm](../ApiComboBoxForm.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

Detect whether a combo box form has a value selected or entered in a document.

```javascript editor-docx
// How do I tell if a combo box form field has been filled in a document?

// Compare an empty combo box against a populated one to verify their fill status in a document.

let doc = Api.GetDocument();
let comboBoxForm1 = Api.CreateComboBoxForm({"key": "Country1", "tip": "Choose your country", "required": true, "placeholder": "Country", "editable": true, "autoFit": false, "items": ["Latvia", "USA", "UK"]});
let paragraph = doc.GetElement(0);
paragraph.AddElement(comboBoxForm1);
let comboBoxForm2 = Api.CreateComboBoxForm({"key": "Country2", "tip": "Choose your country", "required": true, "placeholder": "Country", "editable": true, "autoFit": false, "items": ["Latvia", "USA", "UK"]});
paragraph.AddElement(comboBoxForm2);
comboBoxForm2.SetText("Latvia");
let filled1 = comboBoxForm1.IsFilled();
let filled2 = comboBoxForm2.IsFilled();
paragraph = Api.CreateParagraph();
paragraph.AddText("The first combobox form is filled: " + filled1);
doc.Push(paragraph);
paragraph = Api.CreateParagraph();
paragraph.AddText("The second combobox form is filled: " + filled2);
doc.Push(paragraph);
```
