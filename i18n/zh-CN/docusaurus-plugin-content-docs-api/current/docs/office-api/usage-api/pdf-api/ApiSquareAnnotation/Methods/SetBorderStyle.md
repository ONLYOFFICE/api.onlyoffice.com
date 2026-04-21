# SetBorderStyle

设置批注边框样式。

继承自 [ApiBaseAnnotation.SetBorderStyle](../../ApiBaseAnnotation/Methods/SetBorderStyle.md)。

## 示例

在 PDF 文档中创建方形注释并为其设置虚线边框。

```javascript editor-pdf
// How to set border style for an annotation in a PDF document?

// Set border style and display the result in a PDF document.

let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(squareAnnot);
squareAnnot.SetBorderStyle("dashed");
squareAnnot.SetDashPattern([8, 4, 4, 4]);
```
