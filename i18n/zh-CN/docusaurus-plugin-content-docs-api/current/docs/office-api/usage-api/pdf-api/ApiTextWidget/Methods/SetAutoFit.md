# SetAutoFit

设置文本自动适应。

继承自 [ApiBaseWidget.SetAutoFit](../../ApiBaseWidget/Methods/SetAutoFit.md)。

## 示例

为 PDF 中所有字段控件启用自动文本适配。

```javascript editor-pdf
// How do I set autofit for field widgets in a PDF?

// Apply autofit to scale text to fit widget boundaries in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

textField.SetValue('Example text');
textField.AddWidget(0, [10, 40, 160, 60]);
let widgets = textField.GetAllWidgets();
widgets.forEach(function(widget) {
    widget.SetAutoFit(true);
});
```
