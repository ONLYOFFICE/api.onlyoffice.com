# SetModDate

设置批注最后修改日期。

继承自 [ApiBaseAnnotation.SetModDate](../../ApiBaseAnnotation/Methods/SetModDate.md)。

## 示例

记录 PDF 中注释的最后修改日期。

```javascript editor-pdf
// Update the modification timestamp of an annotation in a PDF.

// Set the last-changed date for an annotation in a PDF.

let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(squareAnnot);
squareAnnot.SetModDate(new Date().getTime());
```
