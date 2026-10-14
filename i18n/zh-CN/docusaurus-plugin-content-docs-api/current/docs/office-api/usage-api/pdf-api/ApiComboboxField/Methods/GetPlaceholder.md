# GetPlaceholder

获取文本字段占位符。

## 语法

```javascript
expression.GetPlaceholder();
```

`expression` - 表示 [ApiComboboxField](../ApiComboboxField.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string

## 示例

从 PDF 中的组合框字段检索占位符文本。

```javascript editor-pdf
// Useful for reading the hint text in a combobox field in a PDF.

// Access the placeholder message displayed in a combobox field in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let comboboxField = Api.CreateComboboxField([10, 10, 160, 30]);
page.AddObject(comboboxField);

comboboxField.SetPlaceholder("Your text here");
comboboxField.SetValue('Combobox field placeholder is: "' + comboboxField.GetPlaceholder() + '"');
```
