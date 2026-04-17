# GetCreationDate

获取批注创建日期。

Inherited from [ApiBaseAnnotation.GetCreationDate](../../ApiBaseAnnotation/Methods/GetCreationDate.md).

## 示例

此示例创建方形注释并获取其创建日期。

```javascript editor-pdf
let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(squareAnnot);
console.log(`Annotation creation date is: ${squareAnnot.GetCreationDate()}`);
```

