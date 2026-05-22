# GetPlaceholder

返回当前绘图对象的占位符。

继承自 [ApiDrawing.GetPlaceholder](../../ApiDrawing/Methods/GetPlaceholder.md)。

## 示例

获取演示文稿中分配给形状的占位符。

```javascript editor-pptx
// How do I find the placeholder for an object in a presentation?

// Retrieve and check a shape's placeholder in a presentation.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
shape.SetSize(300 * 36000, 130 * 36000);

let placeholder = Api.CreatePlaceholder("chart");
shape.SetPlaceholder(placeholder);
slide.AddObject(shape);
placeholder = shape.GetPlaceholder();
const type = placeholder.GetClassType();
const docContent = shape.GetDocContent();
const paragraph = docContent.GetElement(0);
paragraph.SetJc("left");
paragraph.AddText("Class type of the element from the shape = " + type);
slide.AddObject(shape);
```
