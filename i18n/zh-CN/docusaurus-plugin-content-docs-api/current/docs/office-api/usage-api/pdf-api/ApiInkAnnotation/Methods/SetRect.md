# SetRect

设置批注矩形。

Inherited from [ApiBaseAnnotation.SetRect](../../ApiBaseAnnotation/Methods/SetRect.md).

## 示例

此示例创建方形注释并将矩形设置为初始大小的两倍。

```javascript editor-pdf
let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(squareAnnot);
squareAnnot.SetRect([10, 10, 320, 64]);
```

