# GetFillColor

获取批注填充颜色。

继承自 [ApiBaseAnnotation.GetFillColor](../../ApiBaseAnnotation/Methods/GetFillColor.md)。

## 示例

在 PDF 文档中创建方形注释并获取其填充颜色。

```javascript editor-pdf
// How to get the fill color for an annotation in a PDF document?

// Get the fill color and display the result in a PDF document.

let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
squareAnnot.SetFillColor(Api.RGB(255, 0, 0));
let page = doc.GetPage(0);
page.AddObject(squareAnnot);
console.log(`Annotation fill color is: ${squareAnnot.GetFillColor()}`);
```
