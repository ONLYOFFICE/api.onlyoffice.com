# SetRelativeHeight

设置对象（图像、形状、图表）边界框的相对高度。

Inherited from [ApiDrawing.SetRelativeHeight](../../ApiDrawing/Methods/SetRelativeHeight.md).

## 示例

此示例演示相对于页面尺寸的形状高度调整。

```javascript editor-docx
// How to set shape width and height as percentages of the page.

// Create a responsive rectangle that scales with page size.
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let fill = Api.CreateSolidFill(Api.CreateRGBColor(91, 155, 213));
let stroke = Api.CreateStroke(0.4 * 36000, Api.CreateSolidFill(Api.CreateRGBColor(65, 113, 156)));
let drawing = Api.CreateShape("rect", 1 * 36000, 1 * 36000, fill, stroke);
drawing.SetWrappingStyle("inFront");
drawing.SetVerPosition("page", 50 * 36000);
drawing.SetHorPosition("page", 0);
drawing.SetRelativeWidth("page", 100);
drawing.SetRelativeHeight("page", 25);
paragraph.AddDrawing(drawing);
paragraph = Api.CreateParagraph();
paragraph.AddText("The shape was created with a width 100% of page width and 25% of height page");
doc.Push(paragraph);
```

