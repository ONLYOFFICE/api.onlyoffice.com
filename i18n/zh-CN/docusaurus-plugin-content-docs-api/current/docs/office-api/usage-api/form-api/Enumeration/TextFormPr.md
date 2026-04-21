# TextFormPr

文本字段属性。

## 类型

枚举

## 值

- [FormPrBase](../Enumeration/FormPrBase.md)
- [TextFormPrBase](../Enumeration/TextFormPrBase.md)

## 示例

指定通用和特定属性创建文本表单。

```javascript editor-forms
// Set text form properties like tip text, placeholder, and characters limit.

// Create a text form with properties.

let textFormPr = {
	"key": "Personal information",
	"tip": "Enter your first name",
	"required": true,
	"placeholder": "First name",
	"comb": true,
	"maxCharacters": 10,
	"cellWidth": 3,
	"multiLine": false,
	"autoFit": false
};
let textForm = Api.CreateTextForm(textFormPr);
```
