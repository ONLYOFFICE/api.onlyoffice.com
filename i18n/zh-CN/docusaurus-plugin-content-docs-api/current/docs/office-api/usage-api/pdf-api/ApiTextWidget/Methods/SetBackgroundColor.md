# SetBackgroundColor

设置控件背景颜色。

继承自 [ApiBaseWidget.SetBackgroundColor](../../ApiBaseWidget/Methods/SetBackgroundColor.md)。

## 示例

获取 PDF 文档中的所有字段控件并为其设置背景颜色。

```javascript editor-pdf
// How do I set background color in a PDF document?

// Set background color using a widget object in a PDF document.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

textField.SetValue('Example text');
textField.AddWidget(0, [10, 40, 160, 60]);
let widgets = textField.GetAllWidgets();
let rgbColor = Api.RGB(255, 100, 0);
widgets.forEach(function(widget) {
    widget.SetBackgroundColor(rgbColor);
});
```
