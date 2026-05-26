# GetModDate

获取批注最后修改日期。

继承自 [ApiBaseAnnotation.GetModDate](../../ApiBaseAnnotation/Methods/GetModDate.md)。

## 示例

检索 PDF 中注释的最后修改日期。

```javascript editor-pdf
// When was an annotation last modified in a PDF?

// Check the last update timestamp of an annotation in a PDF.

let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(squareAnnot);
console.log(`Annotation mod date is: ${squareAnnot.GetModDate()}`);
```
