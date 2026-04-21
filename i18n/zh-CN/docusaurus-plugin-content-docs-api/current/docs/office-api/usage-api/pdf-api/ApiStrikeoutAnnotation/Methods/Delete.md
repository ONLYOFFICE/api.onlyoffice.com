# Delete

从文档中移除批注。

继承自 [ApiBaseAnnotation.Delete](../../ApiBaseAnnotation/Methods/Delete.md)。

## 示例

从文档中移除方形注释。

```javascript editor-pdf
// How to delete for an annotation in a PDF document?

// Delete and display the result in a PDF document.

let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(squareAnnot);
squareAnnot.SetBorderStyle("dashed");
squareAnnot.SetDashPattern([8, 4, 4, 4]);
squareAnnot.Delete();
```
