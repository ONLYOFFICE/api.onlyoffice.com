# GetRect

设置批注矩形。

继承自 [ApiBaseAnnotation.GetRect](../../ApiBaseAnnotation/Methods/GetRect.md)。

## 示例

获取 PDF 中注释的矩形边界。

```javascript editor-pdf
// What is the area occupied by an annotation in a PDF?

// Read the bounding rectangle coordinates of an annotation object in a PDF.

let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(squareAnnot);
console.log(`Annotation rect is: ${squareAnnot.GetRect()}`);
```
