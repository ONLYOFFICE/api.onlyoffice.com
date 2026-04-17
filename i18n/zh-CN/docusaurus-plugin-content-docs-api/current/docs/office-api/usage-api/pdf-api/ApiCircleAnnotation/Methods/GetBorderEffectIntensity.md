# GetBorderEffectIntensity

获取批注边框效果强度。

Inherited from [ApiBaseAnnotation.GetBorderEffectIntensity](../../ApiBaseAnnotation/Methods/GetBorderEffectIntensity.md).

## 示例

此示例创建方形注释并获取其边框效果强度。

```javascript editor-pdf
let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
squareAnnot.SetBorderEffectStyle("cloud");
squareAnnot.SetBorderEffectIntensity(1);

let page = doc.GetPage(0);
page.AddObject(squareAnnot);
console.log(`Annotation border effect intensity is: ${squareAnnot.GetBorderEffectIntensity()}`);
```

