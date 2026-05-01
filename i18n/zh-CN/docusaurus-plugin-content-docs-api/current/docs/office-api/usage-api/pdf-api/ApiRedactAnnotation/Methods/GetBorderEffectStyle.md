# GetBorderEffectStyle

获取批注边框效果样式。

继承自 [ApiBaseAnnotation.GetBorderEffectStyle](../../ApiBaseAnnotation/Methods/GetBorderEffectStyle.md)。

## 示例

在 PDF 文档中创建方形注释并获取其边框效果样式。

```javascript editor-pdf
// How do I get the border effect style in a PDF document?

// Get the border effect style using an annotation object in a PDF document.

let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
squareAnnot.SetBorderEffectStyle("cloud");
squareAnnot.SetBorderEffectIntensity(1);

let page = doc.GetPage(0);
page.AddObject(squareAnnot);
console.log(`Annotation border effect style is: ${squareAnnot.GetBorderEffectStyle()}`);
```
