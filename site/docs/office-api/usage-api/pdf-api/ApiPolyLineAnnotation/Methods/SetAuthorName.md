# SetAuthorName

Sets annotation author name.

Inherited from [ApiBaseAnnotation.SetAuthorName](../../ApiBaseAnnotation/Methods/SetAuthorName.md).

## Example

Create a square annotation and set author name to it in a PDF document.

```javascript editor-pdf
// How to set author name for an annotation in a PDF document?

// Set author name and display the result in a PDF document.

let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(squareAnnot);
squareAnnot.SetAuthorName("John Smith");
```
