# GetQuads

从当前标记批注获取四边形。

Inherited from [ApiBaseMarkupAnnotation.GetQuads](../../ApiBaseMarkupAnnotation/Methods/GetQuads.md).

## 示例

此示例获取标记注释的四边形。

```javascript editor-pdf
let doc = Api.GetDocument();
let markupAnnot = Api.CreateHighlightAnnot([84, 55, 231, 72]);
let page = doc.GetPage(0);
page.AddObject(markupAnnot);
console.log(`The markup quads is: ${markupAnnot.GetQuads()}`);
```

