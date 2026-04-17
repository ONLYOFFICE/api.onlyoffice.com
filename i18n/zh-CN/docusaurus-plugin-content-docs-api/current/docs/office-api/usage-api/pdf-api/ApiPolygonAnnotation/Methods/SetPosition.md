# SetPosition

设置批注位置。

Inherited from [ApiBaseAnnotation.SetPosition](../../ApiBaseAnnotation/Methods/SetPosition.md).

## 示例

此示例创建方形注释并设置新位置。

```javascript editor-pdf
let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(squareAnnot);
squareAnnot.SetPosition({x: 30, y: 30});
```

