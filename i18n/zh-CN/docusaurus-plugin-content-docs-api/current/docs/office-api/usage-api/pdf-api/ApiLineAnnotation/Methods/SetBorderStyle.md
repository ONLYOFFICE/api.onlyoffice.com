# SetBorderStyle

设置批注边框样式。

Inherited from [ApiBaseAnnotation.SetBorderStyle](../../ApiBaseAnnotation/Methods/SetBorderStyle.md).

## 示例

此示例创建方形注释并为其设置虚线边框。

```javascript editor-pdf
let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(squareAnnot);
squareAnnot.SetBorderStyle("dashed");
squareAnnot.SetDashPattern([8, 4, 4, 4]);
```

