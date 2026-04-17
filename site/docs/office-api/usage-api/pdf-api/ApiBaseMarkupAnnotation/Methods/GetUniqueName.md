# GetUniqueName

Gets annotation unique name.

Inherited from [ApiBaseAnnotation.GetUniqueName](../../ApiBaseAnnotation/Methods/GetUniqueName.md).

## Example

This example creates a square annotation and gets its unique name.

```javascript editor-pdf
let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(squareAnnot);
console.log(`Annotation unique name is: ${squareAnnot.GetUniqueName()}`);
```

