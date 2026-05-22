# GetPosY

获取绘图在幻灯片上的 y 位置。

继承自 [ApiDrawing.GetPosY](../../ApiDrawing/Methods/GetPosY.md)。

## 示例

获取演示文稿中形状的垂直位置。

```javascript editor-pptx
// How do I find the top edge coordinate of an object in a presentation?

// Read and display the Y position of a shape in a presentation.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.RGB(230, 210, 230));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape('roundRect', Api.MillimetersToEmus(300), Api.MillimetersToEmus(130), fill, stroke);
shape.SetPosition(Api.MillimetersToEmus(20), Api.MillimetersToEmus(35));
slide.AddObject(shape);

const posY = shape.GetPosY();
const docContent = shape.GetContent();
const paragraph = docContent.GetElement(0);
paragraph.AddText('Drawing Y position: ' + posY + ' EMU');
```
