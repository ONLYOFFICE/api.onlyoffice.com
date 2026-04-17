# GetRect

设置批注矩形。

Inherited from [ApiBaseAnnotation.GetRect](../../ApiBaseAnnotation/Methods/GetRect.md).

## 示例

此示例创建方形注释并获取其矩形。

```javascript editor-pdf
let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(squareAnnot);
console.log(`Annotation rect is: ${squareAnnot.GetRect()}`);
```

