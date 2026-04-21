# GetDashPattern

获取批注虚线图案。

继承自 [ApiBaseAnnotation.GetDashPattern](../../ApiBaseAnnotation/Methods/GetDashPattern.md)。

## 示例

在 PDF 文档中创建方形注释并获取其虚线模式。

```javascript editor-pdf
// How to get the dash pattern for an annotation in a PDF document?

// Get the dash pattern and display the result in a PDF document.

let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
squareAnnot.SetBorderStyle("dashed");
squareAnnot.SetDashPattern([8, 4, 4, 4]);
let page = doc.GetPage(0);
page.AddObject(squareAnnot);
console.log(`Annotation dash pattern is: ${squareAnnot.GetDashPattern()}`);
```
