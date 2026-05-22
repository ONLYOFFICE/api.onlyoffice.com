# SetPlaceholderText

设置当前表单的占位符文本。
*不能设置为复选框或单选按钮。*

## 语法

```javascript
expression.SetPlaceholderText(sText);
```

`expression` - 表示 [ApiFormBase](../ApiFormBase.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sText | 必需 | string |  | 将设置到当前表单的文本。 |

## 返回值

boolean

## 示例

在文档中为表单字段设置占位符文本以指导用户输入。

```javascript editor-forms
// How do I add hint text inside an empty form field in a document?

// Display a prompt inside a field before the user fills it in.

let doc = Api.GetDocument();
let textForm = Api.CreateTextForm({"key": "Personal information", "tip": "Enter your first name", "required": true, "comb": true, "maxCharacters": 10, "cellWidth": 3, "multiLine": false, "autoFit": false});
let paragraph = doc.GetElement(0);
paragraph.AddElement(textForm);
textForm.SetPlaceholderText("First name");
```
