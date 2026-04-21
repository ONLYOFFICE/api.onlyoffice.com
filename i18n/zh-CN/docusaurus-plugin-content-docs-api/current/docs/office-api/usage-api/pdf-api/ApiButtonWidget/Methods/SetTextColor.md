# SetTextColor

设置控件文本颜色。

继承自 [ApiBaseWidget.SetTextColor](../../ApiBaseWidget/Methods/SetTextColor.md)。

## 示例

获取 PDF 文档中的所有字段控件并为其设置文本颜色。

```javascript editor-pdf
// How can I set text color using a widget in a PDF document?

// Set text color for a widget in a PDF document.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

textField.SetValue('Example text');
textField.AddWidget(0, [10, 40, 160, 60]);
let widgets = textField.GetAllWidgets();
let rgbColor = Api.RGB(255, 100, 0);
widgets.forEach(function(widget) {
    widget.SetTextColor(rgbColor);
});
```
