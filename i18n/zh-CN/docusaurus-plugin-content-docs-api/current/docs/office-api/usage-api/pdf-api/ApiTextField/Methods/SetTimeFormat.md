# SetTimeFormat

设置字段的时间格式。

## 语法

```javascript
expression.SetTimeFormat(format);
```

`expression` - 表示 [ApiTextField](../ApiTextField.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| format | 必需 | [TimeFormat](../../Enumeration/TimeFormat.md) |  | 可用时间格式 |

## 返回值

boolean

## 示例

在 PDF 中以一致的格式（如小时和分钟）显示时间。

```javascript editor-pdf
// How do I show time input in a specific format in a PDF?

// Configure time display patterns for a text field in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

textField.SetTimeFormat("h:MM:ss tt");
textField.SetValue("8:45:30");
```
