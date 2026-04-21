# GetAuthorName

获取批注作者姓名。

继承自 [ApiBaseAnnotation.GetAuthorName](../../ApiBaseAnnotation/Methods/GetAuthorName.md)。

## 示例

在 PDF 文档中创建方形注释并获取其作者名称。

```javascript editor-pdf
// How do I get the author name in a PDF document?

// Get the author name using an annotation object in a PDF document.

let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(squareAnnot);
console.log(`Annotation author name is: ${squareAnnot.GetAuthorName()}`);
```
