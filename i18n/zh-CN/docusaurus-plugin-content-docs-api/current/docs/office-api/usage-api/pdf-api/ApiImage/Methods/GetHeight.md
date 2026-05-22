# GetHeight

返回当前绘图的高度。

继承自 [ApiDrawing.GetHeight](../../ApiDrawing/Methods/GetHeight.md)。

## 示例

查找 PDF 中形状的垂直大小。

```javascript editor-pdf
// How do I get the height of a drawn object in a PDF?

// Measure the tall-to-short dimension of a shape in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 150 * 36000, 65 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);

const height = shape.GetHeight();
const docContent = shape.GetContent();
const paragraph = docContent.GetElement(0);
paragraph.AddText("Drawing height: " + height);
page.AddObject(shape);
```
