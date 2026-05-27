# SetPlaceholder

将指定的占位符设置到当前绘图对象。

继承自 [ApiDrawing.SetPlaceholder](../../ApiDrawing/Methods/SetPlaceholder.md)。

## 示例

在演示文稿中将形状标记为占位符。

```javascript editor-pptx
// How do I designate a shape as a placeholder for content in a presentation?

// Create a shape and define what type of content it will accept in a presentation.

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
