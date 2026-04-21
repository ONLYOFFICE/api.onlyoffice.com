# SetBorderWidth

设置批注边框宽度。

继承自 [ApiBaseAnnotation.SetBorderWidth](../../ApiBaseAnnotation/Methods/SetBorderWidth.md)。

## 示例

在 PDF 文档中创建方形注释并为其设置粗边框宽度。

```javascript editor-pdf
// How to set border width for an annotation in a PDF document?

// Set border width and display the result in a PDF document.

let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(squareAnnot);
squareAnnot.SetBorderWidth(2);
```
