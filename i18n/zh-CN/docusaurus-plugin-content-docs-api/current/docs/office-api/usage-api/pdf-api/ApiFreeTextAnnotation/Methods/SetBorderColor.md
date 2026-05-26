# SetBorderColor

设置批注边框颜色。

继承自 [ApiBaseAnnotation.SetBorderColor](../../ApiBaseAnnotation/Methods/SetBorderColor.md)。

## 示例

更改 PDF 中注释的边框颜色。

```javascript editor-pdf
// What color should the border of an annotation be in a PDF?

// Apply a color to the border outline of an annotation object in a PDF.

let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(squareAnnot);
squareAnnot.SetBorderColor(Api.RGB(255, 0, 0));
```
