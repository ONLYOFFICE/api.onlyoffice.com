# SetOpacity

设置批注不透明度。

继承自 [ApiBaseAnnotation.SetOpacity](../../ApiBaseAnnotation/Methods/SetOpacity.md)。

## 示例

在 PDF 中使注释透明或不透明。

```javascript editor-pdf
// Adjust the transparency level of an annotation in a PDF.

// Control how solid or see-through an annotation appears in a PDF.

let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(squareAnnot);
squareAnnot.SetFillColor(Api.RGB(255, 0, 0));
squareAnnot.SetOpacity(50);
```
