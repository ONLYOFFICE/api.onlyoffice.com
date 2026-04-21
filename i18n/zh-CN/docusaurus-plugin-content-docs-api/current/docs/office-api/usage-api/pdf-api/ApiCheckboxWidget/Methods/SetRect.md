# SetRect

设置字段矩形。

继承自 [ApiBaseWidget.SetRect](../../ApiBaseWidget/Methods/SetRect.md)。

## 示例

在 PDF 文档中创建新字段并为其控件设置新矩形。

```javascript editor-pdf
// How do I set rect in a PDF document?

// Set rect using a widget object in a PDF document.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

let widgets = textField.GetAllWidgets();
widgets[0].SetRect([30, 30, 160, 60]);
```
