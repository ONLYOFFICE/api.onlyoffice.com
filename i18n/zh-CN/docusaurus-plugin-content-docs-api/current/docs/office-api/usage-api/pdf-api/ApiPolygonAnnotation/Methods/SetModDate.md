# SetModDate

设置批注最后修改日期。

Inherited from [ApiBaseAnnotation.SetModDate](../../ApiBaseAnnotation/Methods/SetModDate.md).

## 示例

此示例创建方形注释并为其设置修改日期。

```javascript editor-pdf
let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(squareAnnot);
squareAnnot.SetModDate(new Date().getTime());
```

