# FormPrBase

通用表单属性。

## 类型

对象

## 属性

| 名称 | 类型 | 描述 |
| ---- | ---- | ----------- |
| key | string | 表单键。 |
| placeholder | string | 表单占位符文本。 |
| required | boolean | 指定表单是否为必填项。 |
| role | string | 填写表单的角色。 |
| tag | string | 表单标记。 |
| tip | string | 表单提示文本。 |


## 示例

This example creates a text form with the common form properties.

```javascript editor-forms
// How to create a text form using its base properties.

// Create the base properties and apply them to the ApiTextForm object.

let formPrBase = {
	"key": "Personal information",
	"tip": "Enter your first name",
	"required": true,
	"placeholder": "First name"
};
let textForm = Api.CreateTextForm(formPrBase);

```
