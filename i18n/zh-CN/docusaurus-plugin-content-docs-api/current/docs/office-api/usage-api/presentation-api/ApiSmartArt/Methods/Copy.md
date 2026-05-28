# Copy

创建指定绘图对象的副本。

继承自 [ApiDrawing.Copy](../../ApiDrawing/Methods/Copy.md)。

## 示例

复制形状并将副本放在演示文稿的另一张幻灯片上。

```javascript editor-pptx
// How do I make a copy of a shape in a presentation?

// Create an exact duplicate of a shape and add it to a new slide in a presentation.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
shape.SetSize(300 * 36000, 130 * 36000);
slide.AddObject(shape);

const copyShape = shape.Copy();
const newSlide = Api.CreateSlide();
presentation.AddSlide(newSlide);
newSlide.AddObject(copyShape);
```
