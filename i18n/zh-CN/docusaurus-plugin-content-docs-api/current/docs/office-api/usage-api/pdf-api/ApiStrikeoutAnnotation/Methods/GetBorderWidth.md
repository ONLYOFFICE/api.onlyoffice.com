# GetBorderWidth

获取批注边框宽度。

继承自 [ApiBaseAnnotation.GetBorderWidth](../../ApiBaseAnnotation/Methods/GetBorderWidth.md)。

## 示例

在 PDF 文档中创建方形注释并获取其边框宽度。

```javascript editor-pdf
// How do I get the border width in a PDF document?

// Get the border width using an annotation object in a PDF document.

let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(squareAnnot);
console.log(`Annotation border width is: ${squareAnnot.GetBorderWidth()}`);
```
