# SetDateFormat

设置字段的日期格式。

## 语法

```javascript
expression.SetDateFormat(format);
```

`expression` - 表示 [ApiTextField](../ApiTextField.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| format | 必需 | string |  | 日期格式（例如 “dd.mm.yyyy”） |

## 返回值

boolean

## 示例

在 PDF 文本字段中按用户期望的方式格式化日期。

```javascript editor-pdf
// How do I make sure dates display in a specific format in a PDF?

// Apply a date format pattern to a text field in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

textField.SetDateFormat("dd.mm.yyyy");
textField.SetValue("10 january 2015");
```
