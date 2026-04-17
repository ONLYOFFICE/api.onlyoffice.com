# SetCreationDate

设置批注创建日期。

Inherited from [ApiBaseAnnotation.SetCreationDate](../../ApiBaseAnnotation/Methods/SetCreationDate.md).

## 示例

此示例创建方形注释并为其设置创建日期。

```javascript editor-pdf
let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(squareAnnot);
squareAnnot.SetCreationDate(new Date().getTime());
```

