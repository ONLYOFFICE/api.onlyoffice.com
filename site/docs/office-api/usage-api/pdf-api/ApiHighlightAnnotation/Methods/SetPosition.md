# SetPosition

Sets annotation position.

Inherited from [ApiBaseAnnotation.SetPosition](../../ApiBaseAnnotation/Methods/SetPosition.md).

## Example

This example creates a square annotation and sets new position.

```javascript editor-pdf
let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(squareAnnot);
squareAnnot.SetPosition({x: 30, y: 30});
```

