# GetCreationDate

获取批注创建日期。

继承自 [ApiBaseAnnotation.GetCreationDate](../../ApiBaseAnnotation/Methods/GetCreationDate.md)。

## 示例

检索 PDF 中注释的创建日期。

```javascript editor-pdf
// When was an annotation added to the PDF?

// Check the creation timestamp of an annotation in a PDF.

let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(squareAnnot);
console.log(`Annotation creation date is: ${squareAnnot.GetCreationDate()}`);
```
