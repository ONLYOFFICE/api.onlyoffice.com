# GetFlipV

获取当前绘图的垂直翻转状态。

继承自 [ApiDrawing.GetFlipV](../../ApiDrawing/Methods/GetFlipV.md)。

## 示例

检查文档中的绘图是否垂直翻转。

```javascript editor-docx
// How do I read the vertical flip state of a shape in a document?

// Display the vertical flip flag of a drawing as a text label in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing = Api.CreateShape("cube", 3212465, 963295, fill, stroke);
paragraph.AddDrawing(drawing);
drawing.SetVertFlip(true);
let flip = drawing.GetFlipV();
paragraph = Api.CreateParagraph();
paragraph.AddText("Drawing is flipped vertically: " + flip);
doc.AddElement(0, paragraph);
```
