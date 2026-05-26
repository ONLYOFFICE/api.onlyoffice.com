# SetDashPattern

Sets annotation dash pattern.
💡  The border style property must be set to "dashed". 

Inherited from [ApiBaseAnnotation.SetDashPattern](../../ApiBaseAnnotation/Methods/SetDashPattern.md).

## Example

Apply a dashed border style to an annotation in a PDF.

```javascript editor-pdf
// Create a dotted line effect on an annotation's border in a PDF.

// Define the dash pattern for an annotation's outline in a PDF.

let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(squareAnnot);
squareAnnot.SetBorderStyle("dashed");
squareAnnot.SetDashPattern([8, 4, 4, 4]);
```
