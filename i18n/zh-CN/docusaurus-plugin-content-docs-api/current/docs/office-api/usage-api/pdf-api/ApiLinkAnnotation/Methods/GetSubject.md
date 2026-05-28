# GetSubject

获取批注主题。

继承自 [ApiBaseAnnotation.GetSubject](../../ApiBaseAnnotation/Methods/GetSubject.md)。

## 示例

读取 PDF 中注释的主题行。

```javascript editor-pdf
// What is the subject text assigned to an annotation in a PDF?

// Extract the subject property from an annotation object in a PDF.

let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
squareAnnot.SetSubject("Annot subject");
let page = doc.GetPage(0);
page.AddObject(squareAnnot);
console.log(`Annotation subject is: ${squareAnnot.GetSubject()}`);
```
