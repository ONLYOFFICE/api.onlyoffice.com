# SetPosition

设置批注位置。

继承自 [ApiBaseAnnotation.SetPosition](../../ApiBaseAnnotation/Methods/SetPosition.md)。

## 示例

在 PDF 中将注释移动到页面上的新位置。

```javascript editor-pdf
// Reposition an annotation by changing its coordinates in a PDF.

// Update where an annotation appears in a PDF.

let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(squareAnnot);
squareAnnot.SetPosition({x: 30, y: 30});
```
