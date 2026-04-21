# GetReplies

获取此批注的回复。

继承自 [ApiBaseAnnotation.GetReplies](../../ApiBaseAnnotation/Methods/GetReplies.md)。

## 示例

在 PDF 文档中创建方形注释并获取其回复。

```javascript editor-pdf
// How to get the replies for an annotation in a PDF document?

// Get the replies and display the result in a PDF document.

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
