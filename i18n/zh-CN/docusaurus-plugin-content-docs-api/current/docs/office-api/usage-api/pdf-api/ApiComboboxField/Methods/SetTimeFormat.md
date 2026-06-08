# SetTimeFormat

设置字段的时间格式。

## 语法

```javascript
expression.SetTimeFormat(format);
```

`expression` - 表示 [ApiComboboxField](../ApiComboboxField.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| format | 必需 | [TimeFormat](../../Enumeration/TimeFormat.md) |  | 可用时间格式 |

## 返回值

boolean

## 示例

在 PDF 中以小时、分钟和秒显示时间。

```javascript editor-pdf
// Can I control the time display format in a PDF?

// Show times using a 12-hour or 24-hour format in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let comboboxField = Api.CreateComboboxField([10, 10, 160, 30]);
page.AddObject(comboboxField);

comboboxField.SetTimeFormat("h:MM:ss tt");
comboboxField.SetValue("8:45:30");
```
