# SetBorderEffectIntensity

设置批注边框效果强度。
💡 可应用于圆形、方形、自由文本和多边形批注

继承自 [ApiBaseAnnotation.SetBorderEffectIntensity](../../ApiBaseAnnotation/Methods/SetBorderEffectIntensity.md)。

## 示例

在 PDF 文档中创建方形注释并设置边框效果强度。

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
