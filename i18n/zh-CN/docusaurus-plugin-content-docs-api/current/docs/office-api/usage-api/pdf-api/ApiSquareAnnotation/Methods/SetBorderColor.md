# SetBorderColor

设置批注边框颜色。

Inherited from [ApiBaseAnnotation.SetBorderColor](../../ApiBaseAnnotation/Methods/SetBorderColor.md).

## 示例

此示例创建方形注释并为其设置红色边框颜色。

```javascript editor-pdf
let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(squareAnnot);
squareAnnot.SetBorderColor(Api.RGB(255, 0, 0));
```

