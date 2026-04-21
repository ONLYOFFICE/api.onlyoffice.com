# SetPlaceholder

将指定的占位符设置到当前绘图对象。

继承自 [ApiDrawing.SetPlaceholder](../../ApiDrawing/Methods/SetPlaceholder.md)。

## 示例

在演示文稿中为形状设置占位符。

```javascript editor-pptx
// How to set a placeholder for a shape in a presentation.

// Select a shape object from a slide and change its placeholder.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
shape.SetSize(300 * 36000, 130 * 36000);
const placeholder = Api.CreatePlaceholder("picture");
shape.SetPlaceholder(placeholder);
slide.AddObject(shape);
```
