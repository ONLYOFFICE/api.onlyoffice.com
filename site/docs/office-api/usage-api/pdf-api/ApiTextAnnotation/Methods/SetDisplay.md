# SetDisplay

Sets annotation display type.

Inherited from [ApiBaseAnnotation.SetDisplay](../../ApiBaseAnnotation/Methods/SetDisplay.md).

## Example

Create a square annotation and set display to it in a PDF document.

```javascript editor-pdf
// How to set display for an annotation in a PDF document?

// Set display and display the result in a PDF document.

let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(squareAnnot);
squareAnnot.SetDisplay("hidden");
```
