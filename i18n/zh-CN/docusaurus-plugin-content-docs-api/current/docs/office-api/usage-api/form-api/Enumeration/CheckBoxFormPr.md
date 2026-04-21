# CheckBoxFormPr

复选框/单选按钮属性。

## 类型

枚举

## 值

- [FormPrBase](../Enumeration/FormPrBase.md)
- [CheckBoxFormPrBase](../Enumeration/CheckBoxFormPrBase.md)

## 示例

创建具有通用和特定复选框表单属性的复选框表单。

```javascript editor-forms
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
