# SetTimeFormat

设置字段的时间格式。

## 语法

```javascript
expression.SetTimeFormat(sFormat);
```

`expression` - 表示 [ApiComboboxField](../ApiComboboxField.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sFormat | 必需 | [TimeFormat](../../Enumeration/TimeFormat.md) |  | 可用时间格式 |

## 返回值

boolean

## 示例

This example gets text field and sets time format for it.

```javascript editor-pdf
let doc = Api.GetDocument();
let page = doc.GetPage(0);
let comboboxField = Api.CreateComboboxField([10, 10, 160, 30]);
page.AddObject(comboboxField);

comboboxField.SetTimeFormat("12HR:MM:SS");
comboboxField.SetValue("8:45:30");

```
