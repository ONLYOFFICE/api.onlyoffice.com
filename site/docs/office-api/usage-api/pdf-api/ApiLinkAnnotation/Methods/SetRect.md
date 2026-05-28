# SetRect

Sets annotation rect.

Inherited from [ApiBaseAnnotation.SetRect](../../ApiBaseAnnotation/Methods/SetRect.md).

## Example

Resize an annotation by changing its boundaries in a PDF.

```javascript editor-pdf
// Expand or shrink an annotation's size in a PDF.

// Adjust the rectangular area covered by an annotation in a PDF.

let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(squareAnnot);
squareAnnot.SetRect([10, 10, 320, 64]);
```
