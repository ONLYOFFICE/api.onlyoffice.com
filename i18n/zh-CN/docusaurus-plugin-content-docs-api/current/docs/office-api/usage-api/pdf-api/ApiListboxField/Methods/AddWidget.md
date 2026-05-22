# AddWidget

添加新控件 - 字段的可视化表示

继承自 [ApiBaseField.AddWidget](../../ApiBaseField/Methods/AddWidget.md)。

## 示例

在 PDF 中为表单字段添加视觉表示。

```javascript editor-pdf
// How do I create a visual instance of a form field in a PDF?

// Display a form field's widget at a specific location in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

textField.SetValue('Example text');
textField.AddWidget(0, [10, 40, 160, 60]);
```
