# SetMultiline

指定当前文本字段是否应为多行。

## 语法

```javascript
expression.SetMultiline(bMultiline);
```

`expression` - 表示 [ApiTextForm](../ApiTextForm.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| bMultiline | 必需 | boolean |  | 定义当前文本字段是否为多行（true）或单行（false）。 |

## 返回值

boolean

## 示例

允许文档中的文本字段跨越多行。

```javascript editor-forms
// How do I enable a text field to accept line breaks and wrap across multiple rows in a document?

// Expand a text field so users can enter longer responses across several lines in a document.

let doc = Api.GetDocument();
let textForm = Api.CreateTextForm({"key": "Personal information", "tip": "Enter your first name", "required": true, "placeholder": "First name", "autoFit": false});
let paragraph = doc.GetElement(0);
paragraph.AddElement(textForm);
textForm.ToFixed(3 * 240, 3 * 240);
textForm.SetMultiline(true);
let multiline = textForm.IsMultiline();
paragraph = Api.CreateParagraph();
paragraph.AddText("The first text form from this document is multiline: " + multiline);
doc.Push(paragraph);
```
