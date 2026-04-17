# GetDisplay

Gets annotation display type.

Inherited from [ApiBaseAnnotation.GetDisplay](../../ApiBaseAnnotation/Methods/GetDisplay.md).

## Example

This example creates a square annotation and gets its display.

```javascript editor-pdf
let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(squareAnnot);
console.log(`Annotation display is: ${squareAnnot.GetDisplay()}`);
```

