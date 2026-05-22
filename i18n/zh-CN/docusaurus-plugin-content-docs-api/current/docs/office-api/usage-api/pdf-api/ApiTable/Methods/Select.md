# Select

选择当前图形对象。

继承自 [ApiDrawing.Select](../../ApiDrawing/Methods/Select.md)。

## 示例

在 PDF 中高亮显示形状以进行编辑。

```javascript editor-pdf
// How do I select a drawing object on a page in a PDF?

// Pick an object to activate it for changes in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 150 * 36000, 65 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);

const height = shape.GetHeight();
const docContent = shape.GetContent();
const paragraph = docContent.GetElement(0);
paragraph.AddText("Example drawing");
page.AddObject(shape);

const allDrawings = page.GetAllDrawings();
if (allDrawings.length > 0) {
	const drawing = allDrawings[0];
	drawing.Select();
}
```
