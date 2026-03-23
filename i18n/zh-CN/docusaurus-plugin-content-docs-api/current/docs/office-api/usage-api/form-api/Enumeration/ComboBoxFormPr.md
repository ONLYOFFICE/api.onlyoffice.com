# ComboBoxFormPr

组合框/下拉列表属性。

## 类型

枚举

## 值

- [FormPrBase](../Enumeration/FormPrBase.md)
- [ComboBoxFormPrBase](../Enumeration/ComboBoxFormPrBase.md)


## 示例

This example creates a combo box form with the common and specific combo box form properties.

```javascript editor-forms
// How to create a combo box form with its properties.

// Create the base properties and apply them to the ApiComboBoxForm object.

let comboBoxFormPr = {
	"key": "Personal information",
	"tip": "Choose your country",
	"required": true,
	"placeholder": "Country",
	"editable": false,
	"autoFit": false,
	"items": ["Latvia", "USA", "UK"]
};
let comboBoxForm = Api.CreateComboBoxForm(comboBoxFormPr);

```
