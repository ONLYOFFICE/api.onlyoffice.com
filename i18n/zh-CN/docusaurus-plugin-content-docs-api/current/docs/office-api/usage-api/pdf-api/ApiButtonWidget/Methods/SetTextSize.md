# SetTextSize

设置控件文本大小。
💡 文本大小 === 0 表示自动适应

继承自 [ApiBaseWidget.SetTextSize](../../ApiBaseWidget/Methods/SetTextSize.md)。

## 示例

设置 PDF 中输入字段控件的文本大小。

```javascript editor-pdf
// How do I change the font size of text in form fields in a PDF?

// Adjust the text display size for all widgets in a PDF.

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
    widget.SetTextSize(15);
});
```
