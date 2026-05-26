# GetDisplay

获取批注显示类型。

继承自 [ApiBaseAnnotation.GetDisplay](../../ApiBaseAnnotation/Methods/GetDisplay.md)。

## 示例

检索 PDF 中注释的显示首选项设置。

```javascript editor-pdf
// How is the visibility of an annotation configured in a PDF?

// Check whether an annotation is displayed or hidden in a PDF.

let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(squareAnnot);
console.log(`Annotation display is: ${squareAnnot.GetDisplay()}`);
```
