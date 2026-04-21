# SetHorFlip

水平翻转当前绘图。

继承自 [ApiDrawing.SetHorFlip](../../ApiDrawing/Methods/SetHorFlip.md)。

## 示例

在文档中水平翻转绘图对象。

```javascript editor-docx
// How to set the horizontal flip property of the shape in a document.

// Create a drawing, add text to it and flip it horizontally in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing = Api.CreateShape("cube", 3212465, 963295, fill, stroke);
paragraph.AddDrawing(drawing);
drawing.SetHorFlip(true);
```
