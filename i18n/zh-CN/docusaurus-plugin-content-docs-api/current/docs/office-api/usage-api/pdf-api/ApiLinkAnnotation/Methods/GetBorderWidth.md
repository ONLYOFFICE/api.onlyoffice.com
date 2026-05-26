# GetBorderWidth

获取批注边框宽度。

继承自 [ApiBaseAnnotation.GetBorderWidth](../../ApiBaseAnnotation/Methods/GetBorderWidth.md)。

## 示例

检索 PDF 中注释的边框宽度测量值。

```javascript editor-pdf
// How thick is the border around an annotation in a PDF?

// Check the line thickness of an annotation's border in a PDF.

let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(squareAnnot);
console.log(`Annotation border width is: ${squareAnnot.GetBorderWidth()}`);
```
