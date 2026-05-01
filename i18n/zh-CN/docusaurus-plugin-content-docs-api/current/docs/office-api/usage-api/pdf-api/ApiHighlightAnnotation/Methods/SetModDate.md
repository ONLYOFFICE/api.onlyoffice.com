# SetModDate

设置批注最后修改日期。

继承自 [ApiBaseAnnotation.SetModDate](../../ApiBaseAnnotation/Methods/SetModDate.md)。

## 示例

在 PDF 文档中创建方形注释并为其设置修改日期。

```javascript editor-pdf
// How can I set mod date using an annotation in a PDF document?

// Set mod date for an annotation in a PDF document.

let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(squareAnnot);
squareAnnot.SetModDate(new Date().getTime());
```
