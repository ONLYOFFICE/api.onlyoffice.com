# SetSize

设置对象（图像、形状、图表）边界框的大小。

继承自 [ApiDrawing.SetSize](../../ApiDrawing/Methods/SetSize.md)。

## 示例

如何在 PDF 文档中调整绘图对象的大小。

```javascript editor-pdf
// Get a shape object from a page and set its size.

// Set size using a drawing object object in a PDF document.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 150 * 36000, 65 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
shape.SetSize(150 * 36000, 65 * 36000);

const docContent = shape.GetContent();
docContent.RemoveAllElements();
const paragraph = Api.CreateParagraph();
paragraph.SetJc("left");
paragraph.AddText("This is an example of a paragraph inside a shape. Nothing special.");
docContent.Push(paragraph);
page.AddObject(shape);
```
