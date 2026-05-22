# ScaleHeight

使用指定的系数缩放图形的高度。

继承自 [ApiDrawing.ScaleHeight](../../ApiDrawing/Methods/ScaleHeight.md)。

## 示例

在文档中按给定比例缩放绘图的高度。

```javascript editor-docx
// How do I resize the height of a shape proportionally in a document?

// Create several shapes at different height scales to compare sizes visually in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
for (let i = 3; i > 0; i--) {
    let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
    let stroke = Api.CreateStroke(0, Api.CreateNoFill());
    let drawing = Api.CreateShape("cube", 3212465, 963295, fill, stroke);
    paragraph.AddDrawing(drawing);
    drawing.ScaleHeight(i);
}
```
