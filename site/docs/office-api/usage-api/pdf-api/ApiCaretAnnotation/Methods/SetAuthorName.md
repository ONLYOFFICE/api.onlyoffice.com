# SetAuthorName

Sets annotation author name.

Inherited from [ApiBaseAnnotation.SetAuthorName](../../ApiBaseAnnotation/Methods/SetAuthorName.md).

## Example

This example creates a square annotation and sets author name to it.

```javascript editor-pdf
let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(squareAnnot);
squareAnnot.SetAuthorName("John Smith");
```

