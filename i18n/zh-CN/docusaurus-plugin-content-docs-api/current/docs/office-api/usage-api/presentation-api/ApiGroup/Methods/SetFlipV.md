# SetFlipV

设置当前绘图的垂直翻转。

继承自 [ApiDrawing.SetFlipV](../../ApiDrawing/Methods/SetFlipV.md)。

## 示例

在演示文稿中将幻灯片上的对象从上到下镜像。

```javascript editor-pptx
// How do I flip a shape vertically in a presentation?

// Create a shape, reverse it vertically, and display the result in a presentation.

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
