# GetFlipV

获取当前绘图的垂直翻转状态。

继承自 [ApiDrawing.GetFlipV](../../ApiDrawing/Methods/GetFlipV.md)。

## 示例

检查演示文稿中的绘图对象是否垂直翻转。

```javascript editor-pptx
// How to get the vertical flip property of the shape in a presentation.

// Create a drawing, flip it vertically, and read its vertical flip value in a presentation.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();
const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const drawing = Api.CreateShape("cube", 300 * 36000, 130 * 36000, fill, stroke);
drawing.SetPosition(608400, 1267200);
drawing.SetFlipV(true);
slide.AddObject(drawing);
const flip = drawing.GetFlipV();
const docContent = drawing.GetDocContent();
const paragraph = docContent.GetElement(0);
paragraph.SetJc("left");
paragraph.AddText("Drawing is flipped vertically: " + flip);
```
