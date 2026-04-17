# SetTextSize

设置控件文本大小。
💡 文本大小 === 0 表示自动适应

Inherited from [ApiBaseWidget.SetTextSize](../../ApiBaseWidget/Methods/SetTextSize.md).

## 示例

此示例获取所有字段控件并为它们设置文本颜色。

```javascript editor-pdf
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

