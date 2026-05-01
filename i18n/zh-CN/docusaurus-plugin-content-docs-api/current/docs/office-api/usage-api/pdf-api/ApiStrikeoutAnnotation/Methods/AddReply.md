# AddReply

在此批注上添加回复。

继承自 [ApiBaseAnnotation.AddReply](../../ApiBaseAnnotation/Methods/AddReply.md)。

## 示例

在 PDF 文档中创建方形注释并向其添加回复。

```javascript editor-pdf
// How to add the reply for an annotation in a PDF document?

// Add the reply and display the result in a PDF document.

let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
squareAnnot.SetContents("Annot contents");
let page = doc.GetPage(0);
page.AddObject(squareAnnot);

let textAnnot = Api.CreateTextAnnot([10, 10, 20, 20]);
textAnnot.SetContents("Annot reply");
squareAnnot.AddReply(textAnnot);
```
