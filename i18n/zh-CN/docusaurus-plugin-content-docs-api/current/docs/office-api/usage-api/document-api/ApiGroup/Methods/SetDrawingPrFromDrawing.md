# SetDrawingPrFromDrawing

将另一个绘图的属性设置到当前绘图。
将复制以下属性：水平和垂直对齐方式、当前绘图对象边缘与任何后续文本之间的距离、环绕样式、绘图名称、标题和描述。

继承自 [ApiDrawing.SetDrawingPrFromDrawing](../../ApiDrawing/Methods/SetDrawingPrFromDrawing.md)。

## 示例

在文档中将布局属性从一个绘图复制到另一个绘图。

```javascript editor-docx
// How do I make two shapes share the same wrapping and alignment settings in a document?

// Reuse the position, wrapping, and spacing configuration of an existing shape on a new shape in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is a paragraph with a shape. ");
paragraph.AddText("The text wraps the rectangular box that bounds the object. ");
paragraph.AddText("The distance between the shape and the text is half an inch (457200 English measure units).");
let gs1 = Api.CreateGradientStop(Api.RGB(255, 213, 191), 0);
let gs2 = Api.CreateGradientStop(Api.RGB(255, 111, 61), 100000);
let fill = Api.CreateRadialGradientFill([gs1, gs2]);
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing1 = Api.CreateShape("rect", 50 * 36000, 30 * 36000, fill, stroke);
drawing1.SetDistances(457200, 457200, 457200, 0);
drawing1.SetWrappingStyle("square");
drawing1.SetHorAlign("page", "center");
paragraph.AddDrawing(drawing1);
paragraph = Api.CreateParagraph();
paragraph.AddText("This is another paragraph.");
doc.Push(paragraph);
paragraph = Api.CreateParagraph();
paragraph.AddText("The shape is aligned at the center of the page horizontally.");
doc.Push(paragraph);
fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing2 = Api.CreateShape("roundRect", 50 * 36000, 30 * 36000, fill, stroke);
drawing2.SetDrawingPrFromDrawing(drawing1);
paragraph.AddDrawing(drawing2);
paragraph = Api.CreateParagraph();
paragraph.AddText("This is another shape.");
doc.Push(paragraph);
paragraph = Api.CreateParagraph();
paragraph.AddText("It has the same properties (alignment type, distances and wrapping type) as the shape above.");
doc.Push(paragraph);
```
