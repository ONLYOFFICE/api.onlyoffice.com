# SetPosition

Sets annotation position.

Inherited from [ApiBaseAnnotation.SetPosition](../../ApiBaseAnnotation/Methods/SetPosition.md).

## Example

Create a square annotation and set new position in a PDF document.

```javascript editor-pdf
// How to set position for an annotation in a PDF document?

// Set position and display the result in a PDF document.

let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(squareAnnot);
squareAnnot.SetPosition({x: 30, y: 30});
```
