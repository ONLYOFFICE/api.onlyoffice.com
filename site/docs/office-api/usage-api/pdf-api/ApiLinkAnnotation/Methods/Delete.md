# Delete

Removes annotation from document.

Inherited from [ApiBaseAnnotation.Delete](../../ApiBaseAnnotation/Methods/Delete.md).

## Example

Remove an annotation from a PDF.

```javascript editor-pdf
// How do I delete an annotation in a PDF?

// Erase an annotation that no longer needs to be in a PDF.

let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(squareAnnot);
squareAnnot.SetBorderStyle("dashed");
squareAnnot.SetDashPattern([8, 4, 4, 4]);
squareAnnot.Delete();
```
