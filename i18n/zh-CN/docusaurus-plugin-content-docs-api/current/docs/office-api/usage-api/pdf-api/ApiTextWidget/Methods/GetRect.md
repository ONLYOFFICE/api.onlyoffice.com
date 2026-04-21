# GetRect

设置字段矩形。

继承自 [ApiBaseWidget.GetRect](../../ApiBaseWidget/Methods/GetRect.md)。

## 示例

在 PDF 文档中创建新字段并获取其控件的矩形。

```javascript editor-pdf
// How to get the rect for a widget in a PDF document?

// Get the rect and display the result in a PDF document.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

let widgets = textField.GetAllWidgets();
console.log(`Annotation rect is: ${widgets[0].GetRect()}`);
```
