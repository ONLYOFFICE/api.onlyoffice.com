# SetCreationDate

设置批注创建日期。

继承自 [ApiBaseAnnotation.SetCreationDate](../../ApiBaseAnnotation/Methods/SetCreationDate.md)。

## 示例

在 PDF 文档中创建方形注释并为其设置创建日期。

```javascript editor-pdf
// How do I set creation date in a PDF document?

// Set creation date using an annotation object in a PDF document.

let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(squareAnnot);
squareAnnot.SetCreationDate(new Date().getTime());
```
