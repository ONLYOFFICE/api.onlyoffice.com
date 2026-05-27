# GetBorderStyle

获取批注边框样式。

继承自 [ApiBaseAnnotation.GetBorderStyle](../../ApiBaseAnnotation/Methods/GetBorderStyle.md)。

## 示例

检索 PDF 中注释的边框样式。

```javascript editor-pdf
// What style does the border use on an annotation in a PDF?

// Determine whether an annotation's border is solid, dashed, or another style in a PDF.

let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(squareAnnot);
console.log(`Annotation border style is: ${squareAnnot.GetBorderStyle()}`);
```
