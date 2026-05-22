# GetClassType

返回 ApiBaseWidget 类的类型。

## 语法

```javascript
expression.GetClassType();
```

`expression` - 表示 [ApiBaseWidget](../ApiBaseWidget.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

"baseWidget"

## 示例

获取 PDF 中控件的类型分类。

```javascript editor-pdf
// How do I identify what kind of widget this is in a PDF?

// Determine the class category of a form field widget in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

let widgets = textField.GetAllWidgets();
textField.SetValue(widgets[0].GetClassType());
```
