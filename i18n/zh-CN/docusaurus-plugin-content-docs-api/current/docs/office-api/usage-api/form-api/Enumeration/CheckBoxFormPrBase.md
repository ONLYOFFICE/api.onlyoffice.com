# CheckBoxFormPrBase

特定复选框/单选按钮属性。

## 类型

对象

## 属性

| 名称 | 类型 | 描述 |
| ---- | ---- | ----------- |
| radio | boolean | 指定当前复选框是否为单选按钮。在这种情况下，key 参数被视为单选按钮组的标识符。 |


## 示例

This example creates a checkbox form with the specific checkbox form properties.

```javascript editor-forms
// How to create a checkbox form with its base properties.

// Create the base properties and apply them to the ApiCheckBoxForm object.

let checkBoxFormPrBase = {"radio": true};
let checkBoxForm = Api.CreateCheckBoxForm(checkBoxFormPrBase)
```
