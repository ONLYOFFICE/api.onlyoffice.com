# SetDashPattern

设置批注虚线图案。
💡 边框样式属性必须设置为 “dashed”。

继承自 [ApiBaseAnnotation.SetDashPattern](../../ApiBaseAnnotation/Methods/SetDashPattern.md)。

## 示例

在 PDF 中为注释应用虚线边框样式。

```javascript editor-pdf
// Create a dotted line effect on an annotation's border in a PDF.

// Define the dash pattern for an annotation's outline in a PDF.

let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(squareAnnot);
squareAnnot.SetBorderStyle("dashed");
squareAnnot.SetDashPattern([8, 4, 4, 4]);
```
