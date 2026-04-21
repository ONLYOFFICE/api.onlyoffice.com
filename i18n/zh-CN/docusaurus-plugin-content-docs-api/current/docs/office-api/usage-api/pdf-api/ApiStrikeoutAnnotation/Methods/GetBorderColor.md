# GetBorderColor

获取批注边框颜色。

继承自 [ApiBaseAnnotation.GetBorderColor](../../ApiBaseAnnotation/Methods/GetBorderColor.md)。

## 示例

在 PDF 文档中创建方形注释并获取其边框颜色。

```javascript editor-pdf
// How to get the border color for an annotation in a PDF document?

// Get the border color and display the result in a PDF document.

let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(squareAnnot);
console.log(`Annotation border color is: ${squareAnnot.GetBorderColor()}`);
```
