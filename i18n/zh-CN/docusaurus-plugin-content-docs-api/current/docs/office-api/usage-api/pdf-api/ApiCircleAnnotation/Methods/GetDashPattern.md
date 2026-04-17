# GetDashPattern

获取批注虚线图案。

Inherited from [ApiBaseAnnotation.GetDashPattern](../../ApiBaseAnnotation/Methods/GetDashPattern.md).

## 示例

此示例创建方形注释并获取其虚线图案。

```javascript editor-pdf
let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
squareAnnot.SetBorderStyle("dashed");
squareAnnot.SetDashPattern([8, 4, 4, 4]);
let page = doc.GetPage(0);
page.AddObject(squareAnnot);
console.log(`Annotation dash pattern is: ${squareAnnot.GetDashPattern()}`);
```

