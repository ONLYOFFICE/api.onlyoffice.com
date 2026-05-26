# GetPrevDrawing

返回上一个内联绘图对象（如果存在）。

继承自 [ApiDrawing.GetPrevDrawing](../../ApiDrawing/Methods/GetPrevDrawing.md)。

## 示例

访问文档中紧接在另一个绘图之前出现的绘图。

```javascript editor-docx
// How do I get the preceding drawing object in a document?

// Apply a horizontal flip to the earlier shape in a sequence of drawings in a document.

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
