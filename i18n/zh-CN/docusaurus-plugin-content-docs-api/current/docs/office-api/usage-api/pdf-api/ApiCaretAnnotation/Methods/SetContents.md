# SetContents

设置批注内容。

Inherited from [ApiBaseAnnotation.SetContents](../../ApiBaseAnnotation/Methods/SetContents.md).

## 示例

此示例创建方形注释并为其设置内容。

```javascript editor-pdf
let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(squareAnnot);
squareAnnot.SetContents("John Smith");
```

