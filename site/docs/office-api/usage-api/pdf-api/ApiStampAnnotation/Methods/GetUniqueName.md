# GetUniqueName

Gets annotation unique name.

Inherited from [ApiBaseAnnotation.GetUniqueName](../../ApiBaseAnnotation/Methods/GetUniqueName.md).

## Example

Create a square annotation and get its unique name in a PDF document.

```javascript editor-pdf
// How to get the unique name for an annotation in a PDF document?

// Get the unique name and display the result in a PDF document.

let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(squareAnnot);
console.log(`Annotation unique name is: ${squareAnnot.GetUniqueName()}`);
```
