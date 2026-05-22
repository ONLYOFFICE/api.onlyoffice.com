# SetValue

设置复选框表单的状态。

## 语法

```javascript
expression.SetValue(value);
```

`expression` - 表示 [ApiCheckBoxForm](../ApiCheckBoxForm.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| value | 必需 | boolean |  | 指定复选框是否选中（true）或未选中（false）。 |

## 返回值

boolean

## 示例

```javascript editor-forms
// The SetValue method accepts a boolean: true to check the box, false to uncheck it.

// Create a checkbox form and mark it as checked using SetValue.

let doc = Api.GetDocument();
let checkBoxForm = Api.CreateCheckBoxForm({"key": "Agreement", "tip": "I agree to the terms", "required": true, "placeholder": "Agreement"});
let paragraph = doc.GetElement(0);
paragraph.AddElement(checkBoxForm);
paragraph.AddText(" I agree to the terms");
checkBoxForm.SetValue(true);
```
