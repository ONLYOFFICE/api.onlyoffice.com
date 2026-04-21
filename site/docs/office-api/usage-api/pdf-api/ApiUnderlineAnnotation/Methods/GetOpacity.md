# GetOpacity

Gets annotation opacity.

Inherited from [ApiBaseAnnotation.GetOpacity](../../ApiBaseAnnotation/Methods/GetOpacity.md).

## Example

Create a square annotation and get its opacity in a PDF document.

```javascript editor-pdf
// How to get the opacity for an annotation in a PDF document?

// Get the opacity and display the result in a PDF document.

let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(squareAnnot);
console.log(`Annotation opacity is: ${squareAnnot.GetOpacity()}`);
```
