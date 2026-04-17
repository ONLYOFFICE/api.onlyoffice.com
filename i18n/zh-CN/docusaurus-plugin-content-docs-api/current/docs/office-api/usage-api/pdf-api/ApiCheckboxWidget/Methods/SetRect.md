# SetRect

设置字段矩形。

Inherited from [ApiBaseWidget.SetRect](../../ApiBaseWidget/Methods/SetRect.md).

## 示例

此示例创建新字段并为其控件设置新的矩形。

```javascript editor-pdf
let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

let widgets = textField.GetAllWidgets();
widgets[0].SetRect([30, 30, 160, 60]);
```

