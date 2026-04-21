# SetPosition

设置控件位置。

继承自 [ApiBaseWidget.SetPosition](../../ApiBaseWidget/Methods/SetPosition.md)。

## 示例

在 PDF 文档中创建新字段并为其控件设置新位置。

```javascript editor-pdf
// How can I set position using a widget in a PDF document?

// Set position for a widget in a PDF document.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

let widgets = textField.GetAllWidgets();
widgets[0].SetPosition({x: 30, y: 30});
```
