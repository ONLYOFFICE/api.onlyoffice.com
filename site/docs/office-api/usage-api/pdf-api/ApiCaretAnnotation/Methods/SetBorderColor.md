# SetBorderColor

Sets annotation border color.

Inherited from [ApiBaseAnnotation.SetBorderColor](../../ApiBaseAnnotation/Methods/SetBorderColor.md).

## Example

Create a square annotation and set red border color to it in a PDF document.

```javascript editor-pdf
// How to set border color for an annotation in a PDF document?

// Set border color and display the result in a PDF document.

let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(squareAnnot);
squareAnnot.SetBorderColor(Api.RGB(255, 0, 0));
```
