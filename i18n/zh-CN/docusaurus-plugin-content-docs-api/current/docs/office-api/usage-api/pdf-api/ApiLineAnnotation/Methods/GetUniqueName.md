# GetUniqueName

获取批注唯一名称。

Inherited from [ApiBaseAnnotation.GetUniqueName](../../ApiBaseAnnotation/Methods/GetUniqueName.md).

## 示例

此示例创建方形注释并获取其唯一名称。

```javascript editor-pdf
let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(squareAnnot);
console.log(`Annotation unique name is: ${squareAnnot.GetUniqueName()}`);
```

