# Fill

设置当前图形对象的填充格式属性。

继承自 [ApiDrawing.Fill](../../ApiDrawing/Methods/Fill.md)。

## 示例

为当前图形对象设置填充格式属性。

```javascript editor-pptx
// How to color a drawing with a radiant fill in a presentation.

// Change the background color of the shape in a presentation.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const fill = Api.CreateSolidFill(Api.CreateRGBColor(51, 51, 51));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const drawing = Api.CreateShape("cube", 150 * 36000, 80 * 36000, fill, stroke);
drawing.SetPosition(608400, 1267200);
slide.AddObject(drawing);
const gs1 = Api.CreateGradientStop(Api.CreateRGBColor(255, 213, 191), 0);
const gs2 = Api.CreateGradientStop(Api.CreateRGBColor(255, 111, 61), 100000);
const gradientFill = Api.CreateRadialGradientFill([gs1, gs2]);
drawing.Fill(gradientFill);
```
