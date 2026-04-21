# SetAuthorName

设置批注作者姓名。

继承自 [ApiBaseAnnotation.SetAuthorName](../../ApiBaseAnnotation/Methods/SetAuthorName.md)。

## 示例

在 PDF 文档中创建方形注释并为其设置作者名称。

```javascript editor-pdf
// How to set author name for an annotation in a PDF document?

// Set author name and display the result in a PDF document.

let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(squareAnnot);
squareAnnot.SetAuthorName("John Smith");
```
