# GetQuads

从当前标记批注获取四边形。

继承自 [ApiBaseMarkupAnnotation.GetQuads](../../ApiBaseMarkupAnnotation/Methods/GetQuads.md)。

## 示例

获取 PDF 文档中标记注释的四边形。

```javascript editor-pdf
// How do I get the quads in a PDF document?

// Get the quads using a markup annotation object in a PDF document.

let doc = Api.GetDocument();
let markupAnnot = Api.CreateHighlightAnnot([84, 55, 231, 72]);
let page = doc.GetPage(0);
page.AddObject(markupAnnot);
console.log(`The markup quads is: ${markupAnnot.GetQuads()}`);
```
