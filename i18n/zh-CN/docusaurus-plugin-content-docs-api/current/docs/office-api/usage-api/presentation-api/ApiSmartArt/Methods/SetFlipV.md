# SetFlipV

设置当前绘图的垂直翻转。

继承自 [ApiDrawing.SetFlipV](../../ApiDrawing/Methods/SetFlipV.md)。

## 示例

在演示文稿中垂直翻转绘图对象。

```javascript editor-pptx
// How to set the vertical flip property of the shape in a presentation.

// Create a drawing and flip it vertically in a presentation.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();
const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const drawing = Api.CreateShape("cube", 300 * 36000, 130 * 36000, fill, stroke);
drawing.SetPosition(608400, 1267200);
drawing.SetFlipV(true);
const flip = drawing.GetFlipV();
const docContent = drawing.GetDocContent();
const paragraph = docContent.GetElement(0);
paragraph.SetJc("left");
paragraph.AddText("Drawing is flipped vertically: " + flip);
slide.AddObject(drawing);
```
