# IsAutoFit

检查文本是否自动适应。

Inherited from [ApiBaseWidget.IsAutoFit](../../ApiBaseWidget/Methods/IsAutoFit.md).

## 示例

此示例获取字段控件并显示其文本自动适应属性。

```javascript editor-pdf
let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

textField.AddWidget(0, [10, 40, 160, 60]);
let widgets = textField.GetAllWidgets();
widgets.forEach(function(widget) {
    widget.SetAutoFit(true);
});
let bgColor = widgets[0].GetTextColor();
textField.SetValue('Widgets text autofit is: ' + widgets[0].IsAutoFit());
```

