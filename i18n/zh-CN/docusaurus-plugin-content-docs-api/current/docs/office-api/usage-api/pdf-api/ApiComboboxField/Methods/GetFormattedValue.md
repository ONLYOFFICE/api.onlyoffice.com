# GetFormattedValue

获取字段的格式化值。

## 语法

```javascript
expression.GetFormattedValue();
```

`expression` - 表示 [ApiComboboxField](../ApiComboboxField.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string

## 示例

获取 PDF 中组合框字段的格式化值。

```javascript editor-pdf
// Useful for retrieving a currency value as it appears in a PDF combobox field.

// Read the displayed value of a formatted combobox field in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let comboboxField = Api.CreateComboboxField([10, 10, 160, 30]);
let resultField = Api.CreateTextField([10, 40, 160, 60]);
page.AddObject(comboboxField);
page.AddObject(resultField);

comboboxField.SetNumberFormat(0, "us", "black-minus", "$", true);
comboboxField.SetValue('-1000.50');
resultField.SetValue(comboboxField.GetFormattedValue());
```
