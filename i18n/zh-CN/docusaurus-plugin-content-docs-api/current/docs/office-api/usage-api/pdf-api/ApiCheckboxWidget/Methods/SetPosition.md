# SetPosition

设置控件位置。

继承自 [ApiBaseWidget.SetPosition](../../ApiBaseWidget/Methods/SetPosition.md)。

## 示例

在 PDF 中将控件移动到新位置。

```javascript editor-pdf
// How do I change the position of a widget in a PDF?

// Reposition a field widget using coordinate values in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

let widgets = textField.GetAllWidgets();
widgets[0].SetPosition({x: 30, y: 30});
```
