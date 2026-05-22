# SetPosition

Sets annotation position.

Inherited from [ApiBaseAnnotation.SetPosition](../../ApiBaseAnnotation/Methods/SetPosition.md).

## Example

Move an annotation to a new location on the page in a PDF.

```javascript editor-pdf
// Reposition an annotation by changing its coordinates in a PDF.

// Update where an annotation appears in a PDF.

let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(squareAnnot);
squareAnnot.SetPosition({x: 30, y: 30});
```
