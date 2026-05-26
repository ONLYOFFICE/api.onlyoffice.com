# SetBorderEffectStyle

设置批注边框效果样式。
💡 可应用于圆形、方形、自由文本和多边形批注

继承自 [ApiBaseAnnotation.SetBorderEffectStyle](../../ApiBaseAnnotation/Methods/SetBorderEffectStyle.md)。

## 示例

在 PDF 中为注释的边框应用视觉效果样式。

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
