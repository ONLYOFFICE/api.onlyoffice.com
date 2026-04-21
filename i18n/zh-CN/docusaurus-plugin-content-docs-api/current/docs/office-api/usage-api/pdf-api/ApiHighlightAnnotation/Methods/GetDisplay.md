# GetDisplay

获取批注显示类型。

继承自 [ApiBaseAnnotation.GetDisplay](../../ApiBaseAnnotation/Methods/GetDisplay.md)。

## 示例

在 PDF 文档中创建方形注释并获取其显示方式。

```javascript editor-pdf
// How do I get the display in a PDF document?

// Get the display using an annotation object in a PDF document.

let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(squareAnnot);
console.log(`Annotation display is: ${squareAnnot.GetDisplay()}`);
```
