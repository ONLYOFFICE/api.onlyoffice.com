# GetPosX

获取绘图在幻灯片上的 x 位置。

继承自 [ApiDrawing.GetPosX](../../ApiDrawing/Methods/GetPosX.md)。

## 示例

获取演示文稿中形状的水平位置。

```javascript editor-pptx
// How do I find the left edge coordinate of an object in a presentation?

// Read and display the X position of a shape in a presentation.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.HexColor('#C8E6C9'));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape('rect', Api.MillimetersToEmus(300), Api.MillimetersToEmus(130), fill, stroke);
shape.SetPosition(Api.MillimetersToEmus(20), Api.MillimetersToEmus(35));
slide.AddObject(shape);

const posX = shape.GetPosX();
const docContent = shape.GetContent();
const paragraph = docContent.GetElement(0);
paragraph.AddText('Drawing X position: ' + posX + ' EMU');
```
