# SetDashPattern

设置批注虚线图案。
💡 边框样式属性必须设置为 "dashed"。

继承自 [ApiBaseAnnotation.SetDashPattern](../../ApiBaseAnnotation/Methods/SetDashPattern.md)。

## 示例

在 PDF 文档中创建方形注释并为边框设置虚线模式。

```javascript editor-pdf
// How to set dash pattern for an annotation in a PDF document?

// Set dash pattern and display the result in a PDF document.

let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(squareAnnot);
squareAnnot.SetBorderStyle("dashed");
squareAnnot.SetDashPattern([8, 4, 4, 4]);
```
