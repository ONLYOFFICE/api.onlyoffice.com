# SetVerAlign

指定浮动对象的垂直对齐方式。

继承自 [ApiDrawing.SetVerAlign](../../ApiDrawing/Methods/SetVerAlign.md)。

## 示例

在文档中将浮动形状相对于页面垂直对齐。

```javascript editor-docx
// How do I control the vertical alignment of a drawing in a document?

// Pin a shape to the top of the page without manually setting its coordinates in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is a paragraph with a shape. ");
paragraph.AddText("The text wraps the rectangular box that bounds the object. ");
paragraph.AddText("The distance between the shape and the text (horizontally) is half an inch (457200 English measure units).");
let gs1 = Api.CreateGradientStop(Api.RGB(255, 213, 191), 0);
let gs2 = Api.CreateGradientStop(Api.RGB(255, 111, 61), 100000);
let fill = Api.CreateRadialGradientFill([gs1, gs2]);
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing = Api.CreateShape("rect", 1908000, 1404000, fill, stroke);
drawing.SetDistances(457200, 457200, 457200, 0);
drawing.SetWrappingStyle("square");
drawing.SetVerAlign("page", "top");
paragraph.AddDrawing(drawing);
paragraph = Api.CreateParagraph();
paragraph.AddText("The shape is aligned to the top of the page.");
doc.Push(paragraph);
```
