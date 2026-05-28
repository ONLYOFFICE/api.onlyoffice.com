# GetRect

设置字段矩形。

## 语法

```javascript
expression.GetRect();
```

`expression` - 表示 [ApiBaseWidget](../ApiBaseWidget.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[Rect](../../Enumeration/Rect.md)

## 示例

获取 PDF 中表单字段控件的边界框尺寸。

```javascript editor-pdf
// How do I find the size and position of a widget in a PDF?

// Retrieve the rectangle boundaries of a form field widget in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

let widgets = textField.GetAllWidgets();
console.log(`Annotation rect is: ${widgets[0].GetRect()}`);
```
