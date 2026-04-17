# SetBorderEffectIntensity

Sets annotation border effect intensity.
💡  Can be applied to circle, square, freeText and polygon annotations 

Inherited from [ApiBaseAnnotation.SetBorderEffectIntensity](../../ApiBaseAnnotation/Methods/SetBorderEffectIntensity.md).

## Example

This example creates a square annotation and sets border effect intensity.

```javascript editor-pdf
let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(squareAnnot);
squareAnnot.SetBorderEffectStyle("cloud");
squareAnnot.SetBorderEffectIntensity(1);
```

