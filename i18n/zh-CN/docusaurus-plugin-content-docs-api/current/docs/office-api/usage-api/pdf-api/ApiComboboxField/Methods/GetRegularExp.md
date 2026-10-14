# GetRegularExp

获取文本控件的正则验证表达式。

## 语法

```javascript
expression.GetRegularExp();
```

`expression` - 表示 [ApiComboboxField](../ApiComboboxField.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

从 PDF 中的组合框字段检索验证模式。

```javascript editor-pdf
// Useful for accessing the validation pattern from a combobox field in a PDF.

// Display what text pattern is required for a combobox field in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let comboboxField = Api.CreateComboboxField([10, 10, 160, 30]);
page.AddObject(comboboxField);

comboboxField.SetRegularExp("\\S+@\\S+\\.\\S+");
comboboxField.SetValue('Combobox field reg exp is: "' + comboboxField.GetRegularExp() + '"');
```
