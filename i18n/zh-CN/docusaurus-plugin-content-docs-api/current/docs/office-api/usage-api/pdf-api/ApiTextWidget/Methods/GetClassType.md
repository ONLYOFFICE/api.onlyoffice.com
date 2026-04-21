# GetClassType

返回 ApiTextWidget 类的类型。

## 语法

```javascript
expression.GetClassType();
```

`expression` - 表示 [ApiTextWidget](../ApiTextWidget.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

"textWidget"

## 示例

检查 PDF 文档中文本控件返回的类类型。

```javascript editor-pdf
// How do I check what type a text widget object is in a PDF document?

// Retrieve and output the class type string for a text widget in a PDF document.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let comboboxField = Api.CreateComboboxField([10, 10, 160, 30]);
page.AddObject(comboboxField);

let widgets = comboboxField.GetAllWidgets();
comboboxField.SetValue(widgets[0].GetClassType());
```
