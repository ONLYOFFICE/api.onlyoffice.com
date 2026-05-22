# GetClassType

Returns a type of the ApiComboBoxForm class.

## Syntax

```javascript
expression.GetClassType();
```

`expression` - A variable that represents a [ApiComboBoxForm](../ApiComboBoxForm.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

"comboBoxForm"

## Example

Identify the class type of a combo box form in a document.

```javascript editor-docx
// How do I check what class type a combo box form belongs to in a document?

// Distinguish a combo box form from other form objects by reading its type label.

let doc = Api.GetDocument();
let comboBoxForm = Api.CreateComboBoxForm({"key": "Personal information", "tip": "Choose your country", "required": true, "placeholder": "Country", "editable": false, "autoFit": false, "items": ["Latvia", "USA", "UK"]});
let paragraph = doc.GetElement(0);
paragraph.AddElement(comboBoxForm);
let classType = comboBoxForm.GetClassType();
paragraph = Api.CreateParagraph();
paragraph.AddText("Class type: " + classType);
doc.Push(paragraph);
```
