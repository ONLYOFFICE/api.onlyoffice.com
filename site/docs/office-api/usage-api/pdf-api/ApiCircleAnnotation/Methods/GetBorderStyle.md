# GetBorderStyle

Gets annotation border style.

Inherited from [ApiBaseAnnotation.GetBorderStyle](../../ApiBaseAnnotation/Methods/GetBorderStyle.md).

## Example

This example creates a square annotation and gets its border style.

```javascript editor-pdf
let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(squareAnnot);
console.log(`Annotation border style is: ${squareAnnot.GetBorderStyle()}`);
```

