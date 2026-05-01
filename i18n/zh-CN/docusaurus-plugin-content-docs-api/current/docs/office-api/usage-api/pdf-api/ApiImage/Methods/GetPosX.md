# GetPosX

获取绘图在页面上的 x 位置。

继承自 [ApiDrawing.GetPosX](../../ApiDrawing/Methods/GetPosX.md)。

## 示例

如何在 PDF 文档中获取并显示绘图对象的 X 位置。

```javascript editor-pdf
// Get a shape object from a page and get its X position.

// Get the pos x using a drawing object object in a PDF document.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 150 * 36000, 65 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);

const docContent = shape.GetContent();
docContent.RemoveAllElements();
const paragraph = Api.CreateParagraph();
paragraph.SetJc("left");
paragraph.AddText(`Drawing X position is: ${shape.GetPosX()}`);
docContent.Push(paragraph);
page.AddObject(shape);
```
