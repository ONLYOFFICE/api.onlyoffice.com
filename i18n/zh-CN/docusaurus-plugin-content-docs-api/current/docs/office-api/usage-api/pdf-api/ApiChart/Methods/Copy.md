# Copy

创建指定绘图对象的副本。

继承自 [ApiDrawing.Copy](../../ApiDrawing/Methods/Copy.md)。

## 示例

如何创建相同的页面形状。

```javascript editor-pdf
// Get a page shape, add it to the page and create its copy.

// Copy using a drawing object object in a PDF document.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 150 * 36000, 65 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
shape.SetSize(150 * 36000, 65 * 36000);
page.AddObject(shape);

const copyShape = shape.Copy();
const newPage = doc.AddPage(1);
newPage.AddObject(copyShape);
```
