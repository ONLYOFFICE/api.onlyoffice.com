# SetBorderStyle

Sets annotation border style.

Inherited from [ApiBaseAnnotation.SetBorderStyle](../../ApiBaseAnnotation/Methods/SetBorderStyle.md).

## Example

This example creates a square annotation and sets dashed border to it.

```javascript editor-pdf
let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(squareAnnot);
squareAnnot.SetBorderStyle("dashed");
squareAnnot.SetDashPattern([8, 4, 4, 4]);
```

