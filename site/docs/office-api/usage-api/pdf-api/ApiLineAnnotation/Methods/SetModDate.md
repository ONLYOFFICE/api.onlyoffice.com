# SetModDate

Sets annotation last modification date.

Inherited from [ApiBaseAnnotation.SetModDate](../../ApiBaseAnnotation/Methods/SetModDate.md).

## Example

This example creates a square annotation and sets mod date to it.

```javascript editor-pdf
let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(squareAnnot);
squareAnnot.SetModDate(new Date().getTime());
```

