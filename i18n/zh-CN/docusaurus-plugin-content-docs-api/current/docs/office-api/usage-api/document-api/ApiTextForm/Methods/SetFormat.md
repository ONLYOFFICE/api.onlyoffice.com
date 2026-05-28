# SetFormat

设置当前文本字段的格式。

## 语法

```javascript
expression.SetFormat(format);
```

`expression` - 表示 [ApiTextForm](../ApiTextForm.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| format | 必需 | [TextFormFormat](../../Enumeration/TextFormFormat.md) |  | 要设置的格式。 |

## 返回值

boolean

## 示例

为文档中的文本字段分配输入格式。

```javascript editor-docx
// How do I restrict a text field to accept only a certain type of input in a document?

// Enforce a structured input pattern on a text field to guide user entries in a document.

let doc = Api.GetDocument();
let textForm = Api.CreateTextForm({ key: "Phone", placeholder: "Enter digits" });
textForm.SetFormat({ type: "digit" });
let paragraph = doc.GetElement(0);
paragraph.AddText("Text form with digit format: ");
paragraph.Push(textForm);
```
