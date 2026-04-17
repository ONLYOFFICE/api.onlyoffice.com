# GetContents

获取批注内容。

Inherited from [ApiBaseAnnotation.GetContents](../../ApiBaseAnnotation/Methods/GetContents.md).

## 示例

此示例创建方形注释并获取其内容。

```javascript editor-pdf
let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
squareAnnot.SetContents("Annot contents");
let page = doc.GetPage(0);
page.AddObject(squareAnnot);
console.log(`Annotation contents is: ${squareAnnot.GetContents()}`);
```

