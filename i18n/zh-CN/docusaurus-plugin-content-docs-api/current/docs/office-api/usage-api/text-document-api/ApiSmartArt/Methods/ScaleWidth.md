# ScaleWidth

使用指定的系数缩放图形的宽度。

继承自 [ApiDrawing.ScaleWidth](../../ApiDrawing/Methods/ScaleWidth.md)。

## 示例

使用指定系数在文档中缩放图形的宽度。

```javascript editor-docx
// How to increase the width of the drawing in a document.

// Scale width for a drawing object in a document.

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
