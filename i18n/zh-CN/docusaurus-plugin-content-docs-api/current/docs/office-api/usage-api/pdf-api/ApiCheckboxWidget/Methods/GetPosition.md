# GetPosition

获取控件位置。

继承自 [ApiBaseWidget.GetPosition](../../ApiBaseWidget/Methods/GetPosition.md)。

## 示例

获取 PDF 中表单字段控件的坐标。

```javascript editor-pdf
// How do I find the position of a widget in a PDF?

// Retrieve the X and Y coordinates of a form field widget in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

let widgets = textField.GetAllWidgets();
let pos = widgets[0].GetPosition();
console.log(`Annot position x: ${pos.x}, y: ${pos.y}`);
```
