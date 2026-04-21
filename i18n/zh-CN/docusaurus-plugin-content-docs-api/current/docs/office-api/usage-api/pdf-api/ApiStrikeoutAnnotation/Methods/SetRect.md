# SetRect

设置批注矩形。

继承自 [ApiBaseAnnotation.SetRect](../../ApiBaseAnnotation/Methods/SetRect.md)。

## 示例

在 PDF 文档中创建方形注释并将矩形设置为初始大小的两倍。

```javascript editor-pdf
// How can I set rect using an annotation in a PDF document?

// Set rect for an annotation in a PDF document.

let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(squareAnnot);
squareAnnot.SetRect([10, 10, 320, 64]);
```
