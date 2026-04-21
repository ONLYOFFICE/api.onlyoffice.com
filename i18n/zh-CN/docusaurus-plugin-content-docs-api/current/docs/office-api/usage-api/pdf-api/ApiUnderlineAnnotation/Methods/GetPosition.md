# GetPosition

获取批注位置。

继承自 [ApiBaseAnnotation.GetPosition](../../ApiBaseAnnotation/Methods/GetPosition.md)。

## 示例

在 PDF 文档中创建方形注释并获取其位置。

```javascript editor-pdf
// How do I get the position in a PDF document?

// Get the position using an annotation object in a PDF document.

let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(squareAnnot);
let pos = squareAnnot.GetPosition();
console.log(`Annot position x: ${pos.x}, y: ${pos.y}`);
```
