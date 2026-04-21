# GetContents

获取批注内容。

继承自 [ApiBaseAnnotation.GetContents](../../ApiBaseAnnotation/Methods/GetContents.md)。

## 示例

在 PDF 文档中创建方形注释并获取其内容。

```javascript editor-pdf
// How to get the contents for an annotation in a PDF document?

// Get the contents and display the result in a PDF document.

let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
squareAnnot.SetContents("Annot contents");
let page = doc.GetPage(0);
page.AddObject(squareAnnot);
console.log(`Annotation contents is: ${squareAnnot.GetContents()}`);
```
