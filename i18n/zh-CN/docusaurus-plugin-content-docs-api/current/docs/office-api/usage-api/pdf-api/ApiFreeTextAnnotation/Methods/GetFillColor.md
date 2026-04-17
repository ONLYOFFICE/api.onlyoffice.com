# GetFillColor

获取批注填充颜色。

Inherited from [ApiBaseAnnotation.GetFillColor](../../ApiBaseAnnotation/Methods/GetFillColor.md).

## 示例

此示例创建方形注释并获取其填充颜色。

```javascript editor-pdf
let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
squareAnnot.SetFillColor(Api.RGB(255, 0, 0));
let page = doc.GetPage(0);
page.AddObject(squareAnnot);
console.log(`Annotation fill color is: ${squareAnnot.GetFillColor()}`);
```

