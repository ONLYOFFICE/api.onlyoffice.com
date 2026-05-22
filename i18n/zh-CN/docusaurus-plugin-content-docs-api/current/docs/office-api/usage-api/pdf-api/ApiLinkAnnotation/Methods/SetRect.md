# SetRect

设置批注矩形。

继承自 [ApiBaseAnnotation.SetRect](../../ApiBaseAnnotation/Methods/SetRect.md)。

## 示例

在 PDF 中通过更改边界调整注释大小。

```javascript editor-pdf
// Expand or shrink an annotation's size in a PDF.

// Adjust the rectangular area covered by an annotation in a PDF.

let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(squareAnnot);
squareAnnot.SetRect([10, 10, 320, 64]);
```
