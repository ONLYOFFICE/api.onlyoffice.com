# SetOpacity

设置批注不透明度。

Inherited from [ApiBaseAnnotation.SetOpacity](../../ApiBaseAnnotation/Methods/SetOpacity.md).

## 示例

此示例创建方形注释并为其设置不透明度。

```javascript editor-pdf
let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(squareAnnot);
squareAnnot.SetFillColor(Api.RGB(255, 0, 0));
squareAnnot.SetOpacity(50);
```

