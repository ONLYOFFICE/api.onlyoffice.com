# GetSubject

获取批注主题。

Inherited from [ApiBaseAnnotation.GetSubject](../../ApiBaseAnnotation/Methods/GetSubject.md).

## 示例

此示例创建方形注释并获取其主题。

```javascript editor-pdf
let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
squareAnnot.SetSubject("Annot subject");
let page = doc.GetPage(0);
page.AddObject(squareAnnot);
console.log(`Annotation subject is: ${squareAnnot.GetSubject()}`);
```

