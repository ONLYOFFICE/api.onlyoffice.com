# SetRect

设置字段矩形。

继承自 [ApiBaseWidget.SetRect](../../ApiBaseWidget/Methods/SetRect.md)。

## 示例

在 PDF 中使用矩形边界调整控件大小和位置。

```javascript editor-pdf
// How do I set the size and position of a widget in a PDF?

// Define a widget's location and dimensions with boundary coordinates in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

let widgets = textField.GetAllWidgets();
widgets[0].SetRect([30, 30, 160, 60]);
```
