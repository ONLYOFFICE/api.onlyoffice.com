# SetUniqueName

设置批注唯一名称。

Inherited from [ApiBaseAnnotation.SetUniqueName](../../ApiBaseAnnotation/Methods/SetUniqueName.md).

## 示例

此示例创建方形注释并为其设置唯一名称。

```javascript editor-pdf
let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(squareAnnot);
squareAnnot.SetUniqueName("Square annot");
```

