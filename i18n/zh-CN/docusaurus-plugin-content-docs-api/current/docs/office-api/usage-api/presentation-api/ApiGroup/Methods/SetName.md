# SetName

设置当前绘图的名称。
如果已存在同名的另一个绘图，该绘图的名称将重置为默认的自动生成名称。

继承自 [ApiDrawing.SetName](../../ApiDrawing/Methods/SetName.md)。

## 示例

为演示文稿中幻灯片上的形状分配名称。

```javascript editor-pptx
// How do I give a shape a custom name in a presentation?

// Create a shape, assign it a name, and verify the name was applied in a presentation.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.RGB(200, 220, 240));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape('roundRect', Api.MillimetersToEmus(300), Api.MillimetersToEmus(130), fill, stroke);
shape.SetPosition(Api.MillimetersToEmus(20), Api.MillimetersToEmus(35));
shape.SetName('CustomShapeName');
const docContent = shape.GetContent();
const paragraph = docContent.GetElement(0);
paragraph.AddText('Shape name was set to: ' + shape.GetName());
slide.AddObject(shape);
```
