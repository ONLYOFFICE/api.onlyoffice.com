# GetOpacity

获取批注不透明度。

Inherited from [ApiBaseAnnotation.GetOpacity](../../ApiBaseAnnotation/Methods/GetOpacity.md).

## 示例

此示例创建方形注释并获取其不透明度。

```javascript editor-pdf
let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(squareAnnot);
console.log(`Annotation opacity is: ${squareAnnot.GetOpacity()}`);
```

