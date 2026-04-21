# SetAutoFit

设置文本自动适应。

继承自 [ApiBaseWidget.SetAutoFit](../../ApiBaseWidget/Methods/SetAutoFit.md)。

## 示例

获取 PDF 文档中的所有字段控件并为其设置文本自动适应。

```javascript editor-pdf
// How do I set auto fit in a PDF document?

// Set auto fit using a widget object in a PDF document.

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
