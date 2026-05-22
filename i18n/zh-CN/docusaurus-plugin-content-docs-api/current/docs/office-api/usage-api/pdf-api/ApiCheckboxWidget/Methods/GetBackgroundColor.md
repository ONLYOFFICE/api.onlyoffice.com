# GetBackgroundColor

获取控件背景颜色。

继承自 [ApiBaseWidget.GetBackgroundColor](../../ApiBaseWidget/Methods/GetBackgroundColor.md)。

## 示例

读取 PDF 中表单字段控件的背景颜色。

```javascript editor-pdf
// How do I get the background color of a widget in a PDF?

// Retrieve and display the fill color of a form field in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

textField.AddWidget(0, [10, 40, 160, 60]);
let widgets = textField.GetAllWidgets();
let rgbColor = Api.RGB(255, 100, 0);
widgets.forEach(function(widget) {
    widget.SetBackgroundColor(rgbColor);
});
let bgColor = widgets[0].GetBackgroundColor();
textField.SetValue('Widgets background color is: ' + bgColor.R + ',' + bgColor.G + ',' + bgColor.B);
```
