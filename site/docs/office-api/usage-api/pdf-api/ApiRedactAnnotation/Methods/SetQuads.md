# SetQuads

Sets quads to current markup annotation.

Inherited from [ApiBaseMarkupAnnotation.SetQuads](../../ApiBaseMarkupAnnotation/Methods/SetQuads.md).

## Example

Specify the highlight area for a markup annotation in a PDF.

```javascript editor-pdf
// How do I define the highlighted region in a PDF?

// Assign new coordinates to the marked area of an annotation in a PDF.

let doc = Api.GetDocument();
let markupAnnot = Api.CreateHighlightAnnot([84, 55, 231, 72]);
markupAnnot.SetQuads([[85, 73, 226, 73, 85, 87, 226, 87]]);
let page = doc.GetPage(0);
page.AddObject(markupAnnot);
console.log(`We set new quads to markup annotation`);
```
