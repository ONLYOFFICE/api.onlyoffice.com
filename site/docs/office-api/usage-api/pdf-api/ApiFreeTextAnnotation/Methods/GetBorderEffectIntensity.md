# GetBorderEffectIntensity

Gets annotation border effect intensity.

Inherited from [ApiBaseAnnotation.GetBorderEffectIntensity](../../ApiBaseAnnotation/Methods/GetBorderEffectIntensity.md).

## Example

This example creates a square annotation and gets its border effect intensity.

```javascript editor-pdf
let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
squareAnnot.SetBorderEffectStyle("cloud");
squareAnnot.SetBorderEffectIntensity(1);

let page = doc.GetPage(0);
page.AddObject(squareAnnot);
console.log(`Annotation border effect intensity is: ${squareAnnot.GetBorderEffectIntensity()}`);
```

