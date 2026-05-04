# GetWidth

返回当前绘图的宽度。

继承自 [ApiDrawing.GetWidth](../../ApiDrawing/Methods/GetWidth.md)。

## 示例

获取文档中绘图对象的宽度。

```javascript editor-docx
// How to print the width of the drawing in a document.

// Create a rectangle and then show its width in mm in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let gs1 = Api.CreateGradientStop(Api.RGB(255, 213, 191), 0);
let gs2 = Api.CreateGradientStop(Api.RGB(255, 111, 61), 100000);
let fill = Api.CreateLinearGradientFill([gs1, gs2], 5400000);
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing = Api.CreateShape("rect", 100 * 36000, 10 * 36000, fill, stroke);
paragraph.AddDrawing(drawing);
let width = drawing.GetWidth();
let docContent = drawing.GetContent();
paragraph = Api.CreateParagraph();
paragraph.AddText("Drawing width: " + width / 36000 + " mm");
docContent.AddElement(0, paragraph);
```
