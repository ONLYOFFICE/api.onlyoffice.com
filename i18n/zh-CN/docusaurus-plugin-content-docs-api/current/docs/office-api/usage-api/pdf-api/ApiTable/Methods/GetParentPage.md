# GetParentPage

返回 ApiDrawing 类的类型。

继承自 [ApiDrawing.GetParentPage](../../ApiDrawing/Methods/GetParentPage.md)。

## 示例

检查 PDF 中对象的形状类型。

```javascript editor-pdf
// How do I identify the category of a drawing object in a PDF?

// Determine the kind of object you're working with in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const drawing = Api.CreateShape("flowChartMagneticTape", 150 * 36000, 65 * 36000, fill, stroke);
drawing.SetPosition(608400, 1267200);
drawing.SetSize(150 * 36000, 65 * 36000);
page.AddObject(drawing);

const aDrawings = page.GetAllDrawings();
const sType = aDrawings[0].GetClassType();
const docContent = drawing.GetContent();
const paragraph = docContent.GetElement(0);
paragraph.SetJc("left");
paragraph.AddText("Class Type = " + sType);
```
