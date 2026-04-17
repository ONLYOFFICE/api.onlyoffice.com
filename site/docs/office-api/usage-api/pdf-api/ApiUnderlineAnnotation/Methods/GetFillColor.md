# GetFillColor

Gets annotation fill color.

Inherited from [ApiBaseAnnotation.GetFillColor](../../ApiBaseAnnotation/Methods/GetFillColor.md).

## Example

This example creates a square annotation and gets its fill color.

```javascript editor-pdf
let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
squareAnnot.SetFillColor(Api.RGB(255, 0, 0));
let page = doc.GetPage(0);
page.AddObject(squareAnnot);
console.log(`Annotation fill color is: ${squareAnnot.GetFillColor()}`);
```

