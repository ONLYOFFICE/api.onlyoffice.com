# GetBorderColor

Gets annotation border color.

Inherited from [ApiBaseAnnotation.GetBorderColor](../../ApiBaseAnnotation/Methods/GetBorderColor.md).

## Example

This example creates a square annotation and gets its border color.

```javascript editor-pdf
let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(squareAnnot);
console.log(`Annotation border color is: ${squareAnnot.GetBorderColor()}`);
```

