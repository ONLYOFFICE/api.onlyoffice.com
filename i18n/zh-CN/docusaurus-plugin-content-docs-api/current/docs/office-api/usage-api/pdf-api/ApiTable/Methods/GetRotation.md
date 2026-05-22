# GetRotation

返回当前绘图对象的旋转角度。

继承自 [ApiDrawing.GetRotation](../../ApiDrawing/Methods/GetRotation.md)。

## 示例

查找 PDF 中形状的旋转角度。

```javascript editor-pdf
// How do I see how many degrees a shape is turned in a PDF?

// Check how much an object is rotated from its default position in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 65 * 36000, 10 * 36000, fill, stroke);
shape.SetPosition(100000, 2500000);
shape.SetRotation(90);

let rotAngle = shape.GetRotation();
let docContent = shape.GetContent();
let paragraph = docContent.GetElement(0);
paragraph.AddText("Drawing rotation angle is: " + rotAngle + " degrees");
page.AddObject(shape);
```
