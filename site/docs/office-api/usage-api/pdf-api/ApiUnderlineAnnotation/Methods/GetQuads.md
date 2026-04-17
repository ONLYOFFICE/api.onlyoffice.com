# GetQuads

Gets quads from current markup annotation.

Inherited from [ApiBaseMarkupAnnotation.GetQuads](../../ApiBaseMarkupAnnotation/Methods/GetQuads.md).

## Example

This example gets quads of markup annotation.

```javascript editor-pdf
let doc = Api.GetDocument();
let markupAnnot = Api.CreateHighlightAnnot([84, 55, 231, 72]);
let page = doc.GetPage(0);
page.AddObject(markupAnnot);
console.log(`The markup quads is: ${markupAnnot.GetQuads()}`);
```

