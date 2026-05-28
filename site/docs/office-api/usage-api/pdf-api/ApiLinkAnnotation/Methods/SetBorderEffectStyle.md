# SetBorderEffectStyle

Sets annotation border effect style.
💡  Can be applied to circle, square, freeText and polygon annotations 

Inherited from [ApiBaseAnnotation.SetBorderEffectStyle](../../ApiBaseAnnotation/Methods/SetBorderEffectStyle.md).

## Example

Apply a visual effect style to an annotation's border in a PDF.

```javascript editor-pdf
// What visual effect should appear on an annotation's border in a PDF?

// Configure a border effect style on an annotation object in a PDF.

let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(squareAnnot);
squareAnnot.SetBorderEffectStyle("cloud");
squareAnnot.SetBorderEffectIntensity(1);
```
