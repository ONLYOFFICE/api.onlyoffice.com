# SetContents

设置批注内容。

继承自 [ApiBaseAnnotation.SetContents](../../ApiBaseAnnotation/Methods/SetContents.md)。

## 示例

在 PDF 文档中创建方形注释并为其设置内容。

```javascript editor-pdf
// How can I set contents using an annotation in a PDF document?

// Set contents for an annotation in a PDF document.

let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(squareAnnot);
squareAnnot.SetContents("John Smith");
```
