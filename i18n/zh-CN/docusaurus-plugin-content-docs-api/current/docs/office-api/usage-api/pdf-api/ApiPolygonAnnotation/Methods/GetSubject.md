# GetSubject

获取批注主题。

继承自 [ApiBaseAnnotation.GetSubject](../../ApiBaseAnnotation/Methods/GetSubject.md)。

## 示例

在 PDF 文档中创建方形注释并获取其主题。

```javascript editor-pdf
// How to get the subject for an annotation in a PDF document?

// Get the subject and display the result in a PDF document.

let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
squareAnnot.SetSubject("Annot subject");
let page = doc.GetPage(0);
page.AddObject(squareAnnot);
console.log(`Annotation subject is: ${squareAnnot.GetSubject()}`);
```
