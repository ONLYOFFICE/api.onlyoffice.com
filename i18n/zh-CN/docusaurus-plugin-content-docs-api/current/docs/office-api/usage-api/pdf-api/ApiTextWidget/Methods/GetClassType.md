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

识别 PDF 中文本输入字段的类型。

```javascript editor-pdf
// How do I determine what kind of form field this is in a PDF?

// Read the classification of a text widget element in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let comboboxField = Api.CreateComboboxField([10, 10, 160, 30]);
page.AddObject(comboboxField);

let widgets = comboboxField.GetAllWidgets();
comboboxField.SetValue(widgets[0].GetClassType());
```
