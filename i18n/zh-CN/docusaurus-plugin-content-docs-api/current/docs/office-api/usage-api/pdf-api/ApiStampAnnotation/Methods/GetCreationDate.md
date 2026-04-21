# GetCreationDate

获取批注创建日期。

继承自 [ApiBaseAnnotation.GetCreationDate](../../ApiBaseAnnotation/Methods/GetCreationDate.md)。

## 示例

在 PDF 文档中创建方形注释并获取其创建日期。

```javascript editor-pdf
// How to get the creation date for an annotation in a PDF document?

// Get the creation date and display the result in a PDF document.

let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(squareAnnot);
console.log(`Annotation creation date is: ${squareAnnot.GetCreationDate()}`);
```
