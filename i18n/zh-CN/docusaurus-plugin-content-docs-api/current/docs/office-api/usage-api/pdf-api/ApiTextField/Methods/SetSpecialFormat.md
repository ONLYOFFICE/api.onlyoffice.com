# SetSpecialFormat

设置字段的特殊格式。

## 语法

```javascript
expression.SetSpecialFormat(format);
```

`expression` - 表示 [ApiTextField](../ApiTextField.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| format | 必需 | [PsfFormat](../../Enumeration/PsfFormat.md) |  | 应用于值的格式样式 |

## 返回值

boolean

## 示例

在 PDF 中为文本字段应用预定义格式（如电话号码）。

```javascript editor-pdf
// How do I automatically format phone numbers and social security numbers in a PDF?

// Use built-in formats to style user input in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

textField.SetSpecialFormat("phone");
textField.SetValue("1234567890");
```
