# GetPosition

获取批注位置。

Inherited from [ApiBaseAnnotation.GetPosition](../../ApiBaseAnnotation/Methods/GetPosition.md).

## 示例

此示例创建方形注释并获取其位置。

```javascript editor-pdf
let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(squareAnnot);
let pos = squareAnnot.GetPosition();
console.log(`Annot position x: ${pos.x}, y: ${pos.y}`);
```

