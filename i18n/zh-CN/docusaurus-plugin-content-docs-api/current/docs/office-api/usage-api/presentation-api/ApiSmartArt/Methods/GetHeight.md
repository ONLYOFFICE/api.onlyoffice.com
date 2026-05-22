# GetHeight

返回当前绘图的高度。

继承自 [ApiDrawing.GetHeight](../../ApiDrawing/Methods/GetHeight.md)。

## 示例

检索形状的高度并在演示文稿中显示。

```javascript editor-pptx
// How do I find the vertical size of a shape in a presentation?

// Get the height measurement of a shape and show it on the slide in a presentation.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);

const height = shape.GetHeight();
const docContent = shape.GetDocContent();
const paragraph = docContent.GetElement(0);
paragraph.AddText("Drawing height: " + height);
slide.AddObject(shape);
```
