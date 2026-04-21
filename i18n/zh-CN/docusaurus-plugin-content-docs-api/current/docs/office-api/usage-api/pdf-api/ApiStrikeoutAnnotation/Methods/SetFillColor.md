# SetFillColor

设置批注填充颜色。

继承自 [ApiBaseAnnotation.SetFillColor](../../ApiBaseAnnotation/Methods/SetFillColor.md)。

## 示例

在 PDF 文档中创建方形注释并为其设置红色填充颜色。

```javascript editor-pdf
// How can I set fill color using an annotation in a PDF document?

// Set fill color for an annotation in a PDF document.

let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(squareAnnot);
squareAnnot.SetFillColor(Api.RGB(255, 0, 0));
```
