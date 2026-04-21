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

Find out the class type of a combo box form object.

```javascript editor-docx
// How can I get the class type of a combo box form?

// Get the class type of a combo box form and display it in the document.

let doc = Api.GetDocument();
let comboBoxForm = Api.CreateComboBoxForm({"key": "Personal information", "tip": "Choose your country", "required": true, "placeholder": "Country", "editable": false, "autoFit": false, "items": ["Latvia", "USA", "UK"]});
let paragraph = doc.GetElement(0);
paragraph.AddElement(comboBoxForm);
let classType = comboBoxForm.GetClassType();
paragraph = Api.CreateParagraph();
paragraph.AddText("Class type: " + classType);
doc.Push(paragraph);
```
