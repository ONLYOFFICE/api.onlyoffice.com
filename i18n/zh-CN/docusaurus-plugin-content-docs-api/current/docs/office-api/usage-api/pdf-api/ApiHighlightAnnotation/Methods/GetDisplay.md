# GetDisplay

获取批注显示类型。

Inherited from [ApiBaseAnnotation.GetDisplay](../../ApiBaseAnnotation/Methods/GetDisplay.md).

## 示例

此示例创建方形注释并获取其显示属性。

```javascript editor-pdf
let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(squareAnnot);
console.log(`Annotation display is: ${squareAnnot.GetDisplay()}`);
```

