# SetCreationDate

Sets annotation creation date.

Inherited from [ApiBaseAnnotation.SetCreationDate](../../ApiBaseAnnotation/Methods/SetCreationDate.md).

## Example

Create a square annotation and set creation date to it in a PDF document.

```javascript editor-pdf
// How do I set creation date in a PDF document?

// Set creation date using an annotation object in a PDF document.

let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(squareAnnot);
squareAnnot.SetCreationDate(new Date().getTime());
```
