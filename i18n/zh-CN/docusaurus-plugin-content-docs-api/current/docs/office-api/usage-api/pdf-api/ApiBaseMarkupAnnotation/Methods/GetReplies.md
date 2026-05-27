# GetReplies

获取此批注的回复。

继承自 [ApiBaseAnnotation.GetReplies](../../ApiBaseAnnotation/Methods/GetReplies.md)。

## 示例

检索 PDF 中附加到注释的所有回复注释。

```javascript editor-pdf
// What reply annotations are associated with a parent annotation in a PDF?

// Access the list of reply comments linked to an annotation object in a PDF.

let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
squareAnnot.SetContents("Annot contents");
let page = doc.GetPage(0);
page.AddObject(squareAnnot);

let textAnnot = Api.CreateTextAnnot([10, 10, 20, 20]);
textAnnot.SetContents("Annot reply");
squareAnnot.AddReply(textAnnot);

let replies = squareAnnot.GetReplies();
replies.forEach((reply, idx) => {
	console.log(`Reply with idx ${idx}: "${reply.GetContents()}"`);
});
```
