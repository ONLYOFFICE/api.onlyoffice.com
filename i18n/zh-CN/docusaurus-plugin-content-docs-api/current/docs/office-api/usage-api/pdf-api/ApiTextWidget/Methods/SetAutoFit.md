# SetAutoFit

设置文本自动适应。

Inherited from [ApiBaseWidget.SetAutoFit](../../ApiBaseWidget/Methods/SetAutoFit.md).

## 示例

此示例获取所有字段控件并为它们设置文本自动适应。

```javascript editor-pdf
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

