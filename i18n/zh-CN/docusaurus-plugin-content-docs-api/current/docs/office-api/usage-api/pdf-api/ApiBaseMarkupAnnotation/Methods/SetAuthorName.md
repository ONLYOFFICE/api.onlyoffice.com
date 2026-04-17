# SetAuthorName

设置批注作者姓名。

Inherited from [ApiBaseAnnotation.SetAuthorName](../../ApiBaseAnnotation/Methods/SetAuthorName.md).

## 示例

此示例创建方形注释并为其设置作者名称。

```javascript editor-pdf
let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(squareAnnot);
squareAnnot.SetAuthorName("John Smith");
```

