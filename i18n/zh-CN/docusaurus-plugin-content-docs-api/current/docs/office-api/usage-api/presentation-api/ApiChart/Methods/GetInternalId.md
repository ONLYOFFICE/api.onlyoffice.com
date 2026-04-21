# GetInternalId

返回当前绘图对象的内部 ID。

继承自 [ApiDrawing.GetInternalId](../../ApiDrawing/Methods/GetInternalId.md)。

## 示例

返回当前文档内容的内部 ID。

```javascript editor-pptx
// How to get the internal id for a document content?

// Get the internal id and display the result in a presentation.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.HexColor('#A2C4E0'));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape('roundRect', Api.MillimetersToEmus(300), Api.MillimetersToEmus(130), fill, stroke);
shape.SetPosition(Api.MillimetersToEmus(20), Api.MillimetersToEmus(35));
const docContent = shape.GetContent();
const internalId = docContent.GetInternalId();
const paragraph = docContent.GetElement(0);
paragraph.AddText('Document content internal ID: ' + internalId);
slide.AddObject(shape);
```
