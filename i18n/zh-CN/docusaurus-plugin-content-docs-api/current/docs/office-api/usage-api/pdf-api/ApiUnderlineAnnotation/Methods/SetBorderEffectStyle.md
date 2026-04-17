# SetBorderEffectStyle

设置批注边框效果样式。
💡 可应用于圆形、方形、自由文本和多边形批注

Inherited from [ApiBaseAnnotation.SetBorderEffectStyle](../../ApiBaseAnnotation/Methods/SetBorderEffectStyle.md).

## 示例

此示例创建方形注释并设置边框效果样式。

```javascript editor-pdf
let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(squareAnnot);
squareAnnot.SetBorderEffectStyle("cloud");
squareAnnot.SetBorderEffectIntensity(1);
```

