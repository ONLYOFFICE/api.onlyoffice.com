# SetDisplay

设置批注显示类型。

继承自 [ApiBaseAnnotation.SetDisplay](../../ApiBaseAnnotation/Methods/SetDisplay.md)。

## 示例

在 PDF 文档中创建方形注释并为其设置显示方式。

```javascript editor-pdf
// How to set display for an annotation in a PDF document?

// Set display and display the result in a PDF document.

let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(squareAnnot);
squareAnnot.SetDisplay("hidden");
```
