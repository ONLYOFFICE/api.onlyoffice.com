# IsFixed

Checks if the current form is fixed size.

Inherited from [ApiFormBase.IsFixed](../../ApiFormBase/Methods/IsFixed.md).

## Syntax

```javascript
expression.IsFixed();
```

`expression` - A variable that represents an [ApiComboBoxForm](../ApiComboBoxForm.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

Verify whether a combo box form has a fixed size and position in a document.

```javascript editor-forms
// How do I check if a combo box form is locked to a fixed frame in a document?

// Confirm that converting a combo box to fixed mode is reflected when reading its state in a document.

let doc = Api.GetDocument();
let comboBoxForm = Api.CreateComboBoxForm({"key": "Personal information", "tip": "Choose your country", "required": true, "placeholder": "Country", "editable": false, "autoFit": false, "items": ["Latvia", "USA", "UK"]});
let paragraph = doc.GetElement(0);
paragraph.AddElement(comboBoxForm);
comboBoxForm.ToFixed(7 * 240, 2 * 240);
let fixed = comboBoxForm.IsFixed();
paragraph = Api.CreateParagraph();
paragraph.AddText("The first form from this document is fixed: " + fixed);
doc.Push(paragraph);
```
