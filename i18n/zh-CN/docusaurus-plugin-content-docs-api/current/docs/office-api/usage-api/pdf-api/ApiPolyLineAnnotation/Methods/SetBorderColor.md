# SetBorderColor

设置批注边框颜色。

继承自 [ApiBaseAnnotation.SetBorderColor](../../ApiBaseAnnotation/Methods/SetBorderColor.md)。

## 示例

在 PDF 文档中创建方形注释并为其设置红色边框颜色。

```javascript editor-pdf
// How to set border color for an annotation in a PDF document?

// Set border color and display the result in a PDF document.

let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(squareAnnot);
squareAnnot.SetBorderColor(Api.RGB(255, 0, 0));
```
