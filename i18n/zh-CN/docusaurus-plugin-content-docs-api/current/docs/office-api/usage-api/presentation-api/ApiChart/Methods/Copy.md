# Copy

创建指定绘图对象的副本。

继承自 [ApiDrawing.Copy](../../ApiDrawing/Methods/Copy.md)。

## 示例

创建形状的副本并将其插入演示文稿。

```javascript editor-pptx
// How to create the same slide shape.

// Get a slide shape, add it to the slide and create its copy.

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
