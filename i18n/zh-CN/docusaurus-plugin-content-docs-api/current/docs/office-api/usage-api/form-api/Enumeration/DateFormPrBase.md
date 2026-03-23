# DateFormPrBase

特定日期表单属性。

## 类型

对象

## 属性

| 名称 | 类型 | 描述 |
| ---- | ---- | ----------- |
| format | string | 日期格式，例如：mm.dd.yyyy |
| lang | string | 日期语言。此参数的可能值是由 RFC 4646/BCP 47 定义的语言标识符。示例：「en-CA」。 |


## 示例

This example creates a date form with the specific date form properties.

```javascript editor-forms
// How to create a date form with its base properties.

// Create the base properties and apply them to the ApiDateForm object.

let dateFormPrBase = {
	"format": "mm.dd.yyyy",
	"lang": "en-US"
};
let dateForm = Api.CreateDateForm(dateFormPrBase);

```
