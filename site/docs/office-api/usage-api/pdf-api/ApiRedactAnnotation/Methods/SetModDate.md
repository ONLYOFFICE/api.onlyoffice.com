# SetModDate

Sets annotation last modification date.

Inherited from [ApiBaseAnnotation.SetModDate](../../ApiBaseAnnotation/Methods/SetModDate.md).

## Example

Create a square annotation and set mod date to it in a PDF document.

```javascript editor-pdf
// How can I set mod date using an annotation in a PDF document?

// Set mod date for an annotation in a PDF document.

let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(squareAnnot);
squareAnnot.SetModDate(new Date().getTime());
```
