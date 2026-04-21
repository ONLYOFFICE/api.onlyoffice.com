# GetPosition

获取控件位置。

继承自 [ApiBaseWidget.GetPosition](../../ApiBaseWidget/Methods/GetPosition.md)。

## 示例

在 PDF 文档中创建新字段并获取其控件的位置。

```javascript editor-pdf
// How can I get the position using a widget in a PDF document?

// Get the position for a widget in a PDF document.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

let widgets = textField.GetAllWidgets();
let pos = widgets[0].GetPosition();
console.log(`Annot position x: ${pos.x}, y: ${pos.y}`);
```
