# SetBorderStyle

设置控件边框样式。

继承自 [ApiBaseWidget.SetBorderStyle](../../ApiBaseWidget/Methods/SetBorderStyle.md)。

## 示例

在 PDF 文档中设置字段控件的边框样式。

```javascript editor-pdf
// How can I set border style using a widget in a PDF document?

// Set border style for a widget in a PDF document.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

textField.AddWidget(0, [10, 40, 160, 60]);
let widgets = textField.GetAllWidgets();
let rgbColor = Api.RGB(255, 100, 0);
widgets.forEach(function(widget) {
    widget.SetBorderColor(rgbColor);
    widget.SetBorderStyle('inset');
});
```
