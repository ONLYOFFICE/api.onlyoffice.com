# SetHorFlip

水平翻转当前绘图。

继承自 [ApiDrawing.SetHorFlip](../../ApiDrawing/Methods/SetHorFlip.md)。

## 示例

在文档中将形状从左到右镜像。

```javascript editor-docx
// How do I flip a shape horizontally after adding it to a document?

// Reverse the orientation of a cube shape so it faces the opposite direction in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing = Api.CreateShape("cube", 3212465, 963295, fill, stroke);
paragraph.AddDrawing(drawing);
drawing.SetHorFlip(true);
```
