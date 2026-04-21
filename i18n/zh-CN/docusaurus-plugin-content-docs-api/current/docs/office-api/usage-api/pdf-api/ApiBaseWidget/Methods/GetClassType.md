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

获取 PDF 文档中控件对象的类类型。

```javascript editor-pdf
// How can I get the class type of a widget in a PDF document?

// Get the class type of a widget and display it in the PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

let widgets = textField.GetAllWidgets();
textField.SetValue(widgets[0].GetClassType());
```
