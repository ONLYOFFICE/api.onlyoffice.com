# TextTransform

Text transform type.

## Type

Enumeration

## Values

- "textArchDown"
- "textArchDownPour"
- "textArchUp"
- "textArchUpPour"
- "textButton"
- "textButtonPour"
- "textCanDown"
- "textCanUp"
- "textCascadeDown"
- "textCascadeUp"
- "textChevron"
- "textChevronInverted"
- "textCircle"
- "textCirclePour"
- "textCurveDown"
- "textCurveUp"
- "textDeflate"
- "textDeflateBottom"
- "textDeflateInflate"
- "textDeflateInflateDeflate"
- "textDeflateTop"
- "textDoubleWave1"
- "textFadeDown"
- "textFadeLeft"
- "textFadeRight"
- "textFadeUp"
- "textInflate"
- "textInflateBottom"
- "textInflateTop"
- "textPlain"
- "textRingInside"
- "textRingOutside"
- "textSlantDown"
- "textSlantUp"
- "textStop"
- "textTriangle"
- "textTriangleInverted"
- "textWave1"
- "textWave2"
- "textWave4"
- "textNoShape"


## Example

This example creates a Text Art object with the "textArchUp" text transform type.

```javascript editor-docx
// How to create a word art with adding properties like fill color, size, and transform type to it.

// Create a text art with transform type.

let textArt = Api.CreateWordArt(oTextPr, "onlyoffice", "textArchUp", fill, stroke, 0, 150 * 36000, 50 * 36000);
```
