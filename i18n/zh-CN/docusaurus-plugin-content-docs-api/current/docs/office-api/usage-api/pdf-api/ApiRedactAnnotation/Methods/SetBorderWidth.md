# SetBorderWidth

设置批注边框宽度。

Inherited from [ApiBaseAnnotation.SetBorderWidth](../../ApiBaseAnnotation/Methods/SetBorderWidth.md).

## 示例

此示例创建方形注释并为其设置粗边框宽度。

```javascript editor-pdf
let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(squareAnnot);
squareAnnot.SetBorderWidth(2);
```

