# GetQuads

从当前标记批注获取四边形。

继承自 [ApiBaseMarkupAnnotation.GetQuads](../../ApiBaseMarkupAnnotation/Methods/GetQuads.md)。

## 示例

从 PDF 中的标记注释获取高亮区域。

```javascript editor-pdf
// How do I read the highlight coordinates in a PDF?

// Extract the quad coordinates that define the marked region in a PDF.

let doc = Api.GetDocument();
let markupAnnot = Api.CreateHighlightAnnot([84, 55, 231, 72]);
let page = doc.GetPage(0);
page.AddObject(markupAnnot);
console.log(`The markup quads is: ${markupAnnot.GetQuads()}`);
```
