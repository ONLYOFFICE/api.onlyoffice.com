# ComboBoxFormPr

Combo box / dropdown list properties.

## Type

Enumeration

## Values

- [FormPrBase](../Enumeration/FormPrBase.md)
- [ComboBoxFormPrBase](../Enumeration/ComboBoxFormPrBase.md)


## Example

This example creates a combo box form with the common and specific combo box form properties.

```javascript editor-pdf
// How to create a combo box form with its properties.

// Create the base properties and apply them to the ApiComboBoxForm object.

let comboBoxFormPr = {"key": "Personal information", "tip": "Choose your country", "required": true, "placeholder": "Country", "editable": false, "autoFit": false, "items": ["Latvia", "USA", "UK"]};
let comboBoxForm = Api.CreateComboBoxForm(comboBoxFormPr);
```
