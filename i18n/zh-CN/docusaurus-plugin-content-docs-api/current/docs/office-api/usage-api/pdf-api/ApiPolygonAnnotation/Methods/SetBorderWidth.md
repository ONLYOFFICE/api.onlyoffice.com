# SetBorderWidth

设置批注边框宽度。

继承自 [ApiBaseAnnotation.SetBorderWidth](../../ApiBaseAnnotation/Methods/SetBorderWidth.md)。

## 示例

更改 PDF 中注释边框的粗细。

```javascript editor-pdf
// How thick should an annotation border be in a PDF?

// Set the width of the border outline on an annotation object in a PDF.

let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(squareAnnot);
squareAnnot.SetBorderWidth(2);
```
