# SetAuthorName

设置批注作者姓名。

继承自 [ApiBaseAnnotation.SetAuthorName](../../ApiBaseAnnotation/Methods/SetAuthorName.md)。

## 示例

为 PDF 中的注释分配作者名称。

```javascript editor-pdf
// Who created or should be credited for an annotation in a PDF?

// Set the author name property of an annotation object in a PDF.

let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(squareAnnot);
squareAnnot.SetAuthorName("John Smith");
```
