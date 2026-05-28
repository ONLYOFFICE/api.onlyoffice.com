# SetDisplay

设置批注显示类型。

继承自 [ApiBaseAnnotation.SetDisplay](../../ApiBaseAnnotation/Methods/SetDisplay.md)。

## 示例

控制 PDF 中注释的可见性。

```javascript editor-pdf
// Toggle whether an annotation appears or stays hidden in a PDF.

// Set the display mode to show or conceal an annotation in a PDF.

let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(squareAnnot);
squareAnnot.SetDisplay("hidden");
```
