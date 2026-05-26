# SetValue

设置文本表单的文本值。

## 语法

```javascript
expression.SetValue(value);
```

`expression` - 表示 [ApiTextForm](../ApiTextForm.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| value | 必需 | string |  | 要设置的文本值。 |

## 返回值

boolean

## 示例

```javascript editor-docx
// The SetValue method fills the text form with the given string value.

// Create a text form, set its value, and add it to the first paragraph.

let doc = Api.GetDocument();
let textForm = Api.CreateTextForm({"key": "Personal information", "tip": "Enter your first name", "required": true, "placeholder": "First name", "multiLine": false, "autoFit": false});
let paragraph = doc.GetElement(0);
paragraph.AddElement(textForm);
textForm.SetValue("John Smith");
```
