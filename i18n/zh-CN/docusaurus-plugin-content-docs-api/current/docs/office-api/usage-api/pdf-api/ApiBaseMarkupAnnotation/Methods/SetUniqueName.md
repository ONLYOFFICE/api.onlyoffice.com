# SetUniqueName

设置批注唯一名称。

继承自 [ApiBaseAnnotation.SetUniqueName](../../ApiBaseAnnotation/Methods/SetUniqueName.md)。

## 示例

为 PDF 中的注释分配唯一标识符。

```javascript editor-pdf
// Give an annotation a distinct name for reference in a PDF.

// Set a unique name to distinguish an annotation from others in a PDF.

let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(squareAnnot);
squareAnnot.SetUniqueName("Square annot");
```
