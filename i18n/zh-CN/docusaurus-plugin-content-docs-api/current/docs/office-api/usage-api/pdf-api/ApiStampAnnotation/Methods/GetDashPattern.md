# GetDashPattern

获取批注虚线图案。

继承自 [ApiBaseAnnotation.GetDashPattern](../../ApiBaseAnnotation/Methods/GetDashPattern.md)。

## 示例

检索 PDF 中注释上虚线边框的虚线图案。

```javascript editor-pdf
// What dash pattern is used for an annotation's border in a PDF?

// Check the spacing and length of dashes on an annotation's border in a PDF.

let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
squareAnnot.SetBorderStyle("dashed");
squareAnnot.SetDashPattern([8, 4, 4, 4]);
let page = doc.GetPage(0);
page.AddObject(squareAnnot);
console.log(`Annotation dash pattern is: ${squareAnnot.GetDashPattern()}`);
```
