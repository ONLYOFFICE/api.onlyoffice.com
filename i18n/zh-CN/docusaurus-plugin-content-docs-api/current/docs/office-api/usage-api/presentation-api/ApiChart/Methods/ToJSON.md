# ToJSON

将 ApiDrawing 对象转换为 JSON 对象。

继承自 [ApiDrawing.ToJSON](../../ApiDrawing/Methods/ToJSON.md)。

## 示例

在演示文稿中将形状转换为 JSON。

```javascript editor-pptx
// JSON conversion allows serializing drawing objects for storage or transfer.

// Get a shape object from a slide and convert to JSON.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const drawing = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, fill, stroke);

const json = drawing.ToJSON();
const drawingFromJSON = Api.FromJSON(json);
drawingFromJSON.SetPosition(608400, 1267200);
drawingFromJSON.SetSize(300 * 36000, 130 * 36000);
slide.AddObject(drawingFromJSON);
```
