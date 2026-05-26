# GetBorderColor

获取批注边框颜色。

继承自 [ApiBaseAnnotation.GetBorderColor](../../ApiBaseAnnotation/Methods/GetBorderColor.md)。

## 示例

检查 PDF 中注释的边框颜色。

```javascript editor-pdf
// How can I find the color of an annotation's outline in a PDF?

// Read the border color value from an annotation in a PDF.

let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(squareAnnot);
console.log(`Annotation border color is: ${squareAnnot.GetBorderColor()}`);
```
