# GetModDate

获取批注最后修改日期。

Inherited from [ApiBaseAnnotation.GetModDate](../../ApiBaseAnnotation/Methods/GetModDate.md).

## 示例

此示例创建方形注释并获取其修改日期。

```javascript editor-pdf
let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(squareAnnot);
console.log(`Annotation mod date is: ${squareAnnot.GetModDate()}`);
```

