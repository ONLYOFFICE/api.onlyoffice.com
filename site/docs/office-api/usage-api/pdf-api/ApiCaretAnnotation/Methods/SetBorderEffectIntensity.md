# SetBorderEffectIntensity

Sets annotation border effect intensity.
💡  Can be applied to circle, square, freeText and polygon annotations 

Inherited from [ApiBaseAnnotation.SetBorderEffectIntensity](../../ApiBaseAnnotation/Methods/SetBorderEffectIntensity.md).

## Example

Create a square annotation and set border effect intensity in a PDF document.

```javascript editor-pdf
// How to set border effect intensity for an annotation in a PDF document?

// Set border effect intensity and display the result in a PDF document.

let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(squareAnnot);
squareAnnot.SetBorderEffectStyle("cloud");
squareAnnot.SetBorderEffectIntensity(1);
```
