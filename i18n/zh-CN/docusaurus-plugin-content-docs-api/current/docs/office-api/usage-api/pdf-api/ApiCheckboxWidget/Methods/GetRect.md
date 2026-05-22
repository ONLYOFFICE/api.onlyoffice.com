# GetRect

设置字段矩形。

继承自 [ApiBaseWidget.GetRect](../../ApiBaseWidget/Methods/GetRect.md)。

## 示例

获取 PDF 中表单字段控件的边界框尺寸。

```javascript editor-pdf
// How do I find the size and position of a widget in a PDF?

// Retrieve the rectangle boundaries of a form field widget in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

let widgets = textField.GetAllWidgets();
console.log(`Annotation rect is: ${widgets[0].GetRect()}`);
```
