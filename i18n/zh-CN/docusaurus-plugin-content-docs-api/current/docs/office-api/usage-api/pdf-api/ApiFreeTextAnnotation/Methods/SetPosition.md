# SetPosition

设置批注位置。

继承自 [ApiBaseAnnotation.SetPosition](../../ApiBaseAnnotation/Methods/SetPosition.md)。

## 示例

在 PDF 文档中创建方形注释并设置新位置。

```javascript editor-pdf
// How to set position for an annotation in a PDF document?

// Set position and display the result in a PDF document.

let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(squareAnnot);
squareAnnot.SetPosition({x: 30, y: 30});
```
