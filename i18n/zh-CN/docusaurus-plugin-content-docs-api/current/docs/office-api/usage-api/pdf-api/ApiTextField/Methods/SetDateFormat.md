# SetDateFormat

设置字段的日期格式。

## 语法

```javascript
expression.SetDateFormat(sFormat);
```

`expression` - 表示 [ApiTextField](../ApiTextField.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sFormat | 必需 | string |  | 日期格式（例如 "dd.mm.yyyy"） |

## 返回值

boolean

## 示例

This example gets text field and sets date format for it.

```javascript editor-pdf
let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

textField.SetDateFormat("dd.mm.yyyy");
textField.SetValue("10 january 2015");

```
