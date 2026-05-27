# GetAuthorName

获取批注作者姓名。

继承自 [ApiBaseAnnotation.GetAuthorName](../../ApiBaseAnnotation/Methods/GetAuthorName.md)。

## 示例

读取 PDF 中注释的作者。

```javascript editor-pdf
// How can I find out who created an annotation in a PDF?

// Retrieve the name of the person who added an annotation in a PDF.

let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(squareAnnot);
console.log(`Annotation author name is: ${squareAnnot.GetAuthorName()}`);
```
