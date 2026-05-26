# ScaleWidth

使用指定的系数缩放图形的宽度。

继承自 [ApiDrawing.ScaleWidth](../../ApiDrawing/Methods/ScaleWidth.md)。

## 示例

在文档中按给定比例缩放绘图的宽度。

```javascript editor-docx
// How do I resize the width of a shape proportionally in a document?

// Create several shapes at increasing width scales to compare sizes side by side in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
for (let i = 1; i < 4; i++ ){
	let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
	let stroke = Api.CreateStroke(0, Api.CreateNoFill());
	let drawing = Api.CreateShape("cube", 963295, 963295, fill, stroke);
	paragraph.AddDrawing(drawing);
	drawing.ScaleWidth( i );
}
```
