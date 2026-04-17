# SetSubject

设置批注主题。

Inherited from [ApiBaseAnnotation.SetSubject](../../ApiBaseAnnotation/Methods/SetSubject.md).

## 示例

此示例创建方形注释并为其设置主题。

```javascript editor-pdf
let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(squareAnnot);
squareAnnot.SetSubject("Annot subject");
```

