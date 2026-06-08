# SetSpecialFormat

设置字段的特殊格式。

## 语法

```javascript
expression.SetSpecialFormat(format);
```

`expression` - 表示 [ApiComboboxField](../ApiComboboxField.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| format | 必需 | [PsfFormat](../../Enumeration/PsfFormat.md) |  | 应用于值的格式样式 |

## 返回值

boolean

## 示例

在 PDF 中将字段值格式化为电话号码。

```javascript editor-pdf
// Can I make phone numbers display correctly in a PDF?

// Apply phone number formatting to a field in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let comboboxField = Api.CreateComboboxField([10, 10, 160, 30]);
page.AddObject(comboboxField);

comboboxField.SetSpecialFormat("phone");
comboboxField.SetValue("1234567890");
```
