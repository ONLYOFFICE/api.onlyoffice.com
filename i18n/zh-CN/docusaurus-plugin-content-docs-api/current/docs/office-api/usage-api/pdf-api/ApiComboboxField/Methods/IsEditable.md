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

获取并显示 PDF 文档中组合框字段的可编辑属性。

```javascript editor-pdf
// How to is editable for a combobox field in a PDF document?

// Is editable and display the result in a PDF document.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let comboboxField = Api.CreateComboboxField([10, 10, 160, 30]);
page.AddObject(comboboxField);

comboboxField.SetEditable(true);
comboboxField.SetValue('Editable is: ' + comboboxField.IsEditable());
```
