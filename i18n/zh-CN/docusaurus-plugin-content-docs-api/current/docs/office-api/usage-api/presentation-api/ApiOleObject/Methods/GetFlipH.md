# GetFlipH

获取当前绘图的水平翻转状态。

继承自 [ApiDrawing.GetFlipH](../../ApiDrawing/Methods/GetFlipH.md)。

## 示例

确定演示文稿中的形状是否从左到右翻转。

```javascript editor-pptx
// How do I check if a shape has been flipped horizontally in a presentation?

// Create a shape and retrieve its horizontal flip status in a presentation.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();
const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const drawing = Api.CreateShape("cube", 300 * 36000, 130 * 36000, fill, stroke);
drawing.SetPosition(608400, 1267200);
slide.AddObject(drawing);
const flip = drawing.GetFlipH();
const docContent = drawing.GetDocContent();
const paragraph = docContent.GetElement(0);
paragraph.SetJc("left");
paragraph.AddText("Drawing is flipped horizontally: " + flip);
```
