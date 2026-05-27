# GetRotation

返回当前绘图对象的旋转角度。

继承自 [ApiDrawing.GetRotation](../../ApiDrawing/Methods/GetRotation.md)。

## 示例

获取演示文稿中形状的旋转角度。

```javascript editor-pptx
// How do I find how much a shape is rotated in a presentation?

// Read and display the rotation value of a shape in a presentation.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 130 * 36000, 10 * 36000, fill, stroke);
shape.SetPosition(100000, 2500000);
shape.SetRotation(90);

let rotAngle = shape.GetRotation();
let docContent = shape.GetContent();
let paragraph = docContent.GetElement(0);
paragraph.AddText("Drawing rotation angle is: " + rotAngle + " degrees");
slide.AddObject(shape);
```
