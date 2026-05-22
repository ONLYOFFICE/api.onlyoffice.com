# SetRotation

设置当前绘图对象的旋转角度。

继承自 [ApiDrawing.SetRotation](../../ApiDrawing/Methods/SetRotation.md)。

## 示例

在演示文稿中为绘图对象设置旋转角度。

```javascript editor-pptx
// Rotation transforms a shape's orientation on the slide.

// Set rotation and display the result in a presentation.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 130 * 36000, 10 * 36000, fill, stroke);
shape.SetPosition(100000, 2500000);
shape.SetRotation(90);

const rotAngle = shape.GetRotation();
const docContent = shape.GetContent();
const paragraph = docContent.GetElement(0);
paragraph.AddText("Drawing rotation angle is set to: " + rotAngle + " degrees");
slide.AddObject(shape);
```
