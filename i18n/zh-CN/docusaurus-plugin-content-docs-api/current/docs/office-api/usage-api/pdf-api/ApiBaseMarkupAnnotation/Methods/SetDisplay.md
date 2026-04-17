# SetDisplay

设置批注显示类型。

Inherited from [ApiBaseAnnotation.SetDisplay](../../ApiBaseAnnotation/Methods/SetDisplay.md).

## 示例

此示例创建方形注释并为其设置显示属性。

```javascript editor-pdf
let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(squareAnnot);
squareAnnot.SetDisplay("hidden");
```

