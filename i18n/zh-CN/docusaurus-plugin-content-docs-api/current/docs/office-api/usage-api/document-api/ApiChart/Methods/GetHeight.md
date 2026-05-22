# GetHeight

返回当前绘图的高度。

继承自 [ApiDrawing.GetHeight](../../ApiDrawing/Methods/GetHeight.md)。

## 示例

检索文档中绘图对象的高度。

```javascript editor-docx
// How do I get the height of a shape and display it in millimeters in a document?

// Print the measured height of a rectangle inside the shape's own content area in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let gs1 = Api.CreateGradientStop(Api.RGB(255, 213, 191), 0);
let gs2 = Api.CreateGradientStop(Api.RGB(255, 111, 61), 100000);
let fill = Api.CreateLinearGradientFill([gs1, gs2], 5400000);
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing = Api.CreateShape("rect", 100 * 36000, 10 * 36000, fill, stroke);
paragraph.AddDrawing(drawing);
let height = drawing.GetHeight();
let docContent = drawing.GetContent();
paragraph = Api.CreateParagraph();
paragraph.AddText("Drawing height: " + height / 36000 + " mm");
docContent.AddElement(0, paragraph);
```
