# SetBorderEffectIntensity

Sets annotation border effect intensity.
💡  Can be applied to circle, square, freeText and polygon annotations 

Inherited from [ApiBaseAnnotation.SetBorderEffectIntensity](../../ApiBaseAnnotation/Methods/SetBorderEffectIntensity.md).

## Example

Control the strength of a border effect on an annotation in a PDF.

```javascript editor-pdf
// How strong should a border effect appear on an annotation in a PDF?

// Adjust the intensity level of a visual effect applied to an annotation's border in a PDF.

let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(squareAnnot);
squareAnnot.SetBorderEffectStyle("cloud");
squareAnnot.SetBorderEffectIntensity(1);
```
