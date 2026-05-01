# GetRect

设置批注矩形。

继承自 [ApiBaseAnnotation.GetRect](../../ApiBaseAnnotation/Methods/GetRect.md)。

## 示例

在 PDF 文档中创建方形注释并获取其矩形。

```javascript editor-pdf
// How to get the rect for an annotation in a PDF document?

// Get the rect and display the result in a PDF document.

let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(squareAnnot);
console.log(`Annotation rect is: ${squareAnnot.GetRect()}`);
```
