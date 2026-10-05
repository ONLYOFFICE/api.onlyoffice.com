# SetPlaceholderText

设置当前表单的占位符文本。

:::note
无法为复选框或单选按钮表单设置占位符文本。
:::

继承自 [ApiFormBase.SetPlaceholderText](../../ApiFormBase/Methods/SetPlaceholderText.md)。

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

在文档中为文本字段添加占位符文本。

```javascript editor-docx
// How do I display hint text inside a text field before the user starts typing in a document?

// Guide users by placing descriptive hint text inside an empty text field in a document.

let doc = Api.GetDocument();
let textForm = Api.CreateTextForm({"key": "Personal information", "tip": "Enter your first name", "required": true, "comb": true, "maxCharacters": 10, "cellWidth": 3, "multiLine": false, "autoFit": false});
let paragraph = doc.GetElement(0);
paragraph.AddElement(textForm);
textForm.SetPlaceholderText("First name");
```
