# SetContents

Sets annotation contents.

Inherited from [ApiBaseAnnotation.SetContents](../../ApiBaseAnnotation/Methods/SetContents.md).

## Example

Add text content to an annotation in a PDF.

```javascript editor-pdf
// Store a message or note within an annotation in a PDF.

// Assign descriptive text to mark or label an annotation in a PDF.

let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(squareAnnot);
squareAnnot.SetContents("John Smith");
```
