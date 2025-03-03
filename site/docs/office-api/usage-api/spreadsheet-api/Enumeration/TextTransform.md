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

```javascript editor-xlsx
let textArt = Api.CreateWordArt(oTextPr, "onlyoffice", "textArchUp", fill, stroke, 0, 150 * 36000, 50 * 36000);
```
