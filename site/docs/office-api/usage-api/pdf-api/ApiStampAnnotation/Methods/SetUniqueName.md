# SetUniqueName

Sets annotation unique name.

Inherited from [ApiBaseAnnotation.SetUniqueName](../../ApiBaseAnnotation/Methods/SetUniqueName.md).

## Example

This example creates a square annotation and sets unique name to it.

```javascript editor-pdf
let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(squareAnnot);
squareAnnot.SetUniqueName("Square annot");
```

