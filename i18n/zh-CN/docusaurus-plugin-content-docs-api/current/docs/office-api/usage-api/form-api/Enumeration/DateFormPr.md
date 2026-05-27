# DateFormPr

日期表单属性。

## 类型

枚举

## 值

- [FormPrBase](../Enumeration/FormPrBase.md)
- [DateFormPrBase](../Enumeration/DateFormPrBase.md)

## 示例

使用通用和特定的日期表单属性创建日期表单。

```javascript editor-forms
// How to create a date form with its properties.

// Create the properties and apply them to the ApiDateForm object.

let dateFormPr = {
	"key": "Nowadays",
	"tip": "Enter current date",
	"required": true,
	"placeholder": "Your date here",
	"format": "mm.dd.yyyy",
	"lang": "en-US"
};
let dateForm = Api.CreateDateForm(dateFormPr);
```
