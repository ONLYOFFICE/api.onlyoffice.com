# SetUniqueName

设置批注唯一名称。

继承自 [ApiBaseAnnotation.SetUniqueName](../../ApiBaseAnnotation/Methods/SetUniqueName.md)。

## 示例

在 PDF 文档中创建方形注释并为其设置唯一名称。

```javascript editor-pdf
// How do I set unique name in a PDF document?

// Set unique name using an annotation object in a PDF document.

let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(squareAnnot);
squareAnnot.SetUniqueName("Square annot");
```
