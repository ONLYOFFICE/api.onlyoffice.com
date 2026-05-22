# SetValue

设置表单字段的值。

## 语法

```javascript
expression.SetValue(value);
```

`expression` - 表示 [ApiFormBase](../ApiFormBase.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| value | 必需 | string \| boolean |  | 要设置的值。 |

## 返回值

boolean

## 示例

```javascript editor-docx
// The SetValue method provides a type-agnostic way to set form values across all form types.

// Set the form value and add the form to a document paragraph.

let doc = Api.GetDocument();
let textForm = Api.CreateTextForm({"key": "Name", "tip": "Enter your name", "required": true, "placeholder": "Your name"});
let paragraph = doc.GetElement(0);
paragraph.AddElement(textForm);
textForm.SetValue("Jane Doe");
```
