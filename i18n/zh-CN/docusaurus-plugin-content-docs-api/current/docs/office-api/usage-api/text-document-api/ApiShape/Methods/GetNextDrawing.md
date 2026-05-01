# GetNextDrawing

返回下一个内联绘图对象（如果存在）。

继承自 [ApiDrawing.GetNextDrawing](../../ApiDrawing/Methods/GetNextDrawing.md)。

## 示例

获取文档中的下一个内联绘图对象（如果存在）。

```javascript editor-docx
// How to set horizontal flip for the next drawing in a document.

// Get the next drawing and update its properties in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing = Api.CreateShape("cube", 3212465, 963295, fill, stroke);
paragraph.AddDrawing(drawing);
let copyDrawing = drawing.Copy();
paragraph.AddDrawing(copyDrawing);
let nextDrawing = drawing.GetNextDrawing();
nextDrawing.SetHorFlip(true);
```
