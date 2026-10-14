# GetFormattedValue

获取字段的格式化值。

## 语法

```javascript
expression.GetFormattedValue();
```

`expression` - 表示 [ApiTextField](../ApiTextField.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string

## 示例

获取 PDF 中文本输入字段的格式化值。

```javascript editor-pdf
// Useful for retrieving a currency value as it appears in a PDF text field.

// Read the displayed value of a formatted text field in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
let resultField = Api.CreateTextField([10, 40, 160, 60]);
page.AddObject(textField);
page.AddObject(resultField);

textField.SetNumberFormat(0, "us", "black-minus", "$", true);
textField.SetValue('-1000.50');
resultField.SetValue(textField.GetFormattedValue());
```
