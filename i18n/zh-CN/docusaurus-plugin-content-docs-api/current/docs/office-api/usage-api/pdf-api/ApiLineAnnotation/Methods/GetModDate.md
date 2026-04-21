# GetModDate

获取批注最后修改日期。

继承自 [ApiBaseAnnotation.GetModDate](../../ApiBaseAnnotation/Methods/GetModDate.md)。

## 示例

在 PDF 文档中创建方形注释并获取其修改日期。

```javascript editor-pdf
// How can I get the mod date using an annotation in a PDF document?

// Get the mod date for an annotation in a PDF document.

let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(squareAnnot);
console.log(`Annotation mod date is: ${squareAnnot.GetModDate()}`);
```
