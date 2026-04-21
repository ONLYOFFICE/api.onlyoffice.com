# GetTextSize

获取控件文本大小。
💡 文本大小 === 0 表示自动适应

继承自 [ApiBaseWidget.GetTextSize](../../ApiBaseWidget/Methods/GetTextSize.md)。

## 示例

获取字段控件并显示其在 PDF 文档中的文本大小。

```javascript editor-pdf
// How can I get the text size using a widget in a PDF document?

// Get the text size for a widget in a PDF document.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

textField.AddWidget(0, [10, 40, 160, 60]);
let widgets = textField.GetAllWidgets();
widgets.forEach(function(widget) {
    widget.SetTextSize(15);
});
let textSize = widgets[0].GetTextSize();
textField.SetValue('Text size is: ' + textSize);
```
