# AddReply

在此批注上添加回复。

Inherited from [ApiBaseAnnotation.AddReply](../../ApiBaseAnnotation/Methods/AddReply.md).

## 示例

此示例创建方形注释并为其添加回复。

```javascript editor-pdf
let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
squareAnnot.SetContents("Annot contents");
let page = doc.GetPage(0);
page.AddObject(squareAnnot);

let textAnnot = Api.CreateTextAnnot([10, 10, 20, 20]);
textAnnot.SetContents("Annot reply");
squareAnnot.AddReply(textAnnot);
```

