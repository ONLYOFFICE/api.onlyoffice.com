# GetPosition

Gets annotation position.

Inherited from [ApiBaseAnnotation.GetPosition](../../ApiBaseAnnotation/Methods/GetPosition.md).

## Example

Create a square annotation and get its position in a PDF document.

```javascript editor-pdf
// How do I get the position in a PDF document?

// Get the position using an annotation object in a PDF document.

let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(squareAnnot);
let pos = squareAnnot.GetPosition();
console.log(`Annot position x: ${pos.x}, y: ${pos.y}`);
```
