# SetContents

Sets annotation contents.

Inherited from [ApiBaseAnnotation.SetContents](../../ApiBaseAnnotation/Methods/SetContents.md).

## Example

This example creates a square annotation and sets contents to it.

```javascript editor-pdf
let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(squareAnnot);
squareAnnot.SetContents("John Smith");
```

