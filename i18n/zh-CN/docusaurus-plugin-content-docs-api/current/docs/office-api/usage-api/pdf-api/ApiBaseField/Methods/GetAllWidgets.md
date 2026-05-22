# GetAllWidgets

获取当前字段的控件数组。

## 语法

```javascript
expression.GetAllWidgets();
```

`expression` - 表示 [ApiBaseField](../ApiBaseField.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiWidget](../../Enumeration/ApiWidget.md)[]

## 示例

访问 PDF 中表单字段的所有视觉实例。

```javascript editor-pdf
// How can I retrieve every visual representation of a form field in a PDF?

// Modify the appearance of all form field widgets in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

textField.SetValue('Example text');
textField.AddWidget(0, [10, 40, 160, 60]);
let widgets = textField.GetAllWidgets();
let rgbColor = Api.RGB(255, 100, 0);
widgets.forEach(function(widget) {
    widget.SetBorderColor(rgbColor);
});
```
