# GetBorderWidth

获取批注边框宽度。

Inherited from [ApiBaseAnnotation.GetBorderWidth](../../ApiBaseAnnotation/Methods/GetBorderWidth.md).

## 示例

此示例创建方形注释并获取其边框宽度。

```javascript editor-pdf
let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(squareAnnot);
console.log(`Annotation border width is: ${squareAnnot.GetBorderWidth()}`);
```

