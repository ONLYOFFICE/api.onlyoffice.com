# ClearFormat

清除字段的格式。

## 语法

```javascript
expression.ClearFormat();
```

`expression` - 表示 [ApiComboboxField](../ApiComboboxField.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

从 PDF 中的组合框字段移除数字格式。

```javascript editor-pdf
// How do I clear the formatting applied to a combobox field in a PDF?

// Set a number format on a field, then remove the formatting completely.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let comboboxField = Api.CreateComboboxField([10, 10, 160, 30]);
page.AddObject(comboboxField);

comboboxField.SetNumberFormat(0, "us", "black-minus", "$", true);
comboboxField.SetValue('-1000');
comboboxField.ClearFormat();
```
