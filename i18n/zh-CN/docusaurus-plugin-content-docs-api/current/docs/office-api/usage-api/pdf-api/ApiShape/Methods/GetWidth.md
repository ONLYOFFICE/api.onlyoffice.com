# GetWidth

返回当前绘图的宽度。

继承自 [ApiDrawing.GetWidth](../../ApiDrawing/Methods/GetWidth.md)。

## 示例

如何查找形状的宽度并在页面上显示。

```javascript editor-pdf
// Get a page shape's width.

// Get the width using a drawing object object in a PDF document.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 150 * 36000, 65 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);

const width = shape.GetWidth();
const docContent = shape.GetContent();
const paragraph = docContent.GetElement(0);
paragraph.AddText("Drawing width: " + width);
page.AddObject(shape);
```
