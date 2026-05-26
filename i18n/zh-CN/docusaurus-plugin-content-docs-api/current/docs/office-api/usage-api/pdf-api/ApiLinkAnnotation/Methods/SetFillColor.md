# SetFillColor

设置批注填充颜色。

继承自 [ApiBaseAnnotation.SetFillColor](../../ApiBaseAnnotation/Methods/SetFillColor.md)。

## 示例

设置 PDF 中注释的背景颜色。

```javascript editor-pdf
// Apply a fill color to make an annotation stand out in a PDF.

// Change the interior color of an annotation in a PDF.

let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(squareAnnot);
squareAnnot.SetFillColor(Api.RGB(255, 0, 0));
```
