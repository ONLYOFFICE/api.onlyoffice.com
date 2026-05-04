# GetPrevDrawing

返回上一个内联绘图对象（如果存在）。

继承自 [ApiDrawing.GetPrevDrawing](../../ApiDrawing/Methods/GetPrevDrawing.md)。

## 示例

获取文档中的上一个内联绘图对象（如果存在）。

```javascript editor-docx
// How to set vertical flip for the previous drawing in a document.

// Get the previous drawing and update its properties in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing = Api.CreateShape("cube", 3212465, 963295, fill, stroke);
paragraph.AddDrawing(drawing);
let copyDrawing = drawing.Copy();
paragraph.AddDrawing(copyDrawing);
let nextDrawing = copyDrawing.GetPrevDrawing();
nextDrawing.SetHorFlip(true);
```
