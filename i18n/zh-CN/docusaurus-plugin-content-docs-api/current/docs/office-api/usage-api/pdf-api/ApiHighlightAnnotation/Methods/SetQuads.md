# SetQuads

设置当前标记批注的四边形。

继承自 [ApiBaseMarkupAnnotation.SetQuads](../../ApiBaseMarkupAnnotation/Methods/SetQuads.md)。

## 示例

在 PDF 文档中为标记注释设置四边形。

```javascript editor-pdf
// How do I set quads in a PDF document?

// Set quads using a markup annotation object in a PDF document.

let doc = Api.GetDocument();
let markupAnnot = Api.CreateHighlightAnnot([84, 55, 231, 72]);
markupAnnot.SetQuads([[85, 73, 226, 73, 85, 87, 226, 87]]);
let page = doc.GetPage(0);
page.AddObject(markupAnnot);
console.log(`We set new quads to markup annotation`);
```
