# SetFillColor

Sets annotation fill color.

Inherited from [ApiBaseAnnotation.SetFillColor](../../ApiBaseAnnotation/Methods/SetFillColor.md).

## Example

This example creates a square annotation and sets red fill color to it.

```javascript editor-pdf
let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(squareAnnot);
squareAnnot.SetFillColor(Api.RGB(255, 0, 0));
```

