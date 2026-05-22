# IsEditable

检查字段是否可编辑。

## 语法

```javascript
expression.IsEditable();
```

`expression` - 表示 [ApiComboboxField](../ApiComboboxField.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

检查 PDF 中的组合框字段是否允许用户编辑。

```javascript editor-pdf
// How do I enable or check if a combobox field is editable in a PDF?

// Set a field to editable and display its editable state in the PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let comboboxField = Api.CreateComboboxField([10, 10, 160, 30]);
page.AddObject(comboboxField);

comboboxField.SetEditable(true);
comboboxField.SetValue('Editable is: ' + comboboxField.IsEditable());
```
