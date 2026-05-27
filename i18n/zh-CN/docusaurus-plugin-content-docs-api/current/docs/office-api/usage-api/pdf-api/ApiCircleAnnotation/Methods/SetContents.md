# SetContents

设置批注内容。

继承自 [ApiBaseAnnotation.SetContents](../../ApiBaseAnnotation/Methods/SetContents.md)。

## 示例

向 PDF 中的注释添加文本内容。

```javascript editor-pdf
// Store a message or note within an annotation in a PDF.

// Assign descriptive text to mark or label an annotation in a PDF.

let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(squareAnnot);
squareAnnot.SetContents("John Smith");
```
