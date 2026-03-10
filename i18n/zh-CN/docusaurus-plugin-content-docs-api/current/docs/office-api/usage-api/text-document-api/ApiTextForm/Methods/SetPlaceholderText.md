# SetPlaceholderText

设置当前表单的占位符文本。
*不能设置为复选框或单选按钮。*

## 语法

```javascript
expression.SetPlaceholderText(sText);
```

`expression` - 表示 [ApiTextForm](../ApiTextForm.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sText | 必需 | string |  | 将设置到当前表单的文本。 |

## 返回值

boolean

## 示例

此示例为表单设置占位符文本。

```javascript editor-docx
// Add text as a placeholder of the form.

// Create a text form and set its placeholder text.

let doc = Api.GetDocument();
let textForm = Api.CreateTextForm({"key": "Personal information", "tip": "Enter your first name", "required": true, "comb": true, "maxCharacters": 10, "cellWidth": 3, "multiLine": false, "autoFit": false});
let paragraph = doc.GetElement(0);
paragraph.AddElement(textForm);
textForm.SetPlaceholderText("First name");
```
