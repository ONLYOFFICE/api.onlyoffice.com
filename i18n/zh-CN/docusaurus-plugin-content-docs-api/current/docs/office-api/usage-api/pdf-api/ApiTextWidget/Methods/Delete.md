# Delete

从父字段中移除控件。

继承自 [ApiBaseWidget.Delete](../../ApiBaseWidget/Methods/Delete.md)。

## 示例

从 PDF 文档中的父字段移除控件。

```javascript editor-pdf
// How can I delete using a widget in a PDF document?

// Delete for a widget in a PDF document.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

textField.SetValue('Example text');
textField.AddWidget(0, [10, 40, 160, 60]);
let widgets = textField.GetAllWidgets();
widgets[0].Delete();
```
