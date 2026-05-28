# SetVertFlip

垂直翻转当前绘图。

继承自 [ApiDrawing.SetVertFlip](../../ApiDrawing/Methods/SetVertFlip.md)。

## 示例

在文档中沿垂直轴将形状上下翻转。

```javascript editor-docx
// How do I mirror a drawing vertically in a document?

// Invert a shape's orientation to create a reflected effect in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing = Api.CreateShape("cube", 3212465, 963295, fill, stroke);
paragraph.AddDrawing(drawing);
drawing.SetVertFlip(true);
```
