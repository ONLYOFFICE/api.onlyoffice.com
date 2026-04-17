# SetBorderWidth

设置控件边框宽度。

Inherited from [ApiBaseWidget.SetBorderWidth](../../ApiBaseWidget/Methods/SetBorderWidth.md).

## 示例

此示例设置字段控件的边框宽度。

```javascript editor-pdf
let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

textField.AddWidget(0, [10, 40, 160, 60]);
let widgets = textField.GetAllWidgets();
let rgbColor = Api.RGB(255, 100, 0);
widgets.forEach(function(widget) {
    widget.SetBorderColor(rgbColor);
    widget.SetBorderWidth('thick');
});
```

