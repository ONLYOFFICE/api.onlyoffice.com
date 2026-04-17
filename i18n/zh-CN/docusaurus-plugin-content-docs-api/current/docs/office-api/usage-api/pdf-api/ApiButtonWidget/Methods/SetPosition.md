# SetPosition

设置控件位置。

Inherited from [ApiBaseWidget.SetPosition](../../ApiBaseWidget/Methods/SetPosition.md).

## 示例

此示例创建新字段并为其控件设置新位置。

```javascript editor-pdf
let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

let widgets = textField.GetAllWidgets();
widgets[0].SetPosition({x: 30, y: 30});
```

