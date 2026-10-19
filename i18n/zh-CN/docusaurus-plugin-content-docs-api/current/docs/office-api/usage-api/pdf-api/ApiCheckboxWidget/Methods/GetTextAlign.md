# GetTextAlign

获取控件文本对齐方式。

继承自 [ApiBaseWidget.GetTextAlign](../../ApiBaseWidget/Methods/GetTextAlign.md)。

## 语法

```javascript
expression.GetTextAlign();
```

`expression` - 表示 [ApiCheckboxWidget](../ApiCheckboxWidget.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[WidgetTextAlign](../../Enumeration/WidgetTextAlign.md) \| undefined

## 示例

获取 PDF 中表单字段控件的文本对齐方式。

```javascript editor-pdf
// How do I retrieve the text alignment of a widget in a PDF?

// Read and display the text alignment setting of a form field widget in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

textField.AddWidget(0, [10, 40, 160, 60]);
let widgets = textField.GetAllWidgets();
widgets.forEach(function(widget) {
    widget.SetTextAlign('center');
});
let textAlign = widgets[0].GetTextAlign();
textField.SetValue('Widget text alignment is: ' + textAlign);
```
