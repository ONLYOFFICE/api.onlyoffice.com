# SetCreationDate

设置批注创建日期。

继承自 [ApiBaseAnnotation.SetCreationDate](../../ApiBaseAnnotation/Methods/SetCreationDate.md)。

## 示例

记录 PDF 中注释的创建日期。

```javascript editor-pdf
// Timestamp an annotation with its creation date in a PDF.

// Set the creation date metadata for an annotation in a PDF.

let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(squareAnnot);
squareAnnot.SetCreationDate(new Date().getTime());
```
