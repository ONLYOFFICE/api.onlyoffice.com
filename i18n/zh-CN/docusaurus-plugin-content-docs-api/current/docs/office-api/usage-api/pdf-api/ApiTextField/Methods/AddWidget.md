# AddWidget

添加新控件 - 字段的可视化表示

Inherited from [ApiBaseField.AddWidget](../../ApiBaseField/Methods/AddWidget.md).

## 示例

此示例添加新的控件 - 字段的可视化表示

```javascript editor-pdf
let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

textField.SetValue('Example text');
textField.AddWidget(0, [10, 40, 160, 60]);
```

