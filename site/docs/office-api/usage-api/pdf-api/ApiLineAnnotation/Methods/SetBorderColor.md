# SetBorderColor

Sets annotation border color.

Inherited from [ApiBaseAnnotation.SetBorderColor](../../ApiBaseAnnotation/Methods/SetBorderColor.md).

## Example

This example creates a square annotation and sets red border color to it.

```javascript editor-pdf
let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(squareAnnot);
squareAnnot.SetBorderColor(Api.RGB(255, 0, 0));
```

