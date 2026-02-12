# CheckBoxFormPr

Checkbox / radio button properties.

## Type

Enumeration

## Values

- [FormPrBase](../Enumeration/FormPrBase.md)
- [CheckBoxFormPrBase](../Enumeration/CheckBoxFormPrBase.md)


## Example

This example creates a checkbox form with the common and specific checkbox form properties.

```javascript editor-pdf playground
// How to create a checkbox form with its properties.

// Create the checkbox properties and apply them to the ApiCheckBoxForm object.

let checkBoxFormPr = {
	"key": "Marital status",
	"tip": "Specify your marital status",
	"required": true,
	"placeholder": "Marital status",
	"radio": true
};
let checkBoxForm = Api.CreateCheckBoxForm(checkBoxFormPr);
```
