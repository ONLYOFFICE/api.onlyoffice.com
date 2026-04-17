# SetPosY

设置绘图在幻灯片上的 y 位置。

Inherited from [ApiDrawing.SetPosY](../../ApiDrawing/Methods/SetPosY.md).

## 示例

此示例设置绘图在幻灯片上的 Y 坐标位置。

```javascript editor-pptx
const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.RGB(176, 196, 222));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape('roundRect', Api.MillimetersToEmus(200), Api.MillimetersToEmus(100), fill, stroke);
shape.SetPosition(0, 0);
slide.AddObject(shape);

shape.SetPosY(Api.MillimetersToEmus(60));

const docContent = shape.GetContent();
const paragraph = docContent.GetElement(0);
paragraph.AddText('Y position was changed to 60 mm.');
```

