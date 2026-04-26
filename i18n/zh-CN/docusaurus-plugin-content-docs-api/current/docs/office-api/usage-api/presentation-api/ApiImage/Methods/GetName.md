# GetName

返回当前绘图的名称。

继承自 [ApiDrawing.GetName](../../ApiDrawing/Methods/GetName.md)。

## 示例

返回演示文稿中当前绘图对象的名称。

```javascript editor-pptx
// How do I get the name in a presentation?

// Get the name using a drawing object object in a presentation.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.HexColor('#E6CCB2'));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape('rect', Api.MillimetersToEmus(300), Api.MillimetersToEmus(130), fill, stroke);
shape.SetPosition(Api.MillimetersToEmus(20), Api.MillimetersToEmus(35));

shape.SetName('MyShape');
const name = shape.GetName();

const docContent = shape.GetContent();
const paragraph = docContent.GetElement(0);
paragraph.AddText('Drawing name: ' + name);
slide.AddObject(shape);
```
